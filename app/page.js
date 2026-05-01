"use client";
import { useState } from "react";

export default function Page() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  async function send() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg }),
    });

    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>龙虾AI</h2>

      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={send}>发送</button>

      <p>回复：{reply}</p>
    </div>
  );
}
