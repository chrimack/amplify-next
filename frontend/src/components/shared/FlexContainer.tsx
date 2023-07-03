import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  direction?: 'col' | 'row';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

export default function FlexContainer({
  align = 'center',
  children,
  className = '',
  direction = 'col',
}: PropsWithChildren<Props>) {
  const classNames = `flex flex-${direction} items-${align} ${className}`;
  return <div className={classNames}>{children}</div>;
}
