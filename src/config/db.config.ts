
import * as sql from 'mssql';
import {Config} from './dotenv.config'
import { logger } from '../helper/logger';

export class SQLServerConnection {
    private config: sql.config;
    private pool:sql.ConnectionPool

    constructor() {
        this.config = {
            user: String(Config.get("DB_USER")),
            server: String(Config.get("DB_HOST")),
            database: String(Config.get("DB_NAME")),
            password: String(Config.get("DB_PASSWORD")),
            port: Number(Config.get("DB_PORT")),
            options: {
                encrypt: Boolean(Config.get("DB_ENCRYPT"))
            }
        };
        this.pool = new sql.ConnectionPool(this.config);
    }

    async openConnection(): Promise<void> {
        try {
            await this.pool.connect();
            console.log(`Successfully established connection to ${this.config.database}`);
        } catch (err:any) {
            logger(err.message, 'SQLServerConnection', 'openConnection')
            throw err;
        }
    }

    async query(query: string): Promise<any> {
        try {
            const result = await this.pool.request().query(query);
            return result.recordset;
        } catch (err:any) {
            logger(err.message, 'SQLServerConnection', 'query')
            throw err;
        }
    }

    async closeConnection(): Promise<void> {
        try {
            await this.pool.close();
            console.log('Connection closed successfully');
        } catch (err:any) {
            logger(err.message, 'SQLServerConnection', 'closeConnection')
            throw err;
        }
    }
}
