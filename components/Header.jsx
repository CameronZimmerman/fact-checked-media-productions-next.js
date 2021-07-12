import { useState } from 'react';
import Link from 'next/link';

import style from '../styles/Header.module.css';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className={style.header}>
      <section>
        <Link href="/">
          <a className={style.headerLink}>
              <img
                src="/assets/FactCheckedMP_white-transparentBG.png"
                alt="Fact checked media productions"
              />
          </a>
        </Link>
      </section>
      <nav>
        <div className={style.hamburger}>
          <img
            src="/assets/hamburger.png"
            alt="menu button"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          />
          {hamburgerOpen && (
            <div className={`${style.hamMenu} ${style.links}`}>
              <Link href="/Work"><a>Work</a></Link>
              <Link href="/YourVoice"><a>Your Voice</a></Link>
              <Link href="/Contact"><a>Contact</a></Link>
            </div>
          )}
        </div>
        <div className={`${style.regMenu} ${style.links}`}>
          <Link href="/Work"><a>Work</a></Link>
          <Link href="/YourVoice"><a>Your Voice</a></Link>
          <Link href="/Contact"><a>Contact</a></Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
