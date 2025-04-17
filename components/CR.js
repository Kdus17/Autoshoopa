export default function BrandDetails() {
  const Details = [
    {
      id: "Filters",
      type: "checkbox",
      label: "Filters",
    },
    {
      id: "Suspension",
      type: "checkbox",
      label: "Suspension",
    },
    {
      id: "Lighting",
      type: "checkbox",
      label: "Lighting",
    },
    {
      id: "Tires",
      type: "checkbox",
      label: "Wheels & Tires",
    },
    {
      id: "Brakes",
      type: "checkbox",
      label: "Brake System",
    },
    {
      id: "Body",
      type: "checkbox",
      label: "Body",
    },
    {
      id: "Cool",
      type: "checkbox",
      label: "Cooling System",
    },
    {
      id: "Engine",
      type: "checkbox",
      label: "Engine",
    },
  ];

  return (
    <div>
      {Details.map((data) => (
        <div key={data.id} className="flex flex-row items-center gap-3">
          <input
            type={data.type}
            name={data.name}
            id={data.id}
            className="cursor-pointer"
          />
          <label className="cursor-pointer px-2" htmlFor={data.id}>
            {data.label}
          </label>
        </div>
      ))}
    </div>
  );
}
