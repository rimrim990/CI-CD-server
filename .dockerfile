FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . ./
EXPOSE 3001
ENTRYPOINT ["npm", "run", "start"]

