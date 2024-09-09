import express from "express";
import OpenAI from "openai";
import "dotenv/config";
import cors from "cors";

const openai = new OpenAI();

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.post("/api/chat-bot", async (req, res) => {
  const { chats } = req.body;

  try {
    const result = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are HelpBotGPT a helpful assistant. Try to be concise and straight to the point.",
        },
        ...chats,
      ],
      model: "gpt-4o-mini",
    });

    return res.json({
      output: result.choices[0].message,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Something went wrong. Please try again later.");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
