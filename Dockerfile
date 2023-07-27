FROM node:slim AS builder

# Create app directory
WORKDIR /obs/src

# where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN npm install --save @nestjs/swagger
RUN npm install -g concurrently


# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD concurrently "npm run start:prod"