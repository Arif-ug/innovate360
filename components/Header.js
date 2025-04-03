import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import DarkModeToggle from '../components/DarkModeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Objectives', href: '/Objectives' },
  { name: 'Profile', href: '/Profile' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact Us', href: '/Contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(router.pathname);

  // Detect a refresh and redirect to Home
  useEffect(() => {
    if (typeof window !== 'undefined' && performance.navigation.type === 1) {
      router.replace('/');
    } else {
      setActiveRoute(router.pathname);
    }
  }, []);

  return (
    <Disclosure as="nav" className="dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="sm:px-6">
            <div className="relative flex h-16 items-center justify-between">

              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo and Navigation */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                {/* Logo */}
                <div className="flex items-center mr-6">
                  <img src="\images\l-logo.png" alt="Logo" className="h-12 w-40" />
                </div>

                {/* Navigation Links */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveRoute(item.href)}
                        className={classNames(
                          activeRoute === item.href
                            ? 'text-white bg-gray-900' // Active link styling
                            : 'text-black dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={activeRoute === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dark Mode Toggle */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DarkModeToggle />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => setActiveRoute(item.href)}
                  className={classNames(
                    activeRoute === item.href
                      ? 'bg-gray-900 text-white' // Active link styling
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={activeRoute === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
