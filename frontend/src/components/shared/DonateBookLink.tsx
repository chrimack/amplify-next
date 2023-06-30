import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

export default function DonateBookLink({
  children,
  className = '',
}: PropsWithChildren<Props>) {
  return (
    <Link
      className={className}
      href="https://www.amazon.com/hz/wishlist/ls/1LOU28RJEYTC7?ref_=wl_fv_le"
      target="_blank"
    >
      {children}
    </Link>
  );
}

export function IconLink() {
  return (
    <DonateBookLink>
      <Image
        src="/book.svg"
        alt="Donate a book through Amazon"
        width={24}
        height={24}
      />
    </DonateBookLink>
  );
}

export function ButtonLink() {
  return (
    <DonateBookLink className="bg-red shadow-red hover:border-yellow rounded-md border-2 p-2 text-white transition-colors hover:shadow-md">
      Donate a book today!
    </DonateBookLink>
  );
}
