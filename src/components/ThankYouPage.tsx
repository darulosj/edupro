import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, MessageCircle, Phone, Mail, Clock, Award, Users } from 'lucide-react';
import { trackThankYouPageView, trackWhatsAppClick, trackPhoneCall } from '../lib/analytics';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Track thank you page view
    trackThankYouPageView('quote_request');
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('thank_you_page');
    window.open('https://wa.me/18566473520?text=Hi! I just submitted a quote request and wanted to follow up.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You for Your Request!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've received your quote request and our expert team is already reviewing your requirements.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review & Analysis</h3>
              <p className="text-gray-600">Our team reviews your requirements and matches you with the perfect expert tutor.</p>
              <div className="text-sm text-blue-600 font-medium mt-2">Within 30 minutes</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Quote</h3>
              <p className="text-gray-600">You'll receive a detailed quote with pricing, timeline, and tutor information.</p>
              <div className="text-sm text-green-600 font-medium mt-2">Within 2 hours</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Started</h3>
              <p className="text-gray-600">Once approved, your dedicated tutor begins working on your academic success.</p>
              <div className="text-sm text-purple-600 font-medium mt-2">Same day start</div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Immediate Assistance?</h2>
          <p className="text-gray-600 text-center mb-8">
            Don't wait for our email response. Get instant help through our preferred contact methods.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl transition-colors flex flex-col items-center"
            >
              <MessageCircle className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">WhatsApp Chat</h3>
              <p className="text-sm text-green-100">Instant response</p>
              <p className="text-sm font-medium mt-2">+1 (856) 647-3520</p>
            </button>
            <button 
              onClick={() => window.open('tel:+18566473520', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-colors flex flex-col items-center"
            >
              <Phone className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Call Direct</h3>
              <p className="text-sm text-blue-100">Speak with expert</p>
              <p className="text-sm font-medium mt-2">+1 (856) 647-3520</p>
            </button>
            <button 
              onClick={() => window.open('mailto:support@eduassistpro.com?subject=Follow-up on Quote Request', '_blank')}
              className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-xl transition-colors flex flex-col items-center"
            >
              <Mail className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-purple-100">Detailed questions</p>
              <p className="text-sm font-medium mt-2">support@eduassistpro.com</p>
            </button>
          </div>
        </div>

        {/* Why Choose Us Reminder */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Students Choose EduAssist Pro</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Expert Tutors</h3>
              <p className="text-sm text-blue-100">PhD-qualified professionals</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-blue-100">Always available to help</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">98% Success Rate</h3>
              <p className="text-sm text-blue-100">Proven track record</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibent mb-2">15,000+ Students</h3>
              <p className="text-sm text-blue-100">Trusted worldwide</p>
            </div>
          </div>
        </div>

        {/* Urgent Help Section */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Have an Urgent Deadline?</h2>
          <p className="text-red-700 mb-6">
            Need help with an assignment due in less than 24 hours? We specialize in urgent academic assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/18566473520?text=Hi! I have an urgent assignment that needs immediate help. Can you assist me?', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp for Urgent Help
            </button>
            <button 
              onClick={() => window.open('tel:+18566473520', '_blank')}
              className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +1 (856) 647-3520
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowRight className="mr-2 h-5 w-5 transform rotate-180" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;