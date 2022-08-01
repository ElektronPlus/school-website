FROM node:16-alpine
# Strapi - https://blog.dehlin.dev/docker-with-strapi-v4

# Installing libvips-dev for sharp compatability (image processing library)
RUN apk add --upgrade --no-cache vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/

WORKDIR /opt/

COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN ["npm", "install", "--legacy-peer-deeps"]
WORKDIR /opt/app
COPY ./ .

RUN ["npm", "run", "build"]

EXPOSE ${PORT}

# on production: ["npm", "run", "start"]
CMD ["npm", "run", "develop"]