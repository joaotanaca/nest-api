import { MongooseModule } from '@nestjs/mongoose'

export const Connection = MongooseModule.forRoot('mongodb://localhost/tribuna')
