'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'

// Asegúrate de reemplazar con tu clave pública de Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Subscription() {
  const [isLoading, setIsLoading] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    setIsPremium(userType === 'premium')
  }, [])

  const handleSubscribe = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: 'price_1234567890' }), // Reemplaza con tu ID de precio real
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create checkout session')
      }

      const session = await response.json()
      const stripe = await stripePromise

      if (!stripe) {
        throw new Error('Stripe failed to load')
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

      if (error) {
        throw error
      }
    } catch (err: any) {
      console.error('Error:', err)
      // Here you might want to show an error message to the user
      alert(`Error: ${err.message || 'Something went wrong. Please try again.'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuccessfulPayment = () => {
    localStorage.setItem('userType', 'premium')
    router.push('/dashboard')
  }

  if (isPremium) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Ya eres usuario Premium</h1>
        <Button onClick={() => router.push('/dashboard')}>Volver al Dashboard</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Suscripción Premium</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Plan Premium</CardTitle>
          <CardDescription>Accede a funciones exclusivas para mejorar tu salud mental</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Contacto en tiempo real con un psicólogo a través de chat",
              "Videollamadas programadas con profesionales de la salud mental",
              "Acceso a talleres grupales semanales",
              "Biblioteca exclusiva con recursos terapéuticos",
              "Meditaciones guiadas personalizadas",
              "Ejercicios prácticos de mindfulness y relajación",
              "Seguimiento detallado de tu progreso",
              "Recomendaciones personalizadas basadas en IA"
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSubscribe}
            disabled={isLoading}
          >
            {isLoading ? 'Procesando...' : 'Suscribirse por $19.99/mes'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

