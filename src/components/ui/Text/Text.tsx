import React from 'react';

type Props = {
  bgColor?: string;
  // children: string;
  children: React.ReactNode;
}

// create function
// function must return UI fragment
export const Text = ({ children }: Props) => {
  return <p>{children}</p>
}

// class TextSecond extends React.Component<Props> {
//   render() {
//     return (
//       <p>{this.props.children}</p>
//     );
//   }
// }