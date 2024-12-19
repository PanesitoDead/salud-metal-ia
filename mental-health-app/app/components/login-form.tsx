'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de autenticación
    if (email === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem('userType', 'premium')
      router.push('/dashboard')
    } else {
      localStorage.setItem('userType', 'regular')
      router.push('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="sr-only">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-transparent border-b border-gray-300 focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="sr-only">Contraseña</Label>
        <Input
          id="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-transparent border-b border-gray-300 focus:border-blue-500 transition-colors"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">Iniciar Sesión</Button>
    </form>
  )
}

