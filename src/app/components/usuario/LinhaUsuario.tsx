import { Usuario } from '@/core/model/Usuario';

export interface LinhaUsuarioProps {
  usuario: Usuario;
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div className=''>
      <span>{props.usuario.nome}</span>
    </div>
  );
}
