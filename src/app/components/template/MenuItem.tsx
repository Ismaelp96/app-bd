import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { ElementType } from 'react';

export interface MenuItemProps {
  icone: ElementType;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className='flex items-center gap-2 border-b border-zinc-800 hover:text-zinc-400 text-white p-4 transition-all duration-200'
    >
      <props.icone size={24} stroke={1} />
      <span className='text-base'>{props.texto}</span>
    </Link>
  );
}
