import { z } from 'zod'

export type ContactValidationMessages = {
  name: string
  email: string
  message: string
}

const defaultValidationMessages: ContactValidationMessages = {
  name: 'Seu nome precisa ter pelo menos 3 caracteres.',
  email: 'Informe um e-mail válido.',
  message: 'Sua mensagem precisa ter pelo menos 10 caracteres.',
}

export const createContactSchema = (
  messages: ContactValidationMessages = defaultValidationMessages
) =>
  z.object({
    name: z.string().trim().min(3, messages.name),
    email: z.string().trim().email(messages.email),
    message: z.string().trim().min(10, messages.message),
  })

export const contactSchema = createContactSchema()

export type ContactFormData = z.infer<typeof contactSchema>
