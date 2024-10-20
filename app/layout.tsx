import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: '一般社団法人生成AIビジネス推進機構',
  description: 'AIの力で、明日を創る。みんなの手で、未来を拓く。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} ${roboto.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}