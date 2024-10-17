import venom from "venom-bot";

console.log("server running...");

let instance: venom.Whatsapp;
venom
  .create({
    session: "peamanage",
    // multidevice: true,
    headless: "new",
    devtools: false,
    // useChrome: true,
    browserArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  .then((venomClient) => {
    instance = venomClient;
    console.log("Venom client is ready!");
  })
  .catch((err) => console.log("Error initializing Venom:", err));

export default async function sendMessage() {
  const client =
    instance ||
    (await venom.create({
      session: "peamanage",
      // multidevice: true,
      headless: "new",
      devtools: false,
      // useChrome: true,
      browserArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
    }));
  client.sendText(
    "9811492186@c.us",
    `
    Namaste! You have a class tomorrow. 
    class1: 
    `
  );
}
