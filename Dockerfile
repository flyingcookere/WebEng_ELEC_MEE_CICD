# --- STAGE 1: Build Environment ---
# Use Node 20 on Alpine Linux for a lightweight build image
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first to optimize Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy all source files into the container
COPY . .

# Execute the build script (runs type-check and vite build)
RUN npm run build

# --- STAGE 2: Production Server ---
# Use Nginx to serve the static production files
FROM nginx:stable-alpine

# Copy the compiled 'dist' folder from the build stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Configure Nginx to support React Router (Single Page Application)
# This prevents 404 errors when refreshing on sub-pages
RUN echo "server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# Open port 80 for web traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]