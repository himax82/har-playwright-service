# Stage 1: Сборка Java-приложения
FROM maven:3.9-eclipse-temurin-17 AS builder

WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Финальный образ
FROM eclipse-temurin:17-jre

# Установка Node.js (LTS)
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Копируем JAR
COPY --from=builder /app/target/*.jar app.jar

# Копируем playwright-runner
COPY playwright-runner ./playwright-runner

# Устанавливаем Playwright ВНУТРИ playwright-runner
WORKDIR /app/playwright-runner
RUN npm install
RUN npx playwright install --with-deps

# Возвращаемся в корень приложения
WORKDIR /app

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]