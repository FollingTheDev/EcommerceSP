"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { ArrowLeft, Save, Trash2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function EditAppointmentPage({ params }: { params: { id: string } }) {
  const [appointment, setAppointment] = useState({
    id: params.id,
    client: "João Silva",
    clientEmail: "joao@email.com",
    service: "1",
    professional: "1",
    date: new Date("2024-02-15"),
    time: "14:00",
    status: "scheduled",
    notes: "",
    price: 25.0,
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const services = [
    { id: "1", name: "Corte Masculino", duration: 30, price: 25.0 },
    { id: "2", name: "Corte Feminino", duration: 45, price: 35.0 },
    { id: "3", name: "Escova", duration: 60, price: 30.0 },
    { id: "4", name: "Coloração", duration: 120, price: 80.0 },
    { id: "5", name: "Luzes", duration: 90, price: 60.0 },
    { id: "6", name: "Barba", duration: 20, price: 15.0 },
    { id: "7", name: "Sobrancelha", duration: 15, price: 12.0 },
  ]

  const professionals = [
    { id: "1", name: "Sandro Silva", specialty: "Cortes Masculinos e Barba" },
    { id: "2", name: "Maria Santos", specialty: "Cortes Femininos e Coloração" },
    { id: "3", name: "João Oliveira", specialty: "Cortes Masculinos" },
    { id: "4", name: "Ana Costa", specialty: "Coloração e Luzes" },
  ]

  const availableTimes = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  const statusOptions = [
    { value: "scheduled", label: "Agendado" },
    { value: "completed", label: "Concluído" },
    { value: "cancelled", label: "Cancelado" },
    { value: "no-show", label: "Não Compareceu" },
  ]

  const selectedService = services.find((s) => s.id === appointment.service)

  const handleSave = async () => {
    setLoading(true)

    // Simular salvamento
    setTimeout(() => {
      alert("Agendamento atualizado com sucesso!")
      router.push("/dashboard/admin")
      setLoading(false)
    }, 1000)
  }

  const handleDelete = async () => {
    if (confirm("Tem certeza que deseja cancelar este agendamento?")) {
      setLoading(true)

      // Simular cancelamento
      setTimeout(() => {
        alert("Agendamento cancelado com sucesso!")
        router.push("/dashboard/admin")
        setLoading(false)
      }, 1000)
    }
  }

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
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Editar Agendamento</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informações do Cliente */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Cliente</CardTitle>
              <CardDescription>Dados do cliente para este agendamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Nome do Cliente</Label>
                <Input value={appointment.client} disabled className="bg-gray-50" />
              </div>
              <div>
                <Label>Email</Label>
                <Input value={appointment.clientEmail} disabled className="bg-gray-50" />
              </div>
            </CardContent>
          </Card>

          {/* Detalhes do Agendamento */}
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Agendamento</CardTitle>
              <CardDescription>Edite as informações do serviço</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Serviço</Label>
                <Select
                  value={appointment.service}
                  onValueChange={(value) => {
                    const newService = services.find((s) => s.id === value)
                    setAppointment((prev) => ({
                      ...prev,
                      service: value,
                      price: newService ? newService.price : prev.price,
                    }))
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - R$ {service.price.toFixed(2)} ({service.duration}min)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Profissional</Label>
                <Select
                  value={appointment.professional}
                  onValueChange={(value) => setAppointment((prev) => ({ ...prev, professional: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {professionals.map((professional) => (
                      <SelectItem key={professional.id} value={professional.id}>
                        {professional.name} - {professional.specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Status</Label>
                <Select
                  value={appointment.status}
                  onValueChange={(value) => setAppointment((prev) => ({ ...prev, status: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Preço</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={appointment.price}
                  onChange={(e) => setAppointment((prev) => ({ ...prev, price: Number.parseFloat(e.target.value) }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Data e Horário */}
          <Card>
            <CardHeader>
              <CardTitle>Data e Horário</CardTitle>
              <CardDescription>Selecione nova data e horário</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Data</Label>
                <Calendar
                  mode="single"
                  selected={appointment.date}
                  onSelect={(date) => date && setAppointment((prev) => ({ ...prev, date }))}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border"
                />
              </div>
            </CardContent>
          </Card>

          {/* Horário e Observações */}
          <Card>
            <CardHeader>
              <CardTitle>Horário e Observações</CardTitle>
              <CardDescription>Horário disponível e observações adicionais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Horário</Label>
                <Select
                  value={appointment.time}
                  onValueChange={(value) => setAppointment((prev) => ({ ...prev, time: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Observações</Label>
                <Textarea
                  placeholder="Observações sobre o agendamento..."
                  value={appointment.notes}
                  onChange={(e) => setAppointment((prev) => ({ ...prev, notes: e.target.value }))}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ações */}
        <div className="flex justify-between mt-8">
          <Button variant="destructive" onClick={handleDelete} disabled={loading}>
            <Trash2 className="h-4 w-4 mr-2" />
            Cancelar Agendamento
          </Button>

          <div className="flex space-x-4">
            <Link href="/dashboard/admin">
              <Button variant="outline">Cancelar Edição</Button>
            </Link>
            <Button onClick={handleSave} disabled={loading}>
              <Save className="h-4 w-4 mr-2" />
              {loading ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
