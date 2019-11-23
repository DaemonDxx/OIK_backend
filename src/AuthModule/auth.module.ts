import { Module } from '@nestjs/common';
import { UserModule } from '../UserModule/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'ЗАМЕНИТЬОБЯЗАТЕЛЬНО',
      signOptions: {expiresIn: '7d'},
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
