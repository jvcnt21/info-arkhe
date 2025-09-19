# Stage 1: Build - Onde o código React é transformado em arquivos estáticos
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package.json package-lock.json ./
RUN npm install

# Copia todo o resto do código da aplicação
COPY . .

# Roda o comando de build do Vite
RUN npm run build

# Stage 2: Production - Onde os arquivos estáticos são servidos
# Usamos uma imagem Nginx super leve
FROM nginx:1.23-alpine

# Copia os arquivos estáticos gerados no Stage 1 para a pasta do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Adiciona a nossa configuração customizada para React/SPA
COPY nginx.conf /etc/nginx/conf.d

# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]