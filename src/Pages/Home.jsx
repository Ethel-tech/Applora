import React from "react";
import Hero from "../components/Sections/Hero/LandHero";
import project from "../assets/images/project.png";
import invoice from "../assets/images/invoice.png";
import task from "../assets/images/task.png";
import aboutimg from "../assets/images/aboutimg.svg";
import join from "../assets/images/join.svg";

const Home = () => {
  return (
    <section>
      <Hero />
      <div>
        {/* about us */}
        <h2 className="text-3xl mt-4 pl-12 font-semibold underline mb-5">
          About s
        </h2>
        <h3 className="lg:w-4/12 pl-10 mb-5">
          Applora is a vibrant freelance platform designed specifically for
          product designers. Our mission is to connect talented designers with
          innovative companies fostering collaboration and creativity.
        </h3>
      </div>

      {/* core values */}
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-96">
          <span className="" style={{ width: "300%" }}>
            <img src={aboutimg} alt="about" />
          </span>
          <div className="lg:gap-10 lg:left-10">
            <h2 className="md:text-right md:text-xl text-2xl mt-4 font-semibold underline mb-5 text-left ">
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
          <h2 className="text-2xl font-semibold text-center">
            Automate Tasks and
          </h2>
          <h2 className="text-2xl font-semibold text-center mb-2 leading-loose">
            workflow with Applora
          </h2>
        </div>
        <p className="lg:m-auto lg:mb-8 lg:w-1/2 text-center font-medium mb-8 ">
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
        <div className="flex  p-4">
          <h2 className="mt-8 text-[#F66030] text-xl font-medium m-auto justify-center">
            Explore Services
          </h2>
        </div>
      </section>
      {/* end of task */}

      {/* join */}
      <div className="relative">
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
    </section>
  );
};

export default Home;
