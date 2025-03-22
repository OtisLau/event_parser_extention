document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("eventInput");
    const button = document.getElementById("addEventBtn");
  
    function handleInput() {
      const text = input.value.trim();
      if (!text) return;
  
      const result = parseEvent(text);
  
      if (result.parsedDate) {
        const start = new Date(result.parsedDate);
        const localStart = new Date(start.getTime() - start.getTimezoneOffset() * 60000);
        const formattedStart = localStart.toISOString().replace(/[-:]/g, "").split(".")[0];
  
        const localEnd = new Date(localStart.getTime() + 60 * 60 * 1000);
        const formattedEnd = localEnd.toISOString().replace(/[-:]/g, "").split(".")[0];
  
        const url = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(result.eventName)}&dates=${formattedStart}/${formattedEnd}`;
        chrome.tabs.create({ url });
  
        input.value = "";
      } else {
        console.log("No date found");
      }
    }
  
    button.addEventListener("click", handleInput);
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleInput();
      }
    });
  });
  