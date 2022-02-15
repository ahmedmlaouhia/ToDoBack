FROM node:16

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 6969

CMD [ "npm", "start" ]