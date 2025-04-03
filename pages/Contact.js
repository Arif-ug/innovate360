import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Example() {
  const [formData, setFormData] = useState({
    name: '',
    institute: '',
    department: '',
    otherDepartment: '',
    researchTopic: '',
    phone: '',
    email: '',
    service: '',
    otherService: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({
          name: '',
          institute: '',
          department: '',
          otherDepartment: '',
          researchTopic: '',
          phone: '',
          email: '',
          service: '',
          otherService: ''
        });
      } else {
        setFormStatus('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 bg-gray-100">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with Innovate360 for expert guidance on engineering projects, research, and academic excellence." />
        <meta name="keywords" content="Innovate360 contact, engineering projects support, academic assistance, research guidance, IoT, Machine Learning, Web Development" />
        <meta name="author" content="Innovate360 Team" />
        <meta name="description" content="Discover the core objectives of Innovate360, empowering engineers with innovative projects and academic excellence." />
        <meta name="keywords" content="Innovate360, engineering projects, academic excellence, research, IoT, Machine Learning, Web Development" />
        <meta name="author" content="Innovate360 Team" />
        <meta name="description" content="Explore various project fields at Innovate360" />
        <link rel="icon" href="/images/logo.png"/>
      </Head>
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
        <Header />
      </header>

      <main className="flex-grow bg-gray-100 dark:bg-gray-900 px-6 py-12 sm:py-20 mt-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-orange-500">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-justify text-black dark:text-gray-300 md:pl-12 md:pr-10 lg:pl-12 lg:pr-10">
            Let's turn ideas into reality together! Whether you're looking to
            collaborate, have a question, or just want to say hello, I'm always
            excited to connect. Drop me a message, and let's start a
            conversation!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-orange-500">
              Let's Connect
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" />
              <input type="text" name="institute" value={formData.institute} onChange={handleChange} placeholder="Institute Name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" />

              <select name="department" value={formData.department} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400">
                <option value="">Select Department</option>
                <option>Electrical Engineering</option>
                <option>Electronics and Communication Engineering</option>
                <option>Computer Science Engineering</option>
                <option>Instrumentation</option>
                <option>Artificial Intelligence</option>
                <option>Robotics and Automation Engineering</option>
                <option>Data Science</option>
                <option>Others</option>
              </select>
              {formData.department === 'Others' && (
                <input type="text" name="otherDepartment" value={formData.otherDepartment} onChange={handleChange} placeholder="Please specify your department" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" />
              )}
              <input type="text" name="researchTopic" value={formData.researchTopic} onChange={handleChange} placeholder="Research Topic" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" />
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400">
                <option value="">Select Service</option>
                <option>Research Assistance</option>
                <option>Model Integration</option>
                <option>Thesis Writing</option>
                <option>Coding Assistance</option>
                <option>Complete Package</option>
                <option>Others</option>
              </select>

              {formData.service === 'Others' && (
                <input type="text" name="otherService" value={formData.otherService} onChange={handleChange} placeholder="Please specify the details" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" />
              )}
              <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 transition">Submit</button>
              {formStatus && <p className="mt-4 text-center text-sm text-gray-300">{formStatus}</p>}
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-white dark:bg-gray-900 shadow-lg border p-6 rounded-lg text-center">
              <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-2" />
              <h2 className="font-semibold text-lg dark:text-gray-50">Email Us</h2>
              <p className="text-gray-300">mr.debbarmaoffice@gmail.com</p>
            </div>
            <div className="bg-white dark:bg-gray-900 shadow-lg border p-6 rounded-lg text-center">
              <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-2" />
              <h2 className="font-semibold text-lg dark:text-gray-50">Email Us</h2>
              <p className="text-gray-300">innovate360ind@gmail.com</p>
            </div>
            <div className="bg-white dark:bg-gray-900 shadow-lg border p-6 rounded-lg text-center">
              <FaPhoneAlt className="text-blue-500 text-3xl mx-auto mb-2" />
              <h2 className="font-semibold text-lg dark:text-gray-50">Call Us</h2>
              <p className="text-gray-300">+91-9366329139</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-900 shadow mt-10">
        <Footer />
      </footer>
    </div>
  );
}
