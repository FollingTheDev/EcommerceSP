# Setup Guide / Guia de Instalação

Complete setup instructions for the Sandro Salon booking system.

*Instruções completas de configuração para o sistema de agendamento do Sandro Cabeleireiros.*

## Table of Contents / Índice

- [System Requirements / Requisitos do Sistema](#system-requirements--requisitos-do-sistema)
- [Development Setup / Configuração de Desenvolvimento](#development-setup--configuração-de-desenvolvimento)
- [Database Setup / Configuração do Banco de Dados](#database-setup--configuração-do-banco-de-dados)
- [Environment Configuration / Configuração do Ambiente](#environment-configuration--configuração-do-ambiente)
- [Production Deployment / Deploy em Produção](#production-deployment--deploy-em-produção)
- [Troubleshooting / Solução de Problemas](#troubleshooting--solução-de-problemas)

## System Requirements / Requisitos do Sistema

### Minimum Requirements / Requisitos Mínimos
- **Node.js**: 18.0.0 or higher / 18.0.0 ou superior
- **npm**: 9.0.0 or higher / 9.0.0 ou superior
- **pnpm**: 8.0.0 or higher (recommended) / 8.0.0 ou superior (recomendado)
- **RAM**: 4GB minimum / 4GB mínimo
- **Storage**: 1GB free space / 1GB de espaço livre

### Recommended Requirements / Requisitos Recomendados
- **Node.js**: 20.0.0 or higher / 20.0.0 ou superior
- **pnpm**: Latest version / Versão mais recente
- **RAM**: 8GB or more / 8GB ou mais
- **Storage**: 5GB free space / 5GB de espaço livre

### Supported Operating Systems / Sistemas Operacionais Suportados
- Windows 10/11
- macOS 10.15 or higher / macOS 10.15 ou superior
- Linux (Ubuntu 20.04+, Debian 10+, CentOS 8+)

## Development Setup / Configuração de Desenvolvimento

### 1. Install Node.js / Instalar Node.js

#### Windows
1. Download from [nodejs.org](https://nodejs.org/)
2. Run the installer / Execute o instalador
3. Verify installation / Verifique a instalação:
   ```bash
   node --version
   npm --version
   ```

#### macOS
```bash
# Using Homebrew / Usando Homebrew
brew install node

# Or download from nodejs.org / Ou baixe do nodejs.org
```

#### Linux (Ubuntu/Debian)
```bash
# Update package list / Atualizar lista de pacotes
sudo apt update

# Install Node.js / Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation / Verificar instalação
node --version
npm --version
```

### 2. Install pnpm (Recommended) / Instalar pnpm (Recomendado)

```bash
# Install pnpm globally / Instalar pnpm globalmente
npm install -g pnpm

# Verify installation / Verificar instalação
pnpm --version
```

### 3. Clone the Repository / Clonar o Repositório

```bash
# Clone the project / Clonar o projeto
git clone <repository-url>
cd sandro-salon

# Or if you have SSH configured / Ou se você tem SSH configurado
git clone git@github.com:username/sandro-salon.git
cd sandro-salon
```

### 4. Install Dependencies / Instalar Dependências

```bash
# Using pnpm (recommended) / Usando pnpm (recomendado)
pnpm install

# Or using npm / Ou usando npm
npm install
```

### 5. Environment Setup / Configuração do Ambiente

Create environment files / Criar arquivos de ambiente:

```bash
# Copy environment template / Copiar template do ambiente
cp .env.example .env.local

# Edit the file with your configuration / Editar o arquivo com sua configuração
```

### 6. Start Development Server / Iniciar Servidor de Desenvolvimento

```bash
# Using pnpm / Usando pnpm
pnpm dev

# Or using npm / Ou usando npm
npm run dev
```

The application will be available at / A aplicação estará disponível em:
`http://localhost:3000`

## Database Setup / Configuração do Banco de Dados

### Option 1: PostgreSQL (Recommended) / Opção 1: PostgreSQL (Recomendado)

#### Install PostgreSQL / Instalar PostgreSQL

**Windows:**
1. Download from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Run installer / Execute o instalador
3. Remember the password for 'postgres' user / Lembre-se da senha do usuário 'postgres'

**macOS:**
```bash
# Using Homebrew / Usando Homebrew
brew install postgresql
brew services start postgresql

# Create database / Criar banco de dados
createdb sandro_salon
```

**Linux (Ubuntu/Debian):**
```bash
# Install PostgreSQL / Instalar PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start service / Iniciar serviço
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database / Criar banco de dados
sudo -u postgres createdb sandro_salon
```

#### Setup Database Schema / Configurar Schema do Banco

```bash
# Connect to PostgreSQL / Conectar ao PostgreSQL
psql -U postgres -d sandro_salon

# Or if you created a specific user / Ou se você criou um usuário específico
psql -U your_username -d sandro_salon

# Run the schema scripts / Executar os scripts do schema
\i scripts/01-create-tables.sql
\i scripts/02-seed-data.sql
```

### Option 2: SQLite (Development Only) / Opção 2: SQLite (Apenas Desenvolvimento)

For development purposes, you can use SQLite:
*Para fins de desenvolvimento, você pode usar SQLite:*

```bash
# Install SQLite / Instalar SQLite
npm install sqlite3

# Create database file / Criar arquivo do banco
touch database.sqlite
```

### Option 3: Docker (Recommended for Development) / Opção 3: Docker (Recomendado para Desenvolvimento)

```bash
# Create docker-compose.yml / Criar docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: sandro_salon
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./scripts:/docker-entrypoint-initdb.d

volumes:
  postgres_data:

# Start database / Iniciar banco de dados
docker-compose up -d postgres
```

## Environment Configuration / Configuração do Ambiente

### Environment Variables / Variáveis de Ambiente

Create `.env.local` file in the project root:
*Criar arquivo `.env.local` na raiz do projeto:*

```env
# Database Configuration / Configuração do Banco de Dados
DATABASE_URL="postgresql://username:password@localhost:5432/sandro_salon"

# Authentication / Autenticação
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Email Configuration (Optional) / Configuração de Email (Opcional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# WhatsApp Integration (Optional) / Integração WhatsApp (Opcional)
WHATSAPP_API_KEY="your-whatsapp-api-key"
WHATSAPP_PHONE_NUMBER="your-phone-number"

# Payment Integration (Optional) / Integração de Pagamento (Opcional)
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# File Upload (Optional) / Upload de Arquivos (Opcional)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Analytics (Optional) / Analytics (Opcional)
GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"
```

### Configuration Files / Arquivos de Configuração

#### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'your-domain.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

export default nextConfig
```

#### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

## Production Deployment / Deploy em Produção

### Option 1: Vercel (Recommended) / Opção 1: Vercel (Recomendado)

1. **Install Vercel CLI / Instalar CLI do Vercel:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel / Fazer login no Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy / Fazer deploy:**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables / Definir Variáveis de Ambiente:**
   ```bash
   vercel env add DATABASE_URL
   vercel env add NEXTAUTH_SECRET
   # Add other environment variables / Adicionar outras variáveis
   ```

### Option 2: Netlify

1. **Build the project / Fazer build do projeto:**
   ```bash
   pnpm build
   ```

2. **Deploy to Netlify / Deploy no Netlify:**
   ```bash
   # Install Netlify CLI / Instalar CLI do Netlify
   npm install -g netlify-cli

   # Login / Fazer login
   netlify login

   # Deploy / Fazer deploy
   netlify deploy --prod --dir=.next
   ```

### Option 3: Railway

1. **Install Railway CLI / Instalar CLI do Railway:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy / Fazer login e deploy:**
   ```bash
   railway login
   railway link
   railway up
   ```

### Option 4: Docker

1. **Create Dockerfile:**
   ```dockerfile
   FROM node:18-alpine AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json pnpm-lock.yaml ./
   RUN npm install -g pnpm && pnpm install --frozen-lockfile

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm install -g pnpm && pnpm build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Build and run / Fazer build e executar:**
   ```bash
   docker build -t sandro-salon .
   docker run -p 3000:3000 sandro-salon
   ```

## Performance Optimization / Otimização de Performance

### 1. Enable Caching / Habilitar Cache

```typescript
// next.config.mjs
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
    ]
  },
}
```

### 2. Database Optimization / Otimização do Banco

```sql
-- Add indexes for better performance / Adicionar índices para melhor performance
CREATE INDEX idx_appointments_date ON appointments(appointment_date);
CREATE INDEX idx_appointments_professional ON appointments(professional_id);
CREATE INDEX idx_appointments_user ON appointments(user_id);
CREATE INDEX idx_users_email ON users(email);
```

### 3. Image Optimization / Otimização de Imagens

```typescript
// next.config.mjs
const nextConfig = {
  images: {
    domains: ['localhost', 'your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
}
```

## Security Configuration / Configuração de Segurança

### 1. Content Security Policy / Política de Segurança de Conteúdo

```typescript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### 2. Environment Security / Segurança do Ambiente

```bash
# Generate secure secrets / Gerar segredos seguros
openssl rand -base64 32

# Use strong database passwords / Usar senhas fortes para o banco
# Enable SSL in production / Habilitar SSL em produção
DATABASE_URL="postgresql://user:password@localhost:5432/db?sslmode=require"
```

## Monitoring and Logging / Monitoramento e Logs

### 1. Application Monitoring / Monitoramento da Aplicação

```typescript
// lib/monitoring.ts
export function logError(error: Error, context?: any) {
  console.error('Application Error:', {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
  })
}
```

### 2. Performance Monitoring / Monitoramento de Performance

```typescript
// lib/analytics.ts
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_location: url,
    })
  }
}
```

## Troubleshooting / Solução de Problemas

### Common Issues / Problemas Comuns

#### 1. Port Already in Use / Porta Já em Uso
```bash
# Find process using port 3000 / Encontrar processo usando porta 3000
lsof -i :3000

# Kill the process / Matar o processo
kill -9 <PID>

# Or use different port / Ou usar porta diferente
pnpm dev -- -p 3001
```

#### 2. Database Connection Issues / Problemas de Conexão com Banco
```bash
# Check PostgreSQL status / Verificar status do PostgreSQL
sudo systemctl status postgresql

# Restart PostgreSQL / Reiniciar PostgreSQL
sudo systemctl restart postgresql

# Check connection / Verificar conexão
psql -U postgres -d sandro_salon -c "SELECT 1;"
```

#### 3. Module Not Found Errors / Erros de Módulo Não Encontrado
```bash
# Clear node_modules and reinstall / Limpar node_modules e reinstalar
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

#### 4. Build Errors / Erros de Build
```bash
# Clear Next.js cache / Limpar cache do Next.js
rm -rf .next
pnpm build

# Check for TypeScript errors / Verificar erros do TypeScript
pnpm type-check
```

### Performance Issues / Problemas de Performance

#### 1. Slow Database Queries / Consultas Lentas no Banco
```sql
-- Enable query logging / Habilitar log de consultas
ALTER SYSTEM SET log_statement = 'all';
SELECT pg_reload_conf();

-- Analyze slow queries / Analisar consultas lentas
EXPLAIN ANALYZE SELECT * FROM appointments WHERE appointment_date = CURRENT_DATE;
```

#### 2. Memory Issues / Problemas de Memória
```bash
# Increase Node.js memory limit / Aumentar limite de memória do Node.js
NODE_OPTIONS="--max-old-space-size=4096" pnpm dev
```

### Getting Help / Obtendo Ajuda

1. **Check the logs / Verificar os logs:**
   ```bash
   # Development logs / Logs de desenvolvimento
   pnpm dev

   # Production logs / Logs de produção
   pm2 logs
   ```

2. **Enable debug mode / Habilitar modo debug:**
   ```bash
   DEBUG=* pnpm dev
   ```

3. **Contact support / Contatar suporte:**
   - Email: contato@sandrocabeleireiros.com
   - GitHub Issues: Create an issue in the repository
   - Phone: (11) 99999-0000

## Maintenance / Manutenção

### Regular Tasks / Tarefas Regulares

1. **Update dependencies / Atualizar dependências:**
   ```bash
   pnpm update
   ```

2. **Database backup / Backup do banco:**
   ```bash
   pg_dump sandro_salon > backup_$(date +%Y%m%d).sql
   ```

3. **Monitor logs / Monitorar logs:**
   ```bash
   tail -f /var/log/sandro-salon/app.log
   ```

4. **Performance monitoring / Monitoramento de performance:**
   ```bash
   # Check application health / Verificar saúde da aplicação
   curl http://localhost:3000/api/health
   ```

---

**Need more help? / Precisa de mais ajuda?**
Contact our support team at contato@sandrocabeleireiros.com
*Entre em contato com nossa equipe de suporte em contato@sandrocabeleireiros.com*