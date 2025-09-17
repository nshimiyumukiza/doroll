"use client"

import { useState } from "react"
import { ChevronDown, Calendar, BarChart3 } from "lucide-react";

const Section = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  const periods = [
    "This Week",
    "Last Week", 
    "This Month",
    "Last Month",
    "This Quarter",
    "This Year"
  ];

  const handlePeriodSelect = (period:any) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  return (
    <div className='bg-white p-4'>
      <div className="container mx-auto flex">
        <div className="py-8 bg-gray-50 rounded-lg border-r w-80 min-h-96">
          <div className="px-4 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              <p className="text-gray-700 font-medium text-lg">Summary</p>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>{selectedPeriod}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => handlePeriodSelect(period)}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                          selectedPeriod === period ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

         
          <div className="px-4 space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Tasks</h3>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Completed</h3>
              <p className="text-2xl font-bold text-green-600">17</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Pending</h3>
              <p className="text-2xl font-bold text-orange-600">7</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-500">Main content area for {selectedPeriod}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section