export async function GET(request) {
  const currentTime = new Date().toISOString();

  return new Response(
    JSON.stringify({ message: "Current Server Time", time: currentTime }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
