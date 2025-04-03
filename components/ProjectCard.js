import Link from 'next/link';

export default function ProjectCard({ project }) {
  const isExternalLink = project.slug.startsWith('http://') || project.slug.startsWith('https://');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-justify">{project.description}</p>
        {isExternalLink ? (
          <a
            href={project.slug}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-orange-500 hover:underline font-semibold"
          >
            Read More &rarr;
          </a>
        ) : (
          <Link href={project.slug} legacyBehavior>
            <a className="block mt-4 text-orange-500 hover:underline font-semibold">
              Read More &rarr;
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
