"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex gap-x-4 items-center">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag color="white" size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {" "}
          {cart.items.length}{" "}
        </span>
      </Button>
    </div>
  );
};

export default NavBarActions;
