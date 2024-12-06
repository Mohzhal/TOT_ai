import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyDOHAkKU08F2DsCUKhCcP-a8gfzZ6UWI7M";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    try {
      const result = await chatSession.sendMessage(prompt);
      console.log("Result from chatSession:", result);
  
      if (result && result.response) {
        const text = await result.response.text();
        return text;
      } else {
        throw new Error("Invalid response structure: " + JSON.stringify(result));
      }
    } catch (error) {
      console.error("Error in chatSession.sendMessage:", error);
      throw error;
    }
  }
  
  export default run;
  