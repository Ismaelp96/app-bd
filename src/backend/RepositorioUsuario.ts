import { PrismaClient } from '@prisma/client';

export default class RepositorioUsario {
  private static db: PrismaClient = new PrismaClient();

  static async listar() {
    return await this.db.user.findMany({});
  }
  static async salvar(usuario: any) {
    return await this.db.user.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario,
    });
  }

  static async obterTodos(id: string) {
    return await this.db.user.findUnique({ where: { id } });
  }
}
