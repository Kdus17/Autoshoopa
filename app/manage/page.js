"use client";
import ProductManagement from "@/components/ProductManagement";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function ManageProductPage() {
  const auth_context = useAuthContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!localStorage.getItem("autoshoppa-token")) {
        router.push("/login");
        alert("Create an account to manage products");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <>
      <ProductManagement />
    </>
  );
}
