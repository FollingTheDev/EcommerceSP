import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Clock, DollarSign, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      name: "Corte Masculino",
      description: "Corte de cabelo masculino tradicional com acabamento profissional",
      duration: 30,
      price: 25.0,
      category: "Masculino",
    },
    {
      name: "Corte Feminino",
      description: "Corte de cabelo feminino personalizado conforme seu estilo",
      duration: 45,
      price: 35.0,
      category: "Feminino",
    },
    {
      name: "Escova",
      description: "Escova modeladora para um visual impecável",
      duration: 60,
      price: 30.0,
      category: "Feminino",
    },
    {
      name: "Coloração",
      description: "Coloração completa do cabelo com produtos de qualidade",
      duration: 120,
      price: 80.0,
      category: "Feminino",
    },
    {
      name: "Luzes",
      description: "Mechas e luzes para um visual moderno e elegante",
      duration: 90,
      price: 60.0,
      category: "Feminino",
    },
    {
      name: "Barba",
      description: "Corte e modelagem de barba com navalha e acabamento",
      duration: 20,
      price: 15.0,
      category: "Masculino",
    },
    {
      name: "Sobrancelha",
      description: "Design de sobrancelhas para realçar seu olhar",
      duration: 15,
      price: 12.0,
      category: "Unissex",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Masculino":
        return "bg-blue-100 text-blue-800"
      case "Feminino":
        return "bg-pink-100 text-pink-800"
      case "Unissex":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Scissors className="h-8 w-8 text-purple-600" />
                <h1 className="text-2xl font-bold text-gray-900">Nossos Serviços</h1>
              </div>
            </div>
            <Link href="/register">
              <Button>Agendar Agora</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviços Profissionais de Beleza</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de beleza com profissionais qualificados e produtos de alta qualidade
            para garantir sua satisfação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <Badge className={getCategoryColor(service.category)}>{service.category}</Badge>
                </div>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{service.duration} min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-purple-600" />
                    <span className="text-lg font-bold text-purple-600">R$ {service.price.toFixed(2)}</span>
                  </div>
                </div>
                <Link href="/register">
                  <Button className="w-full">Agendar Este Serviço</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">Pronto para transformar seu visual?</CardTitle>
              <CardDescription className="text-purple-700">
                Cadastre-se agora e agende seu horário com nossos profissionais especializados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4">
                <Link href="/register">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Criar Conta
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline">
                    Já tenho conta
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
