import { PropsWithChildren } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface Props {
  className: string;
}

export default function Layout({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`${className} flex h-screen max-h-screen flex-col font-sans`}
    >
      <NavBar />
      <main className="border-yellow flex-1 border-[12px] p-10 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
