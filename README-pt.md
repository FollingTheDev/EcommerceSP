# Sandro Cabeleireiros - Sistema de Agendamento Online 💇‍♂️

Um sistema completo de gestão de salão desenvolvido com Next.js, com agendamento online, gestão de clientes e painel administrativo.

## 🌟 Funcionalidades

### Para Clientes
- **Agendamento Online**: Agendamento 24/7 de compromissos
- **Seleção de Serviços**: Navegue e selecione entre vários serviços de beleza
- **Escolha do Profissional**: Escolha seu cabeleireiro preferido
- **Dashboard do Cliente**: Visualize histórico de agendamentos e gerencie reservas
- **Responsivo Mobile**: Otimizado para dispositivos móveis

### Para Administradores
- **Visão Geral do Dashboard**: Estatísticas e métricas em tempo real
- **Gestão de Agendamentos**: Edite, cancele e acompanhe agendamentos
- **Controle Financeiro**: Acompanhe ganhos, retiradas e vales por profissional
- **Gestão de Clientes**: Visualize histórico e preferências dos clientes
- **Gestão de Profissionais**: Gerencie horários e desempenho da equipe
- **Relatórios**: Gere relatórios detalhados do negócio

### Funcionalidades Técnicas
- **Suporte PWA**: Instale como aplicativo móvel
- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Interface Moderna**: Construído com Tailwind CSS e componentes shadcn/ui
- **Segurança de Tipos**: Implementação completa em TypeScript

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd sandro-salon
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Abra seu navegador**
   Navegue para `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
├── app/                    # Next.js App Router
│   ├── booking/           # Página de agendamento
│   ├── dashboard/         # Dashboards dos usuários
│   │   ├── admin/         # Dashboard administrativo
│   │   └── client/        # Dashboard do cliente
│   ├── login/             # Autenticação
│   ├── register/          # Cadastro de usuário
│   └── services/          # Catálogo de serviços
├── components/            # Componentes UI reutilizáveis
│   ├── ui/               # Componentes shadcn/ui
│   └── ...               # Componentes customizados
├── lib/                  # Funções utilitárias
├── hooks/                # Hooks personalizados do React
├── scripts/              # Scripts do banco de dados
└── public/               # Recursos estáticos
```

## 🎯 Uso

### Credenciais de Demo

**Acesso do Cliente:**
- Email: `qualquer@email.com`
- Senha: `qualquer`

**Acesso Administrativo:**
- Email: `admin@sandrocabeleireiros.com`
- Senha: `qualquer`

### Serviços Disponíveis
- **Corte Masculino** - R$ 25,00 (30min)
- **Corte Feminino** - R$ 35,00 (45min)
- **Coloração** - R$ 80,00 (2h)
- **Barba** - R$ 15,00 (20min)
- **Sobrancelha** - R$ 12,00 (15min)
- E mais...

### Profissionais
- **Sandro Silva** - Cortes masculinos e barba
- **Maria Santos** - Cortes femininos e coloração
- **João Oliveira** - Cortes masculinos
- **Ana Costa** - Coloração e luzes

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes UI**: shadcn/ui (Radix UI)
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + validação Zod
- **Manipulação de Datas**: date-fns
- **Gráficos**: Recharts
- **Geração de PDF**: jsPDF

## 📱 Funcionalidades Mobile

A aplicação é totalmente responsiva e inclui:
- Navegação otimizada para mobile
- Interface amigável ao toque
- Capacidades PWA para experiência similar a app
- Formulários otimizados para entrada mobile

## 🔧 Desenvolvimento

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Build para produção
pnpm start        # Inicia servidor de produção
pnpm lint         # Executa ESLint
```

### Configuração do Banco de Dados

O projeto inclui scripts SQL para inicialização do banco:

```bash
# Execute os scripts do banco (se usando PostgreSQL)
psql -d seu_banco -f scripts/01-create-tables.sql
psql -d seu_banco -f scripts/02-seed-data.sql
```

## 🎨 Personalização

### Estilização
- Modifique `tailwind.config.ts` para personalização do tema
- Atualize `app/globals.css` para estilos globais
- Componentes usam variáveis CSS para fácil tematização

### Configuração
- Atualize `next.config.mjs` para configurações do Next.js
- Modifique `components.json` para configuração do shadcn/ui

## 📊 Funcionalidades em Detalhes

### Fluxo de Agendamento
1. Seleção de serviço com preço e duração
2. Seleção de profissional baseada em especialidades
3. Seleção de data e horário com disponibilidade
4. Confirmação e resumo do agendamento

### Dashboard Administrativo
- **Estatísticas**: Agendamentos diários, receita, clientes ativos
- **Gestão**: Operações CRUD completas para agendamentos
- **Controle Financeiro**: Ganhos e despesas dos profissionais
- **Relatórios**: Análises e insights do negócio

### Dashboard do Cliente
- Histórico pessoal de agendamentos
- Próximos agendamentos
- Gestão de perfil
- Estatísticas de agendamentos

## 🚀 Deploy

### Netlify (Recomendado)
O projeto inclui configuração `netlify.toml`:

```bash
# Build e deploy
pnpm build
# Deploy para Netlify
```

### Outras Plataformas
- **Vercel**: Suporte nativo ao Next.js
- **Railway**: Deploy full-stack
- **Heroku**: Deploy com container

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 🆘 Suporte

Para suporte e dúvidas:
- Crie uma issue no repositório
- Contato: contato@sandrocabeleireiros.com
- Telefone: (11) 99999-0000

## 🎯 Roadmap

- [ ] Integração com WhatsApp para notificações
- [ ] Sistema de email real (SendGrid/Mailgun)
- [ ] Pagamentos online (Stripe/PagSeguro)
- [ ] Relatórios avançados com gráficos
- [ ] Notificações push para lembretes
- [ ] Suporte multi-idioma
- [ ] Documentação da API

---

**Construído com ❤️ para profissionais de salão**