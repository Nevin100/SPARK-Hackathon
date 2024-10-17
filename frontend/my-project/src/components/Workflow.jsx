import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-14 mb-8">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide  bg-gradient-to-r from-orange-500 to-violet-500/75 text-transparent bg-clip-text py-2">
        Accelerate your Yourself !!
      </h2>
      <div className="flex mt-8  flex-wrap justify-center">
        <div className="p-1 w-full lg:w-1/2 rounded-lg">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl  bg-gradient-to-r from-orange-500 to-violet-500/75 text-transparent bg-clip-text ">
                  {item.title}
                </h5>
                <p className="text-lg text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
