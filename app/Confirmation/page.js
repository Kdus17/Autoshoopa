import OrderConformation from "@/components/OrderConformation";
import { Suspense } from "react";

export default function Confirmation() {
  return (
    <Suspense>
      <OrderConformation />
    </Suspense>
  );
}
