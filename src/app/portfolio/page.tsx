import PageLayout from '@cw/components/PageLayout';

export default function Portfolio() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A showcase of my work and projects
          </p>
          
          <div className="bg-gray-100 rounded-lg p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600">
              This portfolio section is currently under development. 
              Check back soon to see my latest projects and work samples.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}