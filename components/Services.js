import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';
import { FaMicrochip, FaBolt, FaServer, FaCogs, FaBrain, FaGlobe } from 'react-icons/fa';

export default function FieldsOfProjects() {
  return (
    <div className="flex flex-col min-h-screen mt-6">
      <Head>
        <title>Innovate360 - Fields of Projects</title>
        <meta name="description" content="Explore various project fields at Innovate360" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
        <Header />
      </header>

      <section className="bg-orange-50 dark:bg-gray-900 py-16 px-6 lg:px-10">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300">Fields of Projects</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Explore Our Project Expertise</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our team specializes in a diverse range of project fields, from IoT and PCB design to Machine Learning and Web Development. We ensure high-quality solutions tailored to your academic and industrial needs.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: FaGlobe, title: "IoT Projects", description: "Develop innovative Internet of Things applications that connect devices and streamline automation." },
            { icon: FaBolt, title: "MATLAB/Simulink Simulations", description: "Perform advanced simulations and modeling using MATLAB and Simulink to analyze systems effectively." },
            { icon: FaMicrochip, title: "IC Design", description: "Create integrated circuit designs optimized for various electronic applications and efficiency." },
            { icon: FaCogs, title: "PCB Projects", description: "Design and develop printed circuit boards for electronic applications with precision and quality." },
            { icon: FaBrain, title: "Machine Learning", description: "Leverage machine learning algorithms for predictive analytics, automation, and intelligent solutions." },
            { icon: FaServer, title: "Web Development", description: "Build modern, responsive, and scalable web applications tailored to various business needs." }
          ].map((field, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-700 transition transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700">
              <field.icon className="text-orange-500 text-4xl mx-auto" />
              <h3 className="text-xl font-bold mt-4">{field.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{field.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
