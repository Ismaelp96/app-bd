'use client';
import { useEffect, useState } from 'react';
import { IconPlus, IconUser } from '@tabler/icons-react';

import Pagina from '@/app/components/template/Pagina';
import Titulo from '@/app/components/template/Titulo';
import FormUsuario from '@/app/components/usuario/FormUsuario';
import ListaUsuarios from '@/app/components/usuario/ListaUsuario';
import { Usuario } from '@/core/model/Usuario';
import Backend from '@/backend';

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null);

  useEffect(() => {
    Backend.usuarios.obter().then(setUsuarios);
  }, []);

  async function onSave() {
    if (!usuario) return;
    await Backend.usuarios.salvar(usuario);
    const usuarios = await Backend.usuarios.obter();
    setUsuarios(usuarios);
    setUsuario(null);
  }

  return (
    <Pagina className='flex flex-col gap-6'>
      <Titulo
        principal='Usuários'
        segundario='Cadastro de Usuarios'
        icone={IconUser}
      />

      {usuario ? (
        <FormUsuario
          usuario={usuario}
          onChange={setUsuario}
          onCancel={() => setUsuario(null)}
          onSave={onSave}
        />
      ) : (
        <>
          <div className='flex justify-end'>
            <button
              className='bg-blue-500 px-4 py-2 rounded-md flex items-center gap-2'
              onClick={() => setUsuario({})}
            >
              <IconPlus className='text-white' />
              <span className='text-white'>Novo Usuário</span>
            </button>
          </div>
          <ListaUsuarios usuarios={usuarios} onClick={setUsuario} />
        </>
      )}
    </Pagina>
  );
}
