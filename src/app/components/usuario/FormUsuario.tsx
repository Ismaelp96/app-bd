'use client';
import { Usuario } from '@/core/model/Usuario';
import InputTexto from '../shared/InputTexto';

export interface FormularioUsuarioProps {
  usuario: Usuario;
  onChange: (usuario: Usuario) => void;
  onSave: () => void;
  onCancel: () => void;
}

export default function FormUsuario(props: FormularioUsuarioProps) {
  return (
    <div>
      <h1 className='text-xl font-semibold'>Formulário de Usuário</h1>
      <form action='' className='space-y-4 w-full max-w-[360px]'>
        <div className='flex flex-col gap-4'>
          <InputTexto
            label='Nome'
            type='text'
            value={props.usuario.nome}
            onChange={(e) =>
              props.onChange({ ...props.usuario, nome: e.target.value })
            }
          />
          <InputTexto
            label='E-mail'
            type='email'
            value={props.usuario.email}
            onChange={(e) =>
              props.onChange({ ...props.usuario, email: e.target.value })
            }
          />
          <InputTexto
            label='Senha'
            type='password'
            value={props.usuario.senha}
            onChange={(e) =>
              props.onChange({ ...props.usuario, senha: e.target.value })
            }
          />
        </div>
        <div className='flex items-center gap-5 w-full justify-end'>
          <button
            className='bg-blue-500 px-4 py-4 rounded-md hover:brightness-90 transition-all duration-200'
            onClick={props.onSave}
          >
            Salvar
          </button>
          <button
            className='bg-zinc-500 px-4 py-4 rounded-md hover:brightness-90 transition-all duration-200'
            onClick={props.onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
