import React, { useState, useContext } from 'react';
import './Index.css';
const themes = {
  light: {
    id: 1,
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    id: 2,
    foreground: '#ADD8E6',
    background: '#00008B',
  },
};
const ThemeContext = React.createContext(themes.light);
export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className="Main"
        style={{
          background: theme.background,
          color: theme.foreground,
        }}
      >
        <p className="Text">Halaman Ubah Warna</p>
        <p>Kelompok 26</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}
export function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{
        background: theme.background,
        color: theme.foreground,
        cursor: 'pointer',
        width: 400,
      }}
      onClick={changeTheme}
    >
      Coba Tekan dong! XD
    </button>
  );
}
