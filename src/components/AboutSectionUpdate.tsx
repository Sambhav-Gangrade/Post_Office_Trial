import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="min-h-screen py-12 relative overflow-hidden border flex items-center bg-[radial-gradient(circle_at_bottom_left,white_0%,rgba(240,240,240,0.8)_50%,transparent_80%),radial-gradient(circle_at_top_right,white_0%,rgba(240,240,240,0.8)_50%,transparent_80%)] bg-white">


      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center w-full px-4 sm:px-6 lg:px-8 xl:px-0 gap-8 lg:gap-12 xl:gap-16">
        {/* Worker Image */}
        <div className="w-full lg:w-1/2 xl:w-5/12 flex justify-center">
          <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700 px]">
            <Image
              src="/images/about-image.png"
              alt="Professional Plumber"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 xl:w-7/12 mt-8 md:mt-0 text-gray-800">
          <h2 className="flex items-center gap-2 mb-2 md:mb-3">
            <div className="w-2.5 bg-red-600 self-stretch"></div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              ABOUT LEADER PLUMBING
            </span>
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Your Trusted Local Experts with a Commitment to Quality
          </h3>
          <p className="text-black mb-6 md:mb-8 leading-relaxed text-base sm:text-lg md:text-xl">
            With over a decade of hands-on experience, Leader Plumbing is proud to be one of the most reliable names in plumbing and heating across Metro Vancouver. Our mission is to make home maintenance simple, stress-free, and affordable for every client. We take pride in our transparent approach, timely service, and long-term relationships built on trust and satisfaction. 
          </p>

          {/* Wrench Section - EXACT original height and behavior */}
          <div className="relative bg-gray-400 bg-opacity-30 p-4 rounded-xl">
            <div className="absolute -left-10 -bottom-27 z-10 w-[198px] h-[198px]">
              <Image
                src="/images/wrench.png"
                alt="Wrench Tool"
                width={198}
                height={198}
                className="drop-shadow-md"
              />
            </div>
            <p className="text-gray-800 font-semibold pl-32 h-full flex items-center text-base md:text-lg">
              From minor repairs to complex installations, our team focuses on getting the job done right—the first time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}