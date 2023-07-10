const colors = {
  turquise: '#1abc9c',
  emerald: '#2ecc71',
  'sun-flower': '#f1c40f',
  clouds: '#ecf0f1',
}

type ColorType = keyof typeof colors;

type Props = {
  label: string;
  color: ColorType,
  bgColor: ColorType,
}

export const Button = ({ label, bgColor, color }: Props) => {
  const _color = colors[color];
  const _bgColor = colors[bgColor];

  return (
    <button style={{
      color: _color,
      backgroundColor: _bgColor,
    }}>
      {label}
    </button>
  );
}