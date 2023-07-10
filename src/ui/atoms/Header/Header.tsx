import type { ComponentProps } from 'react';

type Props = {
  children: string
}

export const Header = ({ children }: ComponentProps<'header'> & Props) => {
  return (
    <header className="text-3xl font-bold underline">
      {children}
    </header>
  );
}
