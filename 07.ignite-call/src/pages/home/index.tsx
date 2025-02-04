import { Button, Heading, Text } from "@ignite-ui/react";
import Image from "next/image";
import { Container, Hero, Preview } from "./styles";

import previewImage from '@/assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>
        <Button>
            Criar conta com Google
        </Button>
      </Hero>
      <Preview>
        <Image 
            src={previewImage} 
            height={400} 
            quality={100} 
            priority 
            alt="Calendário simbolizando aplicacao em funcionamento" 
        />
      </Preview>
    </Container>
  );
}
