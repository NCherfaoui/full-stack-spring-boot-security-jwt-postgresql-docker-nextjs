````yaml
services:
app:
build: .
ports:
- "8081:8081"
environment:
SERVER_URI: localhost
SERVER_PORT: 8081
SERVER_SERVLET_CONTEXT_PATH: /api/v1
SPRING_APPLICATION_NAME: backend
SPRING_APPLICATION_ERROR_URI: /error
POSTGRES_VERSION: latest
POSTGRES_PORT: 5433
POSTGRES_DB: postgres
POSTGRES_USER: username
POSTGRES_PASSWORD: password
PGADMIN_VERSION: latest
PGADMIN_PORT: 5050
depends_on:
- postgres
- pgadmin

postgres:
# ... rest of your postgres service configuration

pgadmin:
# ... rest 