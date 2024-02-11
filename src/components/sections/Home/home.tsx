import React from "react";
import Timeline from "@/components/timeline";
import ThemeToggleBtn from "../../toggle_theme_button";
import TechStack from "../../tech_stack";
import { DomainTag } from "../../custom_tags";
import DevicesEcosystem from "./devices_ecosystem";
import GlowBox from "@/components/glowBox";

type Props = {};

const HomeProfile = (props: Props) => {
  return (
    <div
      id="Home_page"
      className="flex items-center w-full justify-center flex-col gap-6 "
    >
      <div className="container m-auto grid grid-cols-4 auto-rows-min gap-x-2 gap-y-5">
        {/* {/* <!-- Profile Card --> */}
        <div className=" col-span-4 lg:col-span-1 col-start-1 lg:row-span-2 px-2">
          <div className="sticky top-[200px]">
            <GlowBox
              direction="left"
              color="lightBlue"
              darkColor="blue"
              className="rounded-[20px]"
            >
              <div className="w-full mx-auto relative text-center dark:bg-transparent px-6 rounded-[20px] mt-[200px]">
                <img
                  alt="avatar"
                  src="./assets/profile_pic.png"
                  width="240"
                  height="240"
                  decoding="async"
                  data-nimg="1"
                  className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] border-2 border-gray-800"
                  loading="lazy"
                />
                <div className="pt-[100px] pb-8">
                  <h1 className="mt-6 mb-2 text-4xl xl:text-5xl font-semibold text-black dark:text-white">
                    Vaibhav Dasharathe
                  </h1>
                  <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                    Full Stack Developer
                  </h3>
                  <div className="flex justify-center space-x-3 ">
                    <a
                      href="https://www.linkedin.com/in/infinity-sailor/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="h-8" src="./assets/linkedin_icon.png" />
                    </a>

                    {/* <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-8" src="./assets/youtube_icon.png" />
                  </a> */}
                  </div>
                  <div className="p-4 rounded-2xl mt-2 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black text-[#E93B81] shadow-md">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 320 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                        </svg>
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                          Phone
                        </p>
                        <p className="dark:text-white break-all text-black">
                          <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="tel:+918530617659"
                          >
                            +91 85306 17659
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 384 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                        </svg>
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                          Location
                        </p>
                        <p className="dark:text-white break-all text-black">
                          Bengaluru, india
                        </p>
                      </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black text-[#FD7590] shadow-md">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                        </svg>
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                          Email
                        </p>
                        <p className="dark:text-white break-all text-black">
                          <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="mailto:vinfinitysailor@gmail.com"
                          >
                            vinfinitysailor@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex py-2.5 undefined">
                      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black dark:fill-white shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                          Github
                        </p>
                        <p className="dark:text-white break-all text-black">
                          <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="https://github.com/Infinity8sailor"
                            target="_blank"
                          >
                            Infinity8sailor
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="./resource/Vaibhav_Dasharathe_9_Feb_2024.pdf"
                    target="_blank"
                    className="inline-flex gap-2 items-center mx-auto bg-gradient-to-r duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <p>Download CV</p>
                  </a>
                </div>
              </div>
            </GlowBox>
          </div>
        </div>
        {/* {/* <!-- Nav Icons --> */}
        <div className=" col-start-1 lg:col-start-2 col-span-4 lg:col-span-3 mt-5 md:mr-5 sticky top-6 z-10 px-2">
          <header className="hidden lg:w-fit h-[40px] p-[10px] ml-auto  justify-center rounded-[16px] bg-slate-500 dark:bg-[#111111]">
            <ThemeToggleBtn />
            {/* <ThemeToggleBtn /> */}
          </header>
        </div>
        {/* {/* <!-- About Me --> */}
        <div className=" col-start-1 lg:col-start-2 col-span-4 lg:col-span-3 mt-5 z-10">
          <GlowBox
            color="lightBlue"
            darkColor="blue"
            className="shadow p-6 px-9  rounded-lg dark:bg-transparent backdrop-blur-md"
          >
            <div className="w-full flex flex-wrap gap-2 text-xs lg:text-base lg:gap-4 px-5 pb-2 justify-center">
              <DomainTag> Web Developement </DomainTag>
              <DomainTag> Artificial Intelligence </DomainTag>
              <DomainTag> System Design </DomainTag>
              <DomainTag> Problem Solving </DomainTag>
            </div>
            <h2 className="text-xl text-black dark:text-white font-bold mb-4">
              About Me
            </h2>
            {/* {/* <!-- [Adjectives] + [Professional title] + [Years of experience] + [Skills] + [Achievements] + [Career goals] --> */}
            <p className="text-gray-700 dark:text-violet-100">
              Passionate Software Engineer with 2 years of experience in Web
              development and Artificial Intelligence. Enjoy working on
              Imaginary Ideas and turning them into the working prototypes.
              Worked on 10+ React.js Projects implementing advanced
              functionalities and Complex cross connectivity.
            </p>

            <h1 className="text-xl font-bold mt-6 mb-4 text-black dark:text-white">
              Experience
            </h1>
            <div className="-my-6 ">
              <Timeline
                from="2022"
                to=""
                title="Tata Elxsi"
                subTitle="Software Engineer"
              >
                <h1>
                  - Designed and Developed Next.js Dashboard App to monitor and
                  manage role-based access to GPU and data resource.
                </h1>
                <h1>
                  - Implemented gRPC framework connecting Unity and leveraging
                  Python-Backend with Jupyter using Docker
                </h1>
                - Integrated ChatGpt with speech recognition and translation to
                make React Application available in foreign language
                <h1></h1>
                <h1>
                  - Implemented Behaviour Trees Approach to automate the finite
                  machine’s instructive tasks having access to ChatGpt.
                </h1>
              </Timeline>
              <Timeline
                from="2021"
                to="2022"
                title="Tata Elxsi"
                subTitle="Machine Learning Intern"
              >
                <h1>
                  - During my 9 months Internship, I worked on Last Mile
                  Delivery Robots. Trained Custom Segmenatation model on
                  Recorded Video footage to detect footpath.
                </h1>

                <h1>
                  - Designed end to end ( Warehouse To Home ) path planning
                  algorithm in C++ to deliver items straight from the Warehouse
                  to Delivery location in minimum time possible.
                </h1>

                <h1>
                  - Implemented Multi-Robot Cloud Architecture on Kubernetes to
                  test Cluster network communication for robots.
                </h1>
              </Timeline>
              <Timeline
                from="2018"
                to="2022"
                title="Vishwakarma Institute Of Technology, Pune"
                subTitle="B.Tech"
              >
                I studied Production Engineering here, Explored Research domains
                under ISRO Lab in Metallurgy and Nano-Technology. Participated
                in Robotics and Ai Competitions/Hackthons.
              </Timeline>
            </div>
            {/* {/* <!-- Github Status --> */}
            <h2 className="hidden lg:block text-xl text-black dark:text-white font-bold mt-6 mb-4">
              Github
            </h2>
            <div className="w-full flex justify-center items-center">
              <img
                className="lg:object-none w-full hidden lg:block object-top lg:h-[200px]"
                src="./assets/contributions.png"
                alt="contributions"
              />
            </div>
            <TechStack />
          </GlowBox>
        </div>
      </div>
      {/* <DevicesEcosystem /> */}
    </div>
  );
};

export default HomeProfile;
