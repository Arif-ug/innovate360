import { FaLightbulb, FaBullseye, FaProjectDiagram, FaLaptopCode, FaRobot, FaDatabase, FaMicrochip } from "react-icons/fa";
import Head from 'next/head';
import Header from '../components/Header';
import Service from '../components/Services';
import Footer from '../components/Footer';

const innovateData = [
  { title: "Vision", description: "To empower aspiring engineers by transforming innovative ideas into impactful projects, fostering creativity, and driving technological excellence globally.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
  { title: "Mission", description: "Providing end-to-end solutions for Tech-Enthusiast students, nurturing innovation, ensuring project excellence, and equipping students with professional skills.", icon: <FaBullseye className="text-red-600 text-4xl" /> },
  // { title: "Departments", description: "Covering Electrical Engineering, Computer Science, AI, Robotics, Data Science, and more.", icon: <FaProjectDiagram className="text-blue-600 text-4xl" /> },
  // { title: "IoT Projects", description: "Developing cutting-edge IoT applications with real-world impact.", icon: <FaRobot className="text-green-600 text-4xl" /> },
  // { title: "Web Development", description: "Building modern, scalable, and responsive web applications.", icon: <FaLaptopCode className="text-indigo-600 text-4xl" /> },
  // { title: "Machine Learning", description: "Implementing AI-driven solutions for complex problems.", icon: <FaDatabase className="text-teal-600 text-4xl" /> },
  // { title: "IC & PCB Design", description: "Designing and developing integrated circuits and PCBs for hardware solutions.", icon: <FaMicrochip className="text-orange-600 text-4xl" /> },
];

const Objectives= () => {
  return (
    <div className="bg-gray-100 text-black dark:text-white dark:bg-gray-900 min-h-screen flex flex-col">
      <Head>
        <title>Innovate360 - Objectives</title>
        <meta name="description" content="Discover the core objectives of Innovate360, empowering engineers with innovative projects and academic excellence." />
        <meta name="keywords" content="Innovate360, engineering projects, academic excellence, research, IoT, Machine Learning, Web Development" />
        <meta name="author" content="Innovate360 Team" />
        <meta name="description" content="Explore various project fields at Innovate360" />
        <link rel="icon" href="/images/logo.png"/>
      </Head>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
        <Header />
      </header>
      {/* Main Content */}
      <Service />
      <main className="flex-grow p-8  overflow-auto container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 text-orange-500 dark:text-white">Innovate360</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {innovateData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition transform hover:scale-105">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow">
        <Footer />
      </footer>
    </div>
  );
};

export default Objectives;
