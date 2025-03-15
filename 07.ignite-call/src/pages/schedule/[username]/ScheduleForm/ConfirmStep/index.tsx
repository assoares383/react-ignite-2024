import { Button, Text, TextArea, TextInput } from '@ignite-ui/react';
import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm, FormActions, FormHeader } from "./styles";

export function ComfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          12 de Marco de 2025
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder='Seu nome' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
      </label>

      <label>
        <Text size="sm">Endereco de e-mail</Text>
        <TextInput placeholder='johndoe@example.com' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
      </label>

      <label>
        <Text size="sm">Observacoes</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type='button' variant="tertiary">Cancelar</Button>
        <Button type='button'>Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}