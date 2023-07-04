import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  direction?: 'col' | 'row';
  align?: 'items-start' | 'items-end' | 'items-center';
}

export default function FlexContainer({
  align = 'items-center',
  children,
  className = '',
  direction = 'col',
}: PropsWithChildren<Props>) {
  const classNames = `flex flex-${direction} ${align} ${className}`;
  return <div className={classNames}>{children}</div>;
}
