import { PropsWithChildren, createElement } from 'react';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  className?: string;
  priority: Heading;
}

export default function Heading({
  children,
  className,
  priority,
}: PropsWithChildren<Props>) {
  return createElement(
    priority,
    { children, className: `${className} font-heading font-normal` },
    children
  );
}
