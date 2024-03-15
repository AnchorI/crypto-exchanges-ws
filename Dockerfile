FROM node:20

WORKDIR /app

EXPOSE 7778
EXPOSE 7779

COPY . .

RUN yarn install

CMD ["yarn", "start"]
