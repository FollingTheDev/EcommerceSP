# Sandro Salon - Online Booking System 💇‍♂️

A comprehensive salon management system built with Next.js, featuring online appointment booking, client management, and administrative dashboard.

## 🌟 Features

### For Clients
- **Online Booking**: 24/7 appointment scheduling
- **Service Selection**: Browse and select from various beauty services
- **Professional Choice**: Choose your preferred stylist
- **Client Dashboard**: View appointment history and manage bookings
- **Mobile Responsive**: Optimized for mobile devices

### For Administrators
- **Dashboard Overview**: Real-time statistics and metrics
- **Appointment Management**: Edit, cancel, and track appointments
- **Financial Control**: Track earnings, withdrawals, and advances per professional
- **Client Management**: View client history and preferences
- **Professional Management**: Manage staff schedules and performance
- **Reports**: Generate detailed business reports

### Technical Features
- **PWA Support**: Install as a mobile app
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Type Safety**: Full TypeScript implementation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sandro-salon
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── booking/           # Appointment booking page
│   ├── dashboard/         # User dashboards
│   │   ├── admin/         # Admin dashboard
│   │   └── client/        # Client dashboard
│   ├── login/             # Authentication
│   ├── register/          # User registration
│   └── services/          # Services catalog
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── scripts/              # Database scripts
└── public/               # Static assets
```

## 🎯 Usage

### Demo Credentials

**Client Access:**
- Email: `qualquer@email.com`
- Password: `qualquer`

**Admin Access:**
- Email: `admin@sandrocabeleireiros.com`
- Password: `qualquer`

### Services Available
- **Masculine Cut** - R$ 25.00 (30min)
- **Feminine Cut** - R$ 35.00 (45min)
- **Hair Coloring** - R$ 80.00 (2h)
- **Beard Trim** - R$ 15.00 (20min)
- **Eyebrow Design** - R$ 12.00 (15min)
- And more...

### Professionals
- **Sandro Silva** - Masculine cuts and beard
- **Maria Santos** - Feminine cuts and coloring
- **João Oliveira** - Masculine cuts
- **Ana Costa** - Coloring and highlights

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Date Handling**: date-fns
- **Charts**: Recharts
- **PDF Generation**: jsPDF

## 📱 Mobile Features

The application is fully responsive and includes:
- Mobile-optimized navigation
- Touch-friendly interface
- PWA capabilities for app-like experience
- Optimized forms for mobile input

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Database Setup

The project includes SQL scripts for database initialization:

```bash
# Run database scripts (if using PostgreSQL)
psql -d your_database -f scripts/01-create-tables.sql
psql -d your_database -f scripts/02-seed-data.sql
```

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Components use CSS variables for easy theming

### Configuration
- Update `next.config.mjs` for Next.js settings
- Modify `components.json` for shadcn/ui configuration

## 📊 Features in Detail

### Appointment Booking Flow
1. Service selection with pricing and duration
2. Professional selection based on specialties
3. Date and time selection with availability
4. Booking confirmation and summary

### Admin Dashboard
- **Statistics**: Daily appointments, revenue, active clients
- **Management**: Full CRUD operations for appointments
- **Financial Tracking**: Professional earnings and expenses
- **Reporting**: Business analytics and insights

### Client Dashboard
- Personal appointment history
- Upcoming appointments
- Profile management
- Booking statistics

## 🚀 Deployment

### Netlify (Recommended)
The project includes `netlify.toml` configuration:

```bash
# Build and deploy
pnpm build
# Deploy to Netlify
```

### Other Platforms
- **Vercel**: Native Next.js support
- **Railway**: Full-stack deployment
- **Heroku**: Container deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: contato@sandrocabeleireiros.com
- Phone: (11) 99999-0000

## 🎯 Roadmap

- [ ] WhatsApp integration for notifications
- [ ] Real email system (SendGrid/Mailgun)
- [ ] Online payments (Stripe/PagSeguro)
- [ ] Advanced reporting with charts
- [ ] Push notifications for reminders
- [ ] Multi-language support
- [ ] API documentation

---

**Built with ❤️ for salon professionals**