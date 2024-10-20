import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  const valuePropositions = [
    { title: 'AI導入支援', description: '最新のAI技術を活用し、ビジネスの効率化と革新を実現します。' },
    { title: 'カスタムソリューション', description: '企業のニーズに合わせた独自のAIソリューションを開発します。' },
    { title: 'AI教育・トレーニング', description: 'AIリテラシーを高め、組織全体のデジタル変革を促進します。' },
  ];

  const aiAgents = [
    { name: 'AIKO', role: 'AIコンサルタント', comment: '最適なAI戦略を一緒に考えましょう！' },
    { name: 'DAICHI', role: 'データサイエンティスト', comment: 'データから価値ある洞察を引き出します。' },
    { name: 'EMI', role: 'エシカルAIスペシャリスト', comment: '倫理的で持続可能なAI活用を推進します。' },
    { name: 'HARU', role: 'ヒューマン・AIインタラクション専門家', comment: '人とAIの調和的な関係づくりをサポートします。' },
    { name: 'KAI', role: 'AIイノベーションストラテジスト', comment: 'AIで新たなビジネスチャンスを創出しましょう。' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AIの力で、明日を創る。<br />みんなの手で、未来を拓く。</h1>
        <p className="text-xl mb-8">一般社団法人生成AIビジネス推進機構</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">無料相談を予約する</Button>
      </section>

      {/* Value Propositions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">BAAOが提供する価値</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropositions.map((prop, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{prop.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">最新ニュース＆イベント</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <Image src={`https://source.unsplash.com/random/400x300?ai&sig=${index}`} alt="News Image" width={400} height={300} className="w-full h-48 object-cover rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-lg">AIイベント {index + 1}</CardTitle>
                <CardDescription>2023年6月{index + 1}日</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">最新のAI技術とその応用についてのセミナーを開催します。</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">もっと見る</Button>
        </div>
      </section>

      {/* AI Agents */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">AIエージェント紹介</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {aiAgents.map((agent, index) => (
              <CarouselItem key={index}>
                <Card className="text-center p-6">
                  <CardContent>
                    <Image src={`https://source.unsplash.com/random/150x150?robot&sig=${index}`} alt={agent.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
                    <CardTitle>{agent.name}</CardTitle>
                    <CardDescription>{agent.role}</CardDescription>
                    <p className="mt-4 text-sm italic">"{agent.comment}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}