import React, { useContext, useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const ctdata = useContext(AuthContext);

  // component focus to return JSX
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctdata.isLoggedIn && <Login onLogin={ctdata.onLogin} />}
        {ctdata.isLoggedIn && <Home onLogout={ctdata.onLogout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
