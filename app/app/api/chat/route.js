export async function POST(req) {
  const { message } = await req.json();

  return Response.json({
    reply: "你说的是：" + message,
  });
}
