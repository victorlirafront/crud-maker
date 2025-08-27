import { Request, Response } from 'express';
import userService from '../services/userService';
import { CreateUserRequest, UpdateUserRequest } from '../types/user';

class UserController {
  // CREATE - POST /users
  async createUser(req: Request, res: Response) {
    try {
      const userData: CreateUserRequest = req.body;

      // Validação básica
      if (!userData.name || !userData.email || !userData.age) {
        return res.status(400).json({
          success: false,
          message: 'Nome, email e idade são obrigatórios'
        });
      }

      // Verificar se email já existe
      const existingUser = userService.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'Email já está em uso'
        });
      }

      const newUser = userService.createUser(userData);
      
      res.status(201).json({
        success: true,
        data: newUser,
        message: 'Usuário criado com sucesso'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  }

  // READ - GET /users
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = userService.getAllUsers();
      
      res.status(200).json({
        success: true,
        data: users,
        count: users.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  }

  // READ - GET /users/:id
  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = userService.getUserById(id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
      }

      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  }

  // UPDATE - PUT /users/:id
  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userData: UpdateUserRequest = req.body;

      // Verificar se o usuário existe
      const existingUser = userService.getUserById(id);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
      }

      // Se estiver atualizando o email, verificar se já existe
      if (userData.email && userData.email !== existingUser.email) {
        const userWithEmail = userService.getUserByEmail(userData.email);
        if (userWithEmail) {
          return res.status(409).json({
            success: false,
            message: 'Email já está em uso'
          });
        }
      }

      const updatedUser = userService.updateUser(id, userData);
      
      res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'Usuário atualizado com sucesso'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  }

  // DELETE - DELETE /users/:id
  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = userService.deleteUser(id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Usuário deletado com sucesso'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  }
}

export default new UserController();
