import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const navigation = [
  { name: 'Changelog', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'News', href: '#' },
]
const contactDetails = [
  { name: 'N-KIDS', email: 'boussehminea@gmail.com', telephone: '+216 51 673 109' },
  
]
const teamMembers = [
  { city: 'Anas Boussehmine', address: ['CEO & Founder of N-KIDS'] },
  { city: 'Iyed Dhorbani', address: ['Team Manager'] },
  { city: 'Ahmed Zouaghi', address: ['Executive Team'] },
  { city: 'Adem Saïdi', address: ['Executive Team'] },
  
  
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
    {
      id: 3,
      question: "Who's Idea \"N-KIDS\"?",
      answer:
        "N-KIDS is Mrs.Sonia Suissi",
    },
  ]


export default function Find() {
  return (
    <div className="bg-white">
      <div className='border shadow-lg'>
      <Navbar/>
      </div>

      <main>
        {/* Side-by-side grid */}
        <div className="bg-white">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
                <h2
                  id="contact-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                >
                  Who are we ?
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  <div>
                        <h3 className="text-lg font-medium text-warm-gray-900">N-KIDS</h3>
                        <dl className="mt-2 text-base text-warm-gray-500">
                          <div>
                            
                            <dd>
                              N-KIDS IS A MULTINATIONAL PROFESSIONAL SOCIETY FOUNDED IN 2022 BY ANAS BOUSSEHMINE IN THE FIELD OF IT & NETWORK DEVELOPMENT
                              
                            </dd>
                          </div>
                          <div className="mt-1">
                            
                            <dd>We are a society that provides a product that helps STRICT PARENTS to easily manage the use of network by their kids.</dd>
                          </div>
                        </dl>
                  </div>
                </div>

              </section>
              
              <section className="mt-6 pt-6 lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="location-heading">
                <h2
                  id="location-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                >
                  Team Members
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  {teamMembers.map((teamMember) => (
                    <div key={teamMember.city}>
                      <h3 className="text-lg font-medium text-warm-gray-900">{teamMember.city}</h3>
                      <div className="mt-2 space-y-1 text-base text-warm-gray-500">
                        {teamMember.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="lg:grid lg:grid-cols-3 lg:gap-8 mt-6 pt-6" aria-labelledby="contact-heading">
                <h2
                  id="contact-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight mt-1"
                >
                  Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  {contactDetails.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-lg font-medium text-warm-gray-900">{item.name}</h3>
                      <dl className="mt-2 text-base text-warm-gray-500">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>{item.email}</dd>
                        </div>
                        <div className="mt-1">
                          <dt className="sr-only">Phone number</dt>
                          <dd>{item.telephone}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>

              </section>
              <iframe className='mx-auto w-full mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.810521796362!2d9.194795470414896!3d36.73330482445116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fca786bc7c0955%3A0x92f5bfc4d2f5098d!2sLyc%C3%A9e%20Pilote%20de%20B%C3%A9ja!5e0!3m2!1sen!2stn!4v1668961805633!5m2!1sen!2stn" width="600" height="550" style={{boder : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>

        {/* FAQ */}
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

        {/* Newsletter */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="rounded-3xl bg-gradient-to-l from-purple-800 to-purple-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-white">Sign up for our newsletter</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                   Subscribe to receive all updates.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-purple-400 px-5 py-3 text-base font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-cyan-100">
                  We care about the protection of your data. Read our{' '}
                  <a href="#" className="font-medium text-white underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
