FROM node:lts AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM node:lts

WORKDIR /app

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ENTRYPOINT ["node", "/app/dist/index.js"]