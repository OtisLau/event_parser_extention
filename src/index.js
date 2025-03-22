import { parse } from "chrono-node";
function parseEvent(input) {
  const results = parse(input);
  let parsedDate = null;
  let eventName = input;

  if (results.length > 0) {
    parsedDate = results[0].start.date();
    const dateText = results[0].text;
    eventName = input.replace(dateText, "").trim();
  }

  return {
    eventName: eventName || "Untitled Event",
    parsedDate: parsedDate ? parsedDate.toISOString() : null
  };
}
window.parseEvent = parseEvent;