import React from "react";
import Hero from "../components/Sections/Hero/LandHero";
import project from "../assets/images/project.png";
import invoice from "../assets/images/invoice.png";
import task from "../assets/images/task.png";
import aboutimg from "../assets/images/aboutimg.svg";
import join from "../assets/images/join.svg";
import testpic from "../assets/images/testpic.png";
import testbg from "../assets/images/testbg.svg";
import quote from "../assets/images/quote.svg";
import map from "../assets/images/map.png";
import PartnerCarousel from "../components/Partner/partners";

const Home = () => {
  return (
    <section>
      <Hero />
      <div className="  mx-4 md:mx-24">
        {/* about us */}
        <h2 className="text-3xl mt-4  text-[#0C335E] font-semibold underline mb-5">
          About Us
        </h2>
        <h3 className="lg:w-6/12 text-left mb-5 w-full text-[#0C335E]">
          Applora is a vibrant freelance platform designed specifically for
          product designers. Our mission is to connect talented designers with
          innovative companies fostering collaboration and creativity.
        </h3>
      </div>

      {/* core values */}
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-96">
          <span className="hidden md:block" style={{ width: "300%" }}>
            <img src={aboutimg} alt="about" />
          </span>
          <div className="lg:gap-10 lg:left-10">
            <h2 className="md:text-right md:text-xl text-[#0C335E] text-2xl mt-4 font-semibold underline mb-5 text-left ">
              Our Core Values
            </h2>
            <ul className="ps-0 space-y-1 list-disc list-inside">
              <li>Integrity</li>
              <li>Quality</li>
              <li>Professionalism</li>
              <li>Commitment</li>
              <li>Innovation</li>
              <li>Communication</li>
              <li>Accountability</li>
              <li>Customer focus</li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* end of core values */}

      {/* task */}
      <section className="container mx-auto py-12 px-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#0C335E] text-center">
            Automate Tasks and
          </h2>
          <h2 className="text-2xl font-semibold text-center mb-2 text-[#0C335E] leading-loose">
            workflow with Applora
          </h2>
        </div>
        <p className="lg:m-auto lg:mb-8 lg:w-1/2 text-center text-[#0C335E] font-medium mb-8 ">
          Transform the way you work with Applora. Our platform is designed to
          streamline your daily tasks and workflows, allowing you to focus on
          what truly matters. Eliminate repetitive tasks, and improve efficiency
          across your projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-12">
          {/* <!-- Project Execution --> */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg ">
            <img
              src={project}
              alt="Project Execution"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="lg:mt-32 lg:mr-36 text-[#0C335E] text-xl font-semibold mr-20">
                Project Execution
              </h3>
            </div>
          </div>
          {/* <!-- Task Execution --> */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src={task}
              alt="Task Execution"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="lg:-mt-28 lg:mr-48 text-[#0C335E] text-xl font-semibold mr-20">
                Task Execution
              </h3>
            </div>
          </div>
          {/* <!-- Invoicing --> */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src={invoice}
              alt="Invoicing"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <h3 className="lg:mt-32 lg:mr-36 text-[#0C335E] text-xl font-semibold mr-20">
                Invoicing
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* explore services */}
      <section className="max-w-lg mx-auto">
        <div className="flex">
          <div className="relative w-8/12 justify-center m-auto md:w/12 lg:w-5/12 sm-w-full">
            <button
              type="search"
              id="search-dropdown"
              className="block p-2.5 text-start w-full text-medium text-[#09223E] bg-[#F8AF98] rounded-lg"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            >
              Explore Services
            </button>
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 mx-2 text-sm font-medium h-full text-[#09223E]  rounded-e-l"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </section>
      {/* end of explore service */}
      {/* end of task */}

      {/* join */}
      <div className="relative mt-6">
        <img src={join} alt="join" />
        <div className="lg-mt-44 flex absolute inset-0 items-center justify-center m-auto gap-4 mt-4 ">
          <div className="lg:mb-50 md:sm:mb-28 sm:md:text-2xl flex absolute mb-16 m-auto text-center text-medium text-[#0C335E] font-semibold">
            Join Applora Now{" "}
          </div>
          <button className="lg:px-14 lg:text-xl text-[#0C335E] font-semibold text-medium border px-6 py-2 bg-white rounded-2xl">
            Sign Up
          </button>
          <button className="lg:px-14 lg:text-xl text-[#0C335E] font-semibold text-medium border px-6 py-2 bg-white rounded-2xl">
            Login
          </button>
        </div>
      </div>
      {/* end of join */}

      {/* testimonial */}
      <section className="bg-white px-4 py-12 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-black text-[#0C335E] text-center text-2xl leading-none uppercase max-w-2xl mx-auto mb-12">
            Testimonies
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative ">
            <div className="bg-[#85C1E9] rounded-lg p-8 text-center md:w-1/3 relative pt-24 ">
              <img src={quote} alt="quote" className="absolute top-4 left-9" />
              <div className="mt-4">
                <img
                  src={testpic}
                  alt="testpic"
                  style={{
                    position: "absolute",
                    top: "2rem",
                    left: "9rem",
                    zIndex: "999",
                    objectFit: "cover",
                  }}
                  className="justify-center m-auto pt-8 mt-2 "
                />
              </div>
              <div className="relative top-11 mb-8">
                <img
                  src={testbg}
                  alt="bg"
                  style={{ maxWidth: "100%" }}
                  className=" h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4">
                  <p className="md:text-start md:p-0 md:text-medium  text-base font-light italic text-white p-0 text-center mt-2 md:-mt-8 leading-tight">
                    Applora has been a game changer for my freelance design
                    career. I have found consistent, high quality projects and
                    clients who appreciate my work.
                  </p>
                  <span
                    className="font-base text-sm text-[#09223E] mt-2"
                    style={{ marginBottom: "-1rem" }}
                  >
                    Name: Emily R,
                  </span>
                  <span
                    className="font-base text-[#09223E] mt-4"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {" "}
                    UI/UX Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#85C1E9] rounded-lg p-8 text-center md:w-1/3 relative pt-24">
              <img src={quote} alt="quote" className="absolute top-4 left-9" />
              <div className="mt-4">
                <img
                  src={testpic}
                  alt="testpic"
                  style={{
                    position: "absolute",
                    top: "2rem",
                    left: "9rem",
                    zIndex: "999",
                    objectFit: "cover",
                  }}
                  className="flex justify-center items-center pt-8 mt-2 "
                />
              </div>
              <div className="relative top-11">
                <img
                  src={testbg}
                  alt="bg"
                  style={{ maxWidth: "100%" }}
                  className=" h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4">
                  <p className="md:text-start md:p-0 md:text-medium  text-base font-light italic text-white p-0 text-center mt-2 md:-mt-8 leading-tight">
                    I was struggling to find clients who understood my design
                    style, but Applora platform connected me with companies who
                    share my vision.
                  </p>
                  <span
                    className="font-base text-sm text-[#09223E] mt-6"
                    style={{ marginBottom: "-1rem" }}
                  >
                    Name: David K,
                  </span>
                  <span
                    className="font-base text-[#09223E] mt-4"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {" "}
                    UI/UX Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#85C1E9] rounded-lg p-8 text-center md:w-1/3 relative pt-24">
              <img src={quote} alt="quote" className="absolute top-4 left-9" />
              <div className="mt-4">
                <img
                  src={testpic}
                  alt="testpic"
                  style={{
                    position: "absolute",
                    top: "2rem",
                    left: "9rem",
                    zIndex: "999",
                    objectFit: "cover",
                  }}
                  className="justify-center m-auto pt-8 mt-2 "
                />
              </div>
              <div className="relative top-11">
                <img
                  src={testbg}
                  alt="bg"
                  style={{ maxWidth: "100%" }}
                  className=" h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4">
                  <p className="md:text-start md:p-0 md:text-medium  text-base font-light italic text-white p-0 text-center mt-2 md:-mt-8 leading-tight">
                    Applora community features have helped me learn from other
                    designers and stay up to date on industry trends.
                  </p>
                  <span
                    className="font-base text-sm text-[#09223E] mt-6"
                    style={{ marginBottom: "-1rem" }}
                  >
                    Name: Sarah K,
                  </span>
                  <span
                    className="font-base text-[#09223E] mt-4"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {" "}
                    UI/UX Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center space-x-2 mt-8">
            <div class="w-10 h-4 bg-white rounded-full border-solid border-2 border-[#0C335E]"></div>
            <div class="w-10 h-4 bg-orange-500 rounded-full"></div>
            <div class="w-10 h-4 bg-white rounded-full border-solid border-2 border-[#0C335E]"></div>
          </div>
        </div>
      </section>
      {/* end of testimonial */}

      <PartnerCarousel />

      <section className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute left-4 mx-2 px-2 overflow-hidden  lg:w-1/2">
                <img
                  src={map}
                  alt="map"
                  className="relative hidden md:hidden sm:hidden lg:block"
                />
              </div>
            </div>
          </div>
          <form className="px-2 mx-12 pb-24 pt-20 mt-8 sm:pb-32 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-3xl text-left mb-4 font-bold tracking-tight text-[#0C335E]">
                Contact Us
              </h2>
              <p className="text-sm text-left mb-6 font-normal text-[#09223E]">
                Do you have any questions or comments? Our team will respond to
                your enquiry as soon as possible.
              </p>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      autocomplete="email"
                      className="block w-full rounded-md border-1 border-[#09223E] px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your Name"
                      autocomplete="name"
                      className="block w-full rounded-md border-1 border-[#09223E] px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="ame"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      rows="6"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#F66030] px-12 md:px-56 py-3 text-sm font-semibold text-[#0C335E] transition-colors duration-150 ease-in-out hover:border-blue-[#85C1E9] hover:bg-[#85C1E9]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Home;
