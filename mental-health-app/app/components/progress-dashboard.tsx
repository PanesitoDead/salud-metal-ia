'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts'

// Datos de ejemplo
const stressData = [
  { month: 'Enero', value: 3.0 },
  { month: 'Febrero', value: 5.0 },
  { month: 'Marzo', value: 4.0 },
  { month: 'Abril', value: 6.0 },
  { month: 'Mayo', value: 7.0 },
]

const anxietyData = [
  { month: 'Enero', value: 2.0 },
  { month: 'Febrero', value: 4.0 },
  { month: 'Marzo', value: 3.0 },
  { month: 'Abril', value: 5.0 },
  { month: 'Mayo', value: 6.0 },
]

const moodData = [
  { name: 'Positivo', value: 60, color: '#2dd4bf' },
  { name: 'Neutral', value: 30, color: '#fcd34d' },
  { name: 'Negativo', value: 10, color: '#f87171' },
]

export default function ProgressDashboard() {
  const [chartWidth, setChartWidth] = useState(0)

  useEffect(() => {
    // Animación simple para el ancho del gráfico
    setChartWidth(100)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Nivel de Estrés a lo Largo del Tiempo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ff69b4"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  animationDuration={2000}
                  animationBegin={0}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nivel de Ansiedad por Mes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={anxietyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#60a5fa"
                  animationDuration={2000}
                  animationBegin={0}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Estado de Ánimo General</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={moodData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  animationDuration={2000}
                  animationBegin={0}
                >
                  {moodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

