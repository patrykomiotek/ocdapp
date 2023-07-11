import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Generator } from '@components/Genrator';
import { LoginFormState } from '@components/LoginFormState';
import { Text } from '@atoms/Text';
import { Button } from '@ui/atoms/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text bgColor="#ff0000">
        Today is <span>payday</span>
      </Text>
      <Button
        label="Hello"
        color="clouds"
        bgColor="emerald"
      />
      <Generator />
      <LoginFormState />
    </>
  )
}

export default App
