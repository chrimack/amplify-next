import { IconLink } from './DonateBookLink';
import InstagramLink from './InstagramLink';

export function ExternalLinks() {
  return (
    <div className="flex gap-4">
      <InstagramLink />
      <IconLink />
    </div>
  );
}
