export default function BrandDetails({
  inputType,
  setBrands,
  brands,
  setBrand,
}) {
  const Type = inputType || "checkbox";
  const Details = [
    {
      id: "Audi",
      type: Type,
      name: "Brand",
      label: "Audi",
    },
    {
      id: "BMW",
      type: Type,
      name: "Brand",
      label: "BMW",
    },
    {
      id: "Ford",
      type: Type,
      name: "Brand",
      label: "Ford",
    },
    {
      id: "Honda",
      type: Type,
      name: "Brand",
      label: "Honda",
    },
    {
      id: "Hyundai",
      type: Type,
      name: "Brand",
      label: "Hyundai",
    },
    {
      id: "Kia",
      type: Type,
      name: "Brand",
      label: "Kia",
    },
    {
      id: "Toyota",
      type: Type,
      name: "Brand",
      label: "Toyota",
    },
    {
      id: "Land_Rover",
      type: Type,
      name: "Brand",
      label: "Land Rover",
    },
    {
      id: "Lexus",
      type: Type,
      name: "Brand",
      label: "Lexus",
    },
  ];
  const handleUpdate = (e) => {
    const is_found = brands && brands.includes(e.target.id);
    if (is_found) {
      setBrands(brands.filter((brand) => brand !== e.target.id));
    } else if (Type === "checkbox") {
      setBrands([...brands, e.target.id]);
    } else {
      setBrand(e.target.id);
    }
  };

  return (
    <div>
      {Details.map((data) => (
        <div key={data.id} className="flex flex-row items-center">
          <input
            type={data.type}
            id={data.id}
            name={data.name}
            className="cursor-pointer"
            onChange={handleUpdate}
          />
          <label className="cursor-pointer px-2" htmlFor={data.id}>
            {data.label}
          </label>
        </div>
      ))}
    </div>
  );
}
