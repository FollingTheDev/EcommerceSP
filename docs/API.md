# API Documentation / Documentação da API

This document describes the API endpoints and data structures for the Sandro Salon booking system.

*Este documento descreve os endpoints da API e estruturas de dados para o sistema de agendamento do Sandro Cabeleireiros.*

## Table of Contents / Índice

- [Authentication / Autenticação](#authentication--autenticação)
- [Users / Usuários](#users--usuários)
- [Appointments / Agendamentos](#appointments--agendamentos)
- [Services / Serviços](#services--serviços)
- [Professionals / Profissionais](#professionals--profissionais)
- [Financial Transactions / Transações Financeiras](#financial-transactions--transações-financeiras)
- [Data Models / Modelos de Dados](#data-models--modelos-de-dados)

## Authentication / Autenticação

### Login
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string",
  "userType": "client" | "admin"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "string",
    "name": "string",
    "userType": "client" | "admin"
  },
  "token": "jwt_token"
}
```

### Register / Cadastro
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "birthDate": "date"
}
```

## Users / Usuários

### Get User Profile / Obter Perfil do Usuário
**GET** `/api/users/profile`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "phone": "string",
  "birthDate": "date",
  "createdAt": "datetime"
}
```

### Update User Profile / Atualizar Perfil do Usuário
**PUT** `/api/users/profile`

**Request Body:**
```json
{
  "name": "string",
  "phone": "string",
  "birthDate": "date"
}
```

## Appointments / Agendamentos

### Create Appointment / Criar Agendamento
**POST** `/api/appointments`

**Request Body:**
```json
{
  "serviceId": "uuid",
  "professionalId": "uuid",
  "appointmentDate": "date",
  "appointmentTime": "time",
  "notes": "string"
}
```

**Response:**
```json
{
  "id": "uuid",
  "userId": "uuid",
  "serviceId": "uuid",
  "professionalId": "uuid",
  "appointmentDate": "date",
  "appointmentTime": "time",
  "status": "scheduled",
  "notes": "string",
  "createdAt": "datetime"
}
```

### Get User Appointments / Obter Agendamentos do Usuário
**GET** `/api/appointments/user`

**Query Parameters:**
- `status`: "scheduled" | "completed" | "cancelled"
- `limit`: number
- `offset`: number

**Response:**
```json
{
  "appointments": [
    {
      "id": "uuid",
      "service": {
        "name": "string",
        "duration": "number",
        "price": "number"
      },
      "professional": {
        "name": "string",
        "specialty": "string"
      },
      "appointmentDate": "date",
      "appointmentTime": "time",
      "status": "string"
    }
  ],
  "total": "number"
}
```

### Update Appointment / Atualizar Agendamento
**PUT** `/api/appointments/:id`

**Request Body:**
```json
{
  "serviceId": "uuid",
  "professionalId": "uuid",
  "appointmentDate": "date",
  "appointmentTime": "time",
  "status": "scheduled" | "completed" | "cancelled",
  "notes": "string"
}
```

### Cancel Appointment / Cancelar Agendamento
**DELETE** `/api/appointments/:id`

## Services / Serviços

### Get All Services / Obter Todos os Serviços
**GET** `/api/services`

**Response:**
```json
{
  "services": [
    {
      "id": "uuid",
      "name": "string",
      "description": "string",
      "duration": "number",
      "price": "number",
      "category": "string",
      "isActive": "boolean"
    }
  ]
}
```

### Get Service by ID / Obter Serviço por ID
**GET** `/api/services/:id`

**Response:**
```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "duration": "number",
  "price": "number",
  "category": "string",
  "isActive": "boolean"
}
```

## Professionals / Profissionais

### Get All Professionals / Obter Todos os Profissionais
**GET** `/api/professionals`

**Response:**
```json
{
  "professionals": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "phone": "string",
      "specialty": "string",
      "isActive": "boolean"
    }
  ]
}
```

### Get Professional Availability / Obter Disponibilidade do Profissional
**GET** `/api/professionals/:id/availability`

**Query Parameters:**
- `date`: "YYYY-MM-DD"

**Response:**
```json
{
  "availableSlots": [
    {
      "time": "HH:MM",
      "available": "boolean"
    }
  ]
}
```

### Get Professional Schedule / Obter Agenda do Profissional
**GET** `/api/professionals/:id/schedule`

**Response:**
```json
{
  "schedule": [
    {
      "dayOfWeek": "number",
      "startTime": "time",
      "endTime": "time",
      "isActive": "boolean"
    }
  ]
}
```

## Financial Transactions / Transações Financeiras

### Get Professional Transactions / Obter Transações do Profissional
**GET** `/api/financial/professional/:id`

**Query Parameters:**
- `startDate`: "YYYY-MM-DD"
- `endDate`: "YYYY-MM-DD"
- `type`: "earning" | "withdrawal" | "advance"

**Response:**
```json
{
  "transactions": [
    {
      "id": "uuid",
      "type": "earning" | "withdrawal" | "advance",
      "amount": "number",
      "description": "string",
      "appointmentId": "uuid",
      "transactionDate": "date",
      "createdAt": "datetime"
    }
  ],
  "summary": {
    "totalEarnings": "number",
    "totalWithdrawals": "number",
    "balance": "number"
  }
}
```

### Create Transaction / Criar Transação
**POST** `/api/financial/transactions`

**Request Body:**
```json
{
  "professionalId": "uuid",
  "type": "earning" | "withdrawal" | "advance",
  "amount": "number",
  "description": "string",
  "appointmentId": "uuid",
  "transactionDate": "date"
}
```

## Admin Endpoints / Endpoints Administrativos

### Get Dashboard Statistics / Obter Estatísticas do Dashboard
**GET** `/api/admin/dashboard/stats`

**Response:**
```json
{
  "todayAppointments": "number",
  "todayRevenue": "number",
  "activeClients": "number",
  "occupancyRate": "number",
  "monthlyGrowth": "number"
}
```

### Get All Appointments (Admin) / Obter Todos os Agendamentos (Admin)
**GET** `/api/admin/appointments`

**Query Parameters:**
- `date`: "YYYY-MM-DD"
- `status`: "scheduled" | "completed" | "cancelled"
- `professionalId`: "uuid"

### Get Client History / Obter Histórico do Cliente
**GET** `/api/admin/clients/:id/history`

**Response:**
```json
{
  "client": {
    "id": "uuid",
    "name": "string",
    "email": "string",
    "phone": "string",
    "birthDate": "date"
  },
  "appointments": [
    {
      "id": "uuid",
      "service": "string",
      "professional": "string",
      "date": "date",
      "time": "time",
      "price": "number",
      "status": "string"
    }
  ],
  "totalSpent": "number",
  "totalVisits": "number",
  "favoriteService": "string",
  "favoriteProfessional": "string"
}
```

## Data Models / Modelos de Dados

### User / Usuário
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  birthDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

### Professional / Profissional
```typescript
interface Professional {
  id: string;
  name: string;
  email: string;
  phone?: string;
  specialty: string;
  isActive: boolean;
  createdAt: Date;
}
```

### Service / Serviço
```typescript
interface Service {
  id: string;
  name: string;
  description?: string;
  duration: number; // minutes
  price: number;
  isActive: boolean;
  createdAt: Date;
}
```

### Appointment / Agendamento
```typescript
interface Appointment {
  id: string;
  userId: string;
  professionalId: string;
  serviceId: string;
  appointmentDate: Date;
  appointmentTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
}
```

### Financial Transaction / Transação Financeira
```typescript
interface FinancialTransaction {
  id: string;
  professionalId: string;
  type: 'earning' | 'withdrawal' | 'advance';
  amount: number;
  description?: string;
  appointmentId?: string;
  transactionDate: Date;
  createdAt: Date;
}
```

## Error Responses / Respostas de Erro

### Standard Error Format / Formato Padrão de Erro
```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string",
    "details": "object"
  }
}
```

### Common Error Codes / Códigos de Erro Comuns
- `UNAUTHORIZED`: Authentication required / Autenticação necessária
- `FORBIDDEN`: Insufficient permissions / Permissões insuficientes
- `NOT_FOUND`: Resource not found / Recurso não encontrado
- `VALIDATION_ERROR`: Invalid input data / Dados de entrada inválidos
- `CONFLICT`: Resource already exists / Recurso já existe
- `INTERNAL_ERROR`: Server error / Erro do servidor

## Rate Limiting / Limitação de Taxa

All endpoints are rate-limited to prevent abuse:
- **General endpoints**: 100 requests per minute per IP
- **Authentication endpoints**: 5 requests per minute per IP

*Todos os endpoints têm limitação de taxa para prevenir abuso:*
- **Endpoints gerais**: 100 requisições por minuto por IP
- **Endpoints de autenticação**: 5 requisições por minuto por IP

## Webhooks

### Appointment Status Change / Mudança de Status do Agendamento
```json
{
  "event": "appointment.status_changed",
  "data": {
    "appointmentId": "uuid",
    "oldStatus": "string",
    "newStatus": "string",
    "timestamp": "datetime"
  }
}
```

### New Appointment Created / Novo Agendamento Criado
```json
{
  "event": "appointment.created",
  "data": {
    "appointmentId": "uuid",
    "userId": "uuid",
    "professionalId": "uuid",
    "serviceId": "uuid",
    "timestamp": "datetime"
  }
}
```