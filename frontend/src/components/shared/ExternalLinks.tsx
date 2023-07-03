import { Links } from '@/constants/links';
import { BookIconLink } from './icons/DonateBookLink';
import InstagramLink from './icons/InstagramLink';
import { IconProps } from '@/types/icon-props';

export function ExternalLinks({ color }: IconProps) {
  return (
    <div className="flex gap-4">
      <InstagramLink color={color} href={Links.instagram} />
      <BookIconLink color={color} />
    </div>
  );
}
