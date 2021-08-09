import { Connection, Repository } from 'typeorm';
import { Account } from './account.entity';

export const taskProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Account),
    inject: ['DATABASE_CONNECTION'],
  },
];
