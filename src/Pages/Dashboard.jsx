// import React, { useEffect, useState } from "react";
// import { Sidebar, SidebarItem } from "flowbite-react";
// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
//   HiViewBoards,
// } from "react-icons/hi";
// // import { Dropdown } from "flowbite-react";

// function Dashboard() {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gray-300">
//       <div className="md:w-56">
//         <Sidebar >
//           <Sidebar.Items>
//             <Sidebar.ItemGroup>
//               <Sidebar.Item href="#" icon={HiChartPie}>
//                 Dashboard
//               </Sidebar.Item>
//               <Sidebar.Item
//                 href="#"
//                 icon={HiViewBoards}
//                 label="Pro"
//                 labelColor="dark"
//               >
//                 Kanban
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiInbox} label="3">
//                 Inbox
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiUser}>
//                 Users
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiShoppingBag}>
//                 Products
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiArrowSmRight}>
//                 Sign In
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiTable}>
//                 Sign Up
//               </Sidebar.Item>
//             </Sidebar.ItemGroup>
//           </Sidebar.Items>
//         </Sidebar>
//         {/* sidebar
//         <SidebarItem/>
//         hello */}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Dashboard() {
  return (
    <div>
      <Sidebar/>
      <Header/>
    </div>
  )
}

export default Dashboard
