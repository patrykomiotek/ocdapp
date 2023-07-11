import { useViewport } from '@hooks/useViewPort';

export const Viewport = () => {
  const size = useViewport();
  return (
    <div>x: {size.width} y: {size.height}</div>
  );
}
