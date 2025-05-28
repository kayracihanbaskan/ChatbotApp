import { MCPClient } from "@mastra/mcp";

export const mcp = new MCPClient({
    servers: {
        "mcp-weatherforecast": {
            "command": "cmd",
            "args": [
                "/c",
                "npx",
                "-y",
                "@smithery/cli@latest",
                "run",
                "@kayracihanbaskan/mcp-weatherforecast",
                "--key",
                "your-smithery-api-key"
            ]
        },
    },
});