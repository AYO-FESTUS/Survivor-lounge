import React from "react";
import { FaHandsHelping, FaPlusCircle, FaBook, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        {/* your entire content here */}
        <section className="relative bg-white">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <img
              src="/blog imag/Premium Photo _ Business people in portrait selfie (1).jpeg"
              alt=""
              className="w-full h-[90vh] object-cover"
            />

            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl w-full px-4">
                <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-blue-100 md:text-5xl">
                  Strength. Healing. Hope.
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6">
                  Empowering migrant women survivors of domestic abuse to
                  rebuild their lives beyond crisis.
                </h2>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                  >
                    Get Support
                  </a>
                  <a
                    href="#"
                    className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition"
                  >
                    Partner With Us
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-4 font-poppins">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Our Mission:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To walk alongside migrant women survivors as they transition
                  from crisis to stability. We provide personalised guidance,
                  safe spaces for healing, and culturally competent support that
                  acknowledges the unique barriers faced by those with NRPF.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Our Vision:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a society where every woman—regardless of her
                  immigration status—has the opportunity to heal, rebuild, and
                  thrive after abuse.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Who We Support:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Migrant women with NRPF
                  <br />
                  Women transitioning out of refuges or temporary accommodation
                  <br />
                  Survivors facing language, cultural, or financial barriers
                  <br />
                  Women who need long-term, non-crisis support to rebuild their
                  lives
                </p>
              </div>
            </div>

            <div>
              <img
                src="/hero imag/Long-Term Relationships_ Rebuilding Love After Emo.jpeg"
                alt="About"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="mt-16 flex justify-start max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute -top-4 -right-1 text-sm text-blue-500 font-bold">
                  +
                </span>
                <div className="flex items-end">
                  <span className="text-6xl font-extrabold text-blue-700 leading-none">
                    5
                  </span>
                  <span className="text-6xl font-extrabold text-blue-700 leading-none">
                    0
                  </span>
                </div>
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-700 max-w-sm">
                Women impacted through our programs and support
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 px-4 font-poppins">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What We Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-5xl mb-4 text-blue-600">
                  <FaHandsHelping />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Advisory Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Confidential guidance tailored to each woman’s needs—from
                  housing and legal pathways to emotional recovery and next-step
                  planning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-5xl mb-4 text-blue-600">
                  <FaPlusCircle />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Healing & Empowerment Circles
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monthly group sessions that promote trust, self-confidence,
                  and connection with other survivors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-5xl mb-4 text-blue-600">
                  <FaBook />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Toolkit
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Downloadable and printed guides to help survivors navigate
                  life after abuse with clarity and confidence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-5xl mb-4 text-blue-600">
                  <FaArrowRight />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Signposting & Referrals
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We connect survivors to trusted services including housing
                  advisors, immigration specialists, and culturally competent
                  therapists.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-4 font-poppins">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <img
              src="/hero imag/How to Spread Healthcare Awareness in Your Communi (1).jpeg"
              alt="Get Involved"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <h2 className="text-3xl font-bold text-gray-800">Get Involved</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your support helps us deliver life-changing services for women
              rebuilding after abuse.
            </p>

            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-700 text-lg">
                  Partner With Us
                </h3>
                <p className="text-gray-600">
                  We work with legal clinics, faith groups, and community
                  organisations to provide a full circle of care.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 text-lg">
                  Volunteer With Us
                </h3>
                <p className="text-gray-600">
                  Join our trauma-informed team as a peer supporter,
                  interpreter, or group facilitator.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Donate Now
              </a>
              <a
                href="#"
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition"
              >
                Volunteer
              </a>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Have a question or need help? Reach out confidentially.
              </p>
            </div>

            <form className="w-full max-w-2xl mx-auto space-y-4 text-left">
              {/* form section */}
            </form>
          </div>
        </section>

        <div className="contact space-y-4 text-center max-w-xl mx-auto">
          <p className="text-lg font-medium text-gray-700">
            Reach out to us via phone, email, or visit our office.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li>
              <p className="flex justify-center items-center gap-2 font-semibold text-gray-800">
                <FaEnvelope /> Email Us
              </p>
              <p>info@gmail.com</p>
            </li>
            <li>
              <p className="flex justify-center items-center gap-2 font-semibold text-gray-800">
                <FaPhone /> Call Us
              </p>
              <p>+234 694004 556788</p>
            </li>
            <li>
              <p className="flex justify-center items-center gap-2 font-semibold text-gray-800">
                <FaMapMarkerAlt /> Visit Us
              </p>
              <p>Brhin Floor, WPE KLLF</p>
            </li>
          </ul>
        </div>

        <br />
        <br />

        <section className="bg-blue-50 py-16 px-4 font-poppins">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Stay informed with updates, events, and support resources.
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
  