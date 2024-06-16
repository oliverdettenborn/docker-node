FROM node:latest

WORKDIR /usr/src/app

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]