import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput
} from "@ignite-ui/react";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { ArrowRight } from "phosphor-react";

import { getWeeksDays } from "@/utils/get-week-days";
import {
  Container,
  Header,
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from "./styles";

const timeIntervalsFormSchema = z.object({});

export default function TimeIntervals() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, starTime: "08:00", endTime: "18:00" },
        { weekDay: 1, enabled: true, starTime: "08:00", endTime: "18:00" },
        { weekDay: 2, enabled: true, starTime: "08:00", endTime: "18:00" },
        { weekDay: 3, enabled: true, starTime: "08:00", endTime: "18:00" },
        { weekDay: 4, enabled: true, starTime: "08:00", endTime: "18:00" },
        { weekDay: 5, enabled: true, starTime: "08:00", endTime: "18:00" },
        { weekDay: 6, enabled: false, starTime: "08:00", endTime: "18:00" },
      ],
    },
  });

  const weekDays = getWeeksDays()

  const { fields } = useFieldArray({
    control,
    name: "intervals",
  });

  const intervals = watch('intervals')

  async function handleSetTimeIntervals() {}

  return (
    <Container>
      <Header>
        <Heading>Quase lá</Heading>
        <Text>
          Defina o intervvalo de horários que você está disponível em cada dia
          da semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked: boolean) => {
                            field.onChange(checked === true)
                          }}
                          checked={field.value}
                        />
                      )
                    }}
                  />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.startTime`)}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.endTime`)}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />
                </IntervalInputs>
              </IntervalItem>
            );
          })}
        </IntervalsContainer>

        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
function watch(arg0: string) {
  throw new Error("Function not implemented.");
}

