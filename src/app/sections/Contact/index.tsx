import Button from '@/app/components/Button'
import Title from '@/app/components/Title'
import { Mail, Send, User } from 'lucide-react'
import AnimatedTextarea from './AnimatedTextarea'
import ContactInfo from './ContactInfo'

export default function Contact() {
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
              className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-bg-gray-900/80 to-gray-900/80 
      backdrop-blur-xl border border-gray-800/50 duration-500 h-full flex flex-col"
            >
              <form className="space-y-8 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder=""
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
                  </div>

                  <div className="relative group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=""
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
                  </div>
                </div>

                <AnimatedTextarea />

                <div className="group flex items-center justify-center gap-3">
                  <Button type="submit">
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
