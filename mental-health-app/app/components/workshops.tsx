import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Workshops() {
  const workshops = [
    { title: 'Manejo del estrés', date: '2023-06-15', time: '18:00', description: 'Aprende técnicas efectivas para manejar el estrés diario.' },
    { title: 'Mindfulness para principiantes', date: '2023-06-20', time: '19:00', description: 'Introducción a la práctica de mindfulness y sus beneficios.' },
    { title: 'Mejorando las relaciones interpersonales', date: '2023-06-25', time: '17:00', description: 'Estrategias para mejorar tus habilidades de comunicación y empatía.' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Talleres Grupales</h2>
      {workshops.map((workshop, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{workshop.title}</CardTitle>
            <CardDescription>{workshop.date} a las {workshop.time}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{workshop.description}</p>
            <Button>Inscribirse</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

