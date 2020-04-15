import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3500;
  await app
    .listen(port)
    .then(() => console.log(`app started at http://localhost:${port}/graphql`));
}
bootstrap();
