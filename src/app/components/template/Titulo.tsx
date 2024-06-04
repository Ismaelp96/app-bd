import { ElementType } from 'react';

export interface TitutloProps {
  principal: string;
  segundario: string;
  icone: ElementType;
}

export default function Titulo(props: TitutloProps) {
  return (
    <div className='flex gap-2'>
      <props.icone className='' size={55} stroke={1} />
      <div className='flex flex-col'>
        <h1 className='text-2xl font-semibold'>{props.principal}</h1>
        <h2 className='text-lg text-zinc-500'>{props.segundario}</h2>
      </div>
    </div>
  );
}
