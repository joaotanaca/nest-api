import { Module } from '@nestjs/common'
import { AppService } from './controllers/app/app.service'
import { AppController, PostController } from 'controllers'

@Module({
  imports: [],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}
