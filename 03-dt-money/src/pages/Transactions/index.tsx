import { useContextSelector } from "use-context-selector";

import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { Summary } from "../../components/Summary";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import { dateFormatter, priceFormatter } from "../../utils/formatter";

import {
  PricingHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  });

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PricingHighLight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PricingHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};

export { Transactions };
