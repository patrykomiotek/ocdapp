import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Generator } from '@components/Genrator';
import { LoginFormState } from '@components/LoginFormState';
import { LoginFormRefs } from '@components/LoginFormRefs';
import { Text } from '@atoms/Text';
import { Button } from '@ui/atoms/Button';
import { LoginPage } from '@pages/LoginPage';
import { HomePage } from '@pages/HomePage';

enum Paths {
  HOME = '/',
  LOGIN = '/login',
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to={Paths.HOME}>Home</Link></li>
        <li><Link to={Paths.LOGIN}>Login</Link></li>
      </ul>

      <Routes>
        <Route path={Paths.LOGIN} element={<LoginPage />} />
        <Route path={Paths.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
