import { ButtonHTMLAttributes, useState } from 'react';

export function MyButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <button
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? '#000' : '#fff',
      }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...props}
    />
  );
}
