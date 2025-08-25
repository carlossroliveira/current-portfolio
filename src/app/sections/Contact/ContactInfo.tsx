'use client'

import { Check, Code2, Copy, Mail, Phone, Zap } from 'lucide-react'
import { useState } from 'react'

export default function ContactInfo() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false)
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false)

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'email') {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    } catch (err) {
      console.error('Falha ao copiar: ', err)
    }
  }

  return (
    <div className="lg:col-span-5 space-y-8 flex">
      <div
        className="relative max-[425px]:w-1.5 max-[374px]:p-0 p-4 rounded-2xl bg-gradient-to-br from-gray-bg-gray-900/80 to-gray-900/80 
      backdrop-blur-xl border border-gray-800/50 flex-1 flex flex-col"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue/5 to-purple/5 rounded-2xl animate-pulse" />

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-15 h-15 bg-gradient-to-r from-blue to-purple rounded-xl flex 
            items-center justify-center"
            >
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Entre em Contato</h2>
          </div>

          <div className="space-y-6 flex-1">
            <button
              type="button"
              className="group cursor-pointer w-full text-left"
              onClick={() =>
                copyToClipboard('carlos.oliveira@email.com', 'email')
              }
            >
              <div
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800/50
               hover:border-blue/50 transition-all duration-300 hover:bg-blue/5"
              >
                <div
                  className="w-10 h-10 bg-gradient-to-r from-blue to-blue rounded-lg flex items-center
                 justify-center group-hover:scale-110 transition-transform"
                >
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-white font-medium hover:text-blue transition-colors">
                    carlos.sroliveira@hotmail.com
                  </p>
                </div>
                <div className="max-[374px]:hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </button>

            <button
              type="button"
              className="group cursor-pointer w-full text-left"
              onClick={() => copyToClipboard('+5571992567831', 'phone')}
            >
              <div
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800/50
               hover:border-purple/50 transition-all duration-300 hover:bg-purple/5"
              >
                <div
                  className="w-10 h-10 bg-gradient-to-r from-purple to-purple rounded-lg flex items-center
                 justify-center group-hover:scale-110 transition-transform"
                >
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Celular
                  </p>
                  <p className="text-white font-medium hover:text-purple transition-colors">
                    +55 (71) 9 9256-7831
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  {copiedPhone ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </button>
          </div>

          <div
            className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue/10 to-purple/10 border
           border-blue/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-blue" />
              <h3 className="font-bold text-white">Resposta Rápida</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Vou responder em até{' '}
              <span className="text-blue font-semibold">48 horas</span> —
              geralmente antes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
