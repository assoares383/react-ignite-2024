import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react';

import { TransactionsContext } from '../../../../contexts/TransactionsContext'

import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormsInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    handleSubmit,
    register,
    formState:
      { isSubmitting }
    } = useForm<SearchFormsInputs>({
      resolver: zodResolver(searchFormSchema)
    }
  )

  async function handleSearchTransactions(data: SearchFormsInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transacoes"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
};
