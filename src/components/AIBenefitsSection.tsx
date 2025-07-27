import React, { useRef } from "react";

const AIBenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="ai-benefits" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>Smart Automation</span>
            </div>
            <h2 className="section-title mb-6">Beyond Basic Automation to Intelligent Solutions</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our AI systems don't just follow rules—they learn, adapt, and improve over time. 
              This means your automation gets smarter, handling edge cases and unexpected scenarios 
              that traditional automation would miss.
            </p>
            <ul className="space-y-4">
              {[
                "Learns from your business patterns and adapts to changes automatically",
                "Handles complex decision-making that requires contextual understanding",
                "Identifies new opportunities for optimization as your business grows",
                "Provides intelligent insights and recommendations for strategic decisions"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Removed image container to focus on content */}
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;
