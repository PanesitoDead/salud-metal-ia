'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function PaymentSuccess() {
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem('userType', 'premium')
  }, [])

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">¡Pago Exitoso!</h1>
      <p className="mb-4">Tu cuenta ha sido actualizada a Premium. Ahora tienes acceso a todas las funciones exclusivas.</p>
      <Button onClick={() => router.push('/dashboard')}>Ir al Dashboard</Button>
    </div>
  )
}

