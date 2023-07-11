import React, { ComponentProps } from 'react';

type Props = {
  bgColor?: string;
  // children: string;
  children: React.ReactNode;
}

// create function
// function must return UI fragment
export const Text = ({ children }: ComponentProps<'p'> & Props) => {
  return (
    <p className='mt-2 mb-2 text-slate-700 font-medium dark:text-white'>{children}</p>
  );
}

// class TextSecond extends React.Component<Props> {
//   render() {
//     return (
//       <p>{this.props.children}</p>
//     );
//   }
// }