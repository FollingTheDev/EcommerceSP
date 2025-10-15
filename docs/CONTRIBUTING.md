# Contributing Guide / Guia de Contribuição

Thank you for your interest in contributing to the Sandro Salon booking system! This guide will help you get started.

*Obrigado pelo seu interesse em contribuir para o sistema de agendamento do Sandro Cabeleireiros! Este guia irá ajudá-lo a começar.*

## Table of Contents / Índice

- [Code of Conduct / Código de Conduta](#code-of-conduct--código-de-conduta)
- [Getting Started / Começando](#getting-started--começando)
- [Development Workflow / Fluxo de Desenvolvimento](#development-workflow--fluxo-de-desenvolvimento)
- [Coding Standards / Padrões de Código](#coding-standards--padrões-de-código)
- [Testing / Testes](#testing--testes)
- [Documentation / Documentação](#documentation--documentação)
- [Pull Request Process / Processo de Pull Request](#pull-request-process--processo-de-pull-request)
- [Issue Reporting / Relatório de Issues](#issue-reporting--relatório-de-issues)

## Code of Conduct / Código de Conduta

### Our Pledge / Nosso Compromisso

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background, experience level, or identity.

*Estamos comprometidos em fornecer um ambiente acolhedor e inclusivo para todos os contribuidores, independentemente de formação, nível de experiência ou identidade.*

### Expected Behavior / Comportamento Esperado

- Be respectful and considerate / Seja respeitoso e atencioso
- Use inclusive language / Use linguagem inclusiva
- Accept constructive criticism gracefully / Aceite críticas construtivas com elegância
- Focus on what's best for the community / Foque no que é melhor para a comunidade
- Help others learn and grow / Ajude outros a aprender e crescer

### Unacceptable Behavior / Comportamento Inaceitável

- Harassment or discrimination / Assédio ou discriminação
- Trolling or inflammatory comments / Trolling ou comentários inflamatórios
- Personal attacks / Ataques pessoais
- Publishing private information / Publicar informações privadas
- Any conduct that could be considered inappropriate / Qualquer conduta que possa ser considerada inadequada

## Getting Started / Começando

### Prerequisites / Pré-requisitos

Before contributing, make sure you have:
*Antes de contribuir, certifique-se de ter:*

- Node.js 18+ installed / Node.js 18+ instalado
- Git configured with your name and email / Git configurado com seu nome e email
- A GitHub account / Uma conta no GitHub
- Basic knowledge of React, Next.js, and TypeScript / Conhecimento básico de React, Next.js e TypeScript

### Setting Up Development Environment / Configurando Ambiente de Desenvolvimento

1. **Fork the repository / Faça fork do repositório**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   # Clique em "Fork" no GitHub, depois clone seu fork
   git clone https://github.com/YOUR_USERNAME/sandro-salon.git
   cd sandro-salon
   ```

2. **Add upstream remote / Adicione o remote upstream**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/sandro-salon.git
   ```

3. **Install dependencies / Instale as dependências**
   ```bash
   pnpm install
   ```

4. **Set up environment / Configure o ambiente**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   # Edite .env.local com sua configuração
   ```

5. **Start development server / Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

## Development Workflow / Fluxo de Desenvolvimento

### Branch Naming Convention / Convenção de Nomenclatura de Branches

Use descriptive branch names with prefixes:
*Use nomes de branch descritivos com prefixos:*

- `feature/` - New features / Novas funcionalidades
- `fix/` - Bug fixes / Correções de bugs
- `docs/` - Documentation updates / Atualizações de documentação
- `refactor/` - Code refactoring / Refatoração de código
- `test/` - Test additions or updates / Adições ou atualizações de testes

**Examples / Exemplos:**
```bash
feature/appointment-reminders
fix/booking-validation-error
docs/api-documentation-update
refactor/user-authentication
test/appointment-booking-flow
```

### Commit Message Convention / Convenção de Mensagens de Commit

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
*Siga a especificação [Conventional Commits](https://www.conventionalcommits.org/):*

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types / Tipos:**
- `feat`: New feature / Nova funcionalidade
- `fix`: Bug fix / Correção de bug
- `docs`: Documentation / Documentação
- `style`: Formatting changes / Mudanças de formatação
- `refactor`: Code refactoring / Refatoração de código
- `test`: Adding tests / Adicionando testes
- `chore`: Maintenance tasks / Tarefas de manutenção

**Examples / Exemplos:**
```bash
feat(booking): add appointment reminder notifications
fix(auth): resolve login validation issue
docs: update API documentation for appointments
style(ui): improve button component styling
refactor(database): optimize appointment queries
test(booking): add unit tests for booking flow
chore(deps): update dependencies to latest versions
```

### Development Process / Processo de Desenvolvimento

1. **Create a new branch / Crie uma nova branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes / Faça suas alterações**
   - Write clean, readable code / Escreva código limpo e legível
   - Follow the coding standards / Siga os padrões de código
   - Add tests for new functionality / Adicione testes para novas funcionalidades
   - Update documentation as needed / Atualize a documentação conforme necessário

3. **Test your changes / Teste suas alterações**
   ```bash
   # Run tests / Execute os testes
   pnpm test

   # Run linting / Execute o linting
   pnpm lint

   # Check types / Verifique os tipos
   pnpm type-check

   # Test the application / Teste a aplicação
   pnpm dev
   ```

4. **Commit your changes / Faça commit das suas alterações**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Keep your branch updated / Mantenha sua branch atualizada**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push your branch / Faça push da sua branch**
   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Standards / Padrões de Código

### TypeScript Guidelines / Diretrizes do TypeScript

1. **Use proper typing / Use tipagem adequada**
   ```typescript
   // Good / Bom
   interface User {
     id: string;
     name: string;
     email: string;
   }

   function createUser(userData: Omit<User, 'id'>): User {
     return {
       id: generateId(),
       ...userData,
     };
   }

   // Avoid / Evite
   function createUser(userData: any): any {
     // ...
   }
   ```

2. **Use meaningful names / Use nomes significativos**
   ```typescript
   // Good / Bom
   const appointmentsByDate = groupAppointmentsByDate(appointments);
   const isAppointmentAvailable = checkAvailability(date, time);

   // Avoid / Evite
   const data = group(apps);
   const check = avail(d, t);
   ```

3. **Prefer const assertions / Prefira const assertions**
   ```typescript
   // Good / Bom
   const statuses = ['scheduled', 'completed', 'cancelled'] as const;
   type Status = typeof statuses[number];

   // Avoid / Evite
   const statuses = ['scheduled', 'completed', 'cancelled'];
   ```

### React Component Guidelines / Diretrizes de Componentes React

1. **Use functional components with hooks / Use componentes funcionais com hooks**
   ```tsx
   // Good / Bom
   function AppointmentCard({ appointment }: { appointment: Appointment }) {
     const [isLoading, setIsLoading] = useState(false);
     
     const handleCancel = useCallback(async () => {
       setIsLoading(true);
       try {
         await cancelAppointment(appointment.id);
       } finally {
         setIsLoading(false);
       }
     }, [appointment.id]);

     return (
       <Card>
         {/* Component content */}
       </Card>
     );
   }
   ```

2. **Proper prop typing / Tipagem adequada de props**
   ```tsx
   interface AppointmentCardProps {
     appointment: Appointment;
     onCancel?: (id: string) => void;
     className?: string;
   }

   function AppointmentCard({ 
     appointment, 
     onCancel, 
     className 
   }: AppointmentCardProps) {
     // Component implementation
   }
   ```

3. **Use custom hooks for logic / Use hooks customizados para lógica**
   ```tsx
   // hooks/useAppointments.ts
   function useAppointments(userId: string) {
     const [appointments, setAppointments] = useState<Appointment[]>([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       fetchAppointments(userId).then(setAppointments).finally(() => setLoading(false));
     }, [userId]);

     return { appointments, loading };
   }
   ```

### CSS and Styling Guidelines / Diretrizes de CSS e Estilização

1. **Use Tailwind CSS classes / Use classes do Tailwind CSS**
   ```tsx
   // Good / Bom
   <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
     <h3 className="text-lg font-semibold text-gray-900">Title</h3>
     <Button variant="outline" size="sm">Action</Button>
   </div>
   ```

2. **Use CSS variables for custom properties / Use variáveis CSS para propriedades customizadas**
   ```css
   :root {
     --color-primary: #3b82f6;
     --color-primary-hover: #2563eb;
     --spacing-card: 1rem;
   }
   ```

3. **Follow responsive design patterns / Siga padrões de design responsivo**
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {/* Responsive grid */}
   </div>
   ```

## Testing / Testes

### Testing Strategy / Estratégia de Testes

1. **Unit Tests / Testes Unitários**
   - Test individual functions and components / Teste funções e componentes individuais
   - Use Jest and React Testing Library / Use Jest e React Testing Library
   - Aim for 80%+ code coverage / Almeje 80%+ de cobertura de código

2. **Integration Tests / Testes de Integração**
   - Test component interactions / Teste interações entre componentes
   - Test API endpoints / Teste endpoints da API
   - Test user workflows / Teste fluxos de usuário

3. **E2E Tests / Testes E2E**
   - Test critical user journeys / Teste jornadas críticas do usuário
   - Use Playwright or Cypress / Use Playwright ou Cypress

### Writing Tests / Escrevendo Testes

1. **Component Tests / Testes de Componentes**
   ```tsx
   // __tests__/AppointmentCard.test.tsx
   import { render, screen, fireEvent } from '@testing-library/react';
   import { AppointmentCard } from '../AppointmentCard';

   describe('AppointmentCard', () => {
     const mockAppointment = {
       id: '1',
       service: 'Corte Masculino',
       professional: 'Sandro Silva',
       date: '2024-02-15',
       time: '14:00',
       status: 'scheduled',
     };

     it('renders appointment information', () => {
       render(<AppointmentCard appointment={mockAppointment} />);
       
       expect(screen.getByText('Corte Masculino')).toBeInTheDocument();
       expect(screen.getByText('Sandro Silva')).toBeInTheDocument();
     });

     it('calls onCancel when cancel button is clicked', () => {
       const onCancel = jest.fn();
       render(<AppointmentCard appointment={mockAppointment} onCancel={onCancel} />);
       
       fireEvent.click(screen.getByText('Cancelar'));
       expect(onCancel).toHaveBeenCalledWith('1');
     });
   });
   ```

2. **API Tests / Testes de API**
   ```typescript
   // __tests__/api/appointments.test.ts
   import { createMocks } from 'node-mocks-http';
   import handler from '../../pages/api/appointments';

   describe('/api/appointments', () => {
     it('creates a new appointment', async () => {
       const { req, res } = createMocks({
         method: 'POST',
         body: {
           serviceId: '1',
           professionalId: '1',
           date: '2024-02-15',
           time: '14:00',
         },
       });

       await handler(req, res);

       expect(res._getStatusCode()).toBe(201);
       expect(JSON.parse(res._getData())).toMatchObject({
         success: true,
         appointment: expect.any(Object),
       });
     });
   });
   ```

### Running Tests / Executando Testes

```bash
# Run all tests / Execute todos os testes
pnpm test

# Run tests in watch mode / Execute testes em modo watch
pnpm test:watch

# Run tests with coverage / Execute testes com cobertura
pnpm test:coverage

# Run E2E tests / Execute testes E2E
pnpm test:e2e
```

## Documentation / Documentação

### Code Documentation / Documentação de Código

1. **JSDoc comments for functions / Comentários JSDoc para funções**
   ```typescript
   /**
    * Creates a new appointment for a user
    * Cria um novo agendamento para um usuário
    * 
    * @param userId - The ID of the user / O ID do usuário
    * @param appointmentData - The appointment details / Os detalhes do agendamento
    * @returns Promise resolving to the created appointment / Promise que resolve para o agendamento criado
    * @throws {ValidationError} When appointment data is invalid / Quando os dados do agendamento são inválidos
    */
   async function createAppointment(
     userId: string, 
     appointmentData: CreateAppointmentData
   ): Promise<Appointment> {
     // Implementation
   }
   ```

2. **Component documentation / Documentação de componentes**
   ```tsx
   /**
    * AppointmentCard - Displays appointment information with actions
    * AppointmentCard - Exibe informações do agendamento com ações
    * 
    * @example
    * <AppointmentCard 
    *   appointment={appointment} 
    *   onCancel={handleCancel}
    *   onEdit={handleEdit}
    * />
    */
   interface AppointmentCardProps {
     /** The appointment to display / O agendamento a ser exibido */
     appointment: Appointment;
     /** Callback when appointment is cancelled / Callback quando agendamento é cancelado */
     onCancel?: (id: string) => void;
     /** Callback when appointment is edited / Callback quando agendamento é editado */
     onEdit?: (id: string) => void;
   }
   ```

### README Updates / Atualizações do README

When adding new features, update the relevant documentation:
*Ao adicionar novas funcionalidades, atualize a documentação relevante:*

- Update feature lists / Atualize listas de funcionalidades
- Add new setup instructions if needed / Adicione novas instruções de configuração se necessário
- Update API documentation / Atualize documentação da API
- Add examples and usage instructions / Adicione exemplos e instruções de uso

## Pull Request Process / Processo de Pull Request

### Before Submitting / Antes de Submeter

1. **Ensure your code passes all checks / Certifique-se de que seu código passa em todas as verificações**
   ```bash
   pnpm lint
   pnpm type-check
   pnpm test
   pnpm build
   ```

2. **Update documentation / Atualize a documentação**
   - Update README if needed / Atualize o README se necessário
   - Add or update JSDoc comments / Adicione ou atualize comentários JSDoc
   - Update API documentation / Atualize documentação da API

3. **Write a clear PR description / Escreva uma descrição clara do PR**

### PR Template / Template de PR

```markdown
## Description / Descrição
Brief description of changes made.
Breve descrição das mudanças feitas.

## Type of Change / Tipo de Mudança
- [ ] Bug fix / Correção de bug
- [ ] New feature / Nova funcionalidade
- [ ] Breaking change / Mudança que quebra compatibilidade
- [ ] Documentation update / Atualização de documentação

## Testing / Testes
- [ ] Unit tests pass / Testes unitários passam
- [ ] Integration tests pass / Testes de integração passam
- [ ] Manual testing completed / Testes manuais completados

## Screenshots / Capturas de Tela
If applicable, add screenshots to help explain your changes.
Se aplicável, adicione capturas de tela para ajudar a explicar suas mudanças.

## Checklist / Lista de Verificação
- [ ] Code follows style guidelines / Código segue diretrizes de estilo
- [ ] Self-review completed / Auto-revisão completada
- [ ] Documentation updated / Documentação atualizada
- [ ] Tests added/updated / Testes adicionados/atualizados
```

### Review Process / Processo de Revisão

1. **Automated checks / Verificações automáticas**
   - All CI/CD checks must pass / Todas as verificações CI/CD devem passar
   - Code coverage must not decrease / Cobertura de código não deve diminuir

2. **Code review / Revisão de código**
   - At least one approval required / Pelo menos uma aprovação necessária
   - Address all review comments / Responda a todos os comentários de revisão

3. **Merge requirements / Requisitos de merge**
   - Up to date with main branch / Atualizado com a branch main
   - All conversations resolved / Todas as conversas resolvidas
   - Squash and merge preferred / Squash and merge preferido

## Issue Reporting / Relatório de Issues

### Bug Reports / Relatórios de Bug

When reporting bugs, include:
*Ao reportar bugs, inclua:*

1. **Clear title / Título claro**
2. **Steps to reproduce / Passos para reproduzir**
3. **Expected behavior / Comportamento esperado**
4. **Actual behavior / Comportamento atual**
5. **Environment details / Detalhes do ambiente**
6. **Screenshots/videos if applicable / Screenshots/vídeos se aplicável**

### Feature Requests / Solicitações de Funcionalidades

When requesting features, include:
*Ao solicitar funcionalidades, inclua:*

1. **Clear description / Descrição clara**
2. **Use case / Caso de uso**
3. **Proposed solution / Solução proposta**
4. **Alternative solutions / Soluções alternativas**
5. **Additional context / Contexto adicional**

## Community / Comunidade

### Getting Help / Obtendo Ajuda

- **Discord**: Join our community server / Junte-se ao nosso servidor da comunidade
- **GitHub Discussions**: For questions and ideas / Para perguntas e ideias
- **Email**: contato@sandrocabeleireiros.com
- **Documentation**: Check existing docs first / Verifique a documentação existente primeiro

### Recognition / Reconhecimento

Contributors will be recognized in:
*Contribuidores serão reconhecidos em:*

- README contributors section / Seção de contribuidores do README
- Release notes / Notas de lançamento
- Community highlights / Destaques da comunidade

## Resources / Recursos

### Learning Materials / Materiais de Aprendizado

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library Documentation](https://testing-library.com/docs/)

### Tools / Ferramentas

- [VS Code Extensions](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

**Thank you for contributing! / Obrigado por contribuir!**

Your contributions help make this project better for everyone.
*Suas contribuições ajudam a tornar este projeto melhor para todos.*