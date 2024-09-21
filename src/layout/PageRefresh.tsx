import { useEffect } from "react";
import { useAppSelector } from "../redux/hook";

const PageRefresh = () => {
  const cartProducts = useAppSelector((store) => store.cart.products);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartProducts.length > 0) {
        const warningMessage =
          "You have added some products in your cart, You won't get the that item if you reload this page. Are you sure want to leave?";
        event.returnValue = warningMessage;
        return warningMessage;
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartProducts]);
};

export default PageRefresh;
