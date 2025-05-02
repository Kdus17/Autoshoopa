import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export default function CategoryDetails({
  inputType,
  setCategories,
  categories,
  setCategory,
}) {
  const Type = inputType || "checkbox";
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const Det = {
    Engine: {
      name: "Engine",
      subcategory: ["Spark Plugs", "Fuel Injectors", "Pistons"],
    },
    Filter: {
      name: "Filter",
      subcategory: ["Oil Filter", "Fuel Filter", "Transmission Filter"],
    },
    Suspension: {
      name: "Suspension",
      subcategory: ["Shock Absorbers", "Control Arms", "Coil Springs"],
    },
    Brakes: {
      name: "Brakes",
      subcategory: ["Brake Pads", "Rotors", "Calipers"],
    },
    Lighting: {
      name: "Lighting",
      subcategory: ["Headlights", "Tail Lights", "Fog Lights"],
    },
  };

  const handleChange = (e) => {
    const is_found = categories && categories.includes(e.target.id);
    if (is_found && Type === "checkbox") {
      setCategories(categories.filter((category) => category !== e.target.id));
    } else if (Type === "checkbox") {
      setCategories([...categories, e.target.id]);
    } else {
      setCategory(e.target.id);
    }
    console.log(categories);
  };
  return (
    <div>
      {Object.entries(Det).map(([key, value]) => (
        <div
          key={key}
          className="border-1 px-4 py-1 rounded-md m-2 justify-between shadow-md border-gray-200"
        >
          <div
            className="flex flex-row justify-between"
            onClick={() => toggleGroup(key)}
          >
            <label htmlFor={value.name} className="flex flex-row font-serif">
              {value.name}
            </label>
            <span>{openGroups[key] ? <FaAngleUp /> : <FaAngleDown />}</span>
          </div>
          {openGroups[key] &&
            value.subcategory.map((sub, idx) => (
              <div key={sub} className="flex flex-row gap-2 font-serif px-4">
                <input
                  type={inputType}
                  name="category"
                  id={sub}
                  onChange={handleChange}
                />
                <label htmlFor={sub}>{sub}</label>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
