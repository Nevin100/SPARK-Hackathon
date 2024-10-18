import "./Chatgpt.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { IoCodeSlash } from "react-icons/io5";
import { SiChatbot } from "react-icons/si";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BiPlanet } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { useState } from "react";

function Chatgpt() {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setisResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]);

  const hitRequest = () => {
    if (message) {
      generateResponse(message);
    } else {
      alert("You must write something... !");
    }
  };

  const generateResponse = async (msg) => {
    if (!msg) return;

    const genAI = new GoogleGenerativeAI(
      "AIzaSyDFEwxp2BYgrfGRs-3Q5g93zJ_Ziab2YOY"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(msg);

    const newMessages = [
      ...messages,
      { type: "UserMsg", text: msg },
      { type: "ResponseMsg", text: result.response.text() },
    ];

    setMessages(newMessages);
    setisResponseScreen(true);
    setMessage("");
  };

  const newChat = () => {
    setisResponseScreen(false);
    setMessages([]);
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 min-h-screen overflow-hidden w-full items-center px-5 py-12 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" id="chatgpt">
        <div className="container w-full min-h-screen overflow-x-hidden bg-transparent text-white mx-auto px-6 md:px-12">
          {isResponseScreen ? (
            <>
              <div className="h-[70vh]">
                <div className="Head min-w-screen flex justify-between items-center p-4">
                  <h2 className="text-3xl font-semibold">AAPKA-BOT</h2>
                  <button
                    className="rounded-lg text-lg cursor-pointer p-3 mr-3 transition-all ease-in-out hover:bg-violet-700/60 delay-750 bg-neutral-400/35"
                    id="Diff"
                    onClick={newChat}
                  >
                    New Chat
                  </button>
                </div>

                {messages.map((message, index) => (
                  <div key={index} className={message.type}>
                    {message.text}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="middle h-[70vh] rounded-lg bg-neutral-400/10 flex flex-col justify-center items-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold p-3 m-2 flex items-center">
                <i className="relative text-2xl md:text-3xl text-violet-700/80 lg:text-4xl pl-2 mr-4">
                  <SiChatbot />
                </i>
                GEMINI-AI BOT
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl p-6 md:p-8 m-6 md:m-10 font-bold flex items-center">
                <i className="relative text-2xl md:text-3xl lg:text-4xl pl-2 mr-4 text-violet-700/80">
                  <FaHandHoldingHeart />
                </i>
                AAPKA-BOT
              </h2>
              <div className="boxes flex flex-col sm:flex-row gap-4 items-center sm:justify-center px-4">
                <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 mr-0 sm:mr-4 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-violet-700/80 delay-750 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                  <p>
                    What is Coding? How can we learn it?
                    <i className="absolute right-2 bottom-2 text-[18px]">
                      <IoCodeSlash />
                    </i>
                  </p>
                </div>
                <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 mr-0 sm:mr-4 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-violet-700/80 delay-750 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                  <p>
                    Which is the largest planet?
                    <i className="absolute right-2 bottom-2 text-[18px]">
                      <BiPlanet />
                    </i>
                  </p>
                </div>
                <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 mr-0 sm:mr-4 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-violet-700/80 delay-750 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                  <p>
                    What is Asynchronous JavaScript?
                    <i className="absolute right-2 bottom-2 text-[18px]">
                      <IoLogoJavascript />
                    </i>
                  </p>
                </div>
                <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-violet-700/80 delay-750 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                  <p>
                    What is MongoDB? What is NOSQL Database?
                    <i className="absolute right-2 bottom-2 text-[18px]">
                      <BiLogoMongodb />
                    </i>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="footer mt-5">
            <div className="input flex items-center text-white text-base md:text-xl bg-neutral-900/90 rounded-xl">
              <input
                type="text"
                className="p-4 md:p-5 bg-transparent flex-1 outline-none"
                placeholder="How can I help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {message && (
                <button
                  className="relative text-2xl md:text-2xl cursor-pointer text-violet-700/80 lg:text-4xl pl-2 mr-4"
                  onClick={hitRequest}
                >
                  <IoSend />
                </button>
              )}
            </div>
            <p className="text-xl md:text-sm text-white text-center p-2 mt-0.5">
              Aapka bot is developed by Nevin Bali, This bot uses Gemini-API to
              respond to your queries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatgpt;