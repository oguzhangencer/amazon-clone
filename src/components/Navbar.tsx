import { Link } from "react-router-dom";
import { Button, Select, Text, TextInput } from "@mantine/core";
import { BsList, BsCart3, BsSearch, BsGeoAlt } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      {/* Navbar Up */}
      <div className=" bg-gray-900 h-14 flex items-center justify-between py-2 px-4 gap-x-8">
        {/* Navbar Left */}
        <div className="flex justify-center items-center h-full gap-x-4">
          {/* Amazon Logo */}
          <Link to="/">
            <img
              className="w-20 "
              src="/images/amazonLogo.png"
              alt="amazonLogo"
            />
          </Link>
          <div className="flex items-center gap-x-1 outline hover:outline-white">
            {/* Select Country */}
            <BsGeoAlt color="white" />
            <div className="flex flex-col ">
              <Text className="text-sm font-thin text-left text-white">
                Deliver to
              </Text>
              <Text className="text-sm font-bold text-white">Turkey</Text>
            </div>
          </div>
        </div>
        {/* Navbar Middle */}
        <div className="flex items-center grow outline focus:outline-amber-500 ">
          {/* Select */}
          <Select
            className="flex flex-col "
            placeholder="All"
            data={[
              { value: "departments", label: "All Departments" },
              { value: "arts", label: "Arts & Crafts" },
              { value: "automotive", label: "Automotive" },
              { value: "baby", label: "Baby" },
              { value: "beauty", label: "Beauty & Personal Care" },
              { value: "books", label: "Books" },
              { value: "boys", label: "Boy's Fashion" },
              { value: "computer", label: "Computers" },
              { value: "deals", label: "Deals" },
              { value: "music", label: "Digital Music" },
              { value: "elektronics", label: "Electronics" },
              { value: "girls", label: "Girl's Fashion" },
              { value: "health", label: "Health & Household" },
              { value: "home", label: "Home & Kitchen" },
              { value: "industrial", label: "Industrial & Scientific" },
              { value: "kindle", label: "Kindle Store" },
              { value: "luggage", label: "Luggage" },
              { value: "mens", label: "Men's Fashion" },
              { value: "movies", label: "Movies & TV" },
            ]}
          />
          {/* Text input */}
          <TextInput
            className="text-select w-full"
            placeholder="Your name"
            styles={{
              input: {
                borderRadius: 0,
              },
            }}
          />
          {/* Search Button */}
          <Button
            radius="xs"
            className="rounded-r-lg bg-amber-500 hover:bg-amber-600"
          >
            <BsSearch />
          </Button>
        </div>
        {/* Navbar Right */}
        <div className="flex justify-center items-center h-full gap-x-6 ">
          {/* Country */}
          <div className="flex flex-col outline hover:outline-white">
            <Text className="text-sm font-bold text-white">EN</Text>
          </div>
          {/* Sign in  or  Log in */}
          <div className="flex flex-col  outline hover:outline-white">
            <Text className="text-sm font-thin text-left text-white">
              Hello, sign in
            </Text>
            <Text className="text-sm font-bold text-white">
              Account & Lists
            </Text>
          </div>
          {/* Orders */}
          <div className="flex flex-col outline hover:outline-white">
            <Text className="text-sm font-thin text-left text-white">
              Returns
            </Text>
            <Text className="text-sm font-bold text-white">& Orders</Text>
          </div>
          {/* Cart */}
          <div className="flex items-center gap-x-1 outline">
            <BsCart3 color="white" size={30} />
            <div className="flex flex-col">
              <Text className="text-sm font-bold text-white">Cart</Text>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar Down */}
      <div className="bg-slate-800 flex items-center py-1 px-4 gap-x-4">
        <BsList color="white" size={30} />
        <>
          <Text className="text-sm font-bold text-white">All</Text>
          <Text className="text-white">Today's Deals</Text>
          <Text className="text-white"> Customer Service</Text>
          <Text className="text-white">Registry</Text>
          <Text className="text-white">Gift Cards</Text>
          <Text className="text-white">Sell</Text>
        </>
      </div>
    </div>
  );
}
