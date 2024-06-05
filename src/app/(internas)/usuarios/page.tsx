'use client';
import { useState } from 'react';

import Pagina from '@/app/components/template/Pagina';
import Titulo from '@/app/components/template/Titulo';
import FormUsuario from '@/app/components/usuario/FormUsuario';
import ListaUsuarios from '@/app/components/usuario/ListaUsuario';
import { usuarios } from '@/app/data/constants/usuario';
import { IconUser } from '@tabler/icons-react';
import { Usuario } from '@/core/model/Usuario';
import Backend from '@/backend';

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null);

  function onSave() {
    if (!usuario) return;
    Backend.usuarios.salvar(usuario);
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
        <ListaUsuarios onClick={setUsuario} />
      )}
    </Pagina>
  );
}
