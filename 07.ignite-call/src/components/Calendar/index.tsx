import { useMemo, useState } from "react";

import dayjs from "dayjs";

import { CaretLeft, CaretRight } from "phosphor-react";
import { getWeekDays } from "../../utils/get-week-days";
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from "./styles";

interface CalendarWeek {
  weeek: number;
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
}

interface CalendarProps {
  selectedDate?: Date | null
  onDateSelected: (date: Date) => void
}

type CalendarWeeks = CalendarWeek[];

export function Calendar({ selectedDate, onDateSelected }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set("day", 1);
  });

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, "month");

    setCurrentDate(previousMonthDate);
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, "month");

    setCurrentDate(nextMonthDate);
  }

  const shortWeekDays = getWeekDays({ short: true });

  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");

  const calendarWeeks = useMemo(() => {
    // Dias do mes atual
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set("date", i + 1);
    });

    // Pega o primeiro dia do mes atual
    const firstWeekDay = currentDate.set("date", 1).day();

    // Obtem os dias do mês anterior
    const previousMonth = currentDate.subtract(1, "month");
    const daysInPreviousMonth = previousMonth.daysInMonth();
    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    }).map((_, i) => {
      return previousMonth.set(
        "date",
        daysInPreviousMonth - firstWeekDay + i + 1,
      );
    });

    // Pega o ultimo dia do mes atual
    const lastDayInCurrentMonth = currentDate.set(
      "date",
      currentDate.daysInMonth(),
    );
    const lastWeekDay = lastDayInCurrentMonth.get("day");

    // Obtem os dias do proximo mes
    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, "day");
    });

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: true };
      }),
      ...daysInMonthArray.map((date) => {
        return {
          date,
          disabled: date.endOf('day').isBefore(new Date())
        };
      }),
      ...nextMonthFillArray.map((date) => {
        return { date, disabled: true };
      }),
    ];

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0;

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          });
        }

        return weeks;
      },
      [],
    );

    return calendarWeeks;
  }, [currentDate]);

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous Month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next Month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={date.toString()}>
                      <CalendarDay onClick={() => onDateSelected(date.toDate())} disabled={disabled}>
                        {date.get("date")}
                      </CalendarDay>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  );
}
