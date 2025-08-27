import { User, CreateUserRequest, UpdateUserRequest } from '../types/user';

class UserService {
  private users: User[] = [];
  private nextId = 1;

  // CREATE - Criar um novo usuário
  createUser(userData: CreateUserRequest): User {
    const now = new Date();
    const newUser: User = {
      id: this.nextId.toString(),
      ...userData,
      createdAt: now,
      updatedAt: now
    };

    this.users.push(newUser);
    this.nextId++;
    return newUser;
  }

  // READ - Buscar todos os usuários
  getAllUsers(): User[] {
    return [...this.users];
  }

  // READ - Buscar usuário por ID
  getUserById(id: string): User | null {
    const user = this.users.find(u => u.id === id);
    return user || null;
  }

  // UPDATE - Atualizar usuário
  updateUser(id: string, userData: UpdateUserRequest): User | null {
    const userIndex = this.users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return null;
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date()
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  // DELETE - Deletar usuário
  deleteUser(id: string): boolean {
    const userIndex = this.users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return false;
    }

    this.users.splice(userIndex, 1);
    return true;
  }

  // Buscar usuário por email (para validação)
  getUserByEmail(email: string): User | null {
    const user = this.users.find(u => u.email === email);
    return user || null;
  }
}

export default new UserService();
