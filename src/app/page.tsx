import { Badge } from "@/components/badge";
import Timeline from "@/components/timeline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="h-6 sticky top-0 z-50 justify-center flex gap-2 dark:bg-black bg-white">
        <ul
          id="mainNav"
          className="flex gap-1 text-sm font-bold dark:text-white"
        >
          <li className="mx-1 px-1 rounded-t-md">
            <a href="#Home_page">Home</a>
          </li>
          <li className="mx-1 px-1 rounded-t-md">
            <a href="#Eco_System">Eco-System</a>
          </li>
          <li className="mx-1 px-1 rounded-t-md">
            <a href="#Admin_Io">Admin-io</a>
          </li>
          <li className="mx-1 px-1 rounded-t-md">
            <a href="#Elemental">Elemental</a>
          </li>
          <li className="mx-1 px-1 rounded-t-md">
            <a href="#Gallary">Gallary</a>
          </li>
          <li className="mx-1 px-1 rounded-t-md">
            <a href="#YT">YT</a>
          </li>
        </ul>
      </nav>
      {/* {/* <!-- Home Page --> */}
      <div
        id="Home_page"
        className="flex items-center w-full justify-center flex-col gap-6 bg-slate-400 pb-3"
      >
        <div className="container m-auto grid grid-cols-4 auto-rows-min gap-x-2 gap-y-5">
          {/* {/* <!-- Profile Card --> */}
          <div className="tile col-span-4 lg:col-span-1 col-start-1 lg:row-span-2 px-2">
            <div className="sticky top-[200px]">
              <div className="w-full mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[200px]">
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
                  <h1 className="mt-6 mb-1 text-4xl xl:text-5xl font-semibold dark:text-white">
                    Vaibhav Dasharathe
                  </h1>
                  <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                    Full Stack Developer
                  </h3>
                  <div className="flex justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md text-[#1773EA]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 320 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md text-[#1C9CEA]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://dribbble.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md text-[#e14a84]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md text-[#0072b1]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="p-4 rounded-2xl mt-2 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black text-[#E93B81] shadow-md">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
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
                        <p className="dark:text-white break-all">
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
                          stroke-width="0"
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
                        <p className="dark:text-white break-all">
                          Bengaluru, india
                        </p>
                      </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black text-[#FD7590] shadow-md">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
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
                        <p className="dark:text-white break-all">
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
                      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black text-[#C17CEB] shadow-md">
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
                        <p className="dark:text-white break-all">
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
                    href="./resource/Vaibhav_Dasharathe_15_Oct_2023.pdf"
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
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <p>Download CV</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* {/* <!-- Nav Icons --> */}
          <div className="col-start-1 lg:col-start-2 col-span-4 lg:col-span-3 mt-5 md:mr-5 sticky top-6 z-10">
            <header className="hidden lg:w-fit h-[40px] p-[10px] ml-auto rounded-[16px] bg-slate-500 dark:bg-[#111111]">
              <nav className="block lg:block">
                <ul className="flex justify-evenly">
                  <a
                    className="w-12 h-12 rounded-[10px] cursor-pointer font-poppins bg-white border-black border-2 font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                    href="#home_page"
                  >
                    <span className="text-xl mb-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                      </svg>
                    </span>
                    Home
                  </a>
                  <a
                    className="w-12 h-12 rounded-[10px] cursor-pointer font-poppins bg-white border-black border-2 font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                    href="./resource/Vaibhav_Dasharathe_15_Oct_2023.pdf"
                    target="_blank"
                  >
                    <span className="text-xl mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Resume
                  </a>
                  <a
                    className="w-12 h-12 rounded-[10px] cursor-pointer font-poppins bg-white border-black border-2 font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                    href="#Admin_Io"
                  >
                    <span className="text-xl mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </span>
                    Works
                  </a>
                  <a
                    className="w-12 h-12 rounded-[10px] cursor-pointer font-poppins bg-white border-black border-2 font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                    href="/home-box-layout/blogs"
                  >
                    <span className="text-xl mb-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"></path>
                      </svg>
                    </span>
                    Blogs
                  </a>
                  <a
                    className="w-12 h-12 rounded-[10px] cursor-pointer font-poppins bg-white border-black border-2 font-medium mx-2.5 text-xs text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                    href="/home-box-layout/contact"
                  >
                    <span className="text-xl mb-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path>
                        </g>
                      </svg>
                    </span>
                    Contact
                  </a>
                </ul>
              </nav>
            </header>
          </div>
          {/* {/* <!-- About Me --> */}
          <div className="col-start-1 lg:col-start-2 col-span-4 lg:col-span-3 mt-5 px-3">
            {/* {/* <!-- <h1 className="tile-marker h-[600px]">THREE</h1> --> */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 font-[roboto]">About Me</h2>
              {/* {/* <!-- [Adjectives] + [Professional title] + [Years of experience] + [Skills] + [Achievements] + [Career goals] --> */}
              <p className="text-gray-700">
                Passionate Software Engineer with 2 years of experience in Web
                development and Artificial Intelligence. Enjoy working on
                Imaginary Ideas and turning them in to working prototypes.
              </p>

              <h3 className="font-semibold text-center mt-3 -mb-2">
                Find me on
              </h3>
              <div className="flex justify-center items-center gap-6 my-6">
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds LinkedIn"
                  href=""
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds YouTube"
                  href=""
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Facebook"
                  href=""
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Instagram"
                  href=""
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Twitter"
                  href=""
                  target="_blank"
                >
                  <svg
                    className="h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
              </div>

              <h1 className="text-xl font-bold mt-6 mb-4 text-black dark:text-white">Experience</h1>
              <div className="-my-6">
                <Timeline
                  from="2022"
                  to="Live"
                  title="Tata Elxsi"
                  subTitle="Software Engineer ( Artificial Intelligence )"
                >
                  <h1>
                    NLP/ LLM / ChatGpt / Web Dev / Docker Deployment / OpenCv
                    related tasks.
                  </h1>
                  <h1>
                    Worked on gRpc pipeline, connecting to Python-Backend with
                    AI capabilities using Docker.
                  </h1>
                  <h1>
                    Developed a React app Integrating with ChatGpt with speech
                    recognition and translation features.
                  </h1>
                </Timeline>
                <Timeline
                  from="2021"
                  to="2022"
                  title="Tata Elxsi"
                  subTitle="Intern [ Machine Leaning and Robotics]"
                >
                  During my 9 months Internship, I worked on Last Mile Delivery
                  Robots. Trained Custom Segmenatation model on Actual Video
                  footage to detect footpath. Also, Designed end to end (
                  Warehouse To Home ) path planning algorithm in C++.
                </Timeline>
                <Timeline
                  from="2018"
                  to="2022"
                  title="Vishwakarma Institute Of Technology, Pune"
                  subTitle="B.Tech"
                >
                  I studied Production Engineering here, Explored Research
                  domains under ISRO Lab in Metallury and Nano-Technology.
                  Participated in Robotics and Ai Competitions/Hackthons.
                </Timeline>
              </div>
              {/* {/* <!-- Github Status --> */}
              <h2 className="text-xl font-bold mt-6 mb-4">Github</h2>
              <div className="w-full flex justify-center items-center">
                <img
                  className="lg:object-none w-full hidden lg:block object-top lg:h-[200px]"
                  src="./assets/contributions.png"
                  alt="contributions"
                />
              </div>
              <h2 className="text-xl font-bold mt-6 mb-4">Tech Stack</h2>
              <div className="flex justify-center">
                <div className="flex justify-start flex-col gap-1">
                  <div className="flex justify-start items-center gap-3">
                    <h1 className="bg-black text-white px-2 rounded-md">
                      Languages
                    </h1>
                    <div className="flex flex-wrap gap-1 items-center justify-center">
                      <Badge
                        name="C"
                        tag="C++"
                        color="white"
                        colorTag="black"
                      />
                      <Badge name="Java" tag="" color="" colorTag="white" />
                      <Badge
                        name="Python"
                        tag=""
                        color="white"
                        colorTag="white"
                        logo="python"
                      />
                      <Badge
                        name="Csharp"
                        tag=""
                        color="white"
                        colorTag="white"
                        logo="csharp"
                        logoColor="black"
                      />
                      <Badge
                        name="JavaScript"
                        tag="Js"
                        color="white"
                        colorTag="black"
                        logo="javascript"
                        logoColor="red"
                      />
                      <Badge
                        name="TypeScript"
                        tag="Ts"
                        color="white"
                        colorTag="black"
                        logo="typescript"
                      />
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <h1 className="bg-black text-white px-2 rounded-md">
                      Full Stack
                    </h1>
                    <div className="flex flex-wrap gap-1 items-center justify-center">
                      <img
                        alt="React"
                        src="https://img.shields.io/badge/React-Js-black?logo=React&labelColor=white"
                      />

                      <img
                        alt="Electron"
                        src="https://img.shields.io/badge/Electron-white?logo=electron&logoColor=blue"
                      />
                      <img
                        alt="Node"
                        src="https://img.shields.io/badge/Node-Js-black?logo=nodedotjs&labelColor=white"
                      />
                      <img
                        alt="Redux"
                        src="https://img.shields.io/badge/React-Redux-black?logo=redux&labelColor=white&logoColor=blue"
                      />
                      <img
                        alt="Mongodb"
                        src="https://img.shields.io/badge/Mongo-DB-black?logo=mongodb&logoColor=green&labelColor=white"
                      />
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <h1 className="bg-black text-white px-2 rounded-md">
                      Platforms
                    </h1>
                    <div className="flex flex-wrap gap-1 items-center justify-center">
                      <img
                        alt="Windows"
                        src="https://img.shields.io/badge/Windows-white?logo=windows&logoColor=blue"
                      />
                      <img
                        alt="Android"
                        src="https://img.shields.io/badge/Andriod-white?logo=android"
                      />
                      <img
                        alt="Docker"
                        src="https://img.shields.io/badge/Docker-white?logo=docker"
                      />
                      <img
                        alt="Ubuntu"
                        src="https://img.shields.io/badge/Ubuntu-white?logo=ubuntu"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {/* <!-- Eco System --> */}
      <div
        id="Eco_System"
        className="flex items-center w-full min-h-screen h-fit flex-col  relative"
      >
        <div className="h-screen w-full m-20">
          <iframe
            className="h-full w-full"
            // style="border: none"
            width="100%"
            height="100%"
            src="https://whimsical.com/embed/SNZjiDmQgv1v52UB4Bn7ak"
          ></iframe>
        </div>
      </div>
      {/* {/* <!-- Admin_IO --> */}
      {/* {/* <!-- Admin-Io-Tabs --> */}
      <div
        id="Admin_Io"
        className="flex items-center w-full min-h-screen h-fit flex-col bg-red-700"
      >
        <nav className="h-6 sticky top-6 z-40 justify-center flex gap-2 dark:bg-black">
          <ul
            id="AdminNav"
            className="flex gap-1 text-sm font-bold dark:text-white rounded-md"
          >
            <li className="active mx-1 px-1 rounded-t-md">
              <a href="#Kardz_Page">Kardz</a>
            </li>
            <li className="mx-1 px-1 rounded-t-md">
              <a href="#Profile_Page">Profile</a>
            </li>
            <li className="mx-1 px-1 rounded-t-md">
              <a href="#Story_Page">Story</a>
            </li>
          </ul>
        </nav>
        {/* {/* <!-- Kardz --> */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800" id="Kardz_Page">
          <div className="relative">
            <img src="./assets/Kardz_demo.png" />
            <div className="h-96 w-40 absolute bottom-0 right-0 bg-white">
              <div className="h-full">Right</div>
            </div>
            <div className="h-96 w-40 absolute top-0 left-0 bg-white">
              <div className="h-full w-full">Left</div>
            </div>
          </div>
        </div>
        {/* {/* <!-- Profile Io Page --> */}
        <div
          id="Profile_Page"
          className="p-4 bg-gray-50 dark:bg-gray-800 flex flex-col lg:flex-row w-full"
        >
          <div className="flex justify-center w-full lg:w-[50%]">
            <div className="flex justify-center w-64 rounded-md">
              <img
                className="object-contain rounded-md"
                src="./assets/profile_list.png"
                alt="profile_list_demo"
              />
            </div>
            <div className="relative w-72">
              <img
                className="absolute object-contain left-12 top-12"
                src="./assets/isagi_yoichi.png"
                alt="isagi_yoichi"
              />
              <img
                className="absolute object-contain left-24 top-24"
                src="./assets/isagi_yoichi.png"
                alt="isagi_yoichi"
              />
              <img
                className="absolute object-contain left-36 top-36"
                src="./assets/isagi_yoichi.png"
                alt="isagi_yoichi"
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%] font-[roboto] flex flex-col justify-center lg:justify-start p-5 gap-2">
            <div className="text-6xl lg:text-8xl">Profile Io</div>
            <div className="text-2xl lg:text-4xl">
              Fictional Character analysis and development App.
            </div>
            <div className="flex flex-wrap gap-1">
              <img
                alt="windows"
                src="https://badgen.net/badge/icon/windows?icon=windows&label"
              />
              <img
                alt="typescript"
                src="https://badgen.net/badge/icon/typescript?icon=typescript&label"
              />
              <img alt="typescript" src="https://badgen.net/badge/React/Js" />
              <img
                alt="typescript"
                src="https://badgen.net/badge/Electron/Js"
              />
            </div>
            <div className="flex flex-col text-xl pl-5">
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Personalised Mash-ups
              </label>
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Auto detect Vocals Only Regions
              </label>
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Create Custom playlist
              </label>
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Auto Demix Vocals, Drums, Bass, Others
              </label>
            </div>
          </div>
        </div>
        {/* {/* <!-- Story page --> */}
        <div
          className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="Story_Page"
        >
          <div className="">
            <img src="./assets/story_io_demo.png" alt="story-io-tab" />
          </div>
        </div>
      </div>
      <div
        id="Elemental"
        className="flex items-center w-full min-h-screen h-fit flex-col mt-3"
      >
        <nav className="h-6 sticky top-6 z-40 justify-center flex gap-2 dark:bg-black">
          <ul
            id="ElementNav"
            className="flex gap-1 text-sm font-bold dark:text-white rounded-md"
          >
            <li className="active mx-1 px-1 rounded-t-md">
              <a href="#Music_Ai">MusicAi</a>
            </li>
            <li className="mx-1 px-1 rounded-t-md">
              <a>xVision</a>
            </li>
          </ul>
        </nav>
        {/* {/* <!-- Music AI --> */}
        <div id="Music_Ai" className="flex flex-col lg:flex-row w-full mt-10">
          <div className="w-full lg:w-[50%]">
            <img
              src="./assets/MusicAi_1.png"
              className="rounded-lg border-2 border-black"
            />
          </div>
          <div className="w-full lg:w-[50%] font-[roboto] flex flex-col justify-center lg:justify-start p-5 gap-2">
            <div className="text-6xl lg:text-8xl">Music AI</div>
            <div className="text-2xl lg:text-4xl">
              React and Electron based Windows App for autogerating personalised
              Mashup songs
            </div>
            <div className="flex flex-wrap gap-1">
              <img
                alt="windows"
                src="https://badgen.net/badge/icon/windows?icon=windows&label"
              />
              <img
                alt="typescript"
                src="https://badgen.net/badge/icon/typescript?icon=typescript&label"
              />
              <img alt="typescript" src="https://badgen.net/badge/React/Js" />
              <img
                alt="typescript"
                src="https://badgen.net/badge/Electron/Js"
              />
            </div>
            <div className="flex flex-col text-xl pl-5">
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Personalised Mash-ups
              </label>
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Auto detect Vocals Only Regions
              </label>
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Create Custom playlist
              </label>
              <label>
                <input
                  type="checkbox"
                  className="bg-red-600 rounded-e-md"
                  checked
                  disabled
                />
                Auto Demix Vocals, Drums, Bass, Others
              </label>
            </div>
            <div className="flex flex-col">
              <div className="inline-flex text-lg items-center gap-1">
                Source Code / Download :
                <a
                  className="flex items-center gap-2 font-bold"
                  href="https://github.com/Infinity8sailor/MusicAi"
                  target="_blank"
                >
                  Github
                  <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black text-[#C17CEB] shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {/* <!-- </svg> --> */}
                  </span>
                </a>
              </div>
              {/* <!-- <div>Download Exe :</div> --> */}
            </div>
          </div>
        </div>
      </div>
      {/* {/* <!-- Caurousal --> */}
      <div
        id="Gallary"
        className="flex items-center h-screen w-full justify-center bg-green-400 mt-10"
      >
        <div
          id="default-carousel"
          className="relative w-[90%] lg:w-[70%] border-2 border-black rounded-lg"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/profile_Io_demo.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <div>Hello there</div>
            </div>
            {/* {/* <!-- Item 2 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_1.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 3 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_2.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 4 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_3.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 5 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_4.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_5.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/MusicAi_1.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      {/* {/* <!-- External Links  --> */}
      <div
        id="YT"
        className="flex items-center h-[1080px] w-full justify-center flex-wrap"
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <iframe
            width="384px"
            className="aspect-video rounded-t-md"
            src="https://www.youtube.com/embed/6C33PKdV710?si=pOIjp7jRijs805-H"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <iframe
            width="384px"
            className="aspect-video rounded-t-md"
            src="https://www.youtube.com/embed/HB3rpFcM1Qg?si=3A7J_n0NVEcd9VZj"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                IIT-B Robotics Competition 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* {/* <!-- Versions --> */}
      <div className="flex items-center p-5 lg:p-[300px] w-full justify-center">
        <ol className="list-disc ml-5">
          <li>
            Unsorted
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Web3 with information
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  WhatsApp bot [ Duck Bot + Google Search + Google Images ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Ritual-Io [ Re-Design ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Korean Learning Notes
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Youtube chanenl links
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  project I am working and Worked on
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Github link + Activity
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Kardz + [ Final Touch ] + GIF for the demo changing the Alphas
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Rein [ Improve + Solid Concept
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Code Base
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Renaming Admin-Io
                </label>
              </li>
            </ol>
          </li>
          <li>
            V0.2
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Fill the Time line Well [ temp sat ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Good About Info
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Remove all the External Links
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  All the Lorem Epsum Text
                </label>
              </li>
            </ol>
          </li>
          <li>
            V0.1.1 [ Profile ]
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Behaviour tree based , Ritual-Io plugin to detect MBTI of
                  personality.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Modify the schema and custom aditional info adder
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  Filter Option for list [ fictional ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  ON search basis [ you already have the list just filter ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  image gallary remove [ Temp ]
                </label>
              </li>
            </ol>
          </li>
          <li>
            V0.1
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  Tech Stack Icons Pack
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  layout Markings
                </label>
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <footer className="flex justify-center items-center m-2">
        Made by 🦆 with Tailwind
      </footer>
    </>
  );
}
