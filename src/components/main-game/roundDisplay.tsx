import React from "react";

interface OrdinalProps {
  number: number;
}

const getOrdinalSuffix = (num: number): string => {
  const remainder10 = num % 10;
  const remainder100 = num % 100;

  if (remainder10 === 1 && remainder100 !== 11) {
    return "st";
  } else if (remainder10 === 2 && remainder100 !== 12) {
    return "nd";
  } else if (remainder10 === 3 && remainder100 !== 13) {
    return "rd";
  } else {
    return "th";
  }
};

const OrdinalNumber: React.FC<OrdinalProps> = ({ number }) => {
  const suffix = getOrdinalSuffix(number);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <span className="text-3xl">{number}</span>
        <sup>{suffix}</sup>
      </div>
      <span>Round</span>
    </div>
  );
};

export default OrdinalNumber;
