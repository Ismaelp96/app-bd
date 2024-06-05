import salvarUsuario from './salvarUsuario';
import obterTodos from './obterTodos';

// Padrão Facade
export default class Backend {
  static readonly usuarios = {
    salvarUsuario,
    obterTodos,
  };
}
