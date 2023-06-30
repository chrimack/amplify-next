import Link from 'next/link';

interface Props {
  href: string;
  title: string;
}

export default function NavLink({ href, title }: Props) {
  return (
    <li className="text-white">
      <Link className="align-middle hover:underline" href={href}>
        {title}
      </Link>
    </li>
  );
}
