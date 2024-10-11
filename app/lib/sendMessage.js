export const sendMessage = (message) => {
  const TOKEN = "7821282762:AAEVpSpbJP4xeG--FZucxG5d7h4rApuo2Jc";
  const CHAT_ID = "-1002308924930";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка отправки сообщения");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Сообщение отправлено:", data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};
