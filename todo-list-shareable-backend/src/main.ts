import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = +process.env.APP_PORT || 3000
  app.setGlobalPrefix('api')
  console.log('Port running on: ', port)

  const options = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Todo APP')
      .setDescription('Todo API documentation')
      .setVersion('1.0')
      .addTag('Todo')
      .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
