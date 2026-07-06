import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'react-email'
import { contactEmailStyles as styles } from './contact-email.styles'
import type { ContactFormData } from './contact-schema'

export function ContactEmail({ name, email, message }: ContactFormData) {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Novo contato pelo portfólio de Carlos Oliveira</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Novo contato pelo portfólio</Heading>

          <Section style={styles.section}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>{name}</Text>
          </Section>

          <Section style={styles.section}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{email}</Text>
          </Section>

          <Hr style={styles.divider} />

          <Section>
            <Text style={styles.label}>Mensagem</Text>
            <Text style={styles.message}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
