export default function FilterDetails() {
  const Details = [
    {
      id: "Audi",
      type: "checkbox",
      name: "Audi",
      label: "Audi",
    },
    {
      id: "BMW",
      type: "checkbox",
      name: "BMW",
      label: "BMW",
    },
    {
      id: "Ford",
      type: "checkbox",
      name: "Ford",
      label: "Ford",
    },
    {
      id: "Honda",
      type: "checkbox",
      name: "Honda",
      label: "Honda",
    },
    {
      id: "Hyundai",
      type: "checkbox",
      name: "Hyundai",
      label: "Hyundai",
    },
    {
      id: "Kia",
      type: "checkbox",
      name: "Kia",
      label: "Kia",
    },
    {
      id: "Toyota",
      type: "checkbox",
      name: "Toyota",
      label: "Toyota",
    },
    {
      id: "Land_Rover",
      type: "checkbox",
      name: "LandRover",
      label: "Land Rover",
    },
    {
      id: "Lexus",
      type: "checkbox",
      name: "Lexus",
      label: "Lexus",
    },
  ];

  return (
    <div>
      {Details.map((data) => (
        <div key={data.id} className="flex flex-row items-center">
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
