FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3254
RUN npm run build
CMD ["node", "dist/main"]