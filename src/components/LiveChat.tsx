import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('live_chat_widget');
    window.open('https://wa.me/18566473520?text=Hi! I need help with my academic work. Can you assist me?', '_blank');
    setIsOpen(false); // Close the widget after redirecting
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl border p-6 w-80 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* WhatsApp Redirect Content */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat Support</h3>
              <p className="text-gray-600 mb-4">
                Get instant help from our expert team on WhatsApp
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-800 font-semibold">Online Now</span>
                </div>
                <p className="text-green-700 text-sm">
                  Average response time: Under 2 minutes
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start WhatsApp Chat
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Or call us directly:</p>
                  <a
                    href="tel:+18566473520"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    +1 (856) 647-3520
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Available 24/7 • Instant responses • Expert support
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LiveChat;