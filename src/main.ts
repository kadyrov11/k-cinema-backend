import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [
      'https://vercel.com/kadyrov11/k-cinema-client',
      'http://localhost:3000',
    ],
    methods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS,PATCH',
    credentials: true,
    allowedHeaders: [
      'Origin',
      'Accept',
      'Pragma',
      'Referer',
      'User-Agent',
      'Content-Type',
      'Cache-Control',
      'Authentication',
      'Accept-Encoding',
      'Accept-Language',
      'X-Requested-With',
      'Access-control-allow-origin',
      'Access-control-allow-methods',
      'Access-control-allow-headers',
      'Access-Control-Request-Headers',
      'Access-control-allow-credentials',
    ],
  });

  const port = process.env.PORT || 4000;

  await app.listen(port);
}
bootstrap();
