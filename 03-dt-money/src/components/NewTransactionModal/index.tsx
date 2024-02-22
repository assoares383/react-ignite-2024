import { Controller, useForm } from 'react-hook-form';
import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

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
  const {
    control,
    handleSubmit,
    register,
    formState:
      { isSubmitting }
  } = useForm<newTransactionsFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  function handleCreateNewTransaction(data: newTransactionsFormInputs) {
    console.log(data)
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
