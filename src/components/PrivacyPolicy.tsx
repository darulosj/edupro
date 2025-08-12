import React from 'react';
import { Shield, Eye, Lock, Database, X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
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
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Last Updated:</strong> January 12, 2025
            </p>
          </div>

          {/* Introduction */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Eye className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
              1. Introduction
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              At EduAssist Pro, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you use our educational support services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We understand the sensitive nature of educational information and maintain the highest standards of confidentiality and data protection.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              2. Information We Collect
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2.1 Personal Information</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Academic institution and level of study</li>
                  <li>Subject areas and course information</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2.2 Academic Information</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Assignment details and requirements</li>
                  <li>Course materials and resources</li>
                  <li>Academic deadlines and schedules</li>
                  <li>Learning management system access (when provided)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2.3 Technical Information</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>IP address and browser information</li>
                  <li>Website usage patterns and preferences</li>
                  <li>Communication logs and timestamps</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Service Delivery</h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• Providing educational support services</li>
                  <li>• Matching you with appropriate tutors</li>
                  <li>• Completing assignments and projects</li>
                  <li>• Communicating about your orders</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Account Management</h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Creating and maintaining your account</li>
                  <li>• Processing payments and billing</li>
                  <li>• Providing customer support</li>
                  <li>• Sending service updates</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Quality Improvement</h4>
                <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                  <li>• Improving our services and website</li>
                  <li>• Analyzing usage patterns</li>
                  <li>• Training our tutors</li>
                  <li>• Developing new features</li>
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Legal Compliance</h4>
                <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                  <li>• Complying with legal requirements</li>
                  <li>• Preventing fraud and abuse</li>
                  <li>• Protecting our rights and property</li>
                  <li>• Responding to legal requests</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h3>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">We DO NOT Share Your Information</h4>
              <p className="text-red-700 dark:text-red-300 text-sm">
                We maintain strict confidentiality and do not sell, rent, or share your personal or academic information with third parties for marketing purposes.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Limited Sharing Scenarios</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  We may share information only in these specific circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                  <li><strong>Service Providers:</strong> With trusted partners who help us deliver services (under strict confidentiality agreements)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Safety Protection:</strong> To protect the safety and rights of our users and staff</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
              5. Data Security
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security Measures</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Technical Safeguards</h5>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Encrypted data storage</li>
                      <li>• Secure server infrastructure</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Access Controls</h5>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>• Multi-factor authentication</li>
                      <li>• Role-based access permissions</li>
                      <li>• Regular access reviews</li>
                      <li>• Employee confidentiality agreements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. Data Retention</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Retention Periods</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Account Information:</strong> Retained while your account is active and for 2 years after closure</li>
                  <li><strong>Academic Work:</strong> Stored for 1 year after completion for quality assurance</li>
                  <li><strong>Communication Records:</strong> Kept for 3 years for customer service purposes</li>
                  <li><strong>Payment Information:</strong> Retained as required by financial regulations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Deletion</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You can request deletion of your personal information at any time. We will securely delete your data within 30 days, except where retention is required by law.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. Your Privacy Rights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-1">Access</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Request a copy of your personal information</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 text-sm mb-1">Correction</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Update or correct inaccurate information</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-1">Deletion</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Request deletion of your personal data</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-1">Portability</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Export your data in a readable format</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-1">Restriction</h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">Limit how we process your information</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-1">Objection</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Object to certain processing activities</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">8. Cookies and Tracking</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cookie Usage</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  We use cookies and similar technologies to improve your experience:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Security Cookies:</strong> Protect against fraud and abuse</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cookie Control</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Us</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or want to exercise your privacy rights, contact us:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Privacy Officer:</strong> privacy@eduassistpro.com</p>
                <p><strong>General Support:</strong> support@eduassistpro.com</p>
                <p><strong>Phone:</strong> +1 (856) 647-3520</p>
                <p><strong>WhatsApp:</strong> +1 (856) 647-3520</p>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">Policy Updates</h3>
              <p className="text-green-800 dark:text-green-200 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or website notice. Your continued use of our services after updates constitutes acceptance of the revised policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;