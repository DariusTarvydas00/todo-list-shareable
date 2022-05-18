FROM node:latest
WORKDIR /app/nestjs-back-end
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]