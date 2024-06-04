import { Usuario } from '@/core/model/Usuario';
import Image from 'next/image';

export interface LinhaUsuarioProps {
  usuario: Usuario;
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div className='rounded-md bg-zinc-900 p-3 flex items-center gap-4'>
      <Image
        src='http://source.unsplash.com/random/80x80?avatar'
        alt='avatar'
        width={80}
        height={80}
        className='rounded-full'
      />
      <div className='flex flex-col'>
        <span className='text-white text-xl font-semibold'>
          {props.usuario.nome}
        </span>
        <span className='text-xs text-zinc-300'>{props.usuario.email}</span>
      </div>
    </div>
  );
}
