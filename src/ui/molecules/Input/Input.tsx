import { ChangeEventHandler, ComponentProps } from "react";

type Props = ComponentProps<'input'> & {
  // id: string;
  // value: string | undefined;
  // type: 'email' | 'password' | 'text';
  // type: string;
  label: string;
  // onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ id, value, type, label, onChange}: Props) => {
  return (
    <>
      <label className="block" htmlFor={id}>
        <span className="block text-sm font-medium text-slate-700">{label}</span>
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
    </>
  );
}