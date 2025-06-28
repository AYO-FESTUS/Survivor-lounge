import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const fullTexts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam nobis earum id perferendis corrupti vel fugiat veritatis eum saepe modi dolore, nihil expedita, nisi, amet debitis nesciunt fugit deleniti quae. Illum amet accusantium ut dolorum ab laboriosam, quidem provident, consequatur repellendus, vero cumque nam! At voluptatem alias commodi amet.",

    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, praesentium error. At ducimus, ex a iure amet nihil eligendi labore odit, sit officiis fugit dolorem soluta, animi laboriosam. Est quaerat similique vero natus voluptate voluptatum, obcaecati tempora sunt a molestiae cum. Recusandae beatae corrupti et sed atque similique sunt quisquam.",
  ];

  const previewTexts = fullTexts.map((text) => text.slice(0, 150) + "...");

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="font-poppins">
        <section className="relative min-h-screen bg-[#f5f5f5] font-['Poppins']">
          {/* Background Image */}
          <div className="relative w-full h-[90vh]">
            <img
              src="./public/hero imag/Premium Photo _ Group of people holding hand toget.jpeg"
              alt="hero"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-dark bg-opacity-50 z-[1]"></div>

            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-white px-4 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Finding Your Feet Again
              </h1>
              <span className="text-base sm:text-lg md:text-xl font-medium">
                Services to Help Women After Crisis Care
              </span>
            </div>
          </div>

          <div className="text-center px-4 py-6 text-gray-800 text-sm sm:text-base max-w-lg mx-auto">
            <p>
              When emergency support ends, we connect survivors with practical
              and emotional pathways to rebuild, heal, and thrive.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col items-center gap-10 lg:w-2/3 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Blog Stories
            </h2>

            {/* Blog 1 */}
            <div className="w-full max-w-2xl mx-auto text-center">
              <img
                src="/blog imag/Individual Therapy Sessions in Central Texas _ Tay.jpeg"
                alt="Blog image"
                className="w-full mb-4 rounded-md object-cover"
              />

              <p className="mb-4 leading-relaxed text-gray-700">
                {expandedIndex === 0 ? fullTexts[0] : previewTexts[0]}
              </p>

              <button
                onClick={() => handleToggle(0)}
                className="flex items-center gap-2 text-blue-600 hover:underline focus:outline-none font-medium"
              >
                {expandedIndex === 0 ? (
                  <>
                    Read Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    Read More <FaChevronDown />
                  </>
                )}
              </button>
            </div>

            {/* Blog 2 */}
            <div className="w-full max-w-2xl mx-auto text-center">
              <img
                src="/blog imag/Pretty Photos - Download Free High-Quality Picture.jpeg"
                alt="Discussion"
                className="w-full mb-4 rounded-md object-cover"
              />

              <p className="mb-4 leading-relaxed text-gray-700">
                {expandedIndex === 1 ? fullTexts[1] : previewTexts[1]}
              </p>

              <button
                onClick={() => handleToggle(1)}
                className="flex items-center gap-2 text-blue-600 hover:underline focus:outline-none font-medium"
              >
                {expandedIndex === 1 ? (
                  <>
                    Read Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    Read More <FaChevronDown />
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />

        <section className="px-4 py-8 max-w-4xl mx-auto bg-[#f5f5f5]">
          <img
            src="./public/blog imag/Servicio al cliente_ qué es y cómo brindar una ate.jpeg"
            alt="helpline img"
            className="mx-auto"
          />
          <h3 className="text-xl md:text-2xl font-bold text-blue-600 text-center mb-6">
            Emergency Helplines
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                  <th className="px-4 py-2 border-b">Organisation</th>
                  <th className="px-4 py-2 border-b">Service & Contact</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="px-4 py-2">
                    National Domestic Abuse Helpline
                  </td>
                  <td className="px-4 py-2">
                    24/7 confidential support
                    <br />
                    <span className="text-blue-700 font-semibold">
                      0808 2000 247
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Greater Manchester DA Helpline</td>
                  <td className="px-4 py-2">
                    Local support
                    <br />
                    <span className="text-blue-700 font-semibold">
                      0800 254 0909
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Rights of Women – Legal Advice</td>
                  <td className="px-4 py-2">
                    Family/Immigration law helpline
                    <br />
                    <span className="text-blue-700 font-semibold">
                      Advice Line: en.wikipedia.org+9wel
                      <br />
                      shwomensaid.org.uk
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">JCWI Advice Line</td>
                  <td className="px-4 py-2">
                    Legal advice (Mon/Tue/Thu 10am–1pm)
                    <br />
                    <span className="text-blue-700 font-semibold">
                      020 7553 7470
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

