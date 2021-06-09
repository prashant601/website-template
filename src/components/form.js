import React from "react";

const form = () => {
  return (
    <div>
      <div class="w-full h-screen font-sans bg-cover flex  bg-form-img box-border">
        <div class="container flex items-center justify-center  md:w-auto flex-initial h-full mx-auto overflow-hidden">
          <div class="w-full  max-w-lg">
            <div class="leading-loose box-border " >
              <form class="flex w-full max-w-sm m-auto flex-initial space-x-3">
                <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white backdrop-blur bg-opacity-25 rounded-lg shadow dark:bg-gray-800">
                  <div class="mb-6 text-3xl font-bold text-center text-blueGray-600 dark:text-white">
                    Contact us !
                  </div>
                  <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div class="col-span-2 lg:col-span-1">
                      <div class=" relative ">
                        <input
                          type="text"
                          id="contact-form-name"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-span-2 lg:col-span-1">
                      <div class=" relative ">
                        <input
                          type="text"
                          id="contact-form-email"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="email"
                        />
                      </div>
                    </div>
                    <div class="col-span-2">
                      <label class="text-gray-700" for="name">
                        <textarea
                          class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          id="comment"
                          placeholder="Enter your comment"
                          name="comment"
                          rows="5"
                          cols="40"
                        ></textarea>
                      </label>
                    </div>
                    <div class="col-span-2 text-right">
                      <button
                        type="submit"
                        class="py-2 px-4 bg-gradient-to-r from-gray-700 via-gray-100 to-gray-400 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
