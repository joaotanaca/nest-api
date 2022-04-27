import { Module } from '@nestjs/common'
import { AppController, AppService, PostModule } from 'controllers'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [DatabaseModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
