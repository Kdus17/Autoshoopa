import { useState } from "react";

export default function PriceRange() {
  // const [price,setPrice = useState(0)
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);

  const handlemin = (e) => {
    setMin(e.target.value);
  };
  const handlemax = (e) => {
    setMax(e.target.value);
  };

  const [range, setRange] = useState(0);
  return (
    <div className="w-2/3">
      <input
        type="range"
        name="min"
        id="min"
        min="0"
        max={max}
        className="cursor-pointer w-full"
        onChange={handlemin}
        value={min}
      />
      <label className="cursor-pointer px-2" htmlFor="min">
        Min: {min} birr
      </label>
      <input
        type="range"
        name="max"
        id="max"
        min={min}
        max="1000000"
        className="cursor-pointer w-full"
        onChange={handlemax}
        value={max}
      />
      <label className="cursor-pointer px-2" htmlFor="max">
        Max: {max} birr
      </label>
    </div>
  );
}
