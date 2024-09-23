import { Injectable } from '@nestjs/common';
import { SecretClient } from '@azure/keyvault-secrets';
import { DefaultAzureCredential } from '@azure/identity';

@Injectable()
export class AzureKeyVaultService {
  private readonly client: SecretClient;

  constructor() {
    const keyVaultName = process.env.KEY_VAULT_NAME; // El nombre de tu Key Vault
    const keyVaultUri = `https://${keyVaultName}.vault.azure.net/`;
    // Configura el cliente con la identidad de Azure
    this.client = new SecretClient(keyVaultUri, new DefaultAzureCredential());
  }

  async getSecret(secretName: string): Promise<string> {
    try {
      const secret = await this.client.getSecret(secretName);
      return secret.value;
    } catch (error) {
      console.error(`Error fetching secret ${secretName}:`, error);
      throw error;
    }
  }
}
