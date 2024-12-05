import { PropsWithChildren } from 'react';
import './Header.css';

const Header = (props: PropsWithChildren) => {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
};

export default Header;
