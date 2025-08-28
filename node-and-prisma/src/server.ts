import app from './app';

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🚀 Servidor Prisma rodando na porta ${PORT}`);
  console.log(`📖 Documentação da API: http://localhost:${PORT}`);
  console.log(`🔍 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`👥 Endpoints de usuários: http://localhost:${PORT}/api/users`);
  console.log(`🗄️ Prisma Studio: http://localhost:5555`);
});
