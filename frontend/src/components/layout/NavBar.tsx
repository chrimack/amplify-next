import { ExternalLinks } from '../shared/ExternalLinks';
import NavLink from './NavLink';

export default function NavBar() {
  return (
    <nav className="bg-red flex flex-row items-center justify-between p-4">
      <ul className="flex gap-4">
        {links.map(({ href, title }) => (
          <NavLink href={href} key={href} title={title} />
        ))}
      </ul>
      <ExternalLinks />
    </nav>
  );
}

const links = [
  { href: '/', title: 'Mission' },
  { href: '/story', title: 'Story' },
  { href: '/team', title: 'Meet the Team' },
  { href: '/partners', title: 'Partners' },
  { href: '/impact', title: 'Impact' },
  { href: '/events', title: 'Events' },
  { href: '/get-involved', title: 'Get Involved' },
];
