FROM node:latest As development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
EXPOSE 3264
RUN npm run build
CMD ["node", "dist/index"]

#FROM node:latest As production
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install --only=production
#COPY . .
#COPY --from=development /usr/src/app/dist ./dist
#CMD ["node", "dist/main"]