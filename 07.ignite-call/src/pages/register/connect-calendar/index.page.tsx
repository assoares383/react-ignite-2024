import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";

import { ArrowRight, Check } from "phosphor-react";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { AuthError, ConnectBox, ConnectItem, Container, Header } from "./styles";

export default function Register() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <Container>
      <Header>
        <Heading>Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
            <Text>Google Calendar</Text>
            {
              isSignedIn ? (
                <Button size="sm" disabled>
                  Conectado <Check />
                </Button>
              ) : (
                <Button variant="secondary" size="sm" onClick={handleConnectCalendar}>
                  Conectar
                  <ArrowRight />
                </Button>
              )
            }
        </ConnectItem>

        {
          hasAuthError && (
            <AuthError size="sm">
              Falha ao se conectar ao Google,
              verifique se voce habilitou as permissoes de acesso ao Google Calendar.
            </AuthError>
          )
        }

        <Button onClick={handleNavigateToNextStep} type="submit" disabled={!isSignedIn}>
          Proximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
