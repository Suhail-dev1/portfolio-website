import React from "react";
import Education from "../Education/Education";

const AboutPage2 = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 mt-16">
        {/* Unique Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-600 to-red-500 inline-block">
            About Me
          </h1>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-purple-900 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            A quick snapshot of my journey, skills, and passion for creating
            impactful software solutions.
          </p>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img
                src="/Images/modern-productivity-concept-with-flat-design_23-2147966172.avif"
                alt="Profile"
                className="rounded-xl shadow-xl w-full md:w-4/5 mx-auto"
              />
              <div className="absolute bottom-2 left-6 bg-white rounded-lg px-6 py-3 shadow-lg flex items-center">
                <span className="text-red-500 text-2xl mr-3">🚀</span>
                <span className="text-gray-800 font-semibold text-lg">
                  80+ Successful Projects
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-5xl font-extrabold text-purple-900 mb-6 leading-snug">
              I <span className="text-red-500">design & build software</span>{" "}
              that delivers real business value
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              "Passionate software developer with expertise in building scalable
              web applications, automating processes, and delivering secure,
              user-friendly digital solutions."
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              At a Glance
            </h3>
            <ul className="text-gray-700 text-lg space-y-4">
              <li>
                <strong>Location:</strong> New Delhi, 110019, India
              </li>
              <li>
                <strong>Education:</strong> MCA – IGNOU (2022–2024), BCA – DDU
                (2018–2021)
              </li>
              <li>
                <strong>Core Skills:</strong> Web Development, Database Design,
                API Integration, Problem Solving, Cloud Deployment
              </li>
              <li>
                <strong>Interests:</strong> Technology, Traveling, Reading,
                Fitness, Open-Source Contribution
              </li>
              <li>
                <strong>Email:</strong> Suhailansari3695@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <Education />
      </div>
    </>
  );
};

export default AboutPage2;
