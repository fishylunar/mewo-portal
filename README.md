# 🚀 Mewo Portal

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Status](https://img.shields.io/badge/Status-Production-green)

A sleek, modern application dashboard with SSO integration, built with React and Tailwind CSS.

[Features](#features) •
[Tech Stack](#tech-stack) •
[Getting Started](#getting-started) •
[Development](#development) •
[Deployment](#deployment) •
[Contributing](#contributing)

<img src="https://internal.mewo.gay/mewo-portal/mewo-portal-screenshot.jpeg" alt="Dashboard Screenshot" />

</div>

## ✨ Features

- 🔐 Single Sign-On with Keycloak integration
- 🎨 Modern, responsive UI with dark mode
- 🚀 Fast and lightweight
- 🛡️ Role-based access control
- 📱 Mobile-friendly design
- 🔄 Auto-refreshing authentication
- 🎯 Featured applications section
- 🔍 Application filtering based on user roles

## 🛠️ Tech Stack

<div align="center">

[![Tech Stack](https://skillicons.dev/icons?i=react,ts,tailwind,vite,docker,nodejs)](https://skillicons.dev)

| Technology | Version | Description |
|------------|---------|-------------|
| [React](https://reactjs.org/) | 18.x | Frontend Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type Safety |
| [Vite](https://vitejs.dev/) | 5.x | Build Tool |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | UI Components |
| [Keycloak](https://www.keycloak.org/) | 22.x | Authentication |
| [Docker](https://www.docker.com/) | Latest | Containerization |
| [Node.js](https://nodejs.org/) | 20.x | Runtime |
| [Lucide Icons](https://lucide.dev/) | Latest | Icons |

</div>

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- Docker and Docker Compose
- A running Keycloak instance

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/fishylunar/mewo-portal.git
cd mewo-portal
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
VITE_KEYCLOAK_URL=https://auth.yourdomain.com
VITE_KEYCLOAK_REALM=your-realm
VITE_KEYCLOAK_CLIENT_ID=your-client-id
VITE_BASE_HOST=yourdomain.com
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Development

### Project Structure

```
src/
├── components/          # React components
├── hooks/               # Custom React hooks
├── types/               # TypeScript types
├── data/                # Static data
└── lib/                 # Utils + 3P library configs
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
nom run preview      # Preview production build
npm run deploy       # Deploy via Docker Compose
```
To use the deploy script you need a docker-compose.yml file!
## 🐳 Deployment

### Using Docker

```bash
# Build the image
docker build -t mewo-portal .

# Run the container
docker run -p 8082:80 mewo-portal
```

### Docker Compose
Notice we are using Traefik for this compose file, see the example under for deploying without Traefik.

```yaml
services:
  mewo-portal:
    container_name: mewo-portal
    restart: unless-stopped
    build: .
    ports:
      - "8082:8082"
    networks:
      - traefik
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.homepage.rule=Host(`yourdomain.com`)"
      - "traefik.http.routers.homepage.entrypoints=websecure"
      - "traefik.http.routers.homepage.tls=true"
      - "traefik.http.services.homepage.loadbalancer.server.port=8082"

networks:
  traefik:
    name: traefik
    external: true
```
Without Traefik
```yaml
services:
  mewo-portal:
    container_name: mewo-portal
    restart: unless-stopped
    build: .
    ports:
      - "8082:8082"
```

## 🔒 Security Features

- Automatic token refresh
- Role-based access control
- Secure session management
- SSO integration
- Protected routes
- XSS prevention

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Keycloak](https://www.keycloak.org/) for the authentication system
- [Lucide](https://lucide.dev/) for the icons

---

<div align="center">
Made with ❤️ by fishylunar

[⬆ Back to top](#-mewo-dashboard)
</div>