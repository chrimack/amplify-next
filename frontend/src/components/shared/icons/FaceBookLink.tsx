import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconLinkProps } from '@/types/icon-props';

export default function FacebookLink({ color, href }: IconLinkProps) {
  return (
    <Link href={href} target="_blank">
      <FacebookIcon htmlColor={color} fontSize="large" />
    </Link>
  );
}
