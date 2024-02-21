import { useContext } from 'react';

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { TransactionsContext } from '../../contexts/TransactionsContext'

import { dateFormatter ,priceFormatter } from '../../utils/formatter'

import { PricingHighLight, TransactionsContainer, TransactionsTable } from './styles'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PricingHighLight variant={transaction.type}>
                      { transaction.type === 'outcome' && '- '}
                      { priceFormatter.format(transaction.price)}
                    </PricingHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{ dateFormatter.format(new Date(transaction.createdAt)) }</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
