import Menu from './Menu';

export interface PaginaProps {
  children: React.ReactNode;
}

export default function Pagina({ children }: PaginaProps) {
  return (
    <div className='flex'>
      <Menu />
      <main className='flex-1 p-7'>{children}</main>
    </div>
  );
}
