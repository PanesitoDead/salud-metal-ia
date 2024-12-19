'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserProfile() {
  const [name, setName] = useState('Usuario Ejemplo')
  const [email, setEmail] = useState('usuario@ejemplo.com')
  const router = useRouter()

  const handleLogout = () => {
    // Aquí iría la lógica de cierre de sesión
    router.push('/')
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Perfil de Usuario</h2>
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button onClick={handleLogout}>Cerrar Sesión</Button>
    </div>
  )
}

