import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Ruler, Building2, PaintBucket, Leaf, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Ruler,
    title: 'Architectural Design',
    description: 'Custom residential and commercial architectural designs that blend form and function.',
    price: 'From $5,000',
  },
  {
    icon: Building2,
    title: 'Interior Planning',
    description: 'Comprehensive interior design services for optimal space utilization and aesthetics.',
    price: 'From $2,500',
  },
  {
    icon: PaintBucket,
    title: 'Renovation',
    description: 'Modern renovation solutions that breathe new life into existing structures.',
    price: 'From $10,000',
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Eco-friendly architectural solutions for a sustainable future.',
    price: 'From $7,500',
  },
];

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600">
            We offer comprehensive architectural services tailored to your needs,
            from initial concept to final construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } delay-${index * 100}`}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <button className="text-primary hover:text-primary/80 inline-flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}