import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ///1)  con esta ya esta aplicados los validations pipes
  app.useGlobalPipes(
    new ValidationPipe({
      //- Esta propiedad solo deja la data que yo estoy esperando si le envió otras propiedades las elimino
      whitelist: true,
      //- Si una propiedad no esta en el whitelist, se arroja un error
      forbidNonWhitelisted: true,
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
