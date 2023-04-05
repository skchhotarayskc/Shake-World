import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full h-72 rounded-xl bg-gray-800 text-white p-6 md:flex md:items-center md:justify-evenly">
      <ul className="text-gray-400 space-y-3">
        <li className=" text-xl text-gray-200">Manoranjan Nayak</li>
        <li>
          <IoCallOutline className=" inline-flex" />{" "}
          <a href="tel:+919337417143">+91 9337417143</a>
        </li>
        <li>
          <IoLocationOutline className=" inline-flex" /><a href="https://goo.gl/maps/5dNkhd7f7d1gCfZQA"> Raj Sunakhala Rd</a>
        </li>
      </ul>
      <div className="mt-14">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Shake World. All Rights Reserved.
        </span>

        <div className=" text-base text-gray-300"><span className="text-sm text-gray-400 sm:text-center">Crafted By :</span> Sushant</div>
        <span className=" text-sm text-gray-400">Contact : <a className="text-gray-300" href="https://www.linkedin.com/in/skchhotarayskc/">LinkedIn</a></span>
      </div>
    </footer>
  );
}
