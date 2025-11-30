export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">Ayush</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Your All-in-One AI Platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              title="🤖 Multi-Modal AI"
              description="Access GPT-4, Claude, Gemini, and more in one place"
            />
            <FeatureCard
              title="🎨 Creative Tools"
              description="Generate images, videos, and audio with AI"
            />
            <FeatureCard
              title="🔗 200+ Integrations"
              description="Connect with all your favorite apps and services"
            />
            <FeatureCard
              title="📋 Productivity"
              description="Tasks, schedules, notes with AI assistance"
            />
            <FeatureCard
              title="💼 Business Tools"
              description="Invoices, payments, analytics, and CRM"
            />
            <FeatureCard
              title="🚀 Cross-Platform"
              description="Web, mobile, and desktop apps"
            />
          </div>

          <button className="mt-12 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
            Get Started Free
          </button>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
