import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useTestimonialsStore } from "../Store/Testemonials";
import { useEffect } from "react";

export default function Testimonials() {
  const {
    testimonials,
    currentIndex,
    getCurrentTestimonial,
    nextTestimonial,
    prevTestimonial,
    goToTestimonial,
    startAutoPlay,
    stopAutoPlay,
  } = useTestimonialsStore();

  const currentTestimonial = getCurrentTestimonial();

  // Start auto-play when component mounts
  useEffect(() => {
    startAutoPlay();

    // Cleanup: stop auto-play when component unmounts
    return () => {
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  // Pause auto-play when user interacts with controls
  const handlePrev = () => {
    stopAutoPlay();
    prevTestimonial();
  };

  const handleNext = () => {
    stopAutoPlay();
    nextTestimonial();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    goToTestimonial(index);
  };

  return (
    <div className="bg-gray-50 py-15 ">
      <section className="max-w-3xl mx-auto px-4 text-center py-10 ">
        <h3
          style={{ fontFamily: "Baskervville, sans-serif" }}
          className="text-5xl font-serif font-regular mb-8"
        >
          Testimonials
        </h3>

        <div className="relative mt-20">
          <div className="h-40">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="absolute left-[-330px] top-1/2 transform -translate-y-1/2 p-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200 cursor-pointer"
            >
              <HiOutlineChevronLeft size={60} />
            </button>

            <blockquote className="px-8 italic text-gray-700">
              <p className="mb-4 text-xl transition-opacity duration-500 ease-in-out">
                "{currentTestimonial.text}"
              </p>
              <footer className="text-sm font-semibold transition-opacity duration-500 ease-in-out">
                - {currentTestimonial.author}
              </footer>
            </blockquote>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="absolute right-[-330px] top-1/2 transform -translate-y-1/2 p-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200 cursor-pointer"
            >
              <HiOutlineChevronRight size={60} />
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-6 h-6 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "bg-black scale-110"
                  : "bg-white border border-black hover:bg-gray-200"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
