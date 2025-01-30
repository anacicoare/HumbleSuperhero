import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:4000',  // Allow requests from the frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // Listen on the port from the environment variable or default to 3000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
