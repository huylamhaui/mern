#State 0: Build production app
FROM node as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build


#
FROM nginx

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /usr/src/app/fe/build .


ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
