import { useEffect, useRef, useState } from "react";
import { FaRobot } from "react-icons/fa";
import {
  MdChat,
  MdClose,
  MdOutlineClear,
  MdPerson,
  MdSend,
} from "react-icons/md";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export const ChatBot = ({ isFullScreen = true }) => {
  const [conversations, setConversations] = useState([
    {
      role: "system",
      content: "default",
    },
  ]);
  const [error, setError] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [promptContent, setPromptContent] = useState("");
  const textareaRef = useRef(null);

  const apiUrl =
    "https://apis.eliteappmakers.in/llm_gpt_neox_3b/latest/chat_completion";
  const apiKey =
    "BO38hdQHYULRYC-CEebUmfYKuIuazUh3sbsMTnlL4qmCv4sGx_TTPm3I18dJD3eV";
  const accountId = "553242335802";

  const handleInput = (e) => {
    setPromptContent(e.target.value);
  };

  const closeErrorPopup = () => {
    setError(null);
  };

  useEffect(() => {
    const currentTextarea = textareaRef.current;
    currentTextarea.style.height = "auto";
    if (currentTextarea.scrollHeight !== 0) {
      currentTextarea.style.height = `${currentTextarea.scrollHeight}px`;
    }
    currentTextarea.focus();
  }, [promptContent]);

  const onSendClick = async () => {
    const prompt = promptContent.trim();

    if (prompt.length >= 2) {
      let newConversations = [
        ...conversations,
        { role: "user", content: prompt },
      ];

      try {
        setConversations(newConversations);
        setPromptContent("");
        setIsAiLoading(true);

        const requestData = {
          conversations: newConversations,
          max_new_tokens: 512,
          do_sample: true,
          temperature: 0.5,
          top_p: 0.8,
          top_k: 50,
          repetition_penalty: 1.05,
        };
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-key": `api-key ${apiKey}`,
            "account-id": accountId,
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();

        if (response.ok) {
          const generatedOutput = data.output[0].data;
          newConversations.push({
            role: "ai",
            content: generatedOutput,
          });

          setConversations(newConversations);
        } else {
          setError(data?.detail ? data.detail : data);
        }
      } catch (serverError) {
        setError(
          "The server is not reachable at this moment, Please try again."
        );
      } finally {
        setIsAiLoading(false);
      }
    } else {
      setError("Please enter a prompt of atleast 2 characters.");
    }
  };

  return (
    <div className="w-full h-full max-w-screen-xl mx-auto">
      <div className="w-full h-full p-2 space-y-4 flex flex-col justify-end rounded-lg bg-white border border-purple-400 ">
        <div className="w-full h-full p-3 overflow-y-auto rounded-lg border-2 border-purple-300 space-y-5">
          {conversations.slice(1)?.map(({ role, content }, index) => {
            return (
              <div className={`flex ${role === "user" ? "justify-end" : ""}`}>
                {role === "user" ? (
                  <span className="flex gap-2">
                    <span className="max-w-lg px-4 py-2 font-medium text-white rounded-lg bg-purple-300">
                      {content}
                    </span>
                    <div className="p-2.5 h-fit bg-purple-500 rounded-full">
                      <MdPerson className="shrink-0 w-6 h-6 text-white" />
                    </div>
                  </span>
                ) : (
                  <div className="flex gap-2">
                    <div className="p-2.5 h-fit bg-purple-500 rounded-full">
                      <FaRobot className="shrink-0 w-6 h-6 text-white" />
                    </div>
                    <span className="max-w-lg px-4 py-2 rounded-lg bg-gray-200">
                      <Markdown
                        className="max-w-full font-medium text-gray-900 dark:text-neutral-300 prose prose-headings:text-primary-800 dark:prose-headings:text-neutral-50 prose-h1:text-3xl prose-p:font-medium prose-p:text-gray-900 dark:prose-p:text-neutral-300 prose-a:font-medium prose-a:text-primary-700 dark:prose-a:text-primary-400 prose-blockquote:border-primary-800 dark:prose-blockquote:border-primary-400 prose-strong:text-primary-800 dark:prose-strong:text-primary-400 prose-strong:font-semibold prose-pre:bg-slate-900 dark:prose-pre:bg-neutral-950 prose-code:font-bold dark:prose-code:text-neutral-200 prose-li:font-medium prose-li:text-gray-900 dark:prose-li:text-neutral-300 prose-li:marker:text-primary-700 dark:prose-li:marker:text-neutral-50 prose-li:marker:font-medium prose-table:font-medium prose-thead:bg-primary-600 dark:prose-thead:bg-neutral-900 prose-th:text-white prose-th:px-6 prose-th:py-3 prose-th:border prose-td:bg-primary-200 dark:prose-td:bg-neutral-700 prose-td:text-gray-900 dark:prose-td:text-gray-100 prose-td:px-6 prose-td:py-3 prose-td:border"
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {content}
                      </Markdown>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
          {isAiLoading && (
            <div className="flex gap-2">
              <div className="p-2.5 h-fit bg-purple-500 rounded-full">
                <FaRobot className="shrink-0 w-6 h-6 text-white animate-pulse" />
              </div>
              <span className="max-w-md px-4 py-2 rounded-lg font-medium bg-gray-200 animate-pulse">
                Thinking...
              </span>
            </div>
          )}
        </div>
        <div className="w-full px-3 sm:px-4 py-1.5 flex gap-3 items-end rounded-lg bg-white border-2 border-purple-300">
          <textarea
            className={`py-3 h-11 w-full resize-none focus:outline-none text-base font-medium text-gray-900 ${
              isFullScreen ? "max-h-52" : "max-h-24"
            }`}
            ref={textareaRef}
            value={promptContent}
            onChange={handleInput}
            placeholder="Type a message..."
          />
          <button
            className="p-3 sm:px-3.5 sm:py-2 inline-flex items-center gap-2 rounded-lg text-white font-medium bg-purple-500 border border-gray-500 disabled:cursor-not-allowed disabled:opacity-80"
            onClick={onSendClick}
            disabled={isAiLoading}
          >
            <MdSend className="w-4 h-4" />
            <span className="hidden sm:block">Send</span>
          </button>
        </div>
      </div>
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 flex gap-2 justify-end border border-gray-800 bg-white rounded-lg">
            <p className="mt-1 pb-2 sm:text-base md:text-lg text-gray-500">
              {error}
            </p>
            <button
              className="px-2 text-white rounded-lg bg-gray-600"
              onClick={closeErrorPopup}
            >
              <MdOutlineClear className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export const SideChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed z-20 right-4 bottom-4">
      <div className="relative">
        <div
          className={`absolute z-20 right-0 bottom-16 w-[calc(100vw-30px)] sm:w-[600px] h-[500px] ${
            isChatOpen ? "block" : "hidden"
          }`}
        >
          <ChatBot isFullScreen={false} />
        </div>
        <button
          className="p-4 bg-purple-500 rounded-full text-white"
          onClick={toggleChat}
        >
          {isChatOpen ? (
            <MdClose className="w-6 h-6" />
          ) : (
            <MdChat className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};
