import PageLayout from '@cw/components/PageLayout';

export default function About() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Get to know the person behind the code
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-gray-500 text-lg">Photo Coming Soon</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Hello, I'm Charles
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Welcome to my digital space! This section will soon feature my 
                  professional journey, skills, and the experiences that have shaped 
                  my career in technology.
                </p>
                <p>
                  I'm passionate about creating meaningful digital experiences and 
                  building solutions that make a difference.
                </p>
                <p>
                  Connect with me on{' '}
                  <a 
                    href="https://www.linkedin.com/in/hkcharleswong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>{' '}
                  to learn more about my professional background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}