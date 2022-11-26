/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon as CheckIconOutline,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon as CheckIconMini, ChevronDownIcon } from '@heroicons/react/20/solid'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    id: 1,
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    id: 2,
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    id: 3,
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    id: 4,
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]
const tiers = [
  {
    name: 'Basic',
    href: '#',
    priceMonthly: 12,
    description: 'Basic Parental Control Subscription',
    link : "https://buy.stripe.com/test_cN27vEbre9PM7YI8ww",
    features: ['Block website and apps.', 'Monitor connected devices.'],
  },
  {
    name: 'Standard',
    href: '#',
    priceMonthly: 24,
    description: 'Standard Parental Control Subscription',
    link : "https://buy.stripe.com/test_cN24jsbre2nk6UE4gh",
    features: [
      'Block website and apps.',
      'Monitor connected devices.',
      'Receive parental monitoring alerts for issues like cyberbullying and more.',
    ],
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 32,
    description: 'Premium Parental Control Subscription',
    link : "https://buy.stripe.com/test_dR603c3YM0fcbaU002",
    features: [
        'Block website and apps.',
        'Monitor connected devices.',
        'Receive parental monitoring alerts for issues like cyberbullying and more.',
        'Manage screen time.',
    ],
  },
  {
    name: 'Ultra Premium',
    href: '#',
    priceMonthly: 48,
    description: 'All the basics for starting a new business',
    link : "https://buy.stripe.com/test_3cs5nw1QE2nk6UE5kn",
    features: [
        'Block website and apps.',
        'Monitor connected devices.',
        'Receive parental monitoring alerts for issues like cyberbullying and more.',
        'Manage screen time.',
        'Keep up with kids with location alerts and check-ins.',
        'Learn how to address issues with child-psychologist advice and tips.',
        'Set limits.',
    ],
  },
]
const features = [
  {
    name: 'Admin Panel',
    description: 'Admin Panel is controlled by parents.',
  },
  {
    name: 'Notifications',
    description: 'Receive all notifications related to connected devices.',
  },
  {
    name: 'List view',
    description: 'List connected devices, Ability to monitor them.',
  },
  {
    name: 'Reports',
    description: 'Receive daily reports such as browser history.',
  },
  {
    name: 'Mobile App',
    description: 'We\'ve also created a mobile app so you can download it from our product platform.',
  },
  {
    name: 'Turn OFF',
    description: 'You can Turf OFF the product anytime.',
  },
  {
    name: 'Control your Router',
    description: 'You can limit the network usage via our platform.',
  },
  {
    name: 'Support Request',
    description: 'You can chat with the support team any time.',
  },
]
const logos = [
  { name: 'Tuple', url: 'https://www.topnetschool.tn/wp-content/uploads/2020/10/logo-topnet-2.png' },
  { name: 'Mirage', url: 'https://my.gnet.tn/images/logo.png' },
  { name: 'StaticKit', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Ooredoo1.svg' },
  { name: 'Transistor', url: 'https://1000logos.net/wp-content/uploads/2017/04/Font-Orange-Logo.jpg' },
  { name: 'Workcation', url: 'https://i.postimg.cc/L8wW4Jgc/tunisie-telecom.png' },
]
const faqs = [
  {
    id: 1,
    question: 'How do you make report about a problem?',
    answer:
      'You can simply click on Contact Us and we will redirect you to send an email.',
  },
  {
    id: 2,
    question: "What's the best plan?",
    answer:
      "The best plan is Ultra Premium of course.",
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  window.scrollTo(0,0)
  return (
    <div className="bg-white">
      <div className='border shadow-lg'>
        <Navbar/>
      </div>

      {/* Pricing with four tiers and toggle */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Pricing Plans</h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              Start supervising your kid for free, then add a site plan to go live. Account plans unlock additional features.
            </p>
            <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
              <button
                type="button"
                className="relative w-full whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto sm:px-8"
              >
                Monthly billing
              </button>
              
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {tiers.map((tier) => (
              <div key={tier.name} className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                  <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>{' '}
                    <span className="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <a
                    href={tier.link}
                    className="mt-8 block w-full rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700"
                  >
                    Buy {tier.name}
                  </a>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="text-sm font-medium text-gray-900">What's included</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIconMini className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature list */}
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</h2>
            <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
              nec.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIconOutline className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 flex text-base text-gray-500 lg:py-0 lg:pb-4">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Logo cloud on brand */}
      <div className="bg-purple-600">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="lg:space-y-10">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Companies using our product.
            </h2>
            <div className="mt-8 flow-root lg:mt-0">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                {logos.map((logo) => (
                  <div key={logo.name} className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                    <img className="h-12" src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ offset */}
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
            <p className="text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="mailto:boussehminea@gmail.com" className="font-medium text-purple-600 hover:text-purple-500">
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Footer 4-column with newsletter and localization dark */}
      <Footer/>
    </div>
  )
}
