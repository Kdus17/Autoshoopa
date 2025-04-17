export default function ContactFormDetail() {
  const Details = [
    {
      id: "name",
      placeholder: "Your Name",
      type: "text",
      required: true,
    },
    {
      id: "Phone",
      placeholder: "Phone Number",
      type: "text",
      required: true,
    },
    {
      id: "Email",
      placeholder: "Email",
      type: "text",
      required: true,
    },
  ];
  {
    return Details.map((data) => (
      <div key={data.id}>
        <input
          type={data.type}
          placeholder={data.placeholder}
          className="border-1 border-black py-2 px-2  rounded-sm w-120"
          required={data.required}
        />
      </div>
    ));
  }
}
