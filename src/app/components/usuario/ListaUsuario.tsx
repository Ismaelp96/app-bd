import { usuarios } from '@/app/data/constants/usuario';
import { Usuario } from '@/core/model/Usuario';

import LinhaUsuario from './LinhaUsuario';

export interface ListaUsuarioProps {
  onClick?: (usuario: Usuario) => void;
}

export default function ListaUsuarios(props: ListaUsuarioProps) {
  return (
    <div className='flex flex-col gap-2 '>
      {usuarios.map((usuario: Usuario) => {
        return (
          <LinhaUsuario
            key={usuario.id}
            usuario={usuario}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
}
