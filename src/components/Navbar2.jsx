import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { headers } from '../data'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar2() {
  return (
    <Disclosure as="nav" className="bg-zinc-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden mt-3">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-white text-3xl font-bold mt-3">
                    Web
                    <a href="#" className="text-orange-600">
                      Portfolio
                    </a>
                  </span>
                </div>

                {/* Links */}
                <div className="hidden sm:ml-6 sm:block mt-4">
                  <div className="flex space-x-4 gap-x-2 px-2 py-3">
                    {headers.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="capitalize text-lg tracking-wide hover:text-orange-600 duration-300 font-medium menu"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {headers.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-zinc-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md text-center py-6 text-base font-medium mt-3 border border-gray-500 menu-mobile'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
