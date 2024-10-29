FROM node:16 as dependencies

WORKDIR /app

COPY package.json ./

# Install dependencies, utilizing cache
RUN npm install

# Stage 2 - Build application
FROM dependencies as builder

COPY . .

RUN npm run build

# Stage 3 - Running image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the builder stage
COPY --from=builder /app/public .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]