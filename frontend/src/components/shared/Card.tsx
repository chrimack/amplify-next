import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}
export default function Card({
  children = '',
  className,
}: PropsWithChildren<Props>) {
  const classNames = `bg-neutral-50 border-yellow shadow-red w-2/4 rounded-md border-2 p-4 text-center shadow-md ${className}`;
  return <section className={classNames}>{children}</section>;
}
