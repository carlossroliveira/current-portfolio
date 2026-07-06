'use client'

import { Button } from '@/app/components/Button'
import { Title } from '@/app/components/Title'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Send, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AnimatedTextarea } from './AnimatedTextarea'
import { ContactInfo } from './ContactInfo'

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Seu nome precisa ter pelo menos 3 caracteres.'),
  email: z.string().trim().email('Informe um e-mail valido.'),
  message: z
    .string()
    .trim()
    .min(10, 'Sua mensagem precisa ter pelo menos 10 caracteres.'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async () => {
    reset()
  }

  return (
    <div id="contact">
      <Title
        align="center"
        title="Contact"
        subtitle="Estou disponível para transformar suas ideias em realidade."
      />

      <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-11">
        <ContactInfo />

        <div className="lg:col-span-7 flex">
          <div className="relative flex-1">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue/20 to-purple/30 rounded-3xl 
            blur-xl animate-pulse"
            />

            <div
              className="relative max-[374px]:p-0 p-4 md:p-12 rounded-3xl bg-gradient-to-br from-gray-bg-gray-900/80 to-gray-900/80 
      backdrop-blur-xl border border-gray-800/50 duration-500 h-full flex flex-col"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-8 flex-1 flex flex-col"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      id="name"
                      type="text"
                      placeholder=""
                      aria-invalid={Boolean(errors.name)}
                      {...register('name')}
                      className="peer w-full h-14 bg-gray-900/50 border-2 border-gray-800/50 rounded-xl 
                      text-white outline-none focus:outline-none focus:ring-0 focus:border-gray-800/50 focus:shadow-none 
                      transition-all duration-300 px-4 pt-6"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-1 text-xs text-blue font-medium transition-all 
                      duration-300 pointer-events-none flex items-center peer-placeholder-shown:top-4
                       peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1
                        peer-focus:text-xs peer-focus:text-blue"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Seu Nome
                    </label>
                    {errors.name?.message && (
                      <p className="mt-2 rounded-md border border-[#ff3b30]/70 bg-[#ff3b30]/15 px-3 py-2 text-sm font-semibold text-[#ff3b30]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="relative group">
                    <input
                      id="email"
                      type="email"
                      placeholder=""
                      aria-invalid={Boolean(errors.email)}
                      {...register('email')}
                      className="peer w-full h-14 bg-gray-900/50 border-2 border-gray-800/50 rounded-xl 
                      text-white outline-none focus:outline-none focus:ring-0 focus:border-gray-800/50 focus:shadow-none 
                      transition-all duration-300 px-4 pt-6"
                    />

                    <label
                      htmlFor="email"
                      className="absolute left-4 top-1 text-xs text-purple font-medium transition-all 
                      duration-300 pointer-events-none flex items-center peer-placeholder-shown:top-4
                       peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 
                       peer-focus:text-xs peer-focus:text-purple"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Seu Email
                    </label>
                    {errors.email?.message && (
                      <p className="mt-2 rounded-md border border-[#ff3b30]/70 bg-[#ff3b30]/15 px-3 py-2 text-sm font-semibold text-[#ff3b30]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <AnimatedTextarea
                    registration={register('message')}
                    hasError={Boolean(errors.message)}
                  />
                  {errors.message?.message && (
                    <p className="mt-2 rounded-md border border-[#ff3b30]/70 bg-[#ff3b30]/15 px-3 py-2 text-sm font-semibold text-[#ff3b30]">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="group flex items-center justify-center gap-3">
                  <Button type="submit" disabled={isSubmitting}>
                    <span>Enviar Mensagem</span>
                  </Button>

                  <Send className="h-5 w-5" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
