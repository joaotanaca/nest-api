import { Module } from '@nestjs/common'
import { AppController, AppService, PostModule } from 'controllers'

@Module({
  imports: [PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
