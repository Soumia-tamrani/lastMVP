# CatchHub Backend

## Architecture

```
├── backend/                 # Back-end app
│   ├── app/                # Source code
│   ├── Dockerfile          # Backend container definition
│   └── scripts/            # entrypoint script
├── infrastructure/         # Infrastructure configuration
│   ├── docker-compose.yml  # Service orchestration
│   └── database/           # PostgreSQL container setup 
└── Makefile               # Development automation
```

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Make (for automation commands)

### Environment Setup

1. Create environment file:

You have to be in the root dir of the project 

```bash
cp .env.example .env
```

2. Build and start all services:
```bash
make
```

### Available Make Commands

| Command | Description |
|---------|-------------|
| `make help` | Show all available commands |
| `make build` | Build all Docker images |
| `make up` | Start all services in detached mode |
| `make all` | Build and start all services |
| `make down` | Stop and remove all containers |
| `make clean` | Stop containers and remove containers, networks |
| `make fclean` | Complete cleanup: remove containers, networks, volumes, and images |
| `make restart` | Restart all services |
| `make logs` | Show logs from all services |
| `make logs-backend` | Show logs from backend service only |
| `make logs-db` | Show logs from database service only |
| `make logs-redis` | Show logs from redis service only |
| `make state` | Show status of all services |
| `make shell` | Access backend container shell |
| `make shell-db` | Access database container shell |
| `make dev` | Start development environment with live reload |

### Manual Docker Commands

If you prefer using Docker directly:

```bash
# Start development environment
docker-compose -f infrastructure/docker-compose.yml up --build

# View logs
docker-compose -f infrastructure/docker-compose.yml logs -f

# Stop services
docker-compose -f infrastructure/docker-compose.yml down
```
