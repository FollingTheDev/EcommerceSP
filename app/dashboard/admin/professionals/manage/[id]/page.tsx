"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, Plus, DollarSign, TrendingUp, TrendingDown, FileText, Calendar } from "lucide-react"
import Link from "next/link"

export default function ManageProfessionalPage({ params }: { params: { id: string } }) {
  const [professional] = useState({
    id: params.id,
    name: "Sandro Silva",
    email: "sandro@sandrocabeleireiros.com",
    phone: "(11) 99999-0001",
    specialty: "Cortes Masculinos e Barba",
    status: "Ativo",
    hireDate: "2020-01-15",
    todayEarnings: 125.0,
    monthlyEarnings: 2800.0,
    totalWithdrawals: 500.0,
  })

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "earning",
      amount: 25.0,
      description: "Corte Masculino - João Silva",
      date: "2024-02-15",
      time: "14:00",
    },
    {
      id: 2,
      type: "earning",
      amount: 15.0,
      description: "Barba - Pedro Santos",
      date: "2024-02-15",
      time: "10:30",
    },
    {
      id: 3,
      type: "withdrawal",
      amount: 50.0,
      description: "Vale solicitado",
      date: "2024-02-14",
      time: "18:00",
    },
  ])

  const [observations, setObservations] = useState([
    {
      id: 1,
      text: "Chegou 15 minutos atrasado hoje",
      date: "2024-02-15",
      time: "08:15",
      type: "warning",
    },
    {
      id: 2,
      text: "Excelente atendimento ao cliente João Silva",
      date: "2024-02-14",
      time: "14:30",
      type: "positive",
    },
    {
      id: 3,
      text: "Precisou sair mais cedo para consulta médica",
      date: "2024-02-13",
      time: "16:00",
      type: "info",
    },
  ])

  const [newTransaction, setNewTransaction] = useState({
    type: "",
    amount: "",
    description: "",
  })

  const [newObservation, setNewObservation] = useState({
    text: "",
    type: "info",
  })

  const [showTransactionDialog, setShowTransactionDialog] = useState(false)
  const [showObservationDialog, setShowObservationDialog] = useState(false)

  const handleAddTransaction = () => {
    if (!newTransaction.type || !newTransaction.amount || !newTransaction.description) {
      alert("Preencha todos os campos!")
      return
    }

    const transaction = {
      id: transactions.length + 1,
      type: newTransaction.type,
      amount: Number.parseFloat(newTransaction.amount),
      description: newTransaction.description,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    }

    setTransactions([transaction, ...transactions])
    setNewTransaction({ type: "", amount: "", description: "" })
    setShowTransactionDialog(false)
    alert("Transação adicionada com sucesso!")
  }

  const handleAddObservation = () => {
    if (!newObservation.text) {
      alert("Digite uma observação!")
      return
    }

    const observation = {
      id: observations.length + 1,
      text: newObservation.text,
      type: newObservation.type,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    }

    setObservations([observation, ...observations])
    setNewObservation({ text: "", type: "info" })
    setShowObservationDialog(false)
    alert("Observação adicionada com sucesso!")
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

  const getObservationBadge = (type: string) => {
    switch (type) {
      case "positive":
        return <Badge className="bg-green-100 text-green-800">Positivo</Badge>
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-800">Atenção</Badge>
      case "negative":
        return <Badge className="bg-red-100 text-red-800">Negativo</Badge>
      case "info":
        return <Badge className="bg-blue-100 text-blue-800">Info</Badge>
      default:
        return <Badge>{type}</Badge>
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
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Gerenciar Profissional</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Informações do Profissional */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{professional.name}</CardTitle>
              <CardDescription>{professional.specialty}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Email:</span> {professional.email}
                </p>
                <p>
                  <span className="font-medium">Telefone:</span> {professional.phone}
                </p>
                <p>
                  <span className="font-medium">Contratado em:</span>{" "}
                  {new Date(professional.hireDate).toLocaleDateString("pt-BR")}
                </p>
                <Badge className="bg-green-100 text-green-800">{professional.status}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ganhos Hoje</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">R$ {professional.todayEarnings.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">+R$ 25,00 desde a última atualização</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ganhos do Mês</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {professional.monthlyEarnings.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Retiradas</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">R$ {professional.totalWithdrawals.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Este mês</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="financial" className="space-y-4">
          <TabsList>
            <TabsTrigger value="financial">Controle Financeiro</TabsTrigger>
            <TabsTrigger value="observations">Observações</TabsTrigger>
            <TabsTrigger value="schedule">Agenda</TabsTrigger>
          </TabsList>

          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Controle Financeiro</CardTitle>
                    <CardDescription>Gerencie entradas, saídas e vales do profissional</CardDescription>
                  </div>
                  <Dialog open={showTransactionDialog} onOpenChange={setShowTransactionDialog}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nova Transação
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Adicionar Transação</DialogTitle>
                        <DialogDescription>
                          Registre uma nova entrada, saída ou vale para o profissional
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>Tipo de Transação</Label>
                          <Select
                            value={newTransaction.type}
                            onValueChange={(value) => setNewTransaction((prev) => ({ ...prev, type: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="earning">Ganho</SelectItem>
                              <SelectItem value="withdrawal">Retirada</SelectItem>
                              <SelectItem value="advance">Vale</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Valor</Label>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={newTransaction.amount}
                            onChange={(e) => setNewTransaction((prev) => ({ ...prev, amount: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Descrição</Label>
                          <Input
                            placeholder="Descrição da transação"
                            value={newTransaction.description}
                            onChange={(e) => setNewTransaction((prev) => ({ ...prev, description: e.target.value }))}
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setShowTransactionDialog(false)}>
                            Cancelar
                          </Button>
                          <Button onClick={handleAddTransaction}>Adicionar</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{transaction.description}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(transaction.date).toLocaleDateString("pt-BR")} às {transaction.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div
                            className={`font-medium ${
                              transaction.type === "earning" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {transaction.type === "earning" ? "+" : "-"}R$ {transaction.amount.toFixed(2)}
                          </div>
                          {getTransactionBadge(transaction.type)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="observations">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Observações</CardTitle>
                    <CardDescription>Registre observações sobre o profissional</CardDescription>
                  </div>
                  <Dialog open={showObservationDialog} onOpenChange={setShowObservationDialog}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nova Observação
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Adicionar Observação</DialogTitle>
                        <DialogDescription>Registre uma nova observação sobre o profissional</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>Tipo de Observação</Label>
                          <Select
                            value={newObservation.type}
                            onValueChange={(value) => setNewObservation((prev) => ({ ...prev, type: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="positive">Positivo</SelectItem>
                              <SelectItem value="warning">Atenção</SelectItem>
                              <SelectItem value="negative">Negativo</SelectItem>
                              <SelectItem value="info">Informação</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Observação</Label>
                          <Textarea
                            placeholder="Digite sua observação..."
                            value={newObservation.text}
                            onChange={(e) => setNewObservation((prev) => ({ ...prev, text: e.target.value }))}
                            rows={3}
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setShowObservationDialog(false)}>
                            Cancelar
                          </Button>
                          <Button onClick={handleAddObservation}>Adicionar</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {observations.map((observation) => (
                    <div key={observation.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          {getObservationBadge(observation.type)}
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(observation.date).toLocaleDateString("pt-BR")} às {observation.time}
                        </span>
                      </div>
                      <p className="text-gray-700">{observation.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Agenda do Profissional</span>
                </CardTitle>
                <CardDescription>Visualize e gerencie a agenda do profissional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Funcionalidade de agenda em desenvolvimento</p>
                  <p className="text-sm">
                    Em breve você poderá visualizar e gerenciar a agenda completa do profissional
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
