"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileSpreadsheet } from "lucide-react"
import jsPDF from "jspdf"
import "jspdf-autotable"

export default function AdminReportsPage() {
  const allReportData = {
    summary: {
      appointmentsToday: 8,
      dailyRevenue: 320,
      activeClients: 156,
      occupancyRate: 85,
      totalClients: 250,
      totalProfessionals: 4,
      totalServices: 7,
    },
    appointments: [
      {
        id: 1,
        client: "João Silva",
        service: "Corte Masculino",
        professional: "Sandro Silva",
        date: "2024-02-15",
        time: "14:00",
        status: "Agendado",
        price: 25.0,
      },
      {
        id: 2,
        client: "Maria Santos",
        service: "Coloração",
        professional: "Ana Costa",
        date: "2024-02-15",
        time: "15:00",
        status: "Agendado",
        price: 80.0,
      },
      {
        id: 3,
        client: "Pedro Costa",
        service: "Barba",
        professional: "Sandro Silva",
        date: "2024-02-14",
        time: "10:00",
        status: "Concluído",
        price: 15.0,
      },
      {
        id: 4,
        client: "Ana Paula",
        service: "Corte Feminino",
        professional: "Maria Santos",
        date: "2024-02-14",
        time: "11:30",
        status: "Concluído",
        price: 35.0,
      },
      {
        id: 5,
        client: "Carlos Lima",
        service: "Escova",
        professional: "Maria Santos",
        date: "2024-02-10",
        time: "09:00",
        status: "Concluído",
        price: 30.0,
      },
      {
        id: 6,
        client: "Fernanda Souza",
        service: "Luzes",
        professional: "Ana Costa",
        date: "2024-02-08",
        time: "16:00",
        status: "Concluído",
        price: 60.0,
      },
      {
        id: 7,
        client: "Roberto Alves",
        service: "Corte Masculino",
        professional: "João Oliveira",
        date: "2024-02-01",
        time: "09:00",
        status: "Concluído",
        price: 25.0,
      },
      {
        id: 8,
        client: "Patrícia Lima",
        service: "Sobrancelha",
        professional: "Maria Santos",
        date: "2024-01-28",
        time: "10:00",
        status: "Concluído",
        price: 12.0,
      },
    ],
    financialTransactions: [
      {
        id: 1,
        professional: "Sandro Silva",
        type: "Ganho",
        amount: 25.0,
        description: "Corte Masculino - João Silva",
        date: "2024-02-15",
        time: "14:00",
      },
      {
        id: 2,
        professional: "Sandro Silva",
        type: "Ganho",
        amount: 15.0,
        description: "Barba - Pedro Santos",
        date: "2024-02-14",
        time: "10:00",
      },
      {
        id: 3,
        professional: "Sandro Silva",
        type: "Retirada",
        amount: 50.0,
        description: "Vale solicitado",
        date: "2024-02-14",
        time: "18:00",
      },
      {
        id: 4,
        professional: "Maria Santos",
        type: "Ganho",
        amount: 35.0,
        description: "Corte Feminino - Ana Paula",
        date: "2024-02-14",
        time: "11:30",
      },
      {
        id: 5,
        professional: "Maria Santos",
        type: "Ganho",
        amount: 30.0,
        description: "Escova - Carlos Lima",
        date: "2024-02-10",
        time: "09:00",
      },
      {
        id: 6,
        professional: "Ana Costa",
        type: "Ganho",
        amount: 60.0,
        description: "Luzes - Fernanda Souza",
        date: "2024-02-08",
        time: "16:00",
      },
      {
        id: 7,
        professional: "João Oliveira",
        type: "Ganho",
        amount: 25.0,
        description: "Corte Masculino - Roberto Alves",
        date: "2024-02-01",
        time: "09:00",
      },
      {
        id: 8,
        professional: "Maria Santos",
        type: "Ganho",
        amount: 12.0,
        description: "Sobrancelha - Patrícia Lima",
        date: "2024-01-28",
        time: "10:00",
      },
      {
        id: 9,
        professional: "Sandro Silva",
        type: "Ganho",
        amount: 25.0,
        description: "Corte Masculino - Cliente Antigo",
        date: "2024-01-20",
        time: "11:00",
      },
    ],
    clients: [
      {
        id: 1,
        name: "João Silva",
        email: "joao@email.com",
        phone: "(11) 99999-0001",
        lastVisit: "2024-02-15",
        totalSpent: 380.0,
        totalVisits: 12,
      },
      {
        id: 2,
        name: "Maria Santos",
        email: "maria@email.com",
        phone: "(11) 99999-0002",
        lastVisit: "2024-02-14",
        totalSpent: 500.0,
        totalVisits: 15,
      },
      {
        id: 3,
        name: "Pedro Costa",
        email: "pedro@email.com",
        phone: "(11) 99999-0003",
        lastVisit: "2024-02-14",
        totalSpent: 250.0,
        totalVisits: 8,
      },
      {
        id: 4,
        name: "Ana Paula",
        email: "ana@email.com",
        phone: "(11) 99999-0004",
        lastVisit: "2024-02-14",
        totalSpent: 150.0,
        totalVisits: 5,
      },
      {
        id: 5,
        name: "Carlos Lima",
        email: "carlos@email.com",
        phone: "(11) 99999-0005",
        lastVisit: "2024-02-10",
        totalSpent: 100.0,
        totalVisits: 3,
      },
      {
        id: 6,
        name: "Fernanda Souza",
        email: "fernanda@email.com",
        phone: "(11) 99999-0006",
        lastVisit: "2024-02-08",
        totalSpent: 200.0,
        totalVisits: 4,
      },
    ],
    professionals: [
      {
        id: 1,
        name: "Sandro Silva",
        specialty: "Cortes Masculinos e Barba",
        status: "Ativo",
        monthlyEarnings: 2800.0,
        totalWithdrawals: 500.0,
      },
      {
        id: 2,
        name: "Maria Santos",
        specialty: "Cortes Femininos e Coloração",
        status: "Ativo",
        monthlyEarnings: 3200.0,
        totalWithdrawals: 200.0,
      },
      {
        id: 3,
        name: "João Oliveira",
        specialty: "Cortes Masculinos",
        status: "Ativo",
        monthlyEarnings: 1500.0,
        totalWithdrawals: 100.0,
      },
      {
        id: 4,
        name: "Ana Costa",
        specialty: "Coloração e Luzes",
        status: "Ativo",
        monthlyEarnings: 2400.0,
        totalWithdrawals: 300.0,
      },
    ],
    observations: [
      {
        id: 1,
        text: "Chegou 15 minutos atrasado hoje",
        date: "2024-02-15",
        time: "08:15",
        type: "Atenção",
        professional: "Sandro Silva",
      },
      {
        id: 2,
        text: "Excelente atendimento ao cliente João Silva",
        date: "2024-02-14",
        time: "14:30",
        type: "Positivo",
        professional: "Sandro Silva",
      },
      {
        id: 3,
        text: "Precisou sair mais cedo para consulta médica",
        date: "2024-02-13",
        time: "16:00",
        type: "Informação",
        professional: "Maria Santos",
      },
    ],
    services: [
      { id: "1", name: "Corte Masculino", duration: 30, price: 25.0 },
      { id: "2", name: "Corte Feminino", duration: 45, price: 35.0 },
      { id: "3", name: "Escova", duration: 60, price: 30.0 },
      { id: "4", name: "Coloração", duration: 120, price: 80.0 },
      { id: "5", name: "Luzes", duration: 90, price: 60.0 },
      { id: "6", name: "Barba", duration: 20, price: 15.0 },
      { id: "7", name: "Sobrancelha", duration: 15, price: 12.0 },
    ],
  }

  const filterReportData = () => {
    const totalAppointments = allReportData.appointments.length
    const totalRevenue = allReportData.financialTransactions
      .filter((t) => t.type === "Ganho")
      .reduce((sum, t) => sum + t.amount, 0)
    const totalWithdrawals = allReportData.financialTransactions
      .filter((t) => t.type === "Retirada" || t.type === "Vale")
      .reduce((sum, t) => sum + t.amount, 0)
    const totalActiveClients = new Set(allReportData.appointments.map((app) => app.client)).size

    return {
      ...allReportData,
      summary: {
        appointmentsInPeriod: totalAppointments,
        revenueInPeriod: totalRevenue,
        withdrawalsInPeriod: totalWithdrawals,
        activeClients: totalActiveClients,
        totalProfessionals: allReportData.professionals.length,
        totalServices: allReportData.services.length,
        occupancyRate: 0,
      },
    }
  }

  const handleDownloadPdf = () => {
    console.log("Attempting to download PDF...")
    try {
      const currentReportData = filterReportData()
      const doc = new jsPDF()

      doc.setFontSize(20)
      doc.text("Relatório Completo - Sandro Cabeleireiros", 10, 10)
      doc.setFontSize(10)
      doc.text(`Gerado em: ${new Date().toLocaleDateString("pt-BR")} ${new Date().toLocaleTimeString("pt-BR")}`, 10, 18)
      doc.text("Período: Todos os dados", 10, 25)

      let yOffset = 35

      // Resumo Geral
      doc.setFontSize(14)
      doc.text("Resumo Geral", 10, yOffset)
      doc.setFontSize(10)
      yOffset += 10
      doc.text(`Agendamentos no Período: ${currentReportData.summary.appointmentsInPeriod}`, 10, yOffset)
      yOffset += 7
      doc.text(`Receita no Período: R$ ${currentReportData.summary.revenueInPeriod.toFixed(2)}`, 10, yOffset)
      yOffset += 7
      doc.text(`Retiradas no Período: R$ ${currentReportData.summary.withdrawalsInPeriod.toFixed(2)}`, 10, yOffset)
      yOffset += 7
      doc.text(`Clientes Atendidos: ${currentReportData.summary.activeClients}`, 10, yOffset)
      yOffset += 7
      doc.text(`Total de Profissionais: ${currentReportData.summary.totalProfessionals}`, 10, yOffset)
      yOffset += 7
      doc.text(`Total de Serviços: ${currentReportData.summary.totalServices}`, 10, yOffset)
      yOffset += 15

      // Agendamentos Recentes
      console.log("Generating Appointments table...")
      doc.setFontSize(14)
      doc.text("Agendamentos Recentes", 10, yOffset)
      yOffset += 5
      ;(doc as any).autoTable({
        startY: yOffset,
        head: [["ID", "Cliente", "Serviço", "Profissional", "Data", "Hora", "Status", "Preço"]],
        body: currentReportData.appointments.map((app) => [
          String(app.id), // Explicitly convert to string
          String(app.client),
          String(app.service),
          String(app.professional),
          String(app.date),
          String(app.time),
          String(app.status),
          `R$ ${app.price.toFixed(2)}`,
        ]),
        theme: "grid",
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [147, 51, 234] },
        margin: { top: 10 },
      })
      yOffset = (doc as any).autoTable.previous.finalY + 15

      // Transações Financeiras
      console.log("Generating Financial Transactions table...")
      doc.setFontSize(14)
      doc.text("Transações Financeiras", 10, yOffset)
      yOffset += 5
      ;(doc as any).autoTable({
        startY: yOffset,
        head: [["ID", "Profissional", "Tipo", "Valor", "Descrição", "Data", "Hora"]],
        body: currentReportData.financialTransactions.map((trans) => [
          String(trans.id),
          String(trans.professional),
          String(trans.type),
          `${trans.type === "Retirada" ? "-" : "+"}R$ ${trans.amount.toFixed(2)}`,
          String(trans.description),
          String(trans.date),
          String(trans.time),
        ]),
        theme: "grid",
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [147, 51, 234] },
        margin: { top: 10 },
      })
      yOffset = (doc as any).autoTable.previous.finalY + 15

      // Clientes
      console.log("Generating Clients table...")
      doc.setFontSize(14)
      doc.text("Clientes Cadastrados", 10, yOffset)
      yOffset += 5
      ;(doc as any).autoTable({
        startY: yOffset,
        head: [["ID", "Nome", "Email", "Telefone", "Última Visita", "Total Gasto", "Total Visitas"]],
        body: currentReportData.clients.map((client) => [
          String(client.id),
          String(client.name),
          String(client.email),
          String(client.phone),
          String(client.lastVisit),
          `R$ ${client.totalSpent.toFixed(2)}`,
          String(client.totalVisits),
        ]),
        theme: "grid",
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [147, 51, 234] },
        margin: { top: 10 },
      })
      yOffset = (doc as any).autoTable.previous.finalY + 15

      // Profissionais
      console.log("Generating Professionals table...")
      doc.setFontSize(14)
      doc.text("Profissionais", 10, yOffset)
      yOffset += 5
      ;(doc as any).autoTable({
        startY: yOffset,
        head: [["ID", "Nome", "Especialidade", "Status", "Ganhos Mês", "Total Retiradas"]],
        body: currentReportData.professionals.map((prof) => [
          String(prof.id),
          String(prof.name),
          String(prof.specialty),
          String(prof.status),
          `R$ ${prof.monthlyEarnings.toFixed(2)}`,
          `R$ ${prof.totalWithdrawals.toFixed(2)}`,
        ]),
        theme: "grid",
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [147, 51, 234] },
        margin: { top: 10 },
      })
      yOffset = (doc as any).autoTable.previous.finalY + 15

      // Observações Recentes
      console.log("Generating Observations table...")
      doc.setFontSize(14)
      doc.text("Observações Recentes", 10, yOffset)
      yOffset += 5
      ;(doc as any).autoTable({
        startY: yOffset,
        head: [["ID", "Profissional", "Tipo", "Observação", "Data", "Hora"]],
        body: currentReportData.observations.map((obs) => [
          String(obs.id),
          String(obs.professional),
          String(obs.type),
          String(obs.text),
          String(obs.date),
          String(obs.time),
        ]),
        theme: "grid",
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [147, 51, 234] },
        margin: { top: 10 },
      })

      doc.save("relatorio_sandro_cabeleireiros.pdf")
      console.log("PDF generated and saved successfully.")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.")
    }
  }

  const handleDownloadCsv = () => {
    const currentReportData = filterReportData()
    const headers = ["ID", "Cliente", "Serviço", "Profissional", "Data", "Hora", "Status", "Preço"]
    const rows = currentReportData.appointments.map((app) => [
      app.id,
      app.client,
      app.service,
      app.professional,
      app.date,
      app.time,
      app.status,
      app.price.toFixed(2),
    ])

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", "agendamentos_sandro_cabeleireiros.csv")
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const currentDisplayData = filterReportData()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Resumo Geral do Salão</CardTitle>
            <CardDescription>Visão consolidada das principais métricas do sistema.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Agendamentos no Período</p>
              <p className="text-xl font-bold">{currentDisplayData.summary.appointmentsInPeriod}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Receita no Período</p>
              <p className="text-xl font-bold">R$ {currentDisplayData.summary.revenueInPeriod.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Retiradas no Período</p>
              <p className="text-xl font-bold">R$ {currentDisplayData.summary.withdrawalsInPeriod.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Clientes Atendidos</p>
              <p className="text-xl font-bold">{currentDisplayData.summary.activeClients}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total de Profissionais</p>
              <p className="text-xl font-bold">{currentDisplayData.summary.totalProfessionals}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total de Serviços</p>
              <p className="text-xl font-bold">{currentDisplayData.summary.totalServices}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Opções de Download</CardTitle>
            <CardDescription>Baixe o resumo completo em diferentes formatos.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleDownloadPdf} className="w-full sm:w-auto">
              <FileText className="h-4 w-4 mr-2" />
              Download PDF Completo
            </Button>
            <Button onClick={handleDownloadCsv} className="w-full sm:w-auto bg-transparent" variant="outline">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Download CSV (Agendamentos)
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            *Os dados apresentados nos relatórios são baseados nas informações simuladas do sistema. Em uma
            implementação real, eles seriam extraídos diretamente do banco de dados.
          </p>
        </div>
      </div>
    </div>
  )
}
