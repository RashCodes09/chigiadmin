// import { revalidateTag } from "next/cache";
// import React from "react";

// const page = async () => {
//   const url = "http://localhost:3000";
//   const res = await fetch(`${url}/api/header`, {
//     cache: "no-cache",
//     next: {
//       tags: ["header"],
//     },
//   });

//   const data = await res.json();
//   // console.log(data);

//   const mainActionPost = async (formData: FormData) => {
//     "use server";
//     const logo = formData.get("logo");
//     const links = formData.get("links");
//     const call = formData.get("call");
//     const btn = formData.get("btn");

//     await fetch(`${url}/api/header`, {
//       method: "POST",
//       headers: {
//         content: "Application/json",
//       },
//       body: JSON.stringify({ logo, links, call, btn }),
//     });
//     revalidateTag("header");
//   };

//   return (
//     <div className="w-[270px] h-[350px] pl-3  md:h-[380px] rounded-[20px] md:w-[550px] border flex justify-center items-center">
//       <div className="w-[350px] md:w-[500px]  rounded-[10px] h-full ">
//         Header Form
//         <form action={mainActionPost} className="mt-3 ">
//           <div className="w-[250px] h-[55px] border rounded-md px-3 ">
//             <label className="font-extrabold">Logo Fill</label>
//             <input
//               type="text"
//               name="logo"
//               placeholder="fill in your logo"
//               className="outline-none rounded-md pl-3"
//             />
//           </div>
//           <div className="w-[250px] h-[55px] border rounded-md px-3 mt-3">
//             <label className="font-extrabold">Links</label>
//             <input
//               type="text"
//               name="links"
//               placeholder="fill in your links"
//               className="outline-none rounded-md pl-3"
//             />
//           </div>
//           <div className="w-[250px] h-[55px] border rounded-md px-3 mt-3">
//             <label className="font-extrabold">Call</label>
//             <input
//               type="text"
//               name="call"
//               placeholder="fill in your logo"
//               className="outline-none rounded-md pl-3"
//             />
//           </div>
//           <div className="w-[250px] h-[55px] border rounded-md px-3 mt-3">
//             <label className="font-extrabold">Button</label>
//             <input
//               type="text"
//               name="btn"
//               placeholder="fill in your button text"
//               className="outline-none rounded-md pl-3"
//             />
//           </div>
//           <button
//             type="submit"
//             className="px-8 py-2 bg-slate-950 text-white rounded-md font-semibold flex justify-center items-center mt-3"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default page;
