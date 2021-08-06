import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'nathan',
        password: 'flareon',
        database: 'tata-db',
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
      }),
  },
];
