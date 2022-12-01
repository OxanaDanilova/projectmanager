import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './hook';

import Main from './components/pages/Main/Main';
import Board from './components/pages/Board/Board';
import Page404 from './components/pages/Page404/Page404';
import MainLayout from './components/MainLayout/MainLayout';
import { LOCALES } from './lang/locales';
import { messages } from './lang/messages';
import './App.css';
import './global/global.scss';
import { AuthPage } from './components/pages/SignIn/signIn';

import { SignUpPage } from './components/pages/SignUp/SignUp';

function App() {
  const lang = useAppSelector((state) => state.lang);
  const dispatch = useAppDispatch();
  //const locale = LOCALES.RUSSIAN;

  // const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setCurrentLocale(event.currentTarget.value);
  //   localStorage.setItem('locale', event.currentTarget.value);
  // }

  return (
    <IntlProvider
        messages={messages[lang.lang]}
        locale={lang.lang}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="board" element={<Board />} />
            <Route path="*" element={<Page404 />} />
            <Route path="signIn" element={<AuthPage />} />
            <Route path="signUp" element={<SignUpPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </IntlProvider>
  );
}

export default App;
