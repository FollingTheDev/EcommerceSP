"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, LogOut, Plus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ClientDashboard() {
  const [user, setUser] = useState({ name: "João Silva", email: "" })
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      service: "Corte Masculino",
      professional: "Sandro Silva",
      date: "2024-02-15",
      time: "14:00",
      status: "scheduled",
      price: "R$ 25,00",
    },
    {
      id: 2,
      service: "Barba",
      professional: "Sandro Silva",
      date: "2024-02-10",
      time: "10:30",
      status: "completed",
      price: "R$ 15,00",
    },
  ])
  const router = useRouter()

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail")
    if (!userEmail) {
      router.push("/login")
      return
    }
    setUser((prev) => ({ ...prev, email: userEmail }))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">Agendado</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Concluído</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelado</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-2 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Meus Agendamentos</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                <span className="text-sm text-gray-700">{user.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <Link href="/booking">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-5 w-5 mr-2" />
              Novo Agendamento
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximo Agendamento</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/02</div>
              <p className="text-xs text-muted-foreground">Corte Masculino às 14:00</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Visitas</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Este ano</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valor Gasto</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 380</div>
              <p className="text-xs text-muted-foreground">Este ano</p>
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Agendamentos</CardTitle>
            <CardDescription>Seus agendamentos recentes e futuros</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <span className="font-medium">{appointment.service}</span>
                      <span className="text-sm text-gray-500">com {appointment.professional}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex justify-between sm:block">
                      <div className="font-medium">{appointment.date}</div>
                      <div className="text-sm text-gray-500">{appointment.time}</div>
                    </div>
                    <div className="flex justify-between sm:block">
                      <div className="font-medium">{appointment.price}</div>
                      {getStatusBadge(appointment.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
