// "use client";

// import { useState, useEffect } from "react";

// const Page = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     // Fetch data from the provided API
//     fetch("http://localhost:3000/read/api/getAll")
//       .then((res) => res.json())
//       .then((data) => setUsers(data.users));
//   }, []);

//   // Filter users based on the search input
//   // const filteredUsers = users.filter((user) =>
//   //   user.name.toLowerCase().includes(search.toLowerCase())
//   // );

//   const filteredUsers = search 
//     ? users.filter((user) =>
//         user.name.toLowerCase().includes(search.toLowerCase())
//       )
//     : users;

//   return (
//     <div className="p-4 h-screen" >
//       {/* Search Input */}
//       {/* <input
//         type="text"
//         placeholder="Search users by name"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border p-2 w-full rounded text-black"
//       /> */}

//       <label className="input input-bordered flex items-center gap-2 w-[40%] mx-auto">
//         <input type="text" className="grow p-2 w-full text-black" placeholder="Search"  
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}/>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 16 16"
//           fill="currentColor"
//           className="h-4 w-4 opacity-70 text-black">
//           <path
//             fillRule="evenodd"
//             d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//             clipRule="evenodd" />
//         </svg>
//       </label>

//       {/* Suggestions and not found text */}
//       {/* {search && (
//         <ul className="mt-3 border p-2 rounded shadow-md w-[40%] mx-auto">
//           {filteredUsers.map((user) => (
//             <li
//               key={user._id}
//               className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-200"
//               onClick={() => setSearch(user.name)} // Set the input value to the selected user's name
//             >
//               <p className="font-bold">{user.name}</p>
//             </li>
//           ))}
//           {filteredUsers.length === 0 && (
//             <li className="p-2">No results found</li>
//           )}
//         </ul>
//       )} */}
//       {search && filteredUsers.length > 0 && (
//         <ul className="mt-3 border p-2 rounded shadow-md w-[40%] mx-auto">
//           {filteredUsers.map((user) => (
//             <li
//               key={user._id}
//               className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-200"
//               onClick={() => setSearch(user.name)} // Set the input value to the selected user's name
//             >
//               <p className="font-bold">{user.name}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Page;


"use client";

import { useState, useEffect } from "react";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch data from the provided API
    fetch("http://localhost:3000/read/api/getAll")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  // const filteredUsers = search 
  //   ? 
  //   users.filter((user) =>
  //       user.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : users;

    // Filter users based on the search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 h-screen" >
      <label className="input input-bordered flex items-center gap-2 w-[40%] mx-auto">
        <input type="text" className="grow p-2 w-full text-black" placeholder="Search"  
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70 text-black">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>

      
      {search && filteredUsers.length > 0 && (
        <ul className="mt-3 border p-2 rounded shadow-md w-[40%] mx-auto">
          {filteredUsers.map((user) => (
            <li
              key={user._id}
              className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-200"
              onClick={() => setSearch(user.name)} // Set the input value to the selected user's name
            >
              <p className="font-bold">{user.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;

