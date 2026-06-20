import styles from "./Header.module.css";
import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useState, useCallback, useMemo } from 'react';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', './vite.svg'];

function Header() {
  const [logoIndex, setLogoIndex] = useState(0);

  const toggleLogo = useCallback(() => {
    setLogoIndex(state => Number(!state));
  }, []);

  return (
    <>
      <Logo image={logos[logoIndex]} />
      <SelectUser />
      <Button onClick={toggleLogo}>Сменить лого</Button>
    </>
  )
}

export default Header;
