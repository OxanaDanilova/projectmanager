import * as React from 'react';
import { useAppDispatch } from '../../hook';
import { NavLink } from 'react-router-dom';
import { setLang } from '../../reducers/langSlice';

import logo from '../../assets/icons/logo.png';
import { FormattedMessage } from 'react-intl';
import { LOCALES } from '../../lang/locales';
import './Header.scss';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const languages = [
  { name: 'English', code: LOCALES.ENGLISH },
  { name: 'Russian', code: LOCALES.RUSSIAN },
];

function Header() {
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo__container" onClick={scrollToTop}>
          <NavLink to="/">
            <img className="logo-img" alt="logo" src={logo} />
          </NavLink>
          <NavLink to="/">
            <h1 className="logo__title">Pro Manager</h1>
          </NavLink>
        </div>
        <nav className="navbar__container">
          <ul className="navbar">
            <li className="change-lang">
              <select
                value={localStorage.getItem('lang') as string}
                onChange={event => {
                  const value = event.currentTarget.value;
                  dispatch(setLang(value));
                  localStorage.setItem('lang', value);
                }}
              >
                {languages.map(({ name, code }) =>
                  code === localStorage.getItem('lang') ? (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ) : (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ),
                )}
              </select>
            </li>
            <li>
              <NavLink to="/signIn" end className="nav__link">
                <FormattedMessage id="sign_in" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/signUp" className="nav__link">
                <FormattedMessage id="sign_up" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/board" className="nav__link">
                <FormattedMessage id="board" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
