import React from "react";

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 font-light text-black max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col px-12 py-14 text-2xl font-bold rounded-md bg-stone-400 max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="w-full aspect-[1.32] max-md:max-w-full"
                />
                <div className="self-center mt-12 max-md:mt-10">
                  Whale House
                </div>
              </div>
              <div className="flex gap-5 self-start mt-7">
                <div className="grow my-auto text-xl">Available as:</div>
                <div className="justify-center px-6 py-3.5 text-lg bg-rose-200 rounded-md max-md:px-5">
                  Oil on canvas
                </div>
              </div>
              <div className="mt-16 text-xl max-md:mt-10 max-md:max-w-full">
                Also available as:
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between self-start">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 max-w-full rounded-full aspect-square w-[100px]"
                />
                <div className="flex flex-col px-5 my-auto">
                  <div className="text-2xl font-bold">Amane Yugi</div>
                  <div className="mt-2.5 text-xl font-light">80 Followers</div>
                </div>
              </div>
              <div className="flex flex-col px-7 pt-9 pb-16 mt-11 rounded-md bg-stone-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-xl font-bold max-md:max-w-full">
                  Description
                </div>
                <div className="mt-1.5 text-base tracking-widest max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </div>
              </div>
              <div className="flex gap-4 items-start mt-7 text-sm font-light whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="justify-center items-start px-11 py-2.5 bg-rose-200 rounded-md max-md:px-5">
                  Tags
                </div>
                <div className="justify-center items-start px-11 py-2.5 bg-rose-200 rounded-md max-md:px-5">
                  Tags
                </div>
                <div className="justify-center items-start self-stretch px-3.5 py-2.5 bg-rose-200 rounded-md max-md:pr-5">
                  Category
                </div>
              </div>
              <div className="justify-center items-start px-8 py-4 mt-20 max-w-full text-2xl font-bold text-white rounded-md bg-zinc-500 w-[250px] max-md:px-5 max-md:mt-10">
                $$ Price
              </div>
              <div className="flex gap-5 mt-9 w-full text-lg font-medium max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-1 flex-auto gap-5 px-9 py-2.5 whitespace-nowrap rounded-md bg-stone-400 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 aspect-[0.97] w-[38px]"
                  />
                  <div className="flex-auto my-auto">Buy</div>
                </div>
                <div className="flex flex-1 flex-auto gap-5 items-start px-6 py-1.5 bg-rose-200 rounded-md max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 self-start aspect-[0.86] w-[38px]"
                  />
                  <div className="flex-auto my-auto">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-11 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl font-bold text-white max-md:mt-10">
              <div className="flex flex-col px-5 pt-5 pb-9 whitespace-nowrap rounded-md bg-stone-400 max-md:pr-5">
                <div className="shrink-0 bg-white rounded-xl aspect-square h-[264px]" />
                <div className="self-center mt-7">Stickers</div>
              </div>
              <div className="justify-center px-5 py-3.5 mt-4 rounded-md bg-zinc-500 max-md:pr-5">
                $$ Price
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl font-bold text-white max-md:mt-10">
              <div className="flex flex-col px-5 pt-5 pb-9 whitespace-nowrap rounded-md bg-stone-400 max-md:pr-5">
                <div className="shrink-0 bg-white rounded-xl aspect-square h-[264px]" />
                <div className="self-center mt-7">Bookmark</div>
              </div>
              <div className="justify-center px-5 py-3.5 mt-4 rounded-md bg-zinc-500 max-md:pr-5">
                $$ Price
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl font-bold text-white max-md:mt-10">
              <div className="flex flex-col px-5 pt-5 pb-9 whitespace-nowrap rounded-md bg-stone-400 max-md:pr-5">
                <div className="shrink-0 bg-white rounded-xl aspect-square h-[264px]" />
                <div className="self-center mt-7">Medium</div>
              </div>
              <div className="justify-center px-5 py-3.5 mt-4 rounded-md bg-zinc-500 max-md:pr-5">
                $$ Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
