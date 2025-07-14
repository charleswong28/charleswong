import PageLayout from '@cw/components/PageLayout';

export default function Contact() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Let's connect and discuss opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a 
                      href="mailto:contact@charleswong.dev"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      contact@charleswong.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm">💼</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/hkcharleswong/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/hkcharleswong
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send a Message
              </h2>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-600 text-center">
                  Contact form coming soon! 
                </p>
                <p className="text-gray-600 text-center mt-4">
                  In the meantime, feel free to reach out via email or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}