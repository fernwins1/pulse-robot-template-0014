import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Their AI automation eliminated 40 hours of manual data entry per week and helped us identify $200K in missed revenue opportunities. ROI was clear within 2 months.",
  author: "Sarah Martinez",
  role: "CEO, Notifyl",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "We went from manually processing 50 leads per day to automatically qualifying and following up with 500+ prospects. Sales increased by 180% in 6 months.",
  author: "Michael Chen",
  role: "Sales Director, Botstock Cook Group",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The AI chatbot handles 80% of our customer inquiries perfectly, reduced response time from hours to seconds, and our customer satisfaction scores jumped 40%.",
  author: "Lisa Thompson",
  role: "Customer Success Manager, Retailer Live",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "As a small business, we thought AI was out of reach. Now our inventory management is fully automated, saving 20 hours weekly and reducing stockouts by 90%.",
  author: "David Rodriguez",
  role: "Operations Manager, Discover Kazakhstan",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" 
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Success Stories</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-4 text-left">Real Results from Real Businesses</h2>
        <p className="text-xl text-gray-700 mb-12 text-left max-w-3xl">
          See how companies like yours are using AI automation to eliminate bottlenecks, scale operations, and multiply their revenue.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              gradient={testimonial.gradient} 
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-pulse-500 mb-2">200+</div>
            <div className="text-gray-600">Businesses Automated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pulse-500 mb-2">2.3x</div>
            <div className="text-gray-600">Average Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pulse-500 mb-2">40hrs</div>
            <div className="text-gray-600">Average Weekly Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pulse-500 mb-2">$2M+</div>
            <div className="text-gray-600">Revenue Generated for Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
