"use client"
import React, { useState } from "react";
import { 
  Check, 
  Home, 
  Settings, 
  Plus, 
  User, 
  ChevronDown,
  Bell,
  Search,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Profile", action: () => console.log("Profile clicked") },
    { label: "Account Settings", action: () => console.log("Settings clicked") },
    { type: "divider" },
    { label: "Help & Support", action: () => console.log("Help clicked") },
    { label: "Sign Out", action: () => console.log("Sign out clicked") },
  ];

  const handleMenuItemClick = (item: any) => {
    if (item.action) {
      item.action();
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-gray-100 border-2 border-black rounded-lg p-2">
              <Check className="text-black" size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Doroll</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-lime-600 transition-colors">
              <Home size={18} />
              <span className="font-medium">Home</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-600 hover:text-lime-600 transition-colors">
              <Settings size={18} />
              <span className="font-medium">Settings</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
         <button className="hidden sm:flex items-center space-x-2 bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg transition-colors">
              <span className="font-medium">New Task</span>
              <Plus size={18} />
            </button>
            <button className="sm:hidden bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-lg transition-colors">
              <Plus size={18} />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                
                <ChevronDown 
                  className={`text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  size={16} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                  {menuItems.map((item, index) => (
                    item.type === "divider" ? (
                      <hr key={index} className="my-1 border-gray-200" />
                    ) : (
                      <button
                        key={index}
                        onClick={() => handleMenuItemClick(item)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">

              <button className="flex items-center space-x-3 w-full p-3 text-left text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <Home size={18} />
                <span>Home</span>
              </button>
              
              <button className="flex items-center space-x-3 w-full p-3 text-left text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings size={18} />
                <span>Settings</span>
              </button>

              {/* Mobile New Task Button */}
              <button className="flex items-center justify-center space-x-2 w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-lg transition-colors">
                <span className="font-medium">New Task</span>
                <Plus size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;