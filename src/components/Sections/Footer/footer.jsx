import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="mt-8 bg-[#85C1E9] p-6">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <h2 className="text-[#0C335E] text-xl font-semibold ml-8">
            Get connected with us on social media
          </h2>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center mr-8">
            <span style={{ color: "#0C335E" }}>
              <FaFacebook size={30} />
            </span>
            <span style={{ color: "#0C335E" }}>
              <FaTwitter size={30} />
            </span>
            <span style={{ color: "#0C335E" }}>
              <FaLinkedin size={30} />
            </span>
            <span style={{ color: "red" }}>
              <FaInstagram size={30} />
            </span>
          </div>
        </div>
      </div>
      <footer class="bg-[#007BFF] text-white">
        <div class="container mx-auto px-6 md:flex md:justify-between">
          {/*  Left Column  */}
          <div class="mb-8 md:mb-0">
            <h2 class="text-xl font-bold mb-4">Applora</h2>
            {/* <p className="line-clamp-*">
              Applora is designed to provide a comprehensive solution for
              designers, teams, and businesses to deliver exceptional products.
            </p> */}
          </div>

           {/* Services Column  */}
          <div class="mb-8 md:mb-0">
            <h3 class="text-xl font-semibold mb-4">SERVICES</h3>
            <ul>
              <li>
                <a href="#" class="hover:underline">
                  Task Execution
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Project Execution
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Invoicing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Chat Support
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Third-Party Tools
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Legal Column --> */}
          <div class="mb-8 md:mb-0">
            <h3 class="text-xl font-semibold mb-4">LEGAL</h3>
            <ul>
              <li>
                <a href="#" class="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column  */}
          <div>
            <h3 class="text-xl font-semibold mb-4">CONTACTS</h3>
            <ul>
              <li class="flex items-center">Lekki Lagos, Nigeria.</li>
              <li class="flex items-center">info@applora.com</li>
              <li class="flex items-center">+01 234 567 88</li>
              <li class="flex items-center">+01 234 567 89</li>
            </ul>
          </div>
        </div>
      <div class="bg-blue-700 text-center text-white py-4 mt-4">
        <p>&copy; 2020 Copyright: MDApplora.com</p>
      </div>
      </footer>
    </section>
  );
}

export default Footer;
