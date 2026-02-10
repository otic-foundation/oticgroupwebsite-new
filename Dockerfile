FROM node:23-alpine3.19
#WORKDIR /react-docker-example
COPY . .

RUN npm install
RUN npm run build
RUN  npm install -g serve
#CMD ["npm", "start"]
CMD ["serve", "-s","dist"]