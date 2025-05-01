COMPOSE_FILE_PATH = ./docker-compose.yml
PROJECT_NAME = transcendence

all: up
tailwind-build:
	@echo "📦 Checking Tailwind CLI..."
	@if [ ! -f tailwindcss ]; then \
		echo "Downloading Tailwind CSS CLI..."; \
		curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64 && \
		chmod +x tailwindcss-linux-x64 && \
		mv tailwindcss-linux-x64 tailwindcss; \
	fi

	@echo "⚙️  Checking tailwind.config.js..."
	@if [ ! -f tailwind.config.js ]; then \
		echo "Creating tailwind.config.js..."; \
		echo 'module.exports = {' > tailwind.config.js; \
		echo '  content: ["./**/*.html", "./**/*.js"],' >> tailwind.config.js; \
		echo '  theme: {' >> tailwind.config.js; \
		echo '    extend: {' >> tailwind.config.js; \
		echo '      spacing: {' >> tailwind.config.js; \
		echo '        glass: "32px",' >> tailwind.config.js; \
		echo '      },' >> tailwind.config.js; \
		echo '    },' >> tailwind.config.js; \
		echo '  },' >> tailwind.config.js; \
		echo '  plugins: [],' >> tailwind.config.js; \
		echo '};' >> tailwind.config.js; \
	fi

	@echo "📄 Checking tailwind.css input..."
	@mkdir -p frontend/static/css
	@if [ ! -f frontend/static/css/tailwind.css ]; then \
		echo "Creating default frontend/static/css/tailwind.css"; \
		echo '@tailwind base;' > frontend/static/css/tailwind.css; \
		echo '@tailwind components;' >> frontend/static/css/tailwind.css; \
		echo '@tailwind utilities;' >> frontend/static/css/tailwind.css; \
	fi

	@echo "🚀 Building Tailwind CSS..."
	./tailwindcss -i frontend/static/css/tailwind.css -o frontend/static/css/main-tailwind.css

build:
	@if [ ! -f package.json ]; then npm init -y; fi
	npm install
	npm install bootstrap
	npx sass --load-path=frontend/node_modules frontend/static/css/main.scss frontend/static/css/main.css
	npx tsc

# Default target


# Build the docker images and the containers and start them
up:
	@docker compose -f ${COMPOSE_FILE_PATH} -p ${PROJECT_NAME} up -d --build

# Stop the containers and remove them
down:
	@docker compose -f ${COMPOSE_FILE_PATH} -p ${PROJECT_NAME} down --remove-orphans

# Clean all Docker resources and the data folder
clean: down hard_clean
	docker network prune -f
	docker system prune -f -a
	docker volume prune -f
	rm -rf data

re: clean all

re_soft: down all 

# Clean all Docker resources
# WARNING: This will remove all containers, images, volumes and networks from your system
hard_clean:
	@echo "Cleaning up Docker resources..."
	@echo "Stopping containers..."
	@docker stop $$(docker ps -qa) 2>/dev/null || true
	@echo "Removing containers..."
	@docker rm $$(docker ps -qa) 2>/dev/null || true
	@echo "Removing images..."
	@docker rmi -f $$(docker images -qa) 2>/dev/null || true
	@echo "Removing volumes..."
	@docker volume rm $$(docker volume ls -q) 2>/dev/null || true
	@echo "Removing networks..."
	@docker network rm $$(docker network ls -q) 2>/dev/null || true
	@echo "\033[32mAll Docker resources have been cleaned.\033[0m"


.PHONY: all up down clean re re_soft hard_clean
