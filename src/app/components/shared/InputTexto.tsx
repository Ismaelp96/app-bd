import { InputHTMLAttributes } from 'react';

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function inputTexto(props: InputTextoProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label>{props.label}</label>
      <input
        {...props}
        className='bg-zinc-800 text-white p-2 rounded-md outline-none w-full max-w-[360px]'
      />
    </div>
  );
}
