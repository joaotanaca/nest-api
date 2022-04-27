import { Module } from '@nestjs/common'
import { Connection } from './connection'

@Module({
  imports: [Connection],
})
export class DatabaseModule {}
