import React, { useState } from 'react';
import au_logo from '../assets/au_logo.png';
import au_logo2 from '../assets/au_logo2.png';
import hamburger from '../assets/hamburger.png';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className='flex justify-between items-center bg-amber-50 p-3'>
        {/* Left Navigation */}
        <div className='hidden md:flex gap-5'>
          <p>Personal</p>
          <p>Premium</p>
          <p>Business</p>
        </div>

        {/* Right Navigation */}
        <div className='hidden md:flex gap-5'>
          <p>About Us</p>
          <p>Investor</p>
          <p>Careers</p>
          <p>Debit Card Services</p>
        </div>

        {/* Hamburger Menu Button (Left) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden'>
          <img src={hamburger} alt='Menu' className='w-8 h-8' />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center bg-amber-100 p-3 space-y-3'>
          <p>Personal</p>
          <p>Premium</p>
          <p>Business</p>
          <p>About Us</p>
          <p>Investor</p>
          <p>Careers</p>
          <p>Debit Card Services</p>
        </div>
      )}

      <div className='flex flex-wrap justify-between items-center p-3'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden'>
          <img src={hamburger} alt='Menu' className='w-8 h-8' />
        </button>
        <div className='flex gap-3'>
          <img src={au_logo} className='w-24' alt='AU Logo' />
          <img src={au_logo2} className='w-24' alt='AU Logo 2' />
        </div>
        <div className='hidden md:flex gap-5 p-2'>
          <p>AU 101</p>
          <p>Accounts</p>
          <p>Cards</p>
          <p>Loans</p>
          <p>Blogs</p>
          <p>Offers</p>
          <p>Insurance</p>
          <p>Investment</p>
          <p>Fincare</p>
        </div>
        <div className='hidden md:flex gap-3'>
          <button className='bg-[#f56403] text-white py-2 px-4 rounded-md'>Make Payment</button>
          <button className='bg-[#f56403] text-white py-2 px-4 rounded-md'>Login</button>
        </div>
      </div>
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center bg-amber-100 p-3 space-y-3'>
          <p>AU 101</p>
          <p>Accounts</p>
          <p>Cards</p>
          <p>Loans</p>
          <p>Blogs</p>
          <p>Offers</p>
          <p>Insurance</p>
          <p>Investment</p>
          <p>Fincare</p>
          <button className='bg-[#f56403] text-white py-2 px-4 rounded-md'>Make Payment</button>
          <button className='bg-[#f56403] text-white py-2 px-4 rounded-md'>Login</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;