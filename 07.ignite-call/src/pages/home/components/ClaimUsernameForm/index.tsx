import { ArrowRight } from "phosphor-react";
import { Button, TextInput } from "@ignite-ui/react";

import { Form } from "./styles";

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        name="username"
        required
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
}
