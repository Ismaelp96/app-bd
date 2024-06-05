import salvarUsuario from './salvarUsuario';
import obterTodos from './obterTodos';
import deletarUsuario from './deletarUsuario';

// Padrão Facade
export default class Backend {
  static readonly usuarios = {
    salvar: salvarUsuario,
    obter: obterTodos,
    deletar: deletarUsuario,
  };
}
