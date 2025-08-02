"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, DollarSign, User, Phone, Mail, Gift } from "lucide-react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile" // Importa o hook para detectar mobile
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" // Importa componentes Select

export default function ClientHistoryPage({ params }: { params: { id: string } }) {
  const [client] = useState({
    id: params.id,
    name: "João Silva",
    email: "joao@email.com",
    phone: "(11) 99999-0001",
    birthDate: "1990-05-15",
    registrationDate: "2023-01-15",
    totalVisits: 12,
    totalSpent: 380.0,
    lastVisit: "2024-02-10",
    preferredProfessional: "Sandro Silva",
    notes: "Cliente fiel, sempre pontual. Prefere cortes mais conservadores.",
  })

  const [appointments] = useState([
    {
      id: 1,
      service: "Corte Masculino",
      professional: "Sandro Silva",
      date: "2024-02-10",
      time: "10:30",
      status: "completed",
      price: 25.0,
      notes: "Cliente satisfeito com o resultado",
    },
    {
      id: 2,
      service: "Barba",
      professional: "Sandro Silva",
      date: "2024-01-25",
      time: "14:00",
      status: "completed",
      price: 15.0,
      notes: "",
    },
    {
      id: 3,
      service: "Corte Masculino",
      professional: "Sandro Silva",
      date: "2024-01-10",
      time: "09:00",
      status: "completed",
      price: 25.0,
      notes: "Chegou 10 minutos atrasado",
    },
    {
      id: 4,
      service: "Corte Masculino",
      professional: "João Oliveira",
      date: "2023-12-20",
      time: "15:30",
      status: "completed",
      price: 25.0,
      notes: "Primeira vez com outro profissional",
    },
  ])

  const isMobile = useIsMobile() // Usa o hook para verificar se é mobile
  const [activeTab, setActiveTab] = useState("appointments") // Estado para controlar a aba ativa

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">Agendado</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Concluído</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelado</Badge>
      case "no-show":
        return <Badge className="bg-gray-100 text-gray-800">Não Compareceu</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const calculateAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const isUpcomingBirthday = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    const thisYearBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
    const daysDiff = Math.ceil((thisYearBirthday.getTime() - today.getTime()) / (1000 * 3600 * 24))
    return daysDiff >= 0 && daysDiff <= 30
  }

  const tabOptions = [
    { value: "appointments", label: "Histórico de Agendamentos" },
    { value: "notes", label: "Observações" },
    { value: "preferences", label: "Preferências" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link href="/dashboard/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Histórico do Cliente</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Informações do Cliente */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Informações Pessoais</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium">Nome:</span>
                <p className="text-gray-600">{client.name}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">{client.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">{client.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">
                  {calculateAge(client.birthDate)} anos ({new Date(client.birthDate).toLocaleDateString("pt-BR")})
                </span>
                {isUpcomingBirthday(client.birthDate) && (
                  <Badge className="bg-yellow-100 text-yellow-800 ml-2">Aniversário próximo!</Badge>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Estatísticas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium">Cliente desde:</span>
                <p className="text-gray-600">{new Date(client.registrationDate).toLocaleDateString("pt-BR")}</p>
              </div>
              <div>
                <span className="font-medium">Total de visitas:</span>
                <p className="text-gray-600">{client.totalVisits}</p>
              </div>
              <div>
                <span className="font-medium">Última visita:</span>
                <p className="text-gray-600">{new Date(client.lastVisit).toLocaleDateString("pt-BR")}</p>
              </div>
              <div>
                <span className="font-medium">Profissional preferido:</span>
                <p className="text-gray-600">{client.preferredProfessional}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Financeiro</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium">Total gasto:</span>
                <p className="text-2xl font-bold text-green-600">R$ {client.totalSpent.toFixed(2)}</p>
              </div>
              <div>
                <span className="font-medium">Ticket médio:</span>
                <p className="text-gray-600">R$ {(client.totalSpent / client.totalVisits).toFixed(2)}</p>
              </div>
              <div>
                <span className="font-medium">Categoria:</span>
                <Badge className="bg-gold-100 text-gold-800">Cliente VIP</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs com Histórico */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          {isMobile ? (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma aba" />
              </SelectTrigger>
              <SelectContent>
                {tabOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <TabsList>
              {tabOptions.map((option) => (
                <TabsTrigger key={option.value} value={option.value}>
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
          )}

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Agendamentos</CardTitle>
                <CardDescription>Todos os agendamentos do cliente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{appointment.service}</span>
                          <span className="text-sm text-gray-500">com {appointment.professional}</span>
                          {appointment.notes && (
                            <span className="text-xs text-gray-400 italic">{appointment.notes}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">{new Date(appointment.date).toLocaleDateString("pt-BR")}</div>
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">R$ {appointment.price.toFixed(2)}</div>
                          {getStatusBadge(appointment.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes">
            <Card>
              <CardHeader>
                <CardTitle>Observações do Cliente</CardTitle>
                <CardDescription>Anotações importantes sobre o cliente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800">{client.notes}</p>
                    <p className="text-xs text-blue-600 mt-2">Adicionado em: 15/01/2023</p>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      Cliente sempre pontual e educado. Gosta de conversar sobre esportes.
                    </p>
                    <p className="text-xs text-green-600 mt-2">Adicionado em: 10/02/2024</p>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    Adicionar Nova Observação
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Preferências do Cliente</CardTitle>
                <CardDescription>Preferências e histórico de serviços</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Serviços Mais Utilizados</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>Corte Masculino</span>
                        <Badge>8x</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>Barba</span>
                        <Badge>3x</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>Sobrancelha</span>
                        <Badge>1x</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Profissionais Preferidos</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>Sandro Silva</span>
                        <Badge>10x</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>João Oliveira</span>
                        <Badge>2x</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
