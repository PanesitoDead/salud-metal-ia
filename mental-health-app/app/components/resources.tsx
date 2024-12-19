import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Resources() {
  const resources = [
    { title: 'Meditación guiada para relajación', type: 'Audio', duration: '15 min' },
    { title: 'Ejercicio de respiración profunda', type: 'Video', duration: '5 min' },
    { title: 'Guía de autoayuda para la ansiedad', type: 'PDF', pages: 20 },
    { title: 'Práctica de gratitud diaria', type: 'Ejercicio', duration: '10 min' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Recursos Terapéuticos</h2>
      {resources.map((resource, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{resource.title}</CardTitle>
            <CardDescription>{resource.type} - {resource.duration || `${resource.pages} páginas`}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Acceder al recurso</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

