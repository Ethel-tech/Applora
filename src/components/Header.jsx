import React from "react";

import "../index.css";

function Header() {
  return (
    <div>
      <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
        <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-[#85C1E9] border-none">
          {/* <span class="hidden md:block">APPLORA</span> */}
        </div>
        <div class="flex justify-between items-center h-14 bg-[#85C1E9]  header-right">
          <div class="bg-[#fff] rounded-lg flex items-center  max-w-xl mr-4 p-0 shadow-sm border border-[#fff]"></div>
          <ul class="flex items-center">
            <li>
              <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
            </li>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
