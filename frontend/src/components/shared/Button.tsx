import { PropsWithChildren } from 'react';

interface Props {
  className: string;
}

export default function Button({
  children,
  className,
}: PropsWithChildren<Props>) {
  return <button className={className}>{children}</button>;
}
