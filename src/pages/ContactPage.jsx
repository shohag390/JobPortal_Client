import { BsInstagram } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaLocationDot,
  FaPhoneVolume,
  FaXTwitter,
} from "react-icons/fa6";
import { IoIosChatbubbles, IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const locations = [
  {
    city: "San Francisco",
    address: "123 Market Street, Suite 1500",
    country: "San Francisco, CA 94105",
    phone: "+1 (415) 555-0123",
  },
  {
    city: "Berlin",
    address: "27 Rosenthaler Straße",
    country: "Berlin 10119, Germany",
    phone: "+49 30 5550 123",
  },
  {
    city: "Singapore",
    address: "88 Robinson Road, #14-01",
    country: "Singapore 068912",
    phone: "+65 6555 0123",
  },
];

const ContactPage = () => {
  return (
    <div>
      <div className="contact-banner px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 flex flex-col items-center justify-center">
        <span
          data-aos="zoom-in-down"
          className="bg-[#1d4ed81f] text-[#047857] uppercase px-5 py-1 rounded-full text-[14px] md:text-[16px]"
        >
          We're here to help
        </span>
        <h1
          data-aos="zoom-in-down"
          className="font-semibold text-[30px] md:text-[42px] lg:text-[45px] leading-10 md:leading-12 lg:leading-14 pt-3 lg:pt-3 text-center"
        >
          Let's build your next hiring success story.
        </h1>
        <p
          data-aos="zoom-in-down"
          className="pt-2 lg:pt-3 w-full md:w-[70%] lg:w-[80%] text-[14px] md:text-[16px] text-[#64748b] text-center"
        >
          Whether you're looking to post a role, explore partnerships, or just
          have a question—our team is ready to connect.
        </p>
      </div>
      <div className="bg-[#f8fafc] px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl hover:-translate-y-1 duration-500 cursor-pointer"
          >
            <h2 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] pb-1 lg:pb-2">
              {loc.city}
            </h2>

            <p className="text-[14px] lg:text-[16px] text-[#64748b]">
              {loc.address}
            </p>
            <p className="text-[14px] lg:text-[16px] text-[#64748b]">
              {loc.country}
            </p>

            <div className="text-[14px] lg:text-[16px] text-[#1d4ed8] pt-1 lg:pt-2">
              {loc.phone}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#ffff] px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-15">
        <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl w-full lg:w-[45%]">
          <div>
            <h4 className="text-[18px] md:text-[20px] lg:text-[25px] font-medium lg:font-semibold pb-1 md:pb-2">
              Contact Details
            </h4>
            <p className="text-[14px] md:text-[16px] text-[#64748b] pb-2 md:pb-4 lg:pb-6">
              Reach the team at JobsPortal for platform, billing, or partnership
              questions.
            </p>
            <div className="flex flex-col gap-3 lg:gap-5">
              <div className="flex items-center gap-3 lg:gap-5">
                <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#3b82f61f] text-[#2563eb] rounded-xl text-[20px]">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="font-medium text-[16px] lg:text-[18px]">
                    Headquarters
                  </h4>
                  <span className="text-[14px] md:text-[16px] text-[#64748b]">
                    651 N Broad St, Suite 201 Middletown, DE 19709, USA
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-5">
                <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#3b82f61f] text-[#2563eb] rounded-xl text-[20px]">
                  <MdEmail />
                </div>
                <div>
                  <h4 className="font-medium text-[16px] lg:text-[18px]">
                    Email
                  </h4>
                  <span className="text-[14px] md:text-[16px] text-[#64748b]">
                    support@jobsportal.com <br />
                    partnerships@jobsportal.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-5">
                <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#3b82f61f] text-[#2563eb] rounded-xl text-[20px]">
                  <FaPhoneVolume />
                </div>
                <div>
                  <h4 className="font-medium text-[16px] lg:text-[18px]">
                    Phone
                  </h4>
                  <span className="text-[14px] md:text-[16px] text-[#64748b]">
                    +1 (302) 555-0123 <br />
                    Support hours 9am–6pm EST
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-5">
                <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#3b82f61f] text-[#2563eb] rounded-xl text-[20px]">
                  <IoIosChatbubbles />
                </div>
                <div>
                  <h4 className="font-medium text-[16px] lg:text-[18px]">
                    Live Chat
                  </h4>
                  <span className="text-[14px] md:text-[16px] text-[#64748b]">
                    Log in to your dashboard and start a chat with our support
                    team.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3 pt-6 lg:pt-8">
              <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#747a851f] hover:bg-[#2563eb] hover:text-[#ffff] duration-500 rounded-xl text-[20px]">
                <FaLinkedinIn />
              </div>
              <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#747a851f] hover:bg-[#2563eb] hover:text-[#ffff] duration-500 rounded-xl text-[20px]">
                <FaXTwitter />
              </div>
              <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#747a851f] hover:bg-[#2563eb] hover:text-[#ffff] duration-500 rounded-xl text-[20px]">
                <BsInstagram />
              </div>
              <div className="h-10 lg:h-12 w-10 lg:w-12 flex items-center justify-center bg-[#747a851f] hover:bg-[#2563eb] hover:text-[#ffff] duration-500 rounded-xl text-[20px]">
                <IoLogoYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl w-full lg:w-[55%]">
          <h4 className="text-[18px] md:text-[20px] lg:text-[25px] font-medium lg:font-semibold pb-1 md:pb-2">
            Send Us a Message
          </h4>
          <p className="text-[14px] md:text-[16px] text-[#64748b] pb-2 md:pb-4 lg:pb-6">
            Tell us a little about how we can help, and the right person will be
            in touch soon.
          </p>
          <form className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <fieldset className="flex flex-col gap-2 w-full lg:w-1/2">
                <span className="font-medium">Full Name</span>
                <input
                  className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                  type="text"
                  placeholder="Your name"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2 w-full lg:w-1/2">
                <span className="font-medium">Work email</span>
                <input
                  className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                  type="email"
                  placeholder="your@gmail.com"
                />
              </fieldset>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <fieldset className="flex flex-col gap-2 w-full lg:w-1/2">
                <span className="font-medium">Company</span>
                <input
                  className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                  type="text"
                  placeholder="Company name"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2 w-full lg:w-1/2">
                <span className="font-medium">Work email</span>
                <input
                  className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                  type="number"
                  placeholder="+1 123 456 7890"
                />
              </fieldset>
            </div>
            <fieldset className="flex flex-col gap-2">
              <span className="font-medium">How can we help?</span>
              <select className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg">
                <option>Choose an option</option>
                <option>Hiring Solutions</option>
                <option>Account Support</option>
                <option>Media & Partnerships</option>
                <option>Other</option>
              </select>
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <span className="font-medium">Message</span>
              <textarea
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                rows={4}
                placeholder="Message"
              ></textarea>
            </fieldset>
            <button className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 rounded-lg text-[#ffff] text-[14px] md:text-[16px]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
