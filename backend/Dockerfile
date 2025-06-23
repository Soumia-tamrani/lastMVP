FROM node:24-alpine3.21

WORKDIR /app

RUN apk add --no-cache \
    postgresql-client \
    curl \
    wget \
    netcat-openbsd \ 
    bash

COPY app/package*.json ./

RUN npm install

COPY app/. .

COPY scripts/entrypoint.sh /entrypoint.sh 

RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]