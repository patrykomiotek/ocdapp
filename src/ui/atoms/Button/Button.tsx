import clsx from 'clsx';

import type { ComponentProps } from 'react';

// const colors: Record<string, string> = {
const colors = {
  turquise: '#1abc9c',
  emerald: '#2ecc71',
  'peter-river': '#3498db',
  amethyst: '#9b59b6',
  'wet-asphalt': '#34495e',
  'green-sea': '#16a085',
  nephritis: '#16a085',
  'belize-hol': '#2980b9',
  wisteria: '#8e44ad',
  midnight: '#2c3e50',
  'sun-flower': '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
}

// TODO: how to get keys from Record typed variables
type ColorType = keyof typeof colors;

type Props = {
  label: string;
  color?: ColorType,
  bgColor?: ColorType,
}

export const Button = ({ label, bgColor, color }: ComponentProps<'button'> & Props) => {
  const _color = color ? colors[color] : '';
  const _bgColor = bgColor ? colors[bgColor] : '';

  const classes = clsx(
    'px-4 py-1',
    'text-sm text-blue-600',
    'font-semibold',
    'rounded-full border border-blue-200',
    'hover:text-white hover:bg-blue-600 hover:border-transparent',
    'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
  );

  return (
    <button
      className={classes}
      style={{
        color: _color,
        backgroundColor: _bgColor,
      }}
    >
      {label}
    </button>
  );
}
