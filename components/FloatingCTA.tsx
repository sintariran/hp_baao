"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      <Button size="sm" className="rounded-full">
        <Download className="mr-2 h-4 w-4" /> 資料ダウンロード
      </Button>
      <Button size="sm" className="rounded-full">
        <MessageCircle className="mr-2 h-4 w-4" /> お問い合わせ
      </Button>
    </div>
  );
};

export default FloatingCTA;