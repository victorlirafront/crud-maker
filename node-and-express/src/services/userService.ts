import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { User } from '../entities/User';
import { CreateUserRequest, UpdateUserRequest } from '../types/user';

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  // CREATE - Criar um novo usuário
  async createUser(userData: CreateUserRequest): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }

  // READ - Buscar todos os usuários
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find({
      order: { createdAt: 'DESC' }
    });
  }

  // READ - Buscar usuário por ID
  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { id }
    });
  }

  // UPDATE - Atualizar usuário
  async updateUser(id: number, userData: UpdateUserRequest): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { id }
    });

    if (!user) {
      return null;
    }

    // Atualiza apenas os campos fornecidos
    Object.assign(user, userData);
    return await this.userRepository.save(user);
  }

  // DELETE - Deletar usuário
  async deleteUser(id: number): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { id }
    });

    if (!user) {
      return false;
    }

    await this.userRepository.remove(user);
    return true;
  }

  // Buscar usuário por email (para validação)
  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { email }
    });
  }
}

export default new UserService();
