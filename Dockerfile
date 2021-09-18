FROM node:14.16.0

COPY ./ /home/default/app
RUN npm install

WORKDIR /home/default/app

ENTRYPOINT ["npm start"]
