import React from "react";
import { SideChatbot } from "../components/Chatbot";

const HomePage = () => {
  return (
    <div className="max-w-screen-lg mx-auto h-full px-6 py-4 text-justify">
      <div className="py-2 space-y-3">
        <h1 className="text-xl md:text-2xl text-purple-500">
          Welcome to our AI Side Chatbot!
        </h1>
        <p className="text-base md:text-lg">
          I'm here to assist you with any questions you have. Whether you need
          help with product information, troubleshooting, or just want to have a
          chat, I'm at your service.
        </p>
        <p className="text-base md:text-lg">
          Feel free to ask me anything, and I'll do my best to provide you with
          the information you need" is an invitation or encouragement for users
          to engage with the chatbot by asking questions or seeking assistance.
        </p>
        <p className="text-base md:text-lg">
          Side chatbots are a versatile and effective tool for enhancing user
          engagement, providing customer support, and streamlining communication
          between businesses and their audience in a non-intrusive and
          user-friendly manner.
        </p>
        <p className="text-base md:text-lg">
          Website or application owners can customize the appearance, behavior,
          and functionality of side chatbots to align with their brand identity,
          user interface design, and specific requirements.
        </p>
      </div>
      <div className="py-2 space-y-3">
        <h2 className="text-xl md:text-2xl text-purple-500">
          Instructions for Opening the Chatbot
        </h2>
        <h2 className="text-xl md:text-2xl text-purple-500">Small Chatbot:</h2>
        <ul className="text-base md:text-lg space-y-4">
          <li>
            1.Look for the chat icon on the bottom right corner of your
            screen.
          </li>
          <li>
            2.Click on the chat icon to open the compact chat interface.
          </li>
          <li>
            3.Begin typing your questions or messages directly into the chat
            window.
          </li>
          <li>4.The AI chatbot will promptly respond to your queries.</li>
        </ul>
      </div>
      <div className="py-2 space-y-3">
        <h2 className="text-xl md:text-2xl text-purple-500">Full Chatbot:</h2>
        <ul className="text-base md:text-lg space-y-4">
          <li>1.Navigate to the navbar at the top of the webpage.</li>
          <li>
            2.Locate the Chatbot button in the Navbar.
          </li>
          <li>
            3.Click on the chatbot link to expand and open the full chat
            interface.
          </li>
          <li>
            4.Once the chat interface expands, you can start typing your questions
            or messages.
          </li>
          <li>
            5.Expect instant responses from the AI chatbot to assist you further.
          </li>
        </ul>
      </div>
      <div className="py-2 text-2xl text-center text-purple-500">
        Enjoy chatting with our AI chatbot!
      </div>
      <SideChatbot />
    </div>
  );
};

export default HomePage;
