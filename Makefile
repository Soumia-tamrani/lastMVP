# ============================================================================
# CatchHub Backend - Docker Management Makefile
# ============================================================================

# Variables
COMPOSE_FILE = infrastructure/docker-compose.yml
PROJECT_NAME = catchub
BACKEND_SERVICE = backend
DATABASE_SERVICE = database
REDIS_SERVICE = redis

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m

.PHONY: help build up all down clean fclean restart logs state


dev: build up ## Build and start all services
	@echo "$(GREEN)✓ All services built and started$(NC)"

build: ## Build all Docker images
	@echo "$(YELLOW)Building Docker images...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) build
	@echo "$(GREEN)✓ Build completed$(NC)"

up: ## Start all services in detached mode
	@echo "$(YELLOW)Starting services...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) up -d
	@echo "$(GREEN)✓ Services started$(NC)"


down: ## Stop and remove all containers
	@echo "$(YELLOW)Stopping services...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) down
	@echo "$(GREEN)✓ Services stopped$(NC)"

clean: down ## Stop containers and remove containers, networks
	@echo "$(YELLOW)Cleaning up containers and networks...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) down --remove-orphans
	@echo "$(GREEN)✓ Cleanup completed$(NC)"

fclean: ## Complete cleanup: remove containers, networks, volumes, and images
	@echo "$(YELLOW)Performing full cleanup...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) down --remove-orphans --volumes --rmi all
	@docker system prune -f
	@docker builder prune -f
	@rm -rf backend/app/node_modules
	@echo "$(GREEN)✓ Full cleanup completed$(NC)"

restart: ## Restart all services
	@echo "$(YELLOW)Restarting services...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) restart
	@echo "$(GREEN)✓ Services restarted$(NC)"

logs: ## Show logs from all services (follow mode)
	@echo "$(YELLOW)Showing logs (Ctrl+C to exit)...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) logs -f

logs-backend: ## Show logs from backend service only
	@echo "$(YELLOW)Showing backend logs (Ctrl+C to exit)...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) logs -f $(BACKEND_SERVICE)

logs-db: ## Show logs from database service only
	@echo "$(YELLOW)Showing database logs (Ctrl+C to exit)...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) logs -f $(DATABASE_SERVICE)

logs-redis: ## Show logs from redis service only
	@echo "$(YELLOW)Showing redis logs (Ctrl+C to exit)...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) logs -f $(REDIS_SERVICE)

state: ## Show status of all services
	@echo "$(YELLOW)Service Status:$(NC)"
	@docker-compose -f $(COMPOSE_FILE) ps
	@echo ""
	@echo "$(YELLOW)Docker Images:$(NC)"
	@docker images | grep $(PROJECT_NAME)
	@echo ""
	@echo "$(YELLOW)Docker Networks:$(NC)"
	@docker network ls | grep $(PROJECT_NAME)

shell: ## Access backend container shell
	@echo "$(YELLOW)Accessing backend container shell...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) exec $(BACKEND_SERVICE) /bin/bash

shell-db: ## Access database container shell
	@echo "$(YELLOW)Accessing database container shell...$(NC)"
	@docker-compose -f $(COMPOSE_FILE) exec $(DATABASE_SERVICE) /bin/bash

help: ## Show this help message
	@echo "$(GREEN)CatchHub Backend - Docker Management$(NC)"
	@echo ""
	@echo "$(YELLOW)Available commands:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(NC) %s\n", $$1, $$2}'
	@echo ""