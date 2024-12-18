"use client";
import Head from "next/head";
import Image from "next/image";
import { Team } from "@/types/types";
import { useAppContext } from "@/context/appContext";
import { useEffect, useState } from "react";
import { AboutUsLang } from "@/lib/languageAbout";
import axios from "axios";
import { SkeletonTeam } from "@/components/skeletons/cardSkeleton";
import { BASE_URL } from "@/context/api";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const Aboutus = () => {
  const { language, theme } = useAppContext();
  const [team, setTeam] = useState<Team[]>([]);
  const [isLoadingTeam, setIsLoadingTeam] = useState(false);
  const title = "About CyberPro Group - Leading Cybersecurity Solutions"; 
const description = "CyberPro Group is dedicated to enhancing online safety through professional cybersecurity training, expert consulting, and CCTV security solutions. Learn about our mission and impact in the global cybersecurity landscape."; 
const keywords = "CyberPro Group, cybersecurity training, CyberPro Academy, cybersecurity consulting, CCTV security solutions, online safety, Africa, risk mitigation, information security"; 


  const fetchData = async (
    endpoint: string,
    setStateFunc: React.Dispatch<React.SetStateAction<any>>,
    setLoadingFunc: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoadingFunc(true);
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      setStateFunc(response.data);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    } finally {
      setLoadingFunc(false);
    }
  };

  useEffect(() => {
    fetchData("team", setTeam, setIsLoadingTeam);
  }, []);

  return (
    <>
      {/* SEO metadata for this page */}
      <Head>
      <link rel="icon" href="src/app/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
    <div className={`${theme === "dark" ? "bg-slate-700" : "bg-white"} pb-10`}>
      <section
        className="relative pt-52 pb-32"
        style={{
          backgroundImage:
            "url('/image/ab.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center pt-16 pb-3">
          <h2
            className={`text-6xl ${
              theme === "dark" ? "text-teal-500" : "text-[#FFFFFF]"
            }`}
          >
            {AboutUsLang[language].title}
          </h2>
          <p
            className={`text-2xl ${
              theme === "dark" ? "text-teal-500" : "text-[#1ABC9C]"
            }`}
          >
            {AboutUsLang[language].subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5">
        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[300px]"
            src="/image/1.svg"
            alt="Vision of cyberpro group your best cyber security company"
            width={300}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].visionTitle}
              </span>
            </h1>
            <p
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].visionDescription}
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[400px]"
            src="/image/2.svg"
            alt="mission of cyberpro group best IT cyber security, hacking company"
            width={400}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl pt-3 ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].missionTitle}
              </span>
            </h1>
            <p
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].missionDescription}
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[300px]"
            src="/image/3.svg"
            alt="Values of cyber pro group "
            width={300}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].valuesTitle}
              </span>
            </h1>
            <ul
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].valuesDescription.map((value, index) => (
                <li key={value.title} className="block">
                  <span>{index + 1}. </span>
                  <strong className="font-bold ">{value.title}:</strong>
                  <span className="ml-1 block">{value.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[300px]"
            src="/image/4.svg"
            alt="ojectives of cyberpro group"
            width={300}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].objectiveTitle}
              </span>
            </h1>
            <ul
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].objectiveDescription.map(
                (value, index) => (
                  <li key={value.title} className="block">
                    <span>{index + 1}. </span>
                    <strong className="font-bold">{value.title}:</strong>
                    <span className="ml-1 block">{value.desc}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>
        <>
          {isLoadingTeam ? (
            SkeletonTeam
          ) : (
            <div className="flex card-holder   justify-center items-center gap-6 w-full md:w-[600px] lg:w-[1000px] m-auto ">
              {team && team.length > 0
                ? team.map((member, index) => (
                    <div
                      key={index}
                      className="bg-[#D9D9D9] min-w-fit h-fit pb-5 transform transition duration-300 hover:scale-105"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        width={90}
                        height={90}
                        className="w-full h-32 object-cover"
                      />
                      <h2 className="font-bold text-[24px] text-[#1B396E]  text-center">
                        {member.role}
                      </h2>
                      <p className="text-[28px] p-2 text-[#49454F] text-center">
                        {member.name}
                      </p>
                      <div className="flex items-center justify-center gap-[2px]">
                        <a href={member.linkedInProfile || "###"}>
                          <LiaLinkedinIn className="w-3 h-3" />
                        </a>
                        <a href={member.instagramProfile || "###"}>
                          <FaInstagram className="w-3 h-3 " />
                        </a>
                        <a href={member.twiterProfile || "###"}>
                          <FaTwitter className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))
                : "no team info available "}
            </div>
          )}
        </>
      </div>
    </div>
    </>
  );
};

export default Aboutus;
