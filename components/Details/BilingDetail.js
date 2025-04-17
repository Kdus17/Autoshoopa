export default function BilingDetail() {
  const Details = [
    {
      id: "City",
      label: "City",
      type: "text",
      required: true,
    },
    {
      id: "Subcity",
      label: "Subcity",
      type: "text",
      required: true,
    },
    {
      id: "Phone",
      label: "Phone",
      type: "text",
      required: true,
    },
    {
      id: "Email",
      label: "Email",
      type: "text",
      required: true,
    },
  ];
  return (
    <div>
      {Details.map((data) => (
        <div key={data.id}>
          <p className="font-semibold ">{data.label}</p>
          <input
            type={data.type}
            className="border-1 border-black w-full h-10 px-3 mb-2"
            required={data.required}
          />
        </div>
      ))}
    </div>
  );
}
