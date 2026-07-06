import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Seu nome precisa ter pelo menos 3 caracteres.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  message: z
    .string()
    .trim()
    .min(10, 'Sua mensagem precisa ter pelo menos 10 caracteres.'),
})

export type ContactFormData = z.infer<typeof contactSchema>
