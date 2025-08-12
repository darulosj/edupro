import React from 'react';
import { Shield, FileText, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Last Updated */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Last Updated:</strong> January 12, 2025
            </p>
          </div>

          {/* Introduction */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              1. Introduction
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Welcome to EduAssist Pro. These Terms of Service ("Terms") govern your use of our educational support services, including online class assistance, tutoring, assignment help, and exam support. By using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              EduAssist Pro is committed to providing high-quality educational support while maintaining academic integrity and ethical standards.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Services Description</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              EduAssist Pro provides the following educational support services:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Online Class Help:</strong> Assistance with online course management, assignments, and discussions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Assignment Writing:</strong> Professional help with essays, research papers, and projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Exam Assistance:</strong> Support with test preparation and exam completion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Tutoring Services:</strong> One-on-one educational support and guidance</span>
              </li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. User Responsibilities</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3.1 Account Information</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You must provide accurate, current, and complete information when creating an account or requesting services. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3.2 Academic Integrity</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You agree to use our services as learning aids and educational support. You are responsible for understanding and complying with your institution's academic integrity policies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3.3 Prohibited Uses</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">You agree not to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Share your account credentials with others</li>
                  <li>Attempt to reverse engineer or copy our methods</li>
                  <li>Harass or abuse our staff or other users</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Payment Terms</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">4.1 Pricing</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Service fees are determined based on subject complexity, academic level, deadline, and scope of work. All prices are quoted in USD and are subject to change with notice.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">4.2 Payment Methods</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We accept major credit cards, PayPal, and bank transfers. Payment is typically required before work begins unless other arrangements are made.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">4.3 Refund Policy</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We offer a money-back guarantee for unsatisfactory work. Refund requests must be made within 14 days of delivery and must include specific reasons for dissatisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Confidentiality */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Privacy and Confidentiality</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">5.1 Information Protection</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We maintain strict confidentiality of all client information, including personal details, academic records, and project materials. Your information will never be shared with third parties without your consent.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">5.2 Data Security</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls.
                </p>
              </div>
            </div>
          </section>

          {/* Service Guarantees */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. Service Guarantees</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Quality Guarantee</h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  All work is completed by qualified professionals and undergoes quality review before delivery.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Timely Delivery</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  We guarantee on-time delivery of all assignments and projects according to agreed deadlines.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Plagiarism-Free Work</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  All content is original and checked through advanced plagiarism detection software.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Unlimited Revisions</h4>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  We provide free revisions until you are completely satisfied with the work.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
              7. Limitation of Liability
            </h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                EduAssist Pro's liability is limited to the amount paid for the specific service. We are not responsible for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Academic consequences resulting from use of our services</li>
                <li>Technical issues beyond our control</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of data or academic standing</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">8. Termination</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Either party may terminate the service agreement at any time. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Payment for completed work remains due</li>
              <li>Ongoing projects may be completed or refunded</li>
              <li>Confidentiality obligations continue</li>
              <li>Access to services will be discontinued</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">9. Changes to Terms</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on our website and take effect immediately. Continued use of our services constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Information</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Email:</strong> support@eduassistpro.com</p>
                <p><strong>Phone:</strong> +1 (856) 647-3520</p>
                <p><strong>WhatsApp:</strong> +1 (856) 647-3520</p>
                <p><strong>Address:</strong> EduAssist Pro, Educational Services Division</p>
              </div>
            </div>
          </section>

          {/* Agreement */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">Agreement Acknowledgment</h3>
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                By using EduAssist Pro services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;