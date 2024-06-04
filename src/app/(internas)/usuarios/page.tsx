import Pagina from '@/app/components/template/Pagina';
import ListaUsuarios from '@/app/components/usuario/ListaUsuario';

export default function UsuariosPage() {
  return (
    <Pagina>
      <h1 className='mb-4 text-2xl font-semibold'>Usuários</h1>
      <ListaUsuarios />
    </Pagina>
  );
}
