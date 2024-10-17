import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center mb-7">
        <span className="bg-neutral-900 text-orange-600 rounded-full h-6 text-4xl font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Here{" "}
          <span className="bg-gradient-to-r from-orange-500 to-violet-500/75 text-transparent bg-clip-text py-2">
            Comes
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mb-7">
        {features.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-5 py-4">
            <div className="bg-neutral-200/10 rounded-lg p-6 text-2xl border text-amber-800 border-neutral-800 ">
              <p className="mb-2">{testimonial.icon}</p>
              <span className="text-violet-500">{testimonial.text}</span>
              <div className="flex mt-8 text-2xl items-start">
                <div>
                  <span className="text-xl font-normal italic text-neutral-200">
                    {testimonial.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
