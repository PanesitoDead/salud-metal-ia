import Image from 'next/image'
import LoginForm from './components/login-form'
import RegisterForm from './components/register-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 relative">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Fondo de salud mental"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <div className="z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Mente Sana</h1>
        <Tabs defaultValue="login" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

