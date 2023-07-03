import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconLinkProps } from '@/types/icon-props';

export default function LinkedInLink({ color, href }: IconLinkProps) {
  return (
    <Link href={href} target="_blank">
      <LinkedInIcon htmlColor={color} fontSize="large" />
    </Link>
  );
}
