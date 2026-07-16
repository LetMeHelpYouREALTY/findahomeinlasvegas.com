import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { getUserMCPConnections } from "@/lib/mcp-oauth";
import { NewChatComposer } from "../new-chat-composer";

export const metadata: Metadata = {
  title: { absolute: "Internal Knowledge Agent" },
  description:
    "Ask questions across your internal tools - GitHub, Notion, Slack, and more.",
  robots: { index: false, follow: false },
};

export default async function AgentHomePage() {
  const session = await getSession();
  const viewer = session?.user ?? null;

  const mcpConnections = viewer
    ? await getUserMCPConnections(viewer.id)
    : {};

  return (
    <NewChatComposer
      isAuthenticated={!!viewer}
      mcpConnections={mcpConnections}
    />
  );
}
