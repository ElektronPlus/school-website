#! /bin/sh.
touch .env
echo "HOST=0.0.0.0" >> .env
echo "PORT=1337" >> .env
echo "APP_KEYS=$(openssl rand -base64 64),$(openssl rand -base64 64),$(openssl rand -base64 64),$(openssl rand -base64 64)" >> .env
echo "API_TOKEN_SALT=$(openssl rand -base64 64)" >> .env
echo "ADMIN_JWT_SECRET=$(openssl rand -base64 64)" >> .env
echo "JWT_SECRET=$(openssl rand -base64 64)" >> .env