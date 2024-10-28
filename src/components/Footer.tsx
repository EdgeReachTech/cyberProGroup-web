"use client";
import { SiSpringsecurity } from "react-icons/si";
import Link from "next/link";
import {
  Contacts,
  Locations,
  NavigationItemsRoutes,
} from "./HeaderAndFooter/constant";
import {
  FaEnvelope,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { useAppContext } from "@/context/appContext";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/context/api";
import { toast } from "react-toastify";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { language } = useAppContext();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/user/subscribe`, {
        email,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-cover bg-center p-5"
      style={{ backgroundImage: "url('/image/footer.jpg')" }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        {/* Address Section */}
        <div className="mb-5 md:mb-0">
          <h1 className="text-[#1ABC9C]">
            {language === "en" ? "ADDRESS" : "ADRESSE"}
          </h1>
          <div className="w-16 bg-blue-700 h-1 my-2" />
          <div className="text-white text-lg">
            {Locations.map((location, index) => (
              <div key={index} className="flex items-center mb-2">
                <location.location className="text-red-700 mr-2" />
                <p>{`${location.country}: ${location.street}`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="mb-5 md:mb-0">
          <h1 className="text-[#1ABC9C]">
            {language === "en" ? "USEFUL LINKS" : "LIENS UTILES"}
          </h1>
          <div className="w-16 bg-blue-700 h-1 my-2" />
          <div className="text-white text-lg">
            {NavigationItemsRoutes.map((route, index) => (
              <Link
                href={route.path}
                key={index}
                className="block hover:text-blue-400 mb-1"
              >
                {route[language]}
              </Link>
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h1 className="text-[#1ABC9C]">
            {language === "en" ? "CONTACTS" : "CONTACTS"}
          </h1>
          <div className="w-16 bg-blue-700 h-1 my-2" />
          <div className="text-white">
            {Contacts.map((contact, index) => (
              <div key={index} className="flex justify-between mb-2">
                <p>{contact.country}</p>
                <div className="flex items-center">
                  <contact.icon className="text-blue-800 mr-2" />
                  <p>{contact.phoneNumber}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center text-white mt-4">
            <FaEnvelope className="mr-2" />
            <a href="mailto:info@cyberprogroup.com">info@cyberprogroup.com</a>
          </div>
        </div>
      </div>

      {/* Subscribe & Social Media */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-5">
        <div className="flex items-center gap-3 mb-4 md:mb-0 w-full bg-white rounded">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder={
              language === "en"
                ? "Please Enter Your Email"
                : "Veuillez entrer votre email"
            }
            className="bg-transparent placeholder:text-[#F39C12] text-yellow-500 p-2  border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className={`py-2 px-4 rounded-r-lg ${
              loading ? "bg-slate-400" : "bg-[#F39C12] hover:bg-[#ffe042]"
            }`}
          >
            {language === "en" ? "SUBSCRIBE" : "S'ABONNER"}
          </button>
          <SiSpringsecurity className="w-7 h-7" />
        </div>

        <div className="bg-blue-700 p-3 rounded-lg">
          <p className="text-white text-center">
            {language === "en" ? "Follow Us" : "Suivez-nous"}
          </p>
          <div className="flex  gap-5 justify-around mt-2">
            <a
              href="https://www.tiktok.com/@cyberpro.group.rw?_t=8qR5bmcQDdG&_r=1"
              className="text-white hover:animate-bounce"
            >
              <FaTiktok />
            </a>
            <a href="#" className="text-red-600 hover:animate-bounce">
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/cyberpro-group-rw-aa104932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-blue-500 hover:animate-bounce"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fcyberprogrouprw%2F%3Fnext%3D%252F&is_from_rle"
              className="text-orange-500 hover:animate-bounce"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/CyberProGroupRw?t=q15PgUJVt6-ouzlMSiIa8Q&s=09&mx=2"
              className="text-blue hover:animate-bounce"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61565121267543"
              className="text-blue-400 hover:animate-bounce"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links & Copyright */}
      <div className="flex flex-col items-center mt-5">
        <div className="flex justify-center gap-5 mb-4">
          <Link href="/terms" className="text-white hover:text-gray-400">
            {language === "en" ? "Website Terms" : "Conditions d'utilisation"}
          </Link>
          <Link href="/privacy" className="text-white hover:text-gray-400">
            {language === "en" ? "Data Privacy" : "Confidentialité des données"}
          </Link>
          <Link href="/faq" className="text-white hover:text-gray-400">
            FAQs
          </Link>
        </div>
        <p className="text-white text-center">
          {language === "en"
            ? "copyright©2024 CyberProGroup"
            : "droits d'auteur©2024 CyberProGroup"}
        </p>
        <p className="text-white text-center">
          {language === "en" ? "All rights reserved" : "Tous droits réservés"}
        </p>
      </div>

      <h1 className="text-teal-400 font-bold text-lg text-center mt-4">
        Designed and Developed by{" "}
        <a
          className="text-[#34b886] hover:text-[#2e7451]"
          href="https://www.edgereachtech.com"
        >
          EdgeReach Tech
        </a>
      </h1>
    </div>
  );
};

export default Footer;
