const data = [
  {
    id: 101,
    name: "Processing",
  },
  {
    id: 102,
    name: "Shipped",
  },
  {
    id: 103,
    name: "Delivered",
  },
];

export default function TrackOrder() {
  return (
    <div className="flex flex-col text-center gap-12 ">
      <h1 className="text-5xl">Order Managment Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Current Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 border-1 rounded-md">{item.id}</td>
              <td className="py-2 border-1">{item.name}</td>
              <td className="py-2 border-1">
                <select id="" name="cars">
                  <option value="Pending">Pending</option>
                  <option value="Enroute">Enroute</option>
                  <option value="Deliverd">Deliverd</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
