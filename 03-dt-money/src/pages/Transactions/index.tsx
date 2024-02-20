import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import { PricingHighLight, TransactionsContainer, TransactionsTable } from './styles'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de sites</td>
              <td><PricingHighLight variant="income">R$ 12.000,00</PricingHighLight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de sites</td>
              <td><PricingHighLight variant="outcome">R$ -62,00</PricingHighLight></td>
              <td>Venda</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
