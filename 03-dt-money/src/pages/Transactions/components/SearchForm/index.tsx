import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react';

import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormsInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const {
    handleSubmit,
    register,
    formState:
      { isSubmitting }
    } = useForm<SearchFormsInputs>({
      resolver: zodResolver(searchFormSchema)
    }
  )

  function handleSearchTransactions(data: SearchFormsInputs) {
    console.log(data)
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
