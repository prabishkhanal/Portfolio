import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnqrqkz");

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <svg 
                className="w-8 h-8 text-blue-500 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a 
                href="mailto:prabishkhanal@gmail.com" 
                className="text-blue-400 hover:text-blue-500 transition-colors"
              >
                prabishkhanal@gmail.com
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <svg 
                className="w-8 h-8 text-blue-500 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" 
                />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">Social</h3>
              <a 
                href="https://linkedin.com/in/prabishkhanal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-500 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="mb-6">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 mt-1 text-sm"
              />
            </div>
            
            <div className="mb-6">
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 resize-none"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 mt-1 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {state.submitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {state.succeeded && (
              <div className="mt-4 p-4 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg text-green-500 text-center">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;