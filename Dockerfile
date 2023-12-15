FROM node:21.3.0
WORKDIR /app
COPY . /app
LABEL authors="Gabriele Grandinetti"
RUN npm install
ENV NAME express-app
EXPOSE 3030
CMD ["npm", "start"]