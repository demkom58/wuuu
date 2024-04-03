FROM node:21-alpine as build
RUN apk update && apk upgrade

WORKDIR /app
COPY package* ./
RUN  npm install

COPY . ./

RUN npm run build

FROM node:21-alpine

RUN apk update && apk upgrade && apk add dumb-init && adduser -D nuxtuser

USER nuxtuser

WORKDIR /app
COPY --chown=nuxtuser:nuxtuser --from=build /app/.output ./

# set app host and port . In nuxt 3 this is based on nitro and you can read
#more on this https://nitro.unjs.io/deploy/node#environment-variables
ENV HOST=0.0.0.0 PORT=80 NODE_ENV=production
EXPOSE 80

# start the app with dumb init to spawn the Node.js runtime process
# with signal support
CMD ["dumb-init", "node", "/app/server/index.mjs"]