import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Create application with devtools snapshot enabled
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Set up Swagger
  const config = new DocumentBuilder()
    .setTitle('Eva API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .addServer('http://localhost:3000', 'Local server')
    .build()
    ;
  // Create Swagger document
  const document = SwaggerModule.createDocument(app, config);
  // Set up Swagger UI
  SwaggerModule.setup('api', app, document);

  // Set port and log
  const port = process.env.PORT ?? 3000;
  console.log(`Application is running on: http://localhost:${port}`);
  
  await app.listen(port);
}
// Start the application
bootstrap();
