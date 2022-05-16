FROM node:latest As development
WORKDIR /usr/src/app/todo-list-shareable-backend
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:latest As production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app/todo-list-shareable-backend
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/todo-list-shareable-backend/dist ./dist
CMD ["node", "dist/main"]