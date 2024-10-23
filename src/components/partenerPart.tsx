import React from "react";

const partnerLogos = [
  { src: "/image/aws.png", alt: "Amazon Cloud Service Logo", link: "https://aws.amazon.com" },
  { src: "/image/AZURE.png", alt: "Azure Microsoft Partner", link: "https://azure.microsoft.com" },
  { src: "/image/cisa.jpg", alt: "CISA - Cybersecurity and Infrastructure Security Agency", link: "https://www.cisa.gov" },
  { src: "/image/Fortine.jpg", alt: "Fortinet Cybersecurity Partner", link: "https://www.fortinet.com" },
  { src: "/image/isaca.jpeg", alt: "ISACA certifications", link: "https://www.isaca.org" },
  { src: "/image/kaspersky.jpg", alt: "Kaspersky Cybersecurity", link: "https://www.kaspersky.com" },
];

const PartnerLogos = () => {
  return (
    <div className="pt-10 mt-5 bg-[#1B396E]">
      <h1 className="text-gray-200 text-3xl font-bold text-center ">
        Our Partners
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
        {partnerLogos.map((partner, index) => (
          <div
            key={index}
            className="justify-center gap-0 transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <a href={partner.link}>
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-30 object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
