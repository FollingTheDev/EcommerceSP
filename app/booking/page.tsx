"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, DollarSign } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedProfessional, setSelectedProfessional] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
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

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const selectedProfessionalData = professionals.find((p) => p.id === selectedProfessional)

  const handleBooking = () => {
    if (!selectedService || !selectedProfessional || !selectedDate || !selectedTime) {
      alert("Por favor, preencha todos os campos!")
      return
    }

    // Simular agendamento
    alert(
      `Agendamento confirmado!\n\nServiço: ${selectedServiceData?.name}\nProfissional: ${selectedProfessionalData?.name}\nData: ${selectedDate.toLocaleDateString("pt-BR")}\nHorário: ${selectedTime}\n\nVocê receberá um email de confirmação.`,
    )
    router.push("/dashboard/client")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link href="/dashboard/client">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Novo Agendamento</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Booking Form */}
          <div className="space-y-6">
            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle>1. Escolha o Serviço</CardTitle>
                <CardDescription>Selecione o serviço desejado</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{service.name}</span>
                          <div className="flex items-center space-x-2 ml-4">
                            <Badge variant="secondary">{service.duration}min</Badge>
                            <Badge>R$ {service.price.toFixed(2)}</Badge>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Professional Selection */}
            <Card>
              <CardHeader>
                <CardTitle>2. Escolha o Profissional</CardTitle>
                <CardDescription>Selecione o profissional de sua preferência</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedProfessional} onValueChange={setSelectedProfessional}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um profissional" />
                  </SelectTrigger>
                  <SelectContent>
                    {professionals.map((professional) => (
                      <SelectItem key={professional.id} value={professional.id}>
                        <div>
                          <div className="font-medium">{professional.name}</div>
                          <div className="text-sm text-gray-500">{professional.specialty}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle>3. Escolha a Data</CardTitle>
                <CardDescription>Selecione o dia do seu agendamento</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border w-full"
                />
              </CardContent>
            </Card>
          </div>

          {/* Time Selection and Summary */}
          <div className="space-y-6">
            {/* Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle>4. Escolha o Horário</CardTitle>
                <CardDescription>
                  {selectedDate
                    ? `Horários disponíveis para ${selectedDate.toLocaleDateString("pt-BR")}`
                    : "Selecione uma data primeiro"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDate ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="text-sm w-full"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">Selecione uma data para ver os horários disponíveis</p>
                )}
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Agendamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedServiceData && (
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{selectedServiceData.name}</div>
                      <div className="text-sm text-gray-500">{selectedServiceData.duration} minutos</div>
                    </div>
                  </div>
                )}

                {selectedProfessionalData && (
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{selectedProfessionalData.name}</div>
                      <div className="text-sm text-gray-500">{selectedProfessionalData.specialty}</div>
                    </div>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">
                        {selectedDate.toLocaleDateString("pt-BR")} às {selectedTime}
                      </div>
                    </div>
                  </div>
                )}

                {selectedServiceData && (
                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-lg">R$ {selectedServiceData.price.toFixed(2)}</div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleBooking}
                  className="w-full mt-6"
                  disabled={!selectedService || !selectedProfessional || !selectedDate || !selectedTime}
                >
                  Confirmar Agendamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
