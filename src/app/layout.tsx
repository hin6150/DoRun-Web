import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/images/title.png';
import Logo_Gray from '/public/images/title_gray.png';
import Head from 'next/head';
import { NavIcon } from '@/components/nav-icon';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: '두런두런', template: '두런두런 | %s' },
  description:
    '두런두런은 친구들과 함께 목표를 설정하고 경쟁하는 자기개발 어플리케이션으로, 사용자들은 친구들과 함께 목표를 달성하며 서로에게 도전과 자극을 주고받을 수 있습니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-kr" className={notoSansKr.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const NavBar = () => {
  const category = [
    { name: '내 캐릭터 찾기', link: '/character' },
    { name: '고객센터', link: '/customer' },
    { name: '두런두런 소개', link: '/aboutus' },
    { name: '팀원 모집', link: 'team' },
    { name: '로그인', link: 'login' },
  ];

  return (
    <div className="flex-row hidden gap-48 md:flex">
      {category.map((nav, idx) => (
        <Link href={nav.link} key={idx}>
          <div className="text-gray-4">{nav.name}</div>
        </Link>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <div className="fixed z-20 flex items-center w-screen bg-white h-50 md:h-80">
      <div className="inner">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src={Logo} alt="두런두런" className="w-64 md:w-130" />
          </Link>
          <NavBar />
          <NavIcon />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="items-center hidden md:flex h-360 bg-gray-6">
      <div className="inner">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src={Logo_Gray} alt="두런두런" className="w-130" />
          </Link>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
