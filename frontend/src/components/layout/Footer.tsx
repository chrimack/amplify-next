import { ExternalLinks } from '../shared/ExternalLinks';

export default function Footer() {
  return (
    <footer className="bg-green flex min-h-[3rem] items-center justify-center gap-8">
      <span>&copy;2023 by layersofblackhistory.com</span>
      <ExternalLinks />
    </footer>
  );
}
