import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4153a5] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-['Inter:Black',sans-serif] font-black text-[48px] md:text-[64px] mb-6">
            Contact Us
          </h1>
          <p className="text-[20px] md:text-[24px] max-w-[900px] mx-auto leading-relaxed">
            Get in touch with us to learn more about our work, explore partnership opportunities, 
            or find out how you can support our mission
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[32px] mb-6">
                Send Us a Message
              </h2>
              
              {submitted && (
                <div className="bg-[#62a456] text-white p-4 rounded-lg mb-6">
                  <p className="font-black">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-black text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4153a5]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-black text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4153a5]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-black text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4153a5]"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="donation">Donation / Support</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="information">General Information</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-black text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4153a5] resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4153a5] hover:bg-[#2c3e50] text-white font-['Inter:Black',sans-serif] font-black text-[20px] px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[32px] mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-[#4153a5] text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[18px] mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      Umodzi Empowerment Organization<br />
                      P/O box 1003<br />
                      Luwinga<br />
                      Mzuzu
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-[#62a456] text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[18px] mb-2">Phone</h3>
                    <a 
                      href="tel:+265996846187"
                      className="text-gray-700 hover:text-[#4153a5] transition-colors"
                    >
                      +265 996 846 187
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-[#e67e22] text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[18px] mb-2">Email</h3>
                    <a 
                      href="mailto:info@umodziempower.org"
                      className="text-gray-700 hover:text-[#4153a5] transition-colors break-all"
                    >
                      info@umodziempower.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#4153a5] text-white p-8 rounded-lg">
                <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-black">Monday - Friday:</span>
                    <span>8:00 AM - 4:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-black">Saturday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-black">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12">
            Ways to Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#4153a5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] mb-3">
                Partner With Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborate with us to create sustainable impact in communities across Kasungu District.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#62a456] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] mb-3">
                Support Our Work
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your contributions help us expand our programs and reach more communities in need.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#e67e22] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] mb-3">
                Volunteer
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Join our team of dedicated volunteers making a difference in youth empowerment and climate action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
