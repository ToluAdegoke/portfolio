"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Lagos",
});

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

// Current time in Ibadan (WAT). Renders empty on the server to avoid a
// hydration mismatch, then fills in on the client.
export default function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "",
  );

  return (
    <span suppressHydrationWarning>{time ? `${time} WAT` : "WAT"}</span>
  );
}
