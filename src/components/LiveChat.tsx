import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to EduAssist Pro. How can I help you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Get a quote",
    "How does it work?",
    "Pricing information",
    "Subject availability",
    "Urgent assignment help"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate support response
    setTimeout(() => {
      const supportResponse: Message = {
        id: messages.length + 2,
        text: getAutoResponse(inputMessage),
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAutoResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('quote') || message.includes('price') || message.includes('cost')) {
      return "I'd be happy to help you get a quote! Our pricing starts at $15 per assignment and varies based on subject, academic level, and deadline. Would you like me to connect you with a specialist for a personalized quote?";
    } else if (message.includes('how') || message.includes('work')) {
      return "Great question! Here's how it works: 1) Share your assignment details 2) Get matched with an expert tutor 3) Receive high-quality work on time 4) Review and request revisions if needed. We handle everything while maintaining complete confidentiality.";
    } else if (message.includes('subject')) {
      return "We cover virtually all subjects including Mathematics, Science, English, History, Business, Psychology, Nursing, Computer Science, and many more. What subject do you need help with?";
    } else if (message.includes('urgent') || message.includes('rush')) {
      return "Yes, we specialize in urgent assignments! We can deliver quality work within 24 hours or even shorter timeframes. For fastest response, contact us on WhatsApp at +1 (856) 647-3520.";
    } else {
      return "Thank you for your message! I'm here to help with any questions about our services. For fastest response, contact us on WhatsApp at +1 (856) 647-3520. How else can I assist you today?";
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    handleSendMessage();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Live Support</h3>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-gray-300' : 'bg-blue-100'}`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-gray-600" />
                    ) : (
                      <Bot className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{formatTime(message.timestamp)}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;