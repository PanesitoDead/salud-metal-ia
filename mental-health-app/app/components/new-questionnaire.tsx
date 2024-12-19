'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"

const questions = [
  "¿Con qué frecuencia te sientes abrumado/a por tus responsabilidades diarias?",
  "¿Con qué frecuencia tienes dificultades para dormir debido a preocupaciones?",
  "¿Con qué frecuencia experimentas tensión física (dolores de cabeza, tensión muscular)?",
  "¿Con qué frecuencia te sientes incapaz de controlar aspectos importantes de tu vida?",
  "¿Con qué frecuencia te sientes irritable o de mal humor?",
  "¿Con qué frecuencia tienes dificultades para concentrarte?",
  "¿Con qué frecuencia te sientes ansioso/a sin una razón clara?",
  "¿Con qué frecuencia experimentas cambios en tu apetito?",
  "¿Con qué frecuencia te sientes solo/a o aislado/a?",
  "¿Con qué frecuencia tienes pensamientos negativos recurrentes?",
  "¿Con qué frecuencia te sientes cansado/a sin razón aparente?",
  "¿Con qué frecuencia te resulta difícil relajarte?",
  "¿Con qué frecuencia te sientes abrumado/a por tus emociones?",
  "¿Con qué frecuencia evitas situaciones sociales?",
  "¿Con qué frecuencia sientes que no puedes manejar tus problemas?"
]

const scaleLabels = [
  "1 - En ningún momento",
  "2 - Raramente",
  "3 - Ocasionalmente",
  "4 - Frecuentemente",
  "5 - Muy frecuentemente"
]

export default function NewQuestionnaire() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0))
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Aquí simularemos el análisis de IA
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Respuestas analizadas:', answers)
    setIsSubmitting(false)
    alert('Cuestionario enviado y analizado por IA')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {questions.map((question, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <Label className="text-base mb-4 block">{index + 1}. {question}</Label>
            <RadioGroup
              value={answers[index].toString()}
              onValueChange={(value) => {
                const newAnswers = [...answers]
                newAnswers[index] = parseInt(value)
                setAnswers(newAnswers)
              }}
              className="flex flex-col space-y-1"
            >
              {scaleLabels.map((label, scaleIndex) => (
                <div key={scaleIndex} className="flex items-center space-x-2">
                  <RadioGroupItem value={(scaleIndex + 1).toString()} id={`q${index}-${scaleIndex}`} />
                  <Label htmlFor={`q${index}-${scaleIndex}`}>{label}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
      <Button type="submit" disabled={isSubmitting || answers.includes(0)}>
        {isSubmitting ? 'Analizando...' : 'Enviar Cuestionario'}
      </Button>
    </form>
  )
}

