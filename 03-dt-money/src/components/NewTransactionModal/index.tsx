import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionsFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type newTransactionsFormInputs = z.infer<typeof newTransactionsFormSchema>

import {

  Content,
  CloseButton,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from './styles'

export const NewTransactionModal = () => {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    control,
    handleSubmit,
    register,
    formState:
      { isSubmitting },
    reset,
  } = useForm<newTransactionsFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: newTransactionsFormInputs) {
    const { description, price, category, type} = data

    await createTransaction({
      description,
      price,
      category,
      type
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transacao</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descricao'
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder='Preco'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder='Categoria'
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='outcome' value='outcome'>
                  <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>


      </Content>
    </Dialog.Portal>
  );
};
