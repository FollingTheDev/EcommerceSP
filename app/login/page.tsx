"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, User, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClientLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular login do cliente
    setTimeout(() => {
      localStorage.setItem("userType", "client")
      localStorage.setItem("userEmail", email)
      router.push("/dashboard/client")
      setLoading(false)
    }, 1000)
  }

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular login do admin
    setTimeout(() => {
      localStorage.setItem("userType", "admin")
      localStorage.setItem("userEmail", email)
      router.push("/dashboard/admin")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900">
            <Scissors className="h-8 w-8 text-purple-600" />
            <span>Sandro Cabeleireiros</span>
          </Link>
        </div>

        <Tabs defaultValue="client" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Cliente</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="client">
            <Card>
              <CardHeader>
                <CardTitle>Login do Cliente</CardTitle>
                <CardDescription>Entre com sua conta para agendar horários</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleClientLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-email">Email</Label>
                    <Input
                      id="client-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-password">Senha</Label>
                    <Input
                      id="client-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Não tem uma conta?{" "}
                    <Link href="/register" className="text-purple-600 hover:underline">
                      Cadastre-se
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Login Administrativo</CardTitle>
                <CardDescription>Acesso para funcionários e administradores</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@sandrocabeleireiros.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Senha</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-600 hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  )
}
