FROM node:14.17.4 as build
ENV APP_ROOT /front
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /front/build /var/www/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
