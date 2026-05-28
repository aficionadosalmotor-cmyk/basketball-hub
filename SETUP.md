# Basketball Hub - Guía de Instalación

## 📋 Requisitos

- Node.js 18+
- MongoDB 5+
- npm o yarn
- Docker (opcional para desarrollo)

## 🚀 Instalación Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/aficionadosalmotor-cmyk/basketball-hub.git
cd basketball-hub
```

### 2. Backend Setup

```bash
cd backend

# Copiar variables de entorno
cp .env.example .env

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El backend estará disponible en `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Copiar variables de entorno
cp .env.example .env

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## 🐳 Con Docker Compose

```bash
# Desde la raíz del proyecto
docker-compose up -d

# Para detener
docker-compose down

# Para ver logs
docker-compose logs -f
```

## 🏗️ Estructura del Proyecto

### Backend (`/backend`)
- `src/models/` - Modelos MongoDB (User, Team, League, News, Podcast, etc.)
- `src/routes/` - Rutas de la API
- `src/controllers/` - Lógica de controladores (próximo paso)
- `src/middleware/` - Middleware (autenticación, validación)
- `src/services/` - Servicios para APIs externas y lógica de negocio

### Frontend (`/frontend`)
- `src/pages/` - Páginas de la aplicación
- `src/components/` - Componentes React
- `src/services/` - Servicios API
- `src/stores/` - State management (Zustand)
- `src/contexts/` - React Contexts (Socket.io, etc.)
- `src/hooks/` - Custom hooks

## 📚 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Obtener usuario actual

### Noticias
- `GET /api/news` - Obtener todas las noticias
- `GET /api/news/:id` - Obtener noticia por ID
- `GET /api/news/league/:leagueId` - Noticias por liga
- `POST /api/news` - Crear noticia

### Ligas
- `GET /api/leagues` - Obtener todas las ligas
- `GET /api/leagues/:id` - Obtener liga por ID
- `GET /api/leagues/:id/standings` - Standings de la liga

### Equipos
- `GET /api/teams` - Obtener todos los equipos
- `GET /api/teams/:id` - Obtener equipo por ID
- `GET /api/teams/league/:leagueId` - Equipos por liga

### Podcasts
- `GET /api/podcasts` - Obtener todos los podcasts
- `GET /api/podcasts/:id` - Obtener podcast por ID
- `POST /api/podcasts` - Crear podcast
- `GET /api/podcasts/league/:leagueId` - Podcasts por liga

### Transmisiones en Vivo
- `GET /api/live` - Obtener todos los partidos en vivo
- `GET /api/live/:id` - Obtener partido por ID
- `GET /api/live/league/:leagueId` - Partidos en vivo por liga

### Comunidad
- `GET /api/community` - Obtener posts de comunidad
- `GET /api/community/:id` - Obtener post por ID
- `POST /api/community` - Crear post
- `POST /api/community/:id/comments` - Agregar comentario
- `POST /api/community/:id/like` - Like a post

### Usuarios
- `GET /api/users/:id` - Obtener usuario
- `PUT /api/users/:id` - Actualizar usuario
- `POST /api/users/:id/favorite-team` - Agregar equipo favorito
- `POST /api/users/:id/favorite-league` - Agregar liga favorita

## 🔄 Socket.io Events

### Comunidad
- `message` - Enviar/recibir mensajes

### Transmisiones en Vivo
- `join-live` - Unirse a transmisión
- `live-update` - Actualizaciones en vivo

## 📝 Variables de Entorno

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://root:password@localhost:27017/basketball-hub?authSource=admin
JWT_SECRET=your-secret-key
THESPORTSDB_API_KEY=your-api-key
ESPN_API_KEY=your-api-key
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

## 🚧 Próximos Pasos

1. ✅ Estructura base del proyecto
2. ⏳ Implementar controladores (Backend)
3. ⏳ Autenticación JWT completa
4. ⏳ Páginas completas (Frontend)
5. ⏳ Integración de APIs externas (TheSportsDB, ESPN)
6. ⏳ Chat en tiempo real con Socket.io
7. ⏳ Sistema de notificaciones
8. ⏳ Mobile app con React Native
9. ⏳ Deploy a producción

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT

---

**¿Preguntas? Abre un issue en GitHub**
