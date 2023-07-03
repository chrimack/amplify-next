import Link from 'next/link';
import { PropsWithChildren } from 'react';
import IconLink from './IconLink';
import { Links } from '@/constants/links';
import { Icons } from '@/constants/icons';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { IconProps } from '@/types/icon-props';

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

export function BookIconLink({ color }: IconProps) {
  return (
    <Link href={Links.donate} target="_blank">
      <LibraryBooksOutlinedIcon htmlColor={color} fontSize="large" />
    </Link>
  );
}

export function ButtonLink() {
  return (
    <DonateBookLink className="bg-red shadow-red hover:border-yellow rounded-md border-2 p-2 text-white transition-colors hover:shadow-md">
      Donate a book today!
    </DonateBookLink>
  );
}
