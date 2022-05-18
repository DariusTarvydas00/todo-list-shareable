FROM node:latest
WORKDIR /app/front-end
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "serve" ]