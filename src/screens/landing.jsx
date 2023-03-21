
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  AdjustmentsHorizontalIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XMarkIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Notification from '../components/SubNotification'

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, handleVerifyEmail, sendEmailVerification, sendPasswordResetEmail  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMANVe_yhK_zLP_me4h3CinIKqU1uhY9k",
  projectId: "wilco---production",
  storageBucket: "wilco---production.appspot.com",
  messagingSenderId: "404438257634",
  appId: "1:404438257634:ios:4e6428172b291dfdfb73bb",
  /* apiKey: "AIzaSyAtkYHA2cM7y80DuhssY8bpJsmyxRV51iI",
  authDomain: "wilco-7050.firebaseapp.com",
  databaseURL: "https://wilco-7050-default-rtdb.firebaseio.com",
  projectId: "wilco-7050",
  storageBucket: "wilco-7050.appspot.com",
  messagingSenderId: "145215275822",
  appId: "1:145215275822:web:379c9c5e67ad19e12070bf",
  measurementId: "G-BCJKNWQE33" */


}

initializeApp(firebaseConfig);
const auth = getAuth()
// sendEmailVerification(auth, "anasmta9@gmail.com")
signInWithEmailAndPassword(auth, "teemuairamo@gmail.com", "M1neral123").then((userCredential) => {
  const user = userCredential.user;
  /* if(!user.emailVerified){
      sendEmailVerification(auth.currentUser).then(() => {
          console.log("email sent", );
      })
  } */
  console.log("user", user.accessToken);
})


const features = [
  {
    name: 'Ease to use',
    description: 'Our product provide their users with the best service to easily protect their kid/parent.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Support Available 24/7',
    description: 'We got a technical support team that\'s working to provide you with the best experience with our product.',
    icon: UsersIcon,
  },
  {
    name: 'Open to your feedback',
    description: 'We are always willing to improve our product that\'s why we are open to listen to your feedbacks.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Team Reporting',
    description: 'We are creating monthly reports about our product, that\'s why you can report about a problem anytime.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Among The Best',
    description: 'Our product is among the best parental control product.',
    icon: StarIcon,
  },
  {
    name: 'Open To Partners',
    description: 'We aim to enlarge our company, if you would like to cook something contact us via e-mail boussehminea@gmail.com',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Join Us',
    description: 'If you got skills and see yourself fit a position in our team, contact us and we will review your application.',
    icon: HeartIcon,
  },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://www.deutschland.de/sites/default/files/media/image/tdt_15052020_wie_familien_in_deutschland_leben_gemeinsam.jpg"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Lost No More</span>
                  <span className="block text-indigo-200">Control alzheimer's and autism disease</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Using our product LostNoMore will help you supervise and protect your darling from all threats.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto">
                    <Link
                      to="/pricing"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        {/* <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base font-semibold text-gray-500">
              Trusted by over 5 very big businesses
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://www.topnetschool.tn/wp-content/uploads/2020/10/logo-topnet-2.png" alt="Tuple" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://my.gnet.tn/images/logo.png" alt="Mirage" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Ooredoo1.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12 rounded"
                  src="https://1000logos.net/wp-content/uploads/2017/04/Font-Orange-Logo.jpg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://i.postimg.cc/L8wW4Jgc/tunisie-telecom.png"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Alternating Feature Sections */}
        <div className="relative overflow-hidden pt-16 pb-32">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                      <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">We are among the best startup that provides a control product.</h2>
                    <p className="mt-4 text-lg text-gray-500">
                    Do you need to protect your kid or one of your parents? What are the options? Do they really work? Here's everything you need to know about the wide array of supervising solutions, from OS settings to monitoring apps to network hardware.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/pricing"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Discover
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;I've been using this product for about 2 years
                        and it's really helpful. <br /> Special thanks to Anas and his team.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Ahlem Kouki, Parent Of 2 Kids
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://i.postimg.cc/XN9pbXkh/image-2023-03-21-225922083.png"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Better prevent your kid/parent from getting lost
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Buying this product will protect your kid/parent from all getting lost. <br />
                      Also, you can monitor your kid/parent's hearbeat. <br />
                      Track your kid/parent's location.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/pricing"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://cdn.mos.cms.futurecdn.net/TkpFzqbJ6webweHmkkDF6U-1200-80.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 className="text-3xl font-bold tracking-tight text-white">Lost No More</h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              Lost No More is a startup created by Anas Boussehmine, Islem Jendoubi, Adem Bhihi and Malek Mekni aiming to provide parents with the best product to supervise their kids/parents and preventing them from getting lost.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-purple-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
                Get in touch
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <Link
                to="/findus"
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </Link>
              <Link
                to="/pricing"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
