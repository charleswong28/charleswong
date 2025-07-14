import Link from 'next/link';
import PageLayout from '@cw/components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Charles Wong
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Welcome to my digital portfolio. I'm passionate about creating 
            innovative solutions and meaningful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Portfolio</h3>
              <p className="text-gray-600">
                Explore my latest projects and professional work samples.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
              <p className="text-gray-600">
                Learn about my background, skills, and professional journey.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-600">
                Ready to collaborate? Let's discuss your next project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
