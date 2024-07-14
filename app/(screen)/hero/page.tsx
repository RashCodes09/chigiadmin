// import { revalidateTag } from "next/cache";
// import React from "react";

// const page = async () => {
//   const url = "http://localhost:3000";
//   const res = await fetch(`${url}/api/hero`, {
//     cache: "no-cache",
//     next: {
//       tags: ["hero"],
//     },
//   });
//   const data = await res.json();

//   const mainActionPost = async (formData: FormData) => {
//     "use server";
//     const title = formData.get("title");
//     const desc = formData.get("desc");
//     const started = formData.get("started");
//     const titlecolor = formData.get("titlecolor");
//     const desccolor = formData.get("desccolor");
//     const startedcolor = formData.get(" startedcolor");
//     const titlesize = formData.get("titlesize");
//     const descsize = formData.get("descsize");
//     const startedsize = formData.get("startedsize");

//     await fetch(`${url}/api/hero`, {
//       method: "POST",
//       headers: {
//         content: "Application/json",
//       },
//       body: JSON.stringify({ title, desc, started }),
//     });
//     revalidateTag("hero");
//   };

//   const mainActionUpdate = async (formData: FormData) => {
//     "use server";
//     const title = formData.get("title");
//     const desc = formData.get("desc");
//     const started = formData.get("started");
//     const heroID = formData.get("heroID");
//     const titlecolor = formData.get("titlecolor");
//     const desccolor = formData.get("desccolor");
//     const startedcolor = formData.get(" startedcolor");
//     const titlesize = formData.get("titlesize");
//     const descsize = formData.get("descsize");
//     const startedsize = formData.get("startedsize");
//     await fetch(`${url}/api/hero/${heroID}`, {
//       method: "PATCH",
//       headers: {
//         content: "Application/json",
//       },
//       body: JSON.stringify({ title, desc, started }),
//     });
//     revalidateTag("hero");
//   };

//   return (
//     <div className="w-[270px] h-[400px] pl-3  md:h-[380px] rounded-[20px] md:w-[550px] border flex justify-center items-center">
//       <div className="w-[350px] md:w-[500px]  rounded-[10px] h-full ">
//         HERO Form
//         <form
//           action={data?.data.length === 0 ? mainActionPost : mainActionUpdate}
//           className="mt-3 "
//         >
//           <div className="w-[250px] h-[85px] border rounded-md px-3 ">
//             <label className="font-extrabold">Title Fill</label>
//             <input
//               type="text"
//               name="title"
//               placeholder="fill in your title"
//               className="outline-none rounded-md pl-3 font-bold"
//             />
//             <div className="mt-3">
//               <span className="font-semibold text-[13px]">Color:</span>
//               <input
//                 defaultValue={data?.data[0]?.titlecolor}
//                 className="w-[20px] h-[20px]"
//                 name="titlecolor"
//                 type="color"
//               />

//               <span className="font-semibold text-[13px]">Font:</span>
//               <select
//                 className="font-semibold text-[13px] outline-none border"
//                 name="titlesize"
//               >
//                 <option>10</option>
//                 <option>20</option>
//                 <option>30</option>
//                 <option>40</option>
//               </select>
//             </div>
//           </div>
//           <div className="w-[250px] h-[85px] border rounded-md px-3 mt-3">
//             <label className="font-extrabold">DESC Fill</label>
//             <input
//               type="text"
//               name="desc"
//               placeholder="fill in your description"
//               className="outline-none rounded-md pl-3 font-bold"
//             />
//             <div className="mt-3">
//               <span className="font-semibold text-[13px]">Color:</span>
//               <input
//                 defaultValue={data?.data[0]?.desccolor}
//                 className="w-[20px] h-[20px]"
//                 name="desccolor"
//                 type="color"
//               />

//               <span className="font-semibold text-[13px]">Font:</span>
//               <select
//                 className="font-semibold text-[13px] outline-none border"
//                 name="descsize"
//               >
//                 <option>10</option>
//                 <option>20</option>
//                 <option>30</option>
//                 <option>40</option>
//               </select>
//             </div>
//           </div>
//           <div className="w-[250px] h-[85px] border rounded-md px-3 mt-3">
//             <label className="font-extrabold">button Fill</label>
//             <input
//               type="text"
//               name="started"
//               placeholder="fill in your description"
//               className="outline-none rounded-md pl-3 font-bold"
//             />
//             <div className="mt-3">
//               <span className="font-semibold text-[13px]">Color:</span>
//               <input
//                 defaultValue={data?.data[0]?.desccolor}
//                 className="w-[20px] h-[20px]"
//                 name="startedcolor"
//                 type="color"
//               />

//               <span className="font-semibold text-[13px]">Font:</span>
//               <select
//                 className="font-semibold text-[13px] outline-none border"
//                 name="startedsize"
//               >
//                 <option>10</option>
//                 <option>20</option>
//                 <option>30</option>
//                 <option>40</option>
//               </select>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="px-8 py-2 bg-slate-950 text-white rounded-md font-semibold flex justify-center items-center mt-3"
//           >
//             {data?.data.length === 0 ? "Submit hero" : "Update heero"}
//           </button>
//           <input type="hidden" name="heroID" value={data?.data[0]?._id} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return <div>this is hero</div>;
};

export default page;
