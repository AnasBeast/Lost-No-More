import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <Popover className="relative bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to={"/"}>
                <span className="sr-only">Lost No More</span>
                <img
                  className="h-10 w-auto sm:h-16"
                  src="https://i.postimg.cc/R0W1dtYg/n-kids-logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link to={"/"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link to={"/pricing"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link to={"/findus"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                Find Us
              </Link>
              <Link to={"/contact"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                Get in Touch
              </Link>
              
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              
              <a
                href='mailto:boussehminea@gmail.com'
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Contact Us
              </a>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://i.postimg.cc/R0W1dtYg/n-kids-logo.png"
                        alt="N-KIDS"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                  <Link to={"/"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                  <Link to={"/pricing"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Pricing
                  </Link>
                  <Link to={"/findus"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Find Us
                  </Link>
                  <Link to={"/contact"} className="text-base font-medium text-gray-500 hover:text-gray-900">
                    About Us
                  </Link>
                  </div>
                  <div className="mt-6">
                    <a
                      href="mailto:boussehminea@gmail.com"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                    >
                      Get in Touch
                    </a>
                    
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
  )
}

export default Navbar