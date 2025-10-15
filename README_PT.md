# 💇‍♂️ EcommerceSP - Sistema de Gestão para Salões de Beleza

Uma aplicação web moderna e responsiva para gestão de salões de beleza e barbearias, com agendamento online, gestão de clientes e painel administrativo completo.

## 🌟 Funcionalidades

### Recursos para Clientes
- **Agendamento Online**: Sistema de agendamento 24/7
- **Seleção de Serviços**: Navegue e selecione entre os serviços disponíveis
- **Escolha de Profissional**: Selecione o profissional de sua preferência
- **Dashboard do Cliente**: Visualize histórico de agendamentos e estatísticas pessoais
- **Design Responsivo**: Otimizado para dispositivos móveis e desktop

### Recursos Administrativos
- **Dashboard Completo**: Visão geral das estatísticas e operações do salão
- **Gestão de Agendamentos**: Edite, reagende e cancele compromissos
- **Histórico de Clientes**: Perfis detalhados com histórico de serviços
- **Gestão de Profissionais**: Acompanhe performance e finanças dos profissionais
- **Controle Financeiro**: Monitore ganhos, retiradas e despesas
- **Alertas de Aniversário**: Notificações automáticas de aniversário dos clientes
- **Sistema de Observações**: Acompanhe frequência, atrasos e consultas médicas da equipe

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 14, React 18, TypeScript
- **Estilização**: Tailwind CSS, Componentes Radix UI
- **Formulários**: React Hook Form com validação Zod
- **Ícones**: Lucide React
- **Gráficos**: Recharts
- **Geração de PDF**: jsPDF com AutoTable
- **Temas**: Next-themes para modo claro/escuro

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd EcommerceSP
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   pnpm dev
   # ou
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra seu navegador**
   Navegue para [http://localhost:3000](http://localhost:3000)

## 🎯 Credenciais de Demonstração

### Acesso Cliente
- **Email**: qualquer@email.com
- **Senha**: qualquer

### Acesso Administrador
- **Email**: admin@sandrocabeleireiros.com
- **Senha**: qualquer

## 📱 Aplicativo Web Progressivo (PWA)

A aplicação pode ser instalada como PWA em dispositivos móveis:

1. **Chrome**: Menu > "Adicionar à tela inicial"
2. **Safari**: Compartilhar > "Adicionar à Tela de Início"
3. O app funcionará como um aplicativo móvel nativo!

## 🏗️ Estrutura do Projeto

```
├── app/                    # Diretório do Next.js
│   ├── booking/           # Páginas de agendamento
│   ├── dashboard/         # Dashboards do cliente e admin
│   ├── login/             # Páginas de autenticação
│   ├── register/          # Registro de usuário
│   └── services/          # Páginas de listagem de serviços
├── components/            # Componentes UI reutilizáveis
│   └── ui/               # Componentes Shadcn/ui
├── hooks/                # Hooks React customizados
├── lib/                  # Funções utilitárias
├── public/               # Assets estáticos
├── scripts/              # Scripts do banco de dados
└── styles/               # Estilos globais
```

## 🎨 Serviços Disponíveis

- **Corte Masculino** - R$ 25,00 (30 min)
- **Corte Feminino** - R$ 35,00 (45 min)
- **Coloração** - R$ 80,00 (2h)
- **Barba** - R$ 15,00 (20 min)
- E muito mais...

## 👥 Equipe de Profissionais

- **Sandro Silva** - Cortes Masculinos e Barba
- **Maria Santos** - Cortes Femininos e Coloração
- **João Oliveira** - Cortes Masculinos
- **Ana Costa** - Coloração e Luzes

## 🔧 Scripts Disponíveis

- `pnpm dev` - Iniciar servidor de desenvolvimento
- `pnpm build` - Construir para produção
- `pnpm start` - Iniciar servidor de produção
- `pnpm lint` - Executar ESLint

## 🚀 Deploy

A aplicação está configurada para deploy no Netlify com o arquivo de configuração `netlify.toml` incluído.

### Deploy no Netlify
1. Conecte seu repositório ao Netlify
2. As configurações de build são configuradas automaticamente
3. Faça o deploy com um único clique

## 🔮 Melhorias Futuras

- 🔗 **Integração com WhatsApp** para notificações
- 📧 **Sistema de Email Real** (SendGrid/Mailgun)
- 💳 **Pagamentos Online** (Stripe/PagSeguro)
- 📊 **Relatórios Avançados** com gráficos
- 🔔 **Notificações Push** para lembretes

## 📄 Licença

Este projeto é privado e proprietário.

## 🤝 Contribuições

Este é um projeto privado. Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento.

## 📞 Suporte

Para suporte técnico ou consultas comerciais:
- 📧 Email: contato@sandrocabeleireiros.com
- 📞 Telefone: (11) 99999-0000
- 📍 Endereço: Rua das Flores, 123 - São Paulo

---

**Feito com ❤️ para salões de beleza e barbearias modernas**