import { PropsWithChildren } from 'react';
import Heading from './Heading';

export default function PageHeading({ children }: PropsWithChildren) {
  return (
    <Heading className="w-fit text-4xl" priority="h1">
      {children}
    </Heading>
  );
}
