"use client";
import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "@/context/appContext";
import { ServicesLang } from "@/lib/languageService";
import { useEffect } from "react";

const Services = () => {
  const { language, theme } = useAppContext();
  const title = "CyberPro Group Services - Comprehensive Cybersecurity Solutions"; 
  const description = "Explore the services offered by CyberPro Group, including expert cybersecurity training, consulting for organizations, and advanced CCTV security solutions to enhance online safety."; 
  const keywords = "CyberPro Group services, cybersecurity training, CyberPro Academy, cybersecurity consulting, CCTV security solutions, online safety, risk mitigation, information security"; 

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const targetId = window.location.hash;
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  }, []);

  return (
    <>
      {/* SEO metadata for the services page */}
      <Head>
      <link rel="icon" href="src/app/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
    <div className={`${theme === "dark" ? "bg-slate-700" : ""}   `}>
      <section
        className="  max-md:w-screen  h-auto relative -top-36  pt-64 pb-32 leading-10 -mb-32 lg:pl-[50px]  pl-[5px] "
        style={{
          backgroundImage:
            "url('/image/ser.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" h-auto pb-3 pt-16  max-md:w-full max-md:p-0  ">
          <h2
            className={`${
              theme === "dark" ? "text-teal-500" : "text-[#ffffff]"
            } max-md:text-4xl pt-10  max-md:pl-3 pl-10 text-6xl`}
          >
            {ServicesLang[language].title}
          </h2>
          <p
            className={` ${
              theme === "dark" ? "text-teal-500" : "text-[#1ABC9C]"
            } max-md:pl-3 pt-5 pl-10 text-2xl`}
          >
            {ServicesLang[language].description}
          </p>
        </div>
      </section>

      <section id="service1" className="px-20 max-lg:px-5 space-y-5">
        <div className=" py-7">
          <h1
            className={` ${
              theme === "dark" ? "text-gray-300" : "text-[#2dc77c]"
            }  max-md:ml-5 max-lg:ml-5 text-center font-merriweather  text-4xl pb-3`}
          >
            {ServicesLang[language].service1}
          </h1>
          <p
            className={`  ${
              theme === "dark" ? "text-gray-300" : "text-[#1B396E]"
            }    font-merriweather pb-3 text-lg max-md:ml-5 max-lg:ml-5`}
          >
            {ServicesLang[language].service1_desc}
          </p>
          <div className="flex gap-4 w-fit mx-auto">
            <a
              href="/registration"
              className="bg-[#1B396E] hover:bg-teal-600 rounded max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff]   shadow-[#71a7de]"
            >
              {ServicesLang[language].apply}
            </a>
            <a
              href="https://app.sycamorecampus.com/"
              className="bg-[#1B396E] hover:bg-teal-600 rounded max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff]   shadow-[#71a7de]"
            >
              {ServicesLang[language].join}
            </a>
          </div>
        </div>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14 max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black  max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src="/image/co.jpg"
            alt="cyberpro academy student learning ethical hacking"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  font-merriweather max-md:p-3 text-[18px] `}
            >
              {ServicesLang[language].subservice1service1}
            </h1>
            <p
              className={`  ${
                theme === "dark" ? "text-gray-300" : ""
              } pt-2 font-roboto max-lg:font-sans max-md:p-3`}
            >
              {ServicesLang[language].subservice1service1_desc}
            </p>
            <div className="flex items-center py-5">
              <a
                href="/courses"
                className="bg-blue-600 hover:bg-blue-800 p-2  w-fit mx-auto lg:mx-20  rounded  text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:mx-[-0.3em] max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src="/image/semi.jpg"
            alt="People attending conference, seminar of cyberpro group"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  max-lg:font-sans  max-md:p-3 font-merriweather text-[18px] `}
            >
              {ServicesLang[language].subservice2service1}
            </h1>
            <p
              className={` ${
                theme === "dark" ? "text-gray-300" : ""
              }  pt-2 font-roboto max-lg:font-sans  max-md:p-3`}
            >
              {ServicesLang[language].subservice2service1_desc}
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14 max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:mx-[-0.3em] max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src="/image/res.jpg"
            alt="free books about cyber security"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  max-md:p-3 font-merriweather text-[18px] max-lg:font-sans  `}
            >
              {ServicesLang[language].subservice3service1}
            </h1>
            <p
              className={` ${
                theme === "dark" ? "text-gray-300" : ""
              }  pt-2 font-roboto max-lg:font-sans  max-md:p-3`}
            >
              {ServicesLang[language].subservice3service1_desc}
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src="/image/cert.jpg"
            alt="certificates of cybersecurity by cyberpro academy"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  max-md:p-3 font-merriweather text-[18px] max-lg:font-sans  `}
            >
              {ServicesLang[language].subservice4service1}
            </h1>
            <p
              className={` ${
                theme === "dark" ? "text-gray-300" : ""
              } pt-2 font-roboto max-lg:font-sans  max-md:p-3`}
            >
              {ServicesLang[language].subservice4service1_desc}
            </p>
          </div>
        </section>
      </section>
      <section
        id="service2"
        className="flex flex-col px-20 max-lg:px-5 justify-start items-start pb-5 gap-4  mt-4  max-md:px-5 space-y-5 border-t-2  "
      >
        <div className="py-7">
          <h1
            className={` ${
              theme === "dark" ? "text-white font-bold" : "text-[#2dc77c]"
            }  font-merriweather  lg:border-t-gray-200
         text-center text-4xl pb-3`}
          >
            {ServicesLang[language].service2}
          </h1>
          <p
            className={` ${
              theme === "dark" ? "text-gray-300" : "text-[#1B396E]"
            }  font-merriweather pb-1 text-md`}
          >
            {ServicesLang[language].service2_desc}
          </p>
        </div>
        <a
          href="Contactus"
          className="bg-[#1B396E] hover:bg-teal-600 w-fit mx-auto rounded max-md:ml-3  p-2  text-clip text-[18px] text-[#ffffff]   shadow-[#71a7de]"
        >
          Get Expert Advice
        </a>
        <div className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3 "
            src="/image/ass.jpg"
            alt="cybersecurity consulting best consulting by cyberpro group"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  font-merriweather text-[18px] max-md:p-3  `}
            >
              {ServicesLang[language].subservice1service2}
            </h1>
            <p
              className={` ${
                theme === "dark" ? "text-gray-300" : ""
              }  pt-3 font-roboto max-lg:font-sans  max-md:p-3  `}
            >
              {ServicesLang[language].subservice1service2_desc}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px]"
            src="/image/int.jpg"
            alt="threat intelligence cybersecurity cyberpro group"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  font-merriweather text-[18px] `}
            >
              {ServicesLang[language].subservice2service2}
            </h1>
            <p
              className={` ${
                theme === "dark" ? "text-gray-300" : ""
              }  pt-3 font-roboto max-lg:font-sans  `}
            >
              {ServicesLang[language].subservice2service2_desc}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px]"
            src="/image/third.jpg"
            alt="risk assesment cybersecurity best company cyberpro group in risk assesment"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  font-merriweather text-[18px] `}
            >
              {ServicesLang[language].subservice3service2}
            </h1>
            <p
              className={` ${
                theme === "dark" ? "text-gray-300" : ""
              }  pt-3 font-roboto max-lg:font-sans  `}
            >
              {ServicesLang[language].subservice3service2_desc}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3  ">
          <Image
            className="max-sm:w-[400px] max-md:p-3 "
            src="/image/aud.jpg"
            alt="IT security audit best company top ten"
            width={250}
            height={250}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
              }  font-merriweather text-[18px] max-md:p-3  `}
            >
              {ServicesLang[language].subservice4service2}
            </h1>
            <p
              className={` ${
                theme === "dark" ? "text-gray-300" : ""
              }  pt-3 font-roboto max-lg:font-sans  max-md:p-3  `}
            >
              {ServicesLang[language].subservice4service2_desc}
            </p>
          </div>
        </div>
      </section>

      {/* installation CCTV cameras  service section content*/}
      <div
        id="service3"
        className="pb-5 md:pb-10 w-[100%] h-full   max-lg:bg[#BEB9B9] px-20  max-md:px-5 mt-0"
      >
        <div className="">
          <h1
            className={` ${
              theme === "dark" ? "text-gray-300" : "text-[#2dc77c]"
            }  max-lg:ml-0  font-merriweather text-10px text-4xl text-center  max-md:ml-0  py-3 border-t-2  `}
          >
            {ServicesLang[language].service3}
          </h1>
          <p
            className={` ${
              theme === "dark" ? "text-gray-300" : "text-[#1B396E]"
            }  max-lg:ml-0  font-merriweather pb-3 text-md  max-md:ml-0  `}
          >
            {ServicesLang[language].service3_desc}
          </p>
          <a
            href="/Contactus"
            className="bg-[#1B396E] hover:bg-teal-600 rounded   p-2  block w-fit mx-auto text-clip text-[18px] text-[#ffffff]   shadow-[#71a7de]"
          >
            Secure Your Premises
          </a>
        </div>
        <section className="space-y-5">
          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3  ">
            <Image
              className="max-sm:w-[400px] max-md:p-3 "
              src="/image/cctv1.jpg"
              alt="best cctv cameras company for consultation and assesment in rwanda, USA, CAMERON and ottawa"
              width={250}
              height={250}
            />
            <div data-aos="fade-up">
              <h1
                className={` ${
                  theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
                }  max-md:p-3  font-merriweather text-[18px] max-lg:font-sans `}
              >
                {ServicesLang[language].subservice1service3}
              </h1>
              <p
                className={` ${
                  theme === "dark" ? "text-gray-300" : ""
                }  pt-2 font-roboto max-lg:font-sans  max-md:p-3 `}
              >
                {ServicesLang[language].subservice1service3_desc}
              </p>
            </div>
          </section>

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3  ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src="/image/cctv3.jpg"
              alt="best company in cctv camera installation in rwanda, cameron, canada"
              width={250}
              height={250}
            />
            <div data-aos="fade-up">
              <h1
                className={` ${
                  theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
                }  max-md:p-3  font-merriweather text-[18px] max-lg:font-sans `}
              >
                {ServicesLang[language].subservice2service3}
              </h1>
              <p
                className={` ${
                  theme === "dark" ? "text-gray-300" : ""
                } pt-2 font-roboto max-lg:font-sans  max-md:p-3 `}
              >
                {ServicesLang[language].subservice2service3_desc}
              </p>
            </div>
          </section>

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3  ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src="/image/cctv4.jpg"
              alt="best company in rwanda, cameron to offer profesional installation"
              width={250}
              height={250}
            />
            <div data-aos="fade-up">
              <h1
                className={` ${
                  theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
                }  max-md:p-3  font-merriweather text-[18px] max-lg:font-sans `}
              >
                {ServicesLang[language].subservice3service3}
              </h1>
              <p
                className={`  ${
                  theme === "dark" ? "text-gray-300" : ""
                }  pt-2 font-roboto max-lg:font-sans  max-md:p-3 `}
              >
                {ServicesLang[language].subservice3service3_desc}
              </p>
            </div>
          </section>

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3  ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src="/image/cctv2.jpeg"
              alt="best company to offer top best awesome maintenance abd support of cctv cameras in rwanda, cameron"
              width={250}
              height={250}
            />
            <div data-aos="fade-up">
              <h1
                className={` ${
                  theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
                }  max-md:p-3  font-merriweather text-[18px] max-lg:font-sans `}
              >
                {ServicesLang[language].subservice4service3}
              </h1>
              <p
                className={`  ${
                  theme === "dark" ? "text-gray-300" : ""
                }  pt-2 font-roboto max-lg:font-sans  max-md:p-3 `}
              >
                {ServicesLang[language].subservice4service3_desc}
              </p>
            </div>
          </section>

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3  ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src="/image/cctv5.jpg"
              alt="best place to upgrade your cctv cameras in rwanda and cameron"
              width={250}
              height={250}
            />
            <div data-aos="fade-up">
              <h1
                className={` ${
                  theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
                }  max-md:p-3  font-merriweather text-[18px] max-lg:font-sans `}
              >
                {ServicesLang[language].subservice5service3}
              </h1>
              <p
                className={`  ${
                  theme === "dark" ? "text-gray-300" : ""
                }  pt-2 font-roboto max-lg:font-sans  max-md:p-3 `}
              >
                {ServicesLang[language].subservice5service3_desc}
              </p>
            </div>
          </section>

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3  ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src="/image/cctv6.jpg"
              alt="training and internship of cctv camera best company in rwanda and camron"
              width={250}
              height={250}
            />
            <div data-aos="fade-up">
              <h1
                className={` ${
                  theme === "dark" ? "text-white font-bold" : "text-[#1B396E]"
                }  max-md:p-3  font-merriweather text-[18px] max-lg:font-sans `}
              >
                {ServicesLang[language].subservice6service3}
              </h1>
              <p
                className={`  ${
                  theme === "dark" ? "text-gray-300" : ""
                }  pt-2 font-roboto max-lg:font-sans  max-md:p-3 `}
              >
                {ServicesLang[language].subservice6service3_desc}
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
    </>
  );
};

export default Services;
