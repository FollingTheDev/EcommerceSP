"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, DollarSign, LogOut, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      client: "João Silva",
      service: "Corte Masculino",
      professional: "Sandro Silva",
      date: "2024-02-15",
      time: "14:00",
      status: "scheduled",
      price: 25.0,
    },
    {
      id: 2,
      client: "Maria Santos",
      service: "Coloração",
      professional: "Ana Costa",
      date: "2024-02-15",
      time: "15:00",
      status: "scheduled",
      price: 80.0,
    },
  ])

  const [financialData, setFinancialData] = useState([
    {
      id: 1,
      professional: "Sandro Silva",
      type: "earning",
      amount: 25.0,
      description: "Corte Masculino - João Silva",
      date: "2024-02-14",
    },
    {
      id: 2,
      professional: "Sandro Silva",
      type: "withdrawal",
      amount: 50.0,
      description: "Vale solicitado",
      date: "2024-02-14",
    },
  ])

  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem("userType")
    if (userType !== "admin") {
      router.push("/login")
    }
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

  const getTransactionBadge = (type: string) => {
    switch (type) {
      case "earning":
        return <Badge className="bg-green-100 text-green-800">Ganho</Badge>
      case "withdrawal":
        return <Badge className="bg-red-100 text-red-800">Retirada</Badge>
      case "advance":
        return <Badge className="bg-yellow-100 text-yellow-800">Vale</Badge>
      default:
        return <Badge>{type}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-2 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard Administrativo</h1>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Agendamentos Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 desde ontem</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita do Dia</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 320</div>
              <p className="text-xs text-muted-foreground">+15% desde ontem</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+8 este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Ocupação</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">+5% desde a semana passada</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="appointments">Agendamentos</TabsTrigger>
            <TabsTrigger value="financial">Financeiro</TabsTrigger>
            <TabsTrigger value="clients">Clientes</TabsTrigger>
            <TabsTrigger value="professionals">Profissionais</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Agendamentos de Hoje</CardTitle>
                <CardDescription>Gerencie os agendamentos do dia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg space-y-3 sm:space-y-0"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{appointment.client}</span>
                          <span className="text-sm text-gray-500">{appointment.service}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex justify-between sm:block">
                          <div className="font-medium">{appointment.professional}</div>
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </div>
                        <div className="flex justify-between sm:block">
                          <div className="font-medium">R$ {appointment.price.toFixed(2)}</div>
                          {getStatusBadge(appointment.status)}
                        </div>
                        <div className="flex space-x-2 w-full sm:w-auto">
                          <Link
                            href={`/dashboard/admin/appointments/edit/${appointment.id}`}
                            className="flex-1 sm:flex-none"
                          >
                            <Button size="sm" variant="outline" className="w-full bg-transparent">
                              Editar
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            onClick={() => {
                              alert("Agendamento marcado como concluído!")
                            }}
                            className="flex-1 sm:flex-none"
                          >
                            Concluir
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumo Financeiro</CardTitle>
                  <CardDescription>Controle de entradas e saídas por profissional</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Sandro Silva", "Maria Santos", "João Oliveira", "Ana Costa"].map((professional) => (
                      <div key={professional} className="flex justify-between items-center p-3 border rounded">
                        <span className="font-medium">{professional}</span>
                        <div className="text-right">
                          <div className="text-green-600 font-medium">+R$ 150,00</div>
                          <div className="text-red-600 text-sm">-R$ 50,00</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transações Recentes</CardTitle>
                  <CardDescription>Últimas movimentações financeiras</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {financialData.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <div className="font-medium">{transaction.professional}</div>
                          <div className="text-sm text-gray-500">{transaction.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">
                            {transaction.type === "earning" ? "+" : "-"}R$ {transaction.amount.toFixed(2)}
                          </div>
                          {getTransactionBadge(transaction.type)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Clientes</CardTitle>
                <CardDescription>Visualize e gerencie informações dos clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "João Silva", email: "joao@email.com", phone: "(11) 99999-0001", lastVisit: "2024-02-10" },
                    {
                      name: "Maria Santos",
                      email: "maria@email.com",
                      phone: "(11) 99999-0002",
                      lastVisit: "2024-02-08",
                    },
                    {
                      name: "Pedro Costa",
                      email: "pedro@email.com",
                      phone: "(11) 99999-0003",
                      lastVisit: "2024-02-05",
                    },
                  ].map((client, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{client.name}</span>
                          <span className="text-sm text-gray-500">{client.email}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">{client.phone}</div>
                          <div className="text-sm text-gray-500">Última visita: {client.lastVisit}</div>
                        </div>
                        <Link href={`/dashboard/admin/clients/history/${index + 1}`}>
                          <Button size="sm" variant="outline">
                            Ver Histórico
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="professionals">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Profissionais</CardTitle>
                <CardDescription>Gerencie horários e informações dos profissionais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Sandro Silva",
                      specialty: "Cortes Masculinos e Barba",
                      status: "Ativo",
                      todayEarnings: 125.0,
                    },
                    {
                      name: "Maria Santos",
                      specialty: "Cortes Femininos e Coloração",
                      status: "Ativo",
                      todayEarnings: 160.0,
                    },
                    { name: "João Oliveira", specialty: "Cortes Masculinos", status: "Ativo", todayEarnings: 75.0 },
                    { name: "Ana Costa", specialty: "Coloração e Luzes", status: "Ativo", todayEarnings: 240.0 },
                  ].map((professional, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{professional.name}</span>
                          <span className="text-sm text-gray-500">{professional.specialty}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">R$ {professional.todayEarnings.toFixed(2)}</div>
                          <div className="text-sm text-gray-500">Ganhos hoje</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{professional.status}</Badge>
                        <Link href={`/dashboard/admin/professionals/manage/${index + 1}`}>
                          <Button size="sm" variant="outline">
                            Gerenciar
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
