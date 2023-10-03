import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="w-full bg-black text-gray-400 px-36 mt-15">
        <div class="w-full p-10 space-y-2">

          <div class="flex flex-wrap w-full  my-4">
            <div class="sm:w-1/4 w-1/2">
              <ul class="space-y-2">
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div class="sm:w-1/4 w-1/2">
              <ul class="space-y-2">
                <li class="">Help Centre </li>
                <li class=""> Jobs</li>
                <li class=""> Cookie Preferences</li>
              </ul>
            </div>
            <div class="sm:w-1/4 w-1/2">
              <ul class="space-y-2">
                <li class="">Gift Cards </li>
                <li class="">Terms of Use </li>
                <li class="">Corporate Information </li>
              </ul>
            </div>
            <div class="sm:w-1/4 w-1/2">
              <ul class="space-y-2">
                <li class=""> Media Centre</li>
                <li class="">Privacy </li>
                <li class="">Contact Us </li>
              </ul>
            </div>
          </div>

          <div class=" space-y-4 pt-3">
            

            <div class="">@1997-2023 Netflix, Inc.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
