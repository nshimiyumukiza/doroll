
"use client"
import React, { useState } from "react";
import { 
  Check, 
  Home, 
  Settings, 
  Plus, 
  User, 
  ChevronDown,
  Menu,
  X,
  Calendar
} from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const menuItems = [
    { label: "Profile", action: () => console.log("Profile clicked") },
    { label: "Account Settings", action: () => console.log("Settings clicked") },
    { type: "divider" },
    { label: "Help & Support", action: () => console.log("Help clicked") },
    { label: "Sign Out", action: () => console.log("Sign out clicked") },
  ];

  const handleMenuItemClick = (item) => {
    if (item.action) {
      item.action();
    }
    setIsDropdownOpen(false);
  };

  const handleAddTask = () => {
    console.log("Adding task:", {
      title: taskTitle,
      date: taskDate,
      description: taskDescription
    });
    
    // Reset form
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setIsOpenModal(false);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <>
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
              <button 
                onClick={() => setIsOpenModal(true)} 
                className="hidden sm:flex items-center space-x-2 bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <span className="font-medium">New Task</span>
                <Plus size={18} />
              </button>
              <button 
                onClick={() => setIsOpenModal(true)}
                className="sm:hidden bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-lg transition-colors"
              >
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


        </div>
        
        {isDropdownOpen && (
          <div 
            className="fixed inset-0 z-0" 
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </nav>

      {/* Custom Modal */}
      {isOpenModal && (
        <div className="fixed inset-0  flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">New Task</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="space-y-4">
                <div className="flex  space-x-4">
 <div>
                  <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Task Title
                  </label>
                  <input
                    id="taskTitle"
                    type="text"
                    placeholder="Add New Task"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full px-3 py-2 border text-gray-700 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  />
                </div>

                <div>
                  <label htmlFor="taskDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Due Date
                  </label>
                  <div className="relative">
                    <input
                      id="taskDate"
                      type="date"
                      value={taskDate}
                      onChange={(e) => setTaskDate(e.target.value)}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={16} />
                  </div>
                </div>
                </div>
               

                <div>
                  <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="taskDescription"
                    placeholder="Enter Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    rows="3"
                    className="w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                disabled={!taskTitle.trim()}
                className="flex items-center space-x-2 px-4 py-2 bg-lime-500 hover:bg-lime-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                <span>Add Task</span>
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;