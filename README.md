# 🏀 FullCourt - Basketball Hub

Una aplicación completa para amantes del baloncesto con noticias, equipos, podcasts, transmisiones en vivo y comunidad.

## ✨ Características

- 📰 **Noticias** - Noticias actualizadas de cada liga y competición
- 🏀 **Equipos** - Información detallada de equipos y jugadores
- 🎙️ **Podcasts** - Escucha podcasts sobre baloncesto
- 📡 **Transmisiones en Vivo** - Sigue los partidos en directo
- 👥 **Comunidad** - Chats, comentarios y foros con otros aficionados
- 🏆 **Estadísticas** - Standings, estadísticas de jugadores y equipos

## 🏗️ Arquitectura

### Stack Tecnológico

- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express + TypeScript
- **Base de datos**: MongoDB + Mongoose
- **Autenticación**: JWT
- **Real-time**: Socket.io
- **APIs**: TheSportsDB, ESPN

### Estructura del Proyecto

```
basketball-hub/
├── frontend/              # Aplicación React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── utils/
│   └── package.json
├── backend/               # API Node.js
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── config/
│   └── package.json
├── mobile/                # React Native (opcional)
└── docker-compose.yml
```

## 🚀 Instalación y Setup

### Requisitos
- Node.js 18+
- MongoDB
- npm o yarn

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 📝 Contribuir

¡Contribuciones son bienvenidas! Por favor:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

**Desarrollado con ❤️ por la comunidad de aficionados al baloncesto**
