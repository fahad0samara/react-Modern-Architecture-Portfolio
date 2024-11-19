import React, { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { ConsultationForm } from './components/ConsultationForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader2 } from 'lucide-react';

const Projects = React.lazy(() => import('./components/Projects'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ErrorBoundary>
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          <About />
          <Testimonials />
          <ConsultationForm />
          <Contact />
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;