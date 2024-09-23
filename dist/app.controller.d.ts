import { AppService } from './app.service';
import { AzureKeyVaultService } from './azure-key-vault.service';
export declare class AppController {
    private readonly appService;
    private readonly azureKeyVaultService;
    constructor(appService: AppService, azureKeyVaultService: AzureKeyVaultService);
    getHello(): Promise<string>;
}
