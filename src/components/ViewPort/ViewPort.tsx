import { useViewport } from '@hooks/useViewPort';
import { Text } from '@ui/atoms/Text';

export const ViewPort = () => {
  const size = useViewport();
  return (
    <div>
      <Text>x: {size.width} y: {size.height}</Text>
    </div>
  );
}
