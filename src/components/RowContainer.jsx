import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export default function RowContainer({ flag, data }) {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-280 h-[220px] min-w-[280px] md:w-300 md:min-w-[300px] bg-sky-100 rounded-lg p-2 my-3 backdrop-blur-lg hover:drop-shadow-2xl flex flex-col items-center justify-between relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-xl"
                whileHover={{ scale: 1.25 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain my-2"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 mx-2 rounded-full flex items-center justify-center cursor-pointer bg-cyan-500 hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end my-3">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <div className="flex items-center my-2">
                <p className=" text-lg text-headingColor font-semibold">
                  <span className=" text-sm text-red-500">₹</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="Img not Found" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items not Available
          </p>
        </div>
      )}
    </div>
  );
}
