import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export default function BrandDetails({
  inputType,
  setBrands,
  brands,
  setBrand,
}) {
  const Type = inputType || "checkbox";
  // const Details = [
  //   {
  //     id: "Audi",
  //     type: Type,
  //     name: "Brand",
  //     label: "Audi",
  //   },
  //   {
  //     id: "BMW",
  //     type: Type,
  //     name: "Brand",
  //     label: "BMW",
  //   },
  //   {
  //     id: "Ford",
  //     type: Type,
  //     name: "Brand",
  //     label: "Ford",
  //   },
  //   {
  //     id: "Honda",
  //     type: Type,
  //     name: "Brand",
  //     label: "Honda",
  //   },
  //   {
  //     id: "Hyundai",
  //     type: Type,
  //     name: "Brand",
  //     label: "Hyundai",
  //   },
  //   {
  //     id: "Kia",
  //     type: Type,
  //     name: "Brand",
  //     label: "Kia",
  //   },
  //   {
  //     id: "Toyota",
  //     type: Type,
  //     name: "Brand",
  //     label: "Toyota",
  //   },
  //   {
  //     id: "Land_Rover",
  //     type: Type,
  //     name: "Brand",
  //     label: "Land Rover",
  //   },
  //   {
  //     id: "Lexus",
  //     type: Type,
  //     name: "Brand",
  //     label: "Lexus",
  //   },
  // ];
  const handleUpdate = (e) => {
    const is_found = brands && brands.includes(e.target.id);
    if (is_found) {
      setBrands(brands.filter((brand) => brand !== e.target.id));
    } else if (Type === "checkbox") {
      setBrands([...brands, e.target.id]);
    } else {
      setBrand(e.target.id);
    }
    console.log(brands);
  };

  const Det = {
    Toyota: { name: "Toyota", models: ["Corolla", "Camry", "RAV4"] },
    Honda: { name: "Honda", models: ["Civic", "Accord", "CR-V"] },
    Ford: { name: "Ford", models: ["Focus", "Fusion", "Escape"] },
    BMW: { name: "BMW", models: ["3 Series", "5 Series", "X5"] },
    Audi: { name: "Audi", models: ["A3", "A4", "Q5"] },
  };

  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    // <div>
    //   {Details.map((data) => (
    //     <div key={data.id} className="flex flex-row items-center">
    //       <input
    //         type={data.type}
    //         id={data.id}
    //         name={data.name}
    //         className="cursor-pointer"
    //         onChange={handleUpdate}
    //       />
    //       <label className="cursor-pointer px-2" htmlFor={data.id}>
    //         {data.label}
    //       </label>
    //     </div>
    //   ))}
    // </div>
    <div>
      {Object.entries(Det).map(([key, value]) => (
        <div key={key} className="border-1 p-2 rounded-md m-2 justify-between">
          <div
            className="flex flex-row justify-between"
            onClick={() => toggleGroup(key)}
          >
            <label htmlFor={value.name} className="flex flex-row">
              {value.name}
            </label>
            <span>{openGroups[key] ? <FaAngleUp /> : <FaAngleDown />}</span>
          </div>
          {openGroups[key] &&
            value.models.map((mod, idx) => (
              <div key={mod} className="flex flex-row gap-2 ">
                <input
                  type={inputType}
                  name="brand"
                  id={mod}
                  onChange={handleUpdate}
                />
                <label htmlFor={mod}>{mod}</label>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
