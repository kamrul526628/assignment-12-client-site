import React from 'react';
import {Link, Outlet } from 'react-router-dom';




const Dashboard = () => {
   
    return (
       <div>
           <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center mt-6">
            <h2 className='text-2xl font-bold text-accent'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
                
            
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/myorder">My Orders</Link></li>
                    <li><Link to="/dashboard/myreview">Add A Review</Link></li>
                </ul>
            
            </div>
            </div>
       </div>
    );
};

export default Dashboard;