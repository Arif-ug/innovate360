import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Head from 'next/head';

const projects = [
  {
    id: 1,
    title: 'Personalized Mood-Based Movie Recommendation System',
    description:
      'Developed a unique recommendation platform to suggest movies tailored to users moods. Integrated a mood slider and mood-based filters to create personalized watchlists. Utilized user mood history and advanced filtering techniques to enhance recommendations.',
    slug: 'https://www.arifdesigns.store/',
    image: '/mov.jpg',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Bike renting System',
    description:
      'Developed a user-friendly platform for renting bikes, streamlining the process for customers and providers. The system features a real-time inventory management system, secure payment integration, and a responsive design for seamless accessibility across devices. Implemented using modern web technologies to ensure reliability and scalability.',
    slug: 'https://arif-seven.vercel.app/',
    image: '/bike.jpg',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Image Forgery Detection Using Deep Learning',
    description:
      'Designed and implemented a deep learning-based system to detect image forgeries with high accuracy. Utilized convolutional neural networks (CNNs) to analyze and identify tampered regions in digital images. Trained and tested the model using datasets of manipulated images, enhancing robustness against various types of forgery techniques.',
    slug: 'image-forgery-detection-deep-learning',
    image: '/forgery.jpg',
    category: 'ML/Data Science',
  },
  {
    id: 4,
    title: 'House Price Prediction System for Real Estate',
    description:
      'Developed an automated machine learning system to assist real estate companies in predicting house prices with precision. Analyzed multiple algorithms using the Boston House dataset from Kaggle to improve prediction accuracy.',
    slug: 'house-price-prediction-ML',
    image: '/hou.jpg',
    category: 'ML/Data Science',
  },
  {
    id: 5,
    title: 'Tomato Leaf Disease Detection using Deep Learning',
    description:
      'Designed a hybrid deep learning model combining CNN and MLP to detect diseases in tomato leaves with 99.36% accuracy. Utilized the PlantVillage dataset and a self-collected field dataset to enhance model robustness.',
    slug: 'tomato-leaf-disease-detection',
    image: '/tomato.jpg',
    category: 'ML/Data Science',
  },
  {
    id: 6,
    title: 'Early Detection of Diabetes using Machine Learning',
    description:
      'Built a system to identify diabetes at early stages, enabling timely preventive measures. Explored various machine learning algorithms using the Kaggle Diabetes Dataset to optimize prediction accuracy.',
    slug: 'my_project',
    image: '/dia.jpg',
    category: 'ML/Data Science',
  },
  {
    id: 7,
    title: 'Simulation of Combined Cycle Gas Turbine Power Plant in MATLAB',
    description:
      'Combined Cycle Gas Turbine power plant is a new and evolving power plant which are mostly used in the power industries. In this project a simulation is done in MATLAB using Simulink to monitor and control various physical quantities present in a power plant. The main objective of this project is to determine the capacity and capability of a power plant considering different parameters.',
    slug: 'combined-cycle-gas-turbine-simulation',
    image: 'images/turbine.jpeg',
    category: 'Simulation/IoT',
  },
  {
    id: 8,
    title: 'Monitoring and Controlling of Highway Street lights using IoT Devices',
    description:
      'The street lights available currently in all areas are quite inefficient in energy consumption. By using IoT devices the streetlights can be more efficient. The sensors can be connected to each pole to detect the presence of any vehicles or pedestrians and save the energies.',
    slug: 'iot-street-lights-control',
    image: '/images/trafic.png',
    category: 'Simulation/IoT',
  },
  {
    id: 9,
    title: 'IoT Based Water Management Systems',
    description:
      'Water is the main source in our life and the fresh water content present in this planet are depleting day by day due to improper management of the freshwater. Using IoT applications this water management can be done with ease and with proper monitoring system. The supply of water can be controlled with IoT application and automate it using mobile phones.',
    slug: 'iot-water-management',
    image: '/images/water-management.png',
    category: 'Simulation/IoT',
  },
];

export default function Projects() {
  const webProjects = projects.filter((project) => project.category === 'Web Development');
  const mlProjects = projects.filter((project) => project.category === 'ML/Data Science');
  const iotProjects = projects.filter((project) => project.category === 'Simulation/IoT');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Projects</title>
        <meta name="description" content="Explore our innovative projects at Innovate360." />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      <main className="flex-grow lg:pt-20 pt-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-8 dark:text-gray-300">Our Projects</h2>
        </div>
        {/* <Profile /> */}
        <div className="mt-6 lg:mt-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Simulation/IoT Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {iotProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            ML/Data Science Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mlProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Web Development Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-20 bg-white dark:bg-gray-800 shadow">
        <Footer />
      </footer>
    </div>
  );
}