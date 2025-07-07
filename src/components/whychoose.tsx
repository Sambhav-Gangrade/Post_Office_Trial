import Image from 'next/image';

const WhyChooseUs = () => {
    const servicePoints = [
        "Fully licensed and insured technicians with industry certifications",
        "Locally owned and operated — we know Vancouver homes and weather",
        "Same-day and emergency services across the Lower Mainland",
        "Honest, upfront pricing with no hidden costs",
        "Friendly, professional customer service",
        "Work backed by warranty on parts and labor",
    ];

    return (
        <section className="relative overflow-hidden bg-white px-6 sm:px-10 lg:px-20 py-30 lg:min-h-[77.5vh]">

            {/* Desktop Background Image Div */}
            <div
                className="hidden min-[1266px]:block bg-white absolute inset-0"
                style={{
                    backgroundImage: "url('/images/finalbgbg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 60%',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                }}
            />

            {/* Mobile/Tablet Image */}
            <div className="block min-[1266px]:hidden relative w-full bg-white max-w-md mx-auto h-[400px] sm:h-[500px] mb-8 translate-y-[-40px] sm:translate-y-[-80px] md:translate-y-[-120px]">
                <Image
                    src="/images/workerimagecombo.png"
                    alt="Mobile and Tablet Background"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    priority
                />
            </div>


            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 w-full h-full">
                <div className="flex-1 flex flex-col justify-center h-full">
                    <div className="border-l-8 border-red-600 pl-5 mb-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black">
                            WHY CHOOSE LEADER PLUMBING
                        </h2>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-10">
                        Local, Licensed, and Always Reliable
                    </h2>

                    <div className="space-y-2">
                        {servicePoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <Image
                                    src="/images/settings.png"
                                    alt="Red gear icon"
                                    width={28}
                                    height={28}
                                    className="mt-1"
                                />
                                <span className="text-lg lg:text-xm text-gray-800">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
