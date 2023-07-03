import { IconLinkProps, IconProps } from '@/types/icon-props';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function InstagramLink({ color, href }: IconLinkProps) {
  return (
    <Link href={href} target="_blank">
      <InstagramIcon htmlColor={color} fontSize="large" />
    </Link>
  );
}
