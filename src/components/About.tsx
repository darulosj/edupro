import React from 'react';
import { Users, Award, Clock, Shield, Target, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About EduAssist Pro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of dedicated educators and professionals committed to helping students achieve academic excellence through personalized support and expert guidance.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2018, EduAssist Pro emerged from a simple observation: students needed more than just textbooks and lectures to succeed in today's competitive academic environment. Our founders, a group of PhD educators and industry professionals, recognized the gap between traditional education and the personalized support students truly needed.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              What started as a small tutoring service has grown into a comprehensive educational support platform, helping over 15,000 students across various disciplines achieve their academic goals. We've maintained our core values of integrity, excellence, and personalized attention while scaling our services to meet growing demand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to be a trusted partner for students worldwide, offering 24/7 support and maintaining a 98% success rate in helping students improve their grades and academic performance.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15K+</div>
                <div className="text-gray-600">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Expert Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To democratize access to high-quality educational support, ensuring every student has the opportunity to reach their full academic potential regardless of their circumstances.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600">We strive for the highest standards in everything we do, from our tutoring services to customer support.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-600">We maintain the highest ethical standards while helping students learn and grow academically.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600">We provide personalized, compassionate support tailored to each student's unique needs and goals.</p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our tutors are carefully selected professionals with advanced degrees and extensive teaching experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              DR
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h4>
            <p className="text-blue-600 font-medium mb-2">Mathematics & Statistics</p>
            <p className="text-sm text-gray-600">PhD in Mathematics, 15+ years teaching experience</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              PR
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Prof. Michael Chen</h4>
            <p className="text-blue-600 font-medium mb-2">Computer Science</p>
            <p className="text-sm text-gray-600">PhD in Computer Science, Former Google Engineer</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              DR
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Dr. Emily Rodriguez</h4>
            <p className="text-blue-600 font-medium mb-2">Psychology & Social Sciences</p>
            <p className="text-sm text-gray-600">PhD in Psychology, Licensed Clinical Psychologist</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              PR
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Prof. David Wilson</h4>
            <p className="text-blue-600 font-medium mb-2">Business & Economics</p>
            <p className="text-sm text-gray-600">MBA Harvard, Former McKinsey Consultant</p>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
            <p className="text-xl text-gray-600">
              We maintain the highest standards through rigorous quality control processes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Matching</h4>
                <p className="text-gray-600">Each assignment is matched with a tutor who has specific expertise in the subject area and academic level.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Review</h4>
                <p className="text-gray-600">All work undergoes multiple quality checks including plagiarism detection and academic standard verification.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h4>
                <p className="text-gray-600">We offer unlimited revisions and a money-back guarantee to ensure complete satisfaction with our services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;