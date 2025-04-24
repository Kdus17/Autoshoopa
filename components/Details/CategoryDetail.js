export default function CategoryDetails({
  inputType,
  setCategories,
  categories,
  setCategory,
}) {
  const Type = inputType || "checkbox";
  const Details = [
    {
      id: "Filters",
      type: Type,
      label: "Filters",
      name: "Category",
    },
    {
      id: "Suspension",
      type: Type,
      label: "Suspension",
      name: "Category",
    },
    {
      id: "Lighting",
      type: Type,
      label: "Lighting",
      name: "Category",
    },
    {
      id: "Tires",
      type: Type,
      label: "Wheels & Tires",
      name: "Category",
    },
    {
      id: "Brakes",
      type: Type,
      label: "Brake System",
      name: "Category",
    },
    {
      id: "Body",
      type: Type,
      label: "Body",
      name: "Category",
    },
    {
      id: "Cool",
      type: Type,
      label: "Cooling System",
      name: "Category",
    },
    {
      id: "Engine",
      type: Type,
      label: "Engine",
      name: "Category",
    },
  ];

  const handleChange = (e) => {
    const is_found = categories && categories.includes(e.target.id);
    if (is_found && Type === "checkbox") {
      setCategories(categories.filter((category) => category !== e.target.id));
    } else if (Type === "checkbox") {
      setCategories([...categories, e.target.id]);
    } else {
      setCategory(e.target.id);
    }
  };

  return (
    <div>
      {Details.map((data) => (
        <div key={data.id} className="flex flex-row items-center gap-3">
          <input
            type={data.type}
            name={data.name}
            id={data.id}
            className="cursor-pointer"
            onChange={handleChange}
          />
          <label className="cursor-pointer px-2" htmlFor={data.id}>
            {data.label}
          </label>
        </div>
      ))}
    </div>
  );
}
