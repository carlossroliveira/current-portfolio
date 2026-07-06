import { ContactEmail } from '@/app/sections/Contact/contact-email'
import { contactSchema } from '@/app/sections/Contact/contact-schema'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from =
    process.env.CONTACT_FROM_EMAIL ?? 'Portfólio <onboarding@resend.dev>'

  if (!resendApiKey || !to) {
    return NextResponse.json(
      { message: 'Serviço de e-mail não configurado.' },
      { status: 500 }
    )
  }

  const resend = new Resend(resendApiKey)
  const payload = await request.json().catch(() => null)
  const parsedPayload = contactSchema.safeParse(payload)

  if (!parsedPayload.success) {
    return NextResponse.json(
      { message: 'Dados do formulário inválidos.' },
      { status: 400 }
    )
  }

  const { name, email, message } = parsedPayload.data

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Novo contato do portfólio - ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    react: ContactEmail({
      name,
      email,
      message,
    }),
  })

  if (error) {
    return NextResponse.json(
      { message: 'Não foi possível enviar a mensagem.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ message: 'Mensagem enviada com sucesso.' })
}
