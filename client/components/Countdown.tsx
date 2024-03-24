import React, { useEffect, useState } from "react";
import axios from "axios";

const BitcoinHalvingClock = () => {
  // State for time units
  const [daysUntilHalving, setDaysUntilHalving] = useState(0);
  const [hoursUntilHalving, setHoursUntilHalving] = useState(0);
  const [minutesUntilHalving, setMinutesUntilHalving] = useState(0);
  const [secondsUntilHalving, setSecondsUntilHalving] = useState(0);
  const [milliseconds, setMilliseconds] = useState(999);
  const [halvingDate, setHalvingDate] = useState("");
  


  const fetchHalvingData = async () => {
    try {
      const response = await axios.get("https://www.satochi.co//latest-block");
      const height: number = response.data; // Ensure that the data is in the expected format, number in this case
      startClock(height);
    } catch (error) {
      console.error("error calling /latest-block", error);
    }
  };


  useEffect(() => {
    // Fetch initial data and setup countdown
    fetchHalvingData();

    // Milliseconds countdown
    const millisecondsInterval = setInterval(() => {
      setMilliseconds((prev) => (prev > 0 ? prev - 21 : 999));
    }, 10);

    return () => {
      clearInterval(millisecondsInterval);
    };
  }, []);


  const startClock = (height: number) => { 
    const block_time = 9.52; // Average block time in minutes
    const total_number = 12.5 * (height - 472500) + 16406250;
    const til_halving = 840000 - height; // Adjust according to actual data
    const minutes_til_halving = til_halving * block_time;
    let days_til_halving = minutes_til_halving / (24 * 60);
    let days_remainder = days_til_halving - Math.floor(days_til_halving);
    let minutes = days_remainder * 60;
    let seconds_til_halving = 60; // Start the seconds at 60 for countdown

    // Set the initial countdown state
    setDaysUntilHalving(Math.floor(days_til_halving));
    setHoursUntilHalving(Math.floor(days_remainder * 24));
    setMinutesUntilHalving(Math.floor(minutes));
    setSecondsUntilHalving(seconds_til_halving);

    // Countdown logic
    const countdown = setInterval(() => {
      seconds_til_halving--;
      if (seconds_til_halving < 0) {
        minutes--;
        seconds_til_halving = 59;
        if (minutes < 0) {
          days_remainder--;
          minutes = 59;
          if (days_remainder < 0) {
            days_til_halving--;
            days_remainder = 23;
          }
          setHoursUntilHalving(Math.floor(days_remainder * 24));
        }
        setMinutesUntilHalving(Math.floor(minutes));
      }
      setSecondsUntilHalving(seconds_til_halving);
      setDaysUntilHalving(Math.floor(days_til_halving));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdown);
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-2xl font-normal leading-tight text-gray-100 lg:mb-6 lg:text-4xl ">Bitcoin Halving Clock</h2>
      <div className="halving">
      <div className="flex flex-wrap my-12">
  <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <div className="border px-12 py-4 flex flex-col text-lg">
      <span className="font-bold text-4xl" id="days_calc">{daysUntilHalving}</span>
      <span>Days</span>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <div className="border px-12 py-4 flex flex-col text-lg ">
      <span className="font-bold text-4xl" id="hours_calc">{hoursUntilHalving}</span>
      <span>Hours</span>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <div className="border px-12 py-4 flex flex-col text-lg">
      <span className="font-bold text-4xl" id="minutes_calc">{minutesUntilHalving}</span>
      <span>Minutes</span>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <div className="border px-12 py-4 flex flex-col text-lg">
      <span className="font-bold text-4xl" id="seconds_calc">{secondsUntilHalving}</span>
      <span>Seconds</span>
    </div>
  </div>
</div>

        <p className="my-8">Estimated 2024 Halving Date: April 17, 2024</p>
      </div>
    </div>
  );
};

export default BitcoinHalvingClock;
