import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Visa from './Visa';

const AllVisa = () => {
  const visaData = useLoaderData(); // Loaded visa data
  const [filter, setFilter] = useState(""); // State to manage the selected filter

  // Filtered visa data
  const filteredVisaData = filter
    ? visaData.filter((visa) => visa.type.toLowerCase() === filter.toLowerCase())
    : visaData;

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="container mx-auto text-center text-2xl p-4">All Visa</h2>

        {/* Filter Dropdown */}
        <div className="container mx-auto mb-4 flex justify-end">
          <select
            className="border border-gray-300 rounded-lg p-2 bg-gray-800 text-gray-200"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter Visa Types</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Business Visa">Business Visa</option>
            <option value="Official Visa">Official Visa</option>
          </select>
        </div>

        {/* Visa Cards */}
        <div className="grid grid-cols-4 gap-10 container mx-auto mt-10">
          {filteredVisaData.map((visa) => (
            <Visa visa={visa} key={visa._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllVisa;



