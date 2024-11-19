import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Shield, Leaf, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We maintain the highest standards in architectural design and execution.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmental responsibility is at the core of every project we undertake.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients to bring their architectural visions to life.',
  },
];

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`space-y-16 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000`}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600">
              With over two decades of experience, Evergreen Architex has been at the forefront
              of sustainable architectural design. Our team of expert architects combines
              innovation with environmental responsibility to create spaces that inspire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`text-center p-6 rounded-xl bg-gray-50 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } transition-all duration-1000 delay-${index * 200}`}
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}