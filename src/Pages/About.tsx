
const chairmanPortrait = "src/assets/Founder.png";
const vintagePhoto1 = "src/assets/about1.png";
const vintagePhoto2 = "src/assets/about2.png";
const heroImage = "src/assets/Abouthero.png";

function App() {
  return (
    
      <div className="font-serif text-gray-900 bg-white ">
        {/* Hero Section */}
        <section className="relative w-full h-[28rem] md:h-[32rem] lg:h-[39rem]">
          <img
            src={heroImage}
            alt="Gemstones being handled by craftsman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent flex flex-col justify-center px-8 md:px-20 lg:px-32 ">
            <h1
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-regular max-w-lg leading-tight"
            >
              A Glimpse Into Our World
            </h1>
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-4 max-w-sm text-sm md:text-xl text-white/80 font-normal"
            >
              Tradition, innovation, and a<br /> relentless pursuit of
              perfection-
              <br />
              shaping every detail of who we
              <br /> are.
            </p>
          </div>
        </section>

        {/* Chairman's Message Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 py-16 flex flex-col md:flex-row gap-12 md:gap-40 mt-10">
          {/* Left: Portrait and caption */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <div className=" overflow-hidden">
              <img
                src={chairmanPortrait}
                alt="Chairman portrait"
                className="w-120 h-140 object-cover"
              />
            </div>
          </div>

          {/* Right: Message text */}
          <div className="md:w-2/3 prose prose-lg max-w-none mt-15">
            <h2
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="text-xl md:text-3xl font-serif font-semibold mb-6 lg:ml-12"
            >
              Chairman&apos;s Message
            </h2>
            <blockquote className="relative pl-12 text-gray-900">
              <span className="absolute left-0 top-[-14] text-6xl md:text-7xl font-serif font-bold text-black select-none">
                “
              </span>
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="leading-relaxed text-justify font-semiboold text-[15px] mt-10"
              >
                It is with great pleasure that I introduce Zam Gems, the market
                leader for Sri Lankan gemstones and jewelry. Since my humble
                beginnings in 1976 as a wholesale gem merchant, I have seen Zam
                Gems grow exponentially into a well-established multinational
                brand name with a strong and expanding customer base.
                <br /> Our commitment to sourcing and delivering the finest of
                Sri Lanka&apos;s famed gemstones and jewelry to our customers as
                well as our dedication to customer satisfaction in all aspects
                of our business has built us a sterling reputation, both locally
                and internationally, and explains our stunning growth to become
                Sri Lanka&apos;s market leader for gems and jewelry. In Sri
                Lanka, we hold a strong position in the gemstone and jewelry
                industry, with 15 established up-market retail outlets around
                the Island in all major luxury hotels and prominent locations.
                We hope to rapidly expand this network further to capture more
                of Sri Lanka&apos;s growing potential and deliver more of our
                fine products to many more satisfied customers in the future.
              </p>
              <span className="absolute right-3  bottom-[-50] text-6xl md:text-7xl font-serif font-bold text-black select-none">
                ”
              </span>
            </blockquote>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-16 px-10 md:px-12 lg:px-50 max-w-8xl mx-auto flex flex-col md:flex-row gap-12 md:gap-15">
          {/* Left: Text content */}
          <div className="md:w-1/1 prose prose-sm md:prose-base max-w-none text-gray-900 z-10">
            <h3
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="font-serif font-semibold text-lg md:text-3xl mb-4"
            >
              ZAM GEMS: A Story based on
              <br /> Honesty & Integrity
            </h3>
            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-justify mt-7 text-[15px]"
            >
              <p>
                The success of ZAM Gems in the local industry was both
                phenomenal and unprecedented. ZAM Refai capitalised and
                succeeded well in the gemstones sourced and produced in Sri
                Lanka, while his ever-passionate son, Ahsan Refai (Managing
                Director of ZAM Gems) quickly expanded the spectrum from selling
                loose gemstones to designing and creating jewelry inlaid with
                fine Ceylonese gemstones. Historically, Sri Lanka&apos;s fine
                gemstones were often exported to leading names in the
                international jewelry industry to be used as raw materials in
                their jewelry manufacturing processes. The now Chairman had a
                vision to rewrite this process by adding value to the local gem
                industry. He aimed to manufacture and selling their own brand of
                local Sri Lankan jewelry, establishing Sri Lanka as a source not
                just for fine gemstones, but parallelly for high quality jewelry
                and workmanship. Soon, their exemplary reputation for producing
                fine jewelry, coupled with unwavering consumer trust, gained
                them access to a lucrative niche market comprising foreign
                visitors and locals seeking high-quality Sri Lankan jewelry
                products. ZAM Gems had firmly established itself as the pioneer
                and leader in the Sri Lankan jewelry industry. They opened
                retail showrooms in all of Colombo&apos;s major five-star
                hotels, the airport and shopping malls in Colombo, bearing
                testament to their company goal: &quot;Once a customer, always a
                customer.&quot;
              </p>
              <p>
                Today, ZAM Gems is a proud generative Ceylonese brand with a
                strong customer base from around the world, from gem
                connoisseurs and jewelry enthusiasts in Japan to China to the
                United States and Europe. We welcome you to be apart of the ZAM
                Family, where we would be delighted for you to see for
                yourselves the glistening gemstones and jewelry put together
                across our showrooms by our true gems – OUR EMPLOYEES.
              </p>
            </div>
          </div>

          {/* Right: Collage of vintage photos and handwritten notes */}
          <div className="relative flex flex-wrap justify-center items-center gap-6 z-20 mt-20">
            <div>
              <img
                src={vintagePhoto1}
                alt="Vintage photo 1"
                className="w-300 h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="px-10 md:px-12 lg:px-50 max-w-8xl pb-20 mx-auto flex flex-col md:flex-row gap-12 md:gap-25">
          {/* Right: Collage of vintage photos and handwritten notes */}
          <div className="relative flex flex-wrap justify-center items-center gap-6 z-20 mt-20">
            <div>
              <img
                src={vintagePhoto2}
                alt="Vintage photo 1"
                className="w-300 h-auto object-cover"
              />
            </div>
          </div>

          {/* Left: Text content */}
          <div className="md:w-1/1 prose prose-sm md:prose-base max-w-none text-gray-900 z-10 ">
            <h3
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="font-serif font-semibold text-lg md:text-3xl mb-4"
            >
              History: The Masterminds
              <br /> behind The Masterpiece
            </h3>
            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-justify mt-7 text-[15px]"
            >
              <p>
                ZAM GEMS had very humble beginnings as a sole proprietorship in
                the 1970&apos;s, when Chairman Z. A. M. M. Refai (or ZAM, as he
                is known in the industry) started conducting business by
                visiting the hotel rooms of guests in Sri Lanka, who were
                interested in viewing and purchasing the famous Ceylonese
                gemstones they had heard much about. He eventually established
                himself by opening an outlet called &quot;El Dorado&quot; at the
                Macan Markar arcade in Galle Face in 1972. This small boutique
                grew into ZAM GEMS with the opening of the Head Office showroom
                in Colombo in 1976. Zam Refai had managed to win over many of
                the international guests with his fine gemstones as well as his
                exemplary reputation for honesty and business ethics, building
                an international network of business contacts and lifelong
                friends. This reputation in a trade built on the cornerstones of
                trust, honesty and relationships was instrumental in the rapid
                rise of ZAM GEMS.
              </p>
              <p>
                ZAM Gems is synonymous with the very best of gemstones mined in
                Sri Lanka and is one of the leading exporters of precious stones
                and jewelry in the country. ZAM Gems has enjoyed tremendous
                success in over 45 years of business, due to the commitment to
                sourcing a variety of the finest gemstones Sri Lanka has to
                offer and combining them with skilled artisan design and
                workmanship to create exquisite pieces of jewelry.
              </p>
              <p>
                Our sales staff are rigorously trained in various fields such as
                gemology, jewelry production, and foreign languages and in
                upholding high professional standards to confidently guide
                customers through the purchasing process and deliver the best
                possible shopping experience tailored to each individual guest.
                To guarantee the best customer service experience for our
                guests, our dedicated Zam Gems Guest Relations team is quick and
                easy to reach, and is happy to assist with any inquiries,
                comments, and suggestions, as well as with after-sales service.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
