import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const ZamFamilyTribute: React.FC = () => {
  const items = [
    {
      img: "src/assets/test2.png",
      title:
        "The Chinese National People’s Congress standing committee ",
      desc: "chairman’s wife Madam Zhang Ruizhen and the wife of Srilankan Ambassador of China Madam Ding Yue with the chairman Mr. Z.A.M.Refai. When they visited Zam Gems on 17th September 2012.",
    },
    {
      img: "src/assets/test1.png",
      title: "Bahrain Prime Minister Sheikh Khalifa IBN Salman AL-Khalifa",
      desc: " visited the Zam Gems Booth at the prestigious Jewellery Arabia Exhibition in Bahrain. His visit highlighted the event’s significance and showcased the government’s support for the jewelry industry. The Prime Minister’s presence brought attention and appreciation to Zam Gems’ exquisite collection, enhancing its global reputation.",
    },
    {
      img: "src/assets/test6.png",
      title:
        "The visit of Japanese Princess Tsuguko of Takamado and Mrs. Tohomi Hobo wife of Sri Lanka Ambassador of Japan",
      desc: "to Zam Gems on 10th August 2013. The Chairman Mr. Z.A.M.Refai, Managing Director Mr. Ashan Refai and Mr. Aqil Refai is also in the picture.",
    },
    {
      img: "src/assets/test5.png",
      title: "Prince Abdul Rahaman Hassan Al Saud of Saudi Arabia",
      desc: "is seen standing between Mr. Z.A.M. Refai, the Chairman, and Mr. Ahsan Refai, the Managing Director. The image captures a moment of camaraderie and collaboration during an important visit or meeting at the Colombo Flagship store.",
    },
    {
      img: "src/assets/test3.png",
      title:
        "Dr. Hashim A Yamani, the Chief Minister of Atomic & Renewable Energy from Saudi Arabia, along with his wife, Mrs. Hashim",
      desc: "visited our Kandy showroom on 18th December 2012. Their visit was a momentous occasion for us, reflecting their interest in our offerings and our esteemed reputation. Dr. Yamani’s expertise in atomic and renewable energy, coupled with the presence of Mrs. Hashim, brought significant attention and prestige to our showroom, highlighting our commitment to excellence and quality.",
    },
    {
      img: "src/assets/test4.png",
      title: "Mr. Shein Cheng Xin of China",
      desc: "during his visit to Zam Gems, was impressed by the exceptional quality and unique craftsmanship displayed at our showroom. His appreciation reflected the growing interest and recognition of our brand on a global scale.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="bg-white text-gray-500 py-10 ">
        {/* Header */}
        <div
          style={{ fontFamily: "Baskervville, sans-serif" }}
          className="text-center md:px-12 lg:px-20 py-20"
        >
          <h1 className="text-2xl md:text-5xl font-serif text-[#3A2A15]">
            Faces of our Journey - A Tribute To The
          </h1>
          <h2 className="text-3xl md:text-5xl font-serif text-[#3A2A15] mt-5">
            ZAM Family
          </h2>
        </div>
        <div className="w-full flex justify-center mb-30 mt-[-50px]">
          <img src="src/assets/crack.png" />
        </div>

        {/* Centered grid */}
        <div
          style={{ fontFamily: "Monserret, sans-serif" }}
          className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-x-60 gap-y-20 justify-items-center"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-sm "
            >
              <div className="w-[500px] h-auto relative">
                <img src={item.img} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-regular mt-5 text-justify mb-2 leading-snug">
                <span className="text-gray-900 font-bold">{item.title}</span> {item.desc}
              </h3>
            </div>
          ))}
        </div>

        {/* Final tribute section */}
        <div className="text-center mt-20 mb-10">
          <div className="w-[500px] mx-auto">
            <img
              src="src/assets/test7.png"
              alt="Hillary Clinton"
              className="w-[500px] h-auto object-cover "
            />
          </div>
          <p 
           style={{ fontFamily: "Monserret, sans-serif" }}
          className="text-md text-gray-600 mt-3 max-w-md mx-auto">
            Received following{" "}
            <span className="font-semibold text-black">Hillary Clinton’s</span> visit to
            Zam Gems in April 1995.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ZamFamilyTribute;
