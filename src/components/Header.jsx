import React from "react";
import { Icon } from "@iconify/react";
import "../index.css";

function Header() {
  return (
    <div className="flex fixed w-full items-center justify-between h-14 bg-gray-100">
      <h2 className="text-black font-bold text-lg justify-center item-center mx-72 ">
        Welcome,
        <span className="text-[#F66030]"> Dorothy Ubuara</span>
      </h2>
      <div class="">
        <ul class="flex items-center">
          <li></li>
          <div class="bg-[#fff] rounded-lg flex items-center  max-w-xl mr-4 p-0 shadow-sm border border-[#fff]">
            <button class="outline-none focus:outline-none">
              <svg
                class="w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Here"
              class="w-full pl-3 text-sm text-black outline:none bg-transparent rounded-lg border border-[#fff] focus:border-[#fff]"
            />
          </div>
          <span class="inline-flex justify-center items-center ml-2 mx-4">
            <Icon icon="iwwa:alarm" style={{ fontSize: "23px" }} />
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Header;
