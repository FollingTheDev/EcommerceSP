"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Calendar, Users, DollarSign, User, LogOut } from "lucide-react"
import Link from "next/link"

interface MobileNavProps {
  userType: "client" | "admin"
  onLogout: () => void
}

export function MobileNav({ userType, onLogout }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const clientLinks = [
    { href: "/dashboard/client", label: "Dashboard", icon: Home },
    { href: "/booking", label: "Novo Agendamento", icon: Calendar },
  ]

  const adminLinks = [
    { href: "/dashboard/admin", label: "Dashboard", icon: Home },
    { href: "/dashboard/admin?tab=appointments", label: "Agendamentos", icon: Calendar },
    { href: "/dashboard/admin?tab=clients", label: "Clientes", icon: Users },
    { href: "/dashboard/admin?tab=financial", label: "Financeiro", icon: DollarSign },
  ]

  const links = userType === "admin" ? adminLinks : clientLinks

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <div className="flex flex-col h-full">
          <div className="flex items-center space-x-2 mb-8">
            <User className="h-6 w-6 text-purple-600" />
            <span className="font-semibold">Menu</span>
          </div>

          <nav className="flex-1 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <link.icon className="h-5 w-5 text-gray-600" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            onClick={() => {
              onLogout()
              setOpen(false)
            }}
            className="flex items-center space-x-3 px-3 py-2 justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            <span>Sair</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
