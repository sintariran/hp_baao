import Link from 'next/link';
import { Twitter, Linkedin, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BAAO</h3>
            <p className="text-sm">AIの力で、明日を創る。みんなの手で、未来を拓く。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm hover:text-primary">サービス＆ソリューション</Link></li>
              <li><Link href="/resources" className="text-sm hover:text-primary">リソース</Link></li>
              <li><Link href="/events" className="text-sm hover:text-primary">イベント＆コミュニティ</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">私たちについて</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">メールマガジン登録</h3>
            <form className="space-y-2">
              <Input type="email" placeholder="メールアドレス" className="w-full" />
              <Button type="submit" className="w-full">登録</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <p>&copy; 2023 一般社団法人生成AIビジネス推進機構. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary">プライバシーポリシー</Link>
            <Link href="/terms-of-service" className="hover:text-primary">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;