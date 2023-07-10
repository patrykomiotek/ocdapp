import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from './components/ui/Text';
import { Button } from './components/ui/Button';
import { Generator } from './components/ui/Genrator/Generator';

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
    </>
  )
}

export default App
