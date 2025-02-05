import { ArrowRight } from "phosphor-react";
import { Button, TextInput } from "@ignite-ui/react";
import { useForm } from "react-hook-form";
import { z } from 'zod'

import { Form } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const claimUsernameFormSchema = z.object({
  username: z.string()
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: unknown) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        required
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
}
