import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Leaf, Home } from 'lucide-react';

const stats = [
  { id: 1, value: '23', label: 'Years Experience', icon: Award },
  { id: 2, value: '36', label: 'Expert Architects', icon: Users },
  { id: 3, value: '50', label: 'Completed Projects', icon: Home },
  { id: 4, value: '37', label: 'Sustainability Awards', icon: Leaf },
];

export function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="bg-[#2F3E36] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`text-center ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-all duration-1000 delay-${stat.id * 100}`}
              >
                <Icon className="w-8 h-8 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}