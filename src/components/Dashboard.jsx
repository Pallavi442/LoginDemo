import React from 'react';
import au_logo from '../assets/au_logo.png';
import au_logo2 from '../assets/au_logo2.png';

const Dashboard = () => {
  return (
    <div>
      <div className='flex place-content-between bg-amber-50 p-3'>
        <div className='flex gap-5'>
            <p>Personal</p>
            <p>Premium</p>
            <p>Business</p>
        </div>

        <div className='flex gap-5'>
            <p>About US</p>
            <p>Investor</p>
            <p>Careers</p>
            <p>Debit Card Services</p>
            <p>Debit Card Services</p>
        </div>
        {/* <div className='flex gap-3'>
          <div><img src={logoImg2}/></div>
          <div className='flex gap-[20px] items-center pl-[20px]'>
            <img src={hamburger} className='items-center'/>
            <input className='border border-gray-500'/>
          </div>
        
        </div>
        <div className='flex'>
            <h3>Welcome User</h3>
            <img src={User} className='items-center' />
        </div> */}


      </div>
      <div className='flex justify-between'>
       <div className='flex'>
        <div>
           <img src={au_logo} className="max-w-full max-h-full" alt="auLogo" />
        </div>
        <div>
           <img src={au_logo2} className="max-w-full max-h-full" alt="auLogo" />
        </div>
        </div>
    <div className='flex gap-5'>
        <div className='flex gap-5 p-2 '>
            <p>AU 101</p>
            <p>Accounts</p>
            <p>Cards</p>
            <p>Loans</p>
            <p>Blogs</p>
            <p>Offers</p>
            <p>Insurance</p>
            <p>Insurance</p>
            <p>Investment</p>
            <p>Fincare</p>
        </div>

<div className="flex gap-5">
  <div className="w-max">
    <button className="w-max mt-2 bg-[#f56403] text-white py-2 px-4 rounded-md">
      Make Payment
    </button>
  </div>
  <div className="w-max ml-2">
    <button className="w-max mt-2 bg-[#f56403] text-white py-2 px-4 rounded-md">
      Login
    </button>
  </div>
</div>

        </div>
  
      </div>
    </div>
  )
}

export default Dashboard