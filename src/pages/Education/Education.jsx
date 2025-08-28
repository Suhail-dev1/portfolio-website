import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Testimonials from "../Testimonials/Testimonials";

const Education = () => {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-purple-900 mb-8 text-center">
            I'm great in what I do and{" "}
            <span className="text-red-500">I'm loving it</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <h3 className="text-3xl font-bold text-purple-900 mb-6">
                Education
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <FaGraduationCap className="text-red-500 text-3xl mr-4" />
                  <div>
                    <h4 className="text-xl font-bold text-purple-900">
                      Indira Gandhi National Open University (IGNOU)
                    </h4>
                    <p className="text-gray-700">
                      Master of Computer Applications (MCA) (2022- 2024)
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <FaGraduationCap className="text-red-500 text-3xl mr-4" />
                  <div>
                    <h4 className="text-xl font-bold text-purple-900">
                      Deen Dayal Upadhyay University (DDU)
                    </h4>
                    <p className="text-gray-700">
                      Bachelor of Computer Applications (BCA) (2018 - 2021)
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <FaGraduationCap className="text-red-500 text-3xl mr-4" />
                  <div>
                    <h4 className="text-xl font-bold text-purple-900">BRD</h4>
                    <p className="text-gray-700">
                      Secondary School (2016 - 2018)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-3xl font-bold text-purple-900 mb-6">Skill</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex justify-between text-gray-700">
                    <span>Communication</span>
                    <span>95%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-purple-900 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between text-gray-700">
                    <span>Problem Solving</span>
                    <span>70%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-purple-900 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between text-gray-700">
                    <span>Web Application</span>
                    <span>90%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-purple-900 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between text-gray-700">
                    <span>Algorithm & Data Structure</span>
                    <span>75%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-purple-900 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/contact"
              className="text-red-500 hover:underline text-lg font-medium"
            >
              Hire Me &rarr;
            </a>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default Education;
