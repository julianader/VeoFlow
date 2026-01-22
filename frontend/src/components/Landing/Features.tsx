import { Video, Zap, Share2, Settings } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'AI Video Generation',
    description: 'Create professional videos using advanced AI technology',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate videos in seconds, not hours',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share and collaborate with your team instantly',
  },
  {
    icon: Settings,
    title: 'Full Customization',
    description: 'Control every aspect of your video output',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to create professional videos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-8 shadow-sm">
              <feature.icon className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}