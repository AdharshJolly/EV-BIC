"use client";

import { useState, useEffect } from 'react';

const Countdown = () => {
  // Set target date to Feb 10, 2026 (Registration Deadline)
  const targetDate = new Date('2026-02-10T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-brand-secondary/50 backdrop-blur-md border border-brand-accent/20 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2 shadow-[0_0_15px_-5px_rgba(204,255,0,0.2)]">
        <span className="text-2xl sm:text-3xl font-display font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs sm:text-sm font-medium text-brand-muted uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-4 sm:gap-6 justify-center">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default Countdown;
