FROM oven/bun:1

ENV DATABASE_URL=${DATABASE_URL}
ENV RABBITMQ_URL=${RABBITMQ_URL}

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/websocket ./apps/websocket

RUN bun install

RUN bun run generate:db

EXPOSE 3003

CMD ["bun", "start:ws"]