import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AzureKeyVaultService } from './azure-key-vault.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly azureKeyVaultService: AzureKeyVaultService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const dbConnectionString = await this.azureKeyVaultService.getSecret(
      'DatabaseConnectionString',
    );
    console.log('dbConnectionString', dbConnectionString);
    return this.appService.getHello();
  }
}
