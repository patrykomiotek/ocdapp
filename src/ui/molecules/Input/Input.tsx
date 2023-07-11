import { ChangeEventHandler, ComponentProps, ComponentPropsWithRef, Ref, forwardRef, useId } from "react";

type Props = ComponentPropsWithRef<'input'> & {
// type Props = ComponentProps<'input'> & {
  // id: string;
  // value: string | undefined;
  // type: 'email' | 'password' | 'text';
  // type: string;
  label: string;
  // onChange: ChangeEventHandler<HTMLInputElement>
}

// forwardRef

export const Input = forwardRef((
  { value, type, label, onChange, ...rest }: Props,
  ref: Ref<HTMLInputElement>
) => {
  const id = useId();
  return (
    <>
      <label className="block" htmlFor={id}>
        <span className="block text-sm font-medium text-slate-700">{label}</span>
      </label>
      <input
        id={id}
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        {...rest}
      />
    </>
  );
});