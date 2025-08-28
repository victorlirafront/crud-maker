import { DataSource } from 'typeorm';
import { User } from '../entities/User';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:', // Banco em memória para desenvolvimento
  entities: [User],
  synchronize: true, // Cuidado em produção!
  logging: true,
});
