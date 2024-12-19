import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Results() {
  // Aquí normalmente obtendrías los resultados del backend
  const mockResults = [
    { date: '2023-05-01', score: 75, recommendation: 'Mantén tus hábitos positivos.' },
    { date: '2023-04-15', score: 60, recommendation: 'Considera practicar más ejercicios de relajación.' },
    { date: '2023-04-01', score: 80, recommendation: 'Excelente progreso. Sigue así.' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Tus Resultados</h2>
      {mockResults.map((result, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Evaluación del {result.date}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Puntuación: {result.score}/100</p>
            <p>Recomendación: {result.recommendation}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

