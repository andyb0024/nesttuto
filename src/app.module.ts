import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { CatModule } from './cat/cat.module';


@Module({
  imports: [AuthModule,UserModule, BookmarkModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
