import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Scissors, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Sandro Cabeleireiros</h1>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="outline">Entrar</Button>
              </Link>
              <Link href="/register">
                <Button>Cadastrar</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Agende seu horário online</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Transforme seu visual com nossos profissionais especializados. Agende de forma rápida e prática através do
            nossa sistema online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                Agendar Agora
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Ver Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher o Sandro Cabeleireiros?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Agendamento Online</CardTitle>
                <CardDescription>Agende seus horários 24/7 através do nosso sistema online</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Profissionais Qualificados</CardTitle>
                <CardDescription>Equipe especializada com anos de experiência</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Atendimento Premium</CardTitle>
                <CardDescription>Cuidado personalizado para cada cliente</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Serviços</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Corte Masculino", price: "R$ 25,00", duration: "30 min" },
              { name: "Corte Feminino", price: "R$ 35,00", duration: "45 min" },
              { name: "Coloração", price: "R$ 80,00", duration: "2h" },
              { name: "Barba", price: "R$ 15,00", duration: "20 min" },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-purple-600 font-semibold">{service.price}</span>
                      <span className="text-gray-500 text-sm">{service.duration}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline">Ver Todos os Serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Sandro Cabeleireiros</h4>
              </div>
              <p className="text-gray-400">Transformando visual e autoestima há mais de 10 anos.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-gray-400">📞 (11) 99999-0000</p>
              <p className="text-gray-400">📧 contato@sandrocabeleireiros.com</p>
              <p className="text-gray-400">📍 Rua das Flores, 123 - São Paulo</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
              <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-400">Sábado: 8h às 16h</p>
              <p className="text-gray-400">Domingo: Fechado</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sandro Cabeleireiros. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
