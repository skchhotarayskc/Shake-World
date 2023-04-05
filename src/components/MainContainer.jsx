import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";

import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import Footer from "./Footer";

export default function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

  useEffect(() => {}, [cartShow]);

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <HomeContainer />

        <section className="w-full my-6">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-teal-400 to-fuchsia-600 transition-all ease-in-out duration-100">
              Our Tasty Ice Creams
            </p>
          </div>
          <RowContainer
            flag={true}
            data={foodItems?.filter((n) => n.category === "icecreams")}
          />
        </section>

        <MenuContainer />

        {cartShow && <CartContainer />}
      </div>

      <Footer />
    </>
  );
}
