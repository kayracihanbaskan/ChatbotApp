import { Agent } from "@mastra/core/agent";
import { google } from "@ai-sdk/google";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { mcp } from "../mcp/weatherMcp";


const memory = new Memory({
    storage: new LibSQLStore({
        url: "file:../../memory.db",
    }),
});



export const weatherAgent = new Agent({
    name: "Weather Agent With MCP",
    instructions: "You are a weather agent with access to MCP for weather data. Provide clear and easy-to-understand weather explanations, or respond to users' specific weather-related questions.",
    model: google("gemini-2.0-flash"),
    memory: memory,
    tools: await mcp.getTools() // MCP istemcisini agent'a ekle
});
