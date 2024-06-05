'use server';

import RepositorioUsuario from './RepositorioUsuario';

export default async function deletarUsuario(id: string) {
  return RepositorioUsuario.deletar(id);
}
