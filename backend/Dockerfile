# Use an official Maven image to build the app
FROM maven:3.9.7-eclipse-temurin-21 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and the source code
COPY pom.xml .
COPY src ./src
COPY .env .env

# Package the application
RUN mvn clean package -DskipTests

# Use an official Eclipse Temurin image to run the app
FROM eclipse-temurin:21-jre

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged jar from the build stage
COPY --from=build /app/target/*.jar app.jar

# Copy the .env file from the build stage
COPY --from=build /app/.env .env

# Expose the port the app runs on
EXPOSE 8081

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]