
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/gemini';

interface Message {
  text: string;
  isBot: boolean;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: "Assalamu'alaikum! Saya asisten virtual TPQ Nurul Islam. Ada yang bisa saya bantu?", isBot: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    
    setIsTyping(true);
    const botResponse = await getAIResponse(userMsg);
    setIsTyping(false);
    
    setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[80] flex flex-col items-end">
      {isOpen ? (
        <div className="bg-white w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] max-h-[70vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">NI</div>
              <div>
                <h4 className="font-bold leading-tight">Admin AI</h4>
                <p className="text-[10px] text-emerald-100 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-1 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors outline-none"
              aria-label="Tutup Chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.isBot 
                    ? 'bg-white text-slate-700 rounded-tl-none border border-slate-100' 
                    : 'bg-emerald-600 text-white rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1 border border-slate-100">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan..."
              className="flex-grow px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border-none"
            />
            <button 
              type="submit"
              className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-md disabled:opacity-50"
              disabled={!input.trim() || isTyping}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <div className="group flex flex-col items-end">
          <button 
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-700 transition-all transform hover:scale-105 active:scale-95 relative"
            aria-label="Buka Chat Bantuan"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
          <div className="mt-2 hidden sm:block pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-white px-3 py-1 rounded-lg shadow-md border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
            Butuh Bantuan?
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
