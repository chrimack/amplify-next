import Image from 'next/image';
import Link from 'next/link';

export default function InstagramLink() {
  return (
    <Link
      href="https://www.instagram.com/layersofblackhistory/"
      target="_blank"
    >
      <Image src="/instagram.svg" alt="Instagram link" width={24} height={24} />
    </Link>
  );
}
