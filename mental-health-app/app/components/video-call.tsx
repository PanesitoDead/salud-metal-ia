'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function VideoCall() {
  const [isCallActive, setIsCallActive] = useState(false)

  const startCall = () => {
    // Aquí iría la lógica para iniciar una videollamada real
    setIsCallActive(true)
  }

  const endCall = () => {
    // Aquí iría la lógica para finalizar la videollamada
    setIsCallActive(false)
  }

  return (
    <div className="flex flex-col items-center justify-center h-[600px] border rounded-lg bg-gray-100">
      {isCallActive ? (
        <>
          <div className="mb-4 text-xl">Videollamada en progreso</div>
          <Button onClick={endCall} variant="destructive">Finalizar llamada</Button>
        </>
      ) : (
        <>
          <div className="mb-4 text-xl">Iniciar videollamada con un psicólogo</div>
          <Button onClick={startCall}>Iniciar llamada</Button>
        </>
      )}
    </div>
  )
}

