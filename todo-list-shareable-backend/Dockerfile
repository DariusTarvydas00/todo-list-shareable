FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3254
RUN npm run build
CMD ["node", "run", "serve"]