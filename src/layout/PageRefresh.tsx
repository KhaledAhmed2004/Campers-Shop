import { useEffect } from "react";
import { useAppSelector } from "../redux/hook";

const PageRefresh = () => {
  // Selecting cart products from the Redux store
  const cartProducts = useAppSelector((store) => store.cart.products);

  useEffect(() => {
    // Function to handle the beforeunload event
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Check if there are items in the cart
      if (cartProducts.length > 0) {
        // Warning message to display when the user tries to leave or refresh the page
        const warningMessage =
          "You have added some products in your cart, You won't get the that item if you reload this page. Are you sure want to leave?";

        // Use preventDefault to show the warning message
        event.preventDefault();
        // Setting the return value of the event to the warning message
        event.returnValue = warningMessage;
        return warningMessage;
      }
    };

    // Adding the beforeunload event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartProducts]);
};

export default PageRefresh;
