// src/App.tsx
import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      {/* <h1>{isLogin ? 'Login Screen' : 'Sign Up Screen'}</h1> */}
      {isLogin ? <Login /> : <Signup />}
      <br/>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Go to Sign Up' : 'Go to Login'}
      </button>
    </div>
  );
};

export default App;
