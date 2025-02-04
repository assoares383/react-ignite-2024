import { Button, TextInput } from "@ignite-ui/react";

import { Form } from "./styles";

export function ClaimUsernameForm() {
  return (
    <Form>
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
        Reservar usuario
      </Button>
    </Form>
  );
}
