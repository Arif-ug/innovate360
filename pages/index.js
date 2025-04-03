import Head from 'next/head'; // Import Head from Next.js
import Header from '../components/Header'; // Ensure this is a valid React component
import Fields from '../components/Fields';
import Footer from '../components/Footer'; // Ensure this is a valid React component
import { useEffect } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import Link from 'next/link'; // Import Link from Next.js
import { FaSearch, FaPencilAlt, FaCog, FaCheckCircle, FaClock } from 'react-icons/fa';
export default function Home() {
  return (
    <div>
      {/* Page Metadata */}
      <Head>
        <title>Home</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full  bg-white shadow z-50">
        <Header />
      </header>

      {/* dark:bg-gray-900 */}
      {/* Main Content */}
      <main className="dark:bg-gray-900 bg-gray-100 min-h-screen  items-center justify-center">
        <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/bg1.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold">Your Academic Projects, <span className="text-orange-500">Our Expertise</span></h1>
            <p className="mt-4 text-lg md:text-xl">We're here to take care of your projects, so you can concentrate on acing your grades with confidence.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="/Contact" className="bg-orange-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-orange-600 transition">Contact Now</Link>
              <Link href="/Objectives" className="bg-white px-6 py-3 rounded-md text-orange-500 font-semibold hover:bg-gray-200 transition">Services</Link>
            </div>
          </div>
        </section>
        <div className="lg:pt-12 dark:bg-gray-900 bg-gray-100 min-h-screen  items-center justify-center px-6 lg:px-12">
          <section className="lg:px-6 flex flex-col lg:flex-row items-center justify-between services">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {/* <div className="flex"> */}
              <div className="">
                <div className="flex justify-center pt-4">
                  <img src="/images/graduation.jpg" alt="Graduation" className="rounded-lg shadow-lg lg:w-full lg:h-64 object-cover w-full h-32" />
                </div>
                <div className="flex justify-center pt-4">
                  <img src="/images/student.jpg" alt="Student with diploma" className="rounded-lg shadow-lg w-full h-32 lg:w-full lg:h-64 object-cover" />
                </div>
              </div>
              <div className="mt-[5rem] lg:mt-[9rem]">
                <div className="flex justify-center ">
                  <img src="/images/hall.jpg" alt="Lecture Hall" className="rounded-lg shadow-lg lg:w-full lg:h-64 object-cover w-full h-32 items-center " />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
              <h3 className="text-lg font-semibold text-gray-500">Why Choose Us</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Unlock Full Project Marks with <span className="text-orange-500">Innovate360</span></h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">At Innovate360, we're your secret weapon for academic success. With our expert team by your side, you can turn your college projects into full marks and top grades. Our services ensure your project not only meets but exceeds the highest academic standards. Trust us to be your partner in achieving academic excellence.</p>
              <div className="mt-6">
                <Link href="/Objectives" className="bg-orange-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-orange-600 transition">Explore Our Services</Link>
              </div>
            </div>
          </section>
        </div>
        <div className="dark:bg-gray-900 bg-gray-100 min-h-screen  items-center justify-center  lg:px-12">
          <section className="bg-orange-50 py-16 px-6 dark:bg-gray-900">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300">Our Process</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 dark:text-gray-300">The Path to Excellence</h2>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto dark:text-gray-400">
                Our streamlined process ensures efficient project execution, seamless collaboration, and exceptional results.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 dark:bg-gray-800 dark:text-gray-300">
                <FaSearch className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 1: Consultation</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  We begin with a thorough consultation to understand your project's specific requirements, academic objectives, and any unique needs you may have.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 dark:bg-gray-800 dark:text-gray-300">
                <FaPencilAlt className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 2: Project Planning</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  After understanding your project, we create a personalized project plan outlining objectives, milestones, and resource allocation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 dark:bg-gray-800 dark:text-gray-300">
                <FaCog className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 3: Expert Assignment</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Our team of experts is carefully assigned to your project, ensuring the highest academic standards and collaborative feedback.
                </p>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 dark:bg-gray-800 dark:text-gray-300">
                <FaCheckCircle className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 4: Quality Assurance</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Prior to delivery, every project undergoes a stringent quality assurance process, ensuring error-free and structured content aligned with academic standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 dark:bg-gray-800 dark:text-gray-300">
                <FaClock className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 5: Timely Delivery</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  We value punctuality and understand deadlines. Your project is delivered promptly with ample time for review and final adjustments.
                </p>
              </div>
            </div>
          </section>
          <section className="">
            {/* <div className="max-w-screen-xl mx-auto md:px-8"> */}
            <div className="py-6">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                <div className="flex-1 w-full lg:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="w-full h-auto rounded-lg"
                    alt="ICT Solutions Image"
                  />
                </div>
                <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl dark:bg-gray-900">
                  <h3 className="text-indigo-600 font-semibold">
                    Professional services
                  </h3>
                  <p className="text-gray-800 text-3xl font-semibold sm:text-4xl text-justify dark:text-gray-300">
                    &ldquo;To empower aspiring engineers by transforming innovative ideas into impactful projects, fostering creativity, and driving technological excellence globally.&#8221;
                  </p>
                  <p className="mt-3 text-gray-600 text-justify dark:text-gray-600">
                    At Innovate360, we provide comprehensive project solutions for final-year engineering students across various domains, including <span className="font-bold">Electrical, Electronics, Computer Science, AI, Robotics, and Data Science</span>. Our expert team offers guidance in IoT integration, MATLAB/Simulink simulations, IC design, PCB development, machine learning, deep learning, and web development. We specialize in research assistance, thesis writing, model development, and software design, ensuring high-quality, innovative, and industry-relevant projects. By fostering creativity and technical excellence, we empower students with hands-on experience and the skills needed to excel in their careers. Innovate360 is committed to turning ideas into impactful engineering solutions.
                  </p>

                  <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
        <Fields />
      </main>
      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}
