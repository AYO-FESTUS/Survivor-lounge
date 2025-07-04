import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-8 w-full">
      <footer className=" px-4 h-fit flex flex-col items-center gap-4 md:flex-row relative md:pb-6">
        <div className="w-full flex h-fit md:w-[45%]">
          <img
            src="/logos/logo-no-bg.png"
            alt=""
            className="h-30 w-28 -mt-11 md:w-44 md:h-32 -ml-4"
          />
          <address className="not-italic text-blue-100 text-sm flex flex-col justify-start -ml-4">
            <p className="text-lg tracking-wide">The Survivors Lounge CIC</p>
            <p className="[word-spacing:0.1em] tracking-wide">
              Greater London, United Kingdom.
            </p>
            <p className="[word-spacing:0.1em] tracking-wide">
              support@thesurvivorslounge.com
            </p>
            <p className="">+44</p>
          </address>
        </div>

        <div className="flex gap-6 mt-2 md:absolute md:bottom-0 md:left-40">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-300 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-300 transition"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        <div className="text-center [word-spacing:0.1em] tracking-wide flex w-[60%]">
          <p className="font-semibold text-center">
            &copy; {new Date().getFullYear()} The Survivors Lounge CIC
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm ">
            <p className="text-sm text-blue-200">RCN: 267256</p>

            <a
              href="/privacy-policy"
              className="text-blue-200 hover:underline"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="/safeguarding-policy"
              className="text-blue-200 hover:underline"
            >
              Safeguarding Policy
            </a>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
