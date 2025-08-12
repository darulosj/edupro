import React from 'react';
import { Shield, RefreshCw, Clock, Award, CheckCircle, Star } from 'lucide-react';

const Guarantees: React.FC = () => {
  return (
    <section id="guarantees" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Guarantees</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind our work with comprehensive guarantees that protect your investment and ensure your satisfaction.
          </p>
        </div>

        {/* Main Guarantees */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-green-50 rounded-xl p-8 text-center border border-green-200">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Money Back Guarantee</h3>
            <p className="text-gray-600 mb-4">100% refund if you're not completely satisfied with our service.</p>
            <div className="text-green-600 font-semibold">100% Refund</div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-200">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Delivery</h3>
            <p className="text-gray-600 mb-4">Your assignments delivered before the deadline, every time.</p>
            <div className="text-blue-600 font-semibold">Always On Time</div>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 text-center border border-purple-200">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Grade Guarantee</h3>
            <p className="text-gray-600 mb-4">We guarantee improved grades or your money back.</p>
            <div className="text-purple-600 font-semibold">Better Grades</div>
          </div>

          <div className="bg-orange-50 rounded-xl p-8 text-center border border-orange-200">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy Protection</h3>
            <p className="text-gray-600 mb-4">Your personal information and academic records are 100% secure.</p>
            <div className="text-orange-600 font-semibold">Fully Confidential</div>
          </div>
        </div>

        {/* Detailed Guarantee Information */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Guarantees Mean</h3>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Money Back Guarantee</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Full Refund Policy</p>
                    <p className="text-gray-600">If you're not satisfied with our service, we'll provide a complete refund within 14 days.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">No Questions Asked</p>
                    <p className="text-gray-600">Simple refund process without complicated procedures or lengthy explanations required.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Partial Refunds Available</p>
                    <p className="text-gray-600">For partially completed work, we offer prorated refunds based on work completed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Unlimited Revisions</p>
                    <p className="text-gray-600">We'll revise your work until it meets your exact requirements and expectations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Plagiarism-Free Work</p>
                    <p className="text-gray-600">All work is original and checked through advanced plagiarism detection software.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Expert Quality Control</p>
                    <p className="text-gray-600">Every assignment is reviewed by subject matter experts before delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Guarantee Terms & Conditions</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Requirements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Request must be made within 14 days of delivery
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Original assignment requirements must be followed
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Communication must be maintained throughout the process
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Feedback must be provided for revision requests
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Refund Process</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Contact support within guarantee period
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Provide specific reasons for dissatisfaction
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Allow opportunity for revision before refund
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Refund processed within 5-7 business days
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction Stats */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Our Track Record</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt;2%</div>
              <div className="text-blue-100">Refund Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.open('https://wa.me/18566473520?text=Hi! I want to learn more about your guarantees and how they work.', '_blank')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us About Our Guarantees
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;