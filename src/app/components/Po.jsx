'use client'
import { useState } from 'react';

export default function Po() {
  const [isOpen, setIsOpen] = useState(false); // حالت برای مدیریت باز و بسته شدن منو

  return (
    <div className="flex flex-col items-center">
      {/* دکمه همبرگری */}
      <div className="sm:hidden flex justify-end w-full bg-purple-500">
        <button 
          onClick={() => setIsOpen(!isOpen)} // تغییر وضعیت منو با کلیک روی دکمه
          className="p-2 rounded-md focus:outline-none"
        >
          <svg className="w-6 h-6 bg-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* منوی همبرگری */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:flex sm:flex-col w-full bg-white shadow-md`}>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Today's tasks</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Important tasks</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Completed tasks</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Uncompleted tasks</a></div>
        </div>);}