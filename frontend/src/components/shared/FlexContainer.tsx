import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

export default function FlexContainer({
  children,
  className,
}: PropsWithChildren<Props>) {
  const classNames = `flex flex-col items-center ${className}`;
  return <div className={classNames}>{children}</div>;
}
