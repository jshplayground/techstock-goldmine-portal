
import React from 'react';
import { OptimizedTestimonialsSection } from '@/components/blocks/optimized-testimonials';

// Testimonial data
const testimonials = [
  {
    author: {
      name: "María González",
      handle: "@maria_investor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    text: "TechStock Goldmine transformed how I analyze tech companies. Antonio's algorithms are invaluable for identifying high-growth investment opportunities.",
  },
  {
    author: {
      name: "Javier Rodríguez",
      handle: "@javi_finance",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    text: "As a finance professional, I can affirm this course offers a unique perspective not found elsewhere. The valuation section helped me perfect my financial models.",
  },
  {
    author: {
      name: "Laura Sánchez",
      handle: "@laura_tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    text: "The knowledge gained benefits me not just as an investor, but also as a startup founder. Now I understand which metrics truly matter to investors.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@mchen_invest",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    text: "Antonio's framework has given me both the confidence and analytical tools to invest in high-conviction tech stocks during market volatility.",
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-transparent relative">
      <OptimizedTestimonialsSection
        title="What our students say"
        description="Join thousands of successful investors who have transformed their investment approach with TechStock Goldmine"
        testimonials={testimonials}
      />
    </section>
  );
};

export default TestimonialsSection;
