
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Anda adalah asisten virtual resmi untuk TPQ Nurul Islam. 
Tujuan Anda adalah membantu orang tua, calon santri, dan masyarakat umum dengan informasi seputar TPQ Nurul Islam.
Informasi Dasar:
- Lokasi: Tasikmalaya, Jawa Barat.
- Didirikan: 2009.
- Metode Belajar: Yanbu'a.
- Program: Kelas Iqra, Kelas Al-Quran, Tahfidz, Tajwid.
- Jam Belajar: Sen-Kam (15:30-17:30), Sab-Min (08:00-11:00).
Gunakan gaya bahasa yang ramah, islami (gunakan salam dan sapaan yang santun), dan membantu.
Jangan memberikan informasi palsu atau berjanji hal yang di luar kebijakan sekolah.
Jika tidak tahu jawabannya, arahkan ke nomor WhatsApp admin: +62 812-3456-7890.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Maaf, saya sedang tidak dapat merespons. Silakan hubungi admin via WhatsApp.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, sistem asisten sedang sibuk. Silakan hubungi nomor WhatsApp admin kami di +62 812-3456-7890.";
  }
};
