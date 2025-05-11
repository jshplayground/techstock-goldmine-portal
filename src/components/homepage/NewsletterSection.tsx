
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast.success('Thanks for subscribing! You will receive our updates soon.', {
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-16 bg-techstock-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-techstock-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-techstock-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay <span className="text-techstock-purple-light">updated</span></h2>
          <p className="text-gray-300 mb-8">Subscribe to receive the latest investment tips, company analysis, and exclusive course updates.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-gray-700 focus:border-techstock-purple text-white"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-techstock-purple hover:bg-techstock-purple-dark text-white font-semibold"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : "Subscribe"}
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-gray-400">We respect your privacy. We will not share your information with third parties.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
