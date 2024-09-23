import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureKeyVaultService } from './azure-key-vault.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AzureKeyVaultService],
})
export class AppModule {}
