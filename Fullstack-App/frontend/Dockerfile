FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Serve via NGINX
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
