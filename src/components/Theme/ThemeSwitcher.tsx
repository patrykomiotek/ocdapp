import { useThemeContext } from "./ThemeContext"

export const ThemeSwitcher = () => {
  const context = useThemeContext();

  return (
    <div>
      <p>Theme: {context.theme}</p>
      <button onClick={() => context.toggle()}>Toggle</button>
    </div>
  );
}