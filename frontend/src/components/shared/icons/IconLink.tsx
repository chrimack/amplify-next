import type { Icon } from '@/types/icon-props';
import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributeAnchorTarget } from 'react';

interface Props {
  className?: string;
  href: string;
  icon: Icon;
  target?: HTMLAttributeAnchorTarget;
}

export default function IconLink({ className, href, icon, target }: Props) {
  return (
    <Link className={className} href={href} target={target}>
      <Image src={icon} alt="link" width={24} height={24} />
    </Link>
  );
}
