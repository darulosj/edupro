import React, { useState } from 'react';
import { ArrowRight, CheckCircle, BookOpen, Users, Award, Clock } from 'lucide-react';
import { insertClient, type Client } from '../lib/supabase';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    academic_level: '',
    deadline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      setSubmitStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await insertClient(formData as Omit<Client, 'id' | 'created_at' | 'updated_at'>);
      // Close modal and redirect to thank you page
      onClose();
      window.location.href = '/thank-you';
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {step === 1 && (
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to EduAssist Pro!</h2>
              <p className="text-xl text-gray-600 mb-8">Let's get you started on your path to academic success</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Users className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Tutors</h3>
                  <p className="text-gray-600">PhD-qualified professionals ready to help</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Award className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Results</h3>
                  <p className="text-gray-600">98% success rate with money-back guarantee</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <Clock className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock assistance when you need it</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
                  <p className="text-gray-600">Plagiarism-free work with unlimited revisions</p>
                </div>
              </div>
              
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Service</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="border-2 border-blue-200 rounded-xl p-6 hover:border-blue-500 cursor-pointer transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Class Help</h3>
                  <p className="text-gray-600 mb-4">Complete course management including assignments and exams</p>
                  <div className="text-blue-600 font-semibold">Starting at $25/week</div>
                </div>
                <div className="border-2 border-green-200 rounded-xl p-6 hover:border-green-500 cursor-pointer transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Assignment Help</h3>
                  <p className="text-gray-600 mb-4">Professional assistance with essays and projects</p>
                  <div className="text-green-600 font-semibold">Starting at $15/assignment</div>
                </div>
                <div className="border-2 border-purple-200 rounded-xl p-6 hover:border-purple-500 cursor-pointer transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Exam Assistance</h3>
                  <p className="text-gray-600 mb-4">Expert help with midterms and finals</p>
                  <div className="text-purple-600 font-semibold">Starting at $30/exam</div>
                </div>
                <div className="border-2 border-orange-200 rounded-xl p-6 hover:border-orange-500 cursor-pointer transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tutoring Sessions</h3>
                  <p className="text-gray-600 mb-4">One-on-one personalized tutoring</p>
                  <div className="text-orange-600 font-semibold">Starting at $20/hour</div>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Needs</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Subject</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Science">Science</option>
                      <option value="English">English</option>
                      <option value="History">History</option>
                      <option value="Business">Business</option>
                      <option value="Psychology">Psychology</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Academic Level</label>
                    <select
                      name="academic_level"
                      value={formData.academic_level}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Level</option>
                      <option value="High School">High School</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Graduate">Graduate</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                  <select
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Deadline</option>
                    <option value="24 Hours">24 Hours</option>
                    <option value="3 Days">3 Days</option>
                    <option value="1 Week">1 Week</option>
                    <option value="2 Weeks">2 Weeks</option>
                    <option value="1 Month">1 Month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h2>
              <p className="text-xl text-gray-600 mb-8">Thank you for choosing EduAssist Pro. We'll contact you within 2 hours with your personalized quote.</p>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Our team reviews your requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-700">We match you with the perfect tutor</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-700">You receive a personalized quote via email</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/18566473520', '_blank')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp Us Now
                </button>
                <button
                  onClick={onClose}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;