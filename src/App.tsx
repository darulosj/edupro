import React from 'react';
import { useState } from 'react';
import FAQ from './components/FAQ';
import LiveChat from './components/LiveChat';
import QuoteForm from './components/QuoteForm';
import About from './components/About';
import Contact from './components/Contact';
import Guarantees from './components/Guarantees';
import GetStartedModal from './components/GetStartedModal';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MessageCircle,
  GraduationCap,
  Target,
  Shield,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/18566473520?text=Hi! I need help with my academic work. Can you provide more information about your services?', '_blank');
  };

  const handleGetStartedClick = () => {
    setIsGetStartedModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">EduAssist Pro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('guarantees')} className="text-gray-700 hover:text-blue-600 transition-colors">Guarantees</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">+1 (856) 647-3520</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16 relative overflow-hidden">
        {/* Background Art */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-300 rounded-full blur-lg"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight mt-8">
                Expert Academic Support for Your Success
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Get professional help with your online classes, assignments, and exams. 
                Our certified tutors ensure you achieve the grades you deserve while maintaining academic integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={handleGetStartedClick}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Money Back Guarantee
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Plagiarism Free
                </div>
              </div>
            </div>
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30"></div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-tl from-indigo-100 to-transparent rounded-full opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Trusted by Students Worldwide</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Expert Tutors</div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-xl">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive academic support tailored to your needs
            </p>
            {/* Decorative Line */}
            <div className="flex items-center justify-center mt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-service="online-class" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Class Help</h3>
              <p className="text-gray-600 mb-4">Complete online course management including assignments, discussions, and quizzes.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Weekly assignments</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Discussion posts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Quiz completion</li>
              </ul>
            </div>
            <div data-service="exam" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exam Assistance</h3>
              <p className="text-gray-600 mb-4">Expert help with midterms, finals, and standardized tests to ensure top performance.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Test preparation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Practice exams</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Live support</li>
              </ul>
            </div>
            <div data-service="tutoring" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tutoring Services</h3>
              <p className="text-gray-600 mb-4">One-on-one tutoring sessions with subject matter experts.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Personalized sessions</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Flexible scheduling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Progress tracking</li>
              </ul>
            </div>
            <div data-service="assignment" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assignment Help</h3>
              <p className="text-gray-600 mb-4">Professional assistance with essays, research papers, and projects.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Original content</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Proper citations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Timely delivery</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-red-100 to-red-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Urgent Help</h3>
              <p className="text-gray-600 mb-4">Last-minute assistance for tight deadlines and emergency situations.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24-hour delivery</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Quality guaranteed</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proctored Exams</h3>
              <p className="text-gray-600 mb-4">Secure assistance with proctored examinations and assessments.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Secure methods</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Expert handling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Confidential service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Artistic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-xl">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EduAssist Pro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to your academic success with proven results
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-105 transition-transform">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Tutors</h3>
              <p className="text-gray-600">PhD-qualified professionals with years of teaching experience in their respective fields.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-105 transition-transform">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Confidential</h3>
              <p className="text-gray-600">Your privacy is our priority. All interactions and information are kept strictly confidential.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-105 transition-transform">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Delivery</h3>
              <p className="text-gray-600">We guarantee timely completion of all assignments and projects before your deadline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Art */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-100/40 via-orange-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/40 via-indigo-100/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full mb-6 shadow-xl">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied students</p>
            <div className="flex items-center justify-center mt-6">
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"EduAssist Pro helped me maintain my GPA while working full-time. Their tutors are incredibly knowledgeable and supportive."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-600">Business Student</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20"></div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"The quality of work is exceptional. I went from failing to getting A's in my statistics course. Highly recommend!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael R.</div>
                  <div className="text-sm text-gray-600">Psychology Major</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20"></div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"Professional, reliable, and always delivers on time. They saved my semester when I was overwhelmed with coursework."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amanda K.</div>
                  <div className="text-sm text-gray-600">Nursing Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <Guarantees />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Artistic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-xl">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Grades?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who trust EduAssist Pro for their academic needs
          </p>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-24 bg-white/30 rounded-full"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStartedClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Get Started Today
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 backdrop-blur-sm flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Footer Background Art */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-900/20 to-transparent rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">EduAssist Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in academic success. Professional tutoring and assignment help available 24/7.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600/20 p-2 rounded-lg hover:bg-blue-600/30 transition-colors cursor-pointer">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <div className="bg-blue-600/20 p-2 rounded-lg hover:bg-blue-600/30 transition-colors cursor-pointer">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div className="bg-blue-600/20 p-2 rounded-lg hover:bg-blue-600/30 transition-colors cursor-pointer">
                  <MessageCircle className="h-4 w-4 text-blue-400" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => {scrollToSection('services'); window.setTimeout(() => {const element = document.querySelector('[data-service="online-class"]'); element?.scrollIntoView({behavior: 'smooth', block: 'center'});}, 500);}} className="hover:text-white transition-colors text-left">Online Class Help</button></li>
                <li><button onClick={() => {scrollToSection('services'); window.setTimeout(() => {const element = document.querySelector('[data-service="assignment"]'); element?.scrollIntoView({behavior: 'smooth', block: 'center'});}, 500);}} className="hover:text-white transition-colors text-left">Assignment Writing</button></li>
                <li><button onClick={() => {scrollToSection('services'); window.setTimeout(() => {const element = document.querySelector('[data-service="exam"]'); element?.scrollIntoView({behavior: 'smooth', block: 'center'});}, 500);}} className="hover:text-white transition-colors text-left">Exam Assistance</button></li>
                <li><button onClick={() => {scrollToSection('services'); window.setTimeout(() => {const element = document.querySelector('[data-service="tutoring"]'); element?.scrollIntoView({behavior: 'smooth', block: 'center'});}, 500);}} className="hover:text-white transition-colors text-left">Tutoring</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => window.open('https://wa.me/18566473520?text=Hi! I need help with my academic work. Can you provide more information about your services?', '_blank')} className="hover:text-white transition-colors text-left">Live Chat</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button onClick={() => scrollToSection('guarantees')} className="hover:text-white transition-colors">Guarantees</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <button onClick={() => window.open('tel:+18566473520', '_blank')} className="flex items-center hover:text-white transition-colors text-left">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (856) 647-3520
                </button>
                <button onClick={() => window.open('mailto:support@eduassistpro.com?subject=Inquiry about your services', '_blank')} className="flex items-center hover:text-white transition-colors text-left">
                  <Mail className="h-4 w-4 mr-2" />
                  support@eduassistpro.com
                </button>
                <button onClick={() => window.open('https://wa.me/18566473520?text=Hi! I need help with my academic work. Can you assist me?', '_blank')} className="flex items-center hover:text-white transition-colors text-left">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp 24/7
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
            <p>&copy; 2024 EduAssist Pro. All rights reserved. | <button onClick={() => window.open('https://wa.me/18566473520?text=Hi! I would like to know more about your privacy policy and how you protect customer data.', '_blank')} className="hover:text-white transition-colors">Privacy Policy</button> | <button onClick={() => window.open('https://wa.me/18566473520?text=Hi! I would like to review your terms of service. Can you provide more information?', \'_blank')} className="hover:text-white transition-colors">Terms of Service</button></p>
          </div>
        </div>
      </footer>
      
      {/* Live Chat Widget */}
      <LiveChat />
      
      {/* Get Started Modal */}
      <GetStartedModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)} 
      />
    </div>
  );
}

export default App;