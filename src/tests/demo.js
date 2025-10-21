import fetch from "node-fetch";

async function testAPI() {
  try {
    console.log("Відправка POST...");
    let res = await fetch("http://localhost:3000/api/pollution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: "Kyiv", dust25: 27, dust10: 72 })
    });
    console.log("POST result:", await res.json());

    console.log("\nОтримання GET...");
    res = await fetch("http://localhost:3000/api/pollution");
    console.log("GET result:", await res.json());
  } catch (err) {
    console.error("Помилка:", err.message);
  }
}

testAPI();
