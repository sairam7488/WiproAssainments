// Q19.js
// React App demonstrating useEffect with different dependency scenarios

import React, { useState, useEffect } from "react";

const Q19 = () => {
  // ------------------ State Management ------------------
  const [festival, setFestival] = useState("Diwali"); // Track which festival is selected
  const [countdown, setCountdown] = useState(10);     // Countdown timer value
  const [inputFestival, setInputFestival] = useState(""); // For changing festival via input

  // ------------------ Q1: Festival Greeting (Every Render) ------------------
  // This useEffect has NO dependency array → runs on EVERY render
  useEffect(() => {
    console.log("🎉 Festival App Rendered");
  });

  // ------------------ Q2: Welcome Message (Run Once) ------------------
  // Empty dependency array [] → runs ONLY once when component mounts
  useEffect(() => {
    alert("🙏 Welcome to Diwali Festival App");
  }, []);

  // ------------------ Q3: Festival Change Tracker ------------------
  // Runs whenever 'festival' state changes
  useEffect(() => {
    console.log(`📌 Festival changed to: ${festival}`);
  }, [festival]);

  // ------------------ Q4: Countdown Timer with Cleanup ------------------
  useEffect(() => {
    // Start timer → decreases countdown every second
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0)); // Stop at 0
    }, 1000);

    // Cleanup → when component unmounts, clear the timer
    return () => {
      clearInterval(timer);
      console.log("⏹️ Countdown Timer Stopped (Cleanup)");
    };
  }, []); // Run only once when mounted

  // ------------------ Q5: Multiple Dependencies ------------------
  // Runs when either 'festival' OR 'countdown' changes
  useEffect(() => {
    console.log(`🔄 Festival: ${festival}, Countdown: ${countdown}`);
  }, [festival, countdown]);

  // ------------------ Render UI ------------------
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎊 Festival React App</h1>

      {/* Show current festival */}
      <h2>Current Festival: {festival}</h2>

      {/* Input field to update festival */}
      <input
        type="text"
        value={inputFestival}
        placeholder="Enter Festival (e.g., Holi)"
        onChange={(e) => setInputFestival(e.target.value)}
      />
      <button onClick={() => setFestival(inputFestival)}>Change Festival</button>

      {/* Countdown Timer */}
      <h2>⏳ Countdown: {countdown}</h2>
      <p>(Timer decreases every second, stops at 0)</p>
    </div>
  );
};

export default Q19;
