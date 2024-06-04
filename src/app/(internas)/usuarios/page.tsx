'use client';
import { useState } from 'react';

import Pagina from '@/app/components/template/Pagina';
import Titulo from '@/app/components/template/Titulo';
import FormUsuario from '@/app/components/usuario/FormUsuario';
import ListaUsuarios from '@/app/components/usuario/ListaUsuario';
import { usuarios } from '@/app/data/constants/usuario';
import { IconUser } from '@tabler/icons-react';
import { Usuario } from '@/core/model/Usuario';

export default function UsuariosPage() {
  const [usuario, setUsuario] = useState<Usuario>(usuarios[0]);

  function onSave() {}

  return (
    <Pagina className='flex flex-col gap-6'>
      <Titulo
        principal='Usuários'
        segundario='Cadastro de Usuarios'
        icone={IconUser}
      />
      {/* <ListaUsuarios /> */}
      <FormUsuario
        usuario={usuarios[0]}
        onChange={setUsuario}
        onCancel={() => {}}
        onSave={onSave}
      />
    </Pagina>
  );
}
