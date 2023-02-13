# dockerfile

FROM node:16-alpine3.15

WORKDIR /home/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

ENTRYPOINT ["npm", "run"]

CMD ["serve"]
