import {ReactNode} from 'react';
import {Conatiner, Title} from './styles';
interface Props {
  title: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export function Header({leftElement, rightElement, title}: Props) {
  return (
    <Conatiner>
      {leftElement}
      <Title>{title}</Title>
      {rightElement}
    </Conatiner>
  );
}
