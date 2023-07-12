import { Button, Header } from '@ui/atoms';
import { Input } from '@ui/molecules/Input';
import { useState, useId } from 'react';

export default {
  title: 'Rendering/IndexKeys',
};

export const ReactKeysIndex = () => {
  const [items, setItems] = useState([
    { id: useId(), name: 'A' },
    { id: useId(), name: 'B' }
  ])
  const newId = useId();
  const addItem = () => {
    setItems([{ id: newId, name: 'C' }, ...items])
  }

  return <>
    <Header>index keys</Header>
    {items.map((i, idx) => <div key={idx}>
      <div>
        <Input
          type="text"
          label={`index ${idx}`}
          style={{ border: '#c0c0c0 1px solid '}}
        />
      </div>
    </div>)}
    <div className="my-6"></div>
    <Header>id keys</Header>
    {items.map((i, idx) => <div key={i.id}>
      <div>
        <Input
          type="text"
          label={`id ${i.id}`}
          style={{ border: '#c0c0c0 1px solid '}}
        />
      </div>
    </div>)}
    <div>
      <Button label="add" onClick={addItem} />
    </div>
  </>
}
