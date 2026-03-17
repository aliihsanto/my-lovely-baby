import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateParentingAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are a friendly AI assistant for "My Lovely Baby" diaper brand. 
        Detect the language of the user's prompt (Russian or Turkish) and reply in the SAME language.
        
        Role: Helpful, warm, comforting parenting assistant.
        Product Info: 
        - My Lovely Baby diapers are hypoallergenic, have 3D absorbent layer, wetness indicator, and flexible side tapes.
        - Colors: Teal/Turquoise packaging with Gold accents.
        
        Guidelines:
        - Keep answers concise and helpful.
        - Use emojis.
        - If the user asks about price, refer them to the Products section or local retailers (Ozon, Trendyol).
        `,
        temperature: 0.7,
      }
    });

    return response.text || "Sorry, I am having trouble connecting right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please check your internet.";
  }
};