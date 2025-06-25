import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState([]);


    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleFilterChange = (e) => {
        const selected = Array.from(e.target.selectedOptions, option => option.value);
        setFilters(selected);
        console.log("Selected filters:", selected);
    };

    return (

        <>
            <nav className='bg-purple-600 p-5 flex flex-row justify-between items-center gap-4 flex-wrap'>

                {/* Filters Dropdown */}
                <div>
                    <label className="text-white font-semibold block mb-1">Filters</label>
                    <select
                        multiple
                        onChange={handleFilterChange}
                        className="text-black p-2 rounded-md"
                    >
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Math">Math</option>
                    </select>
                </div>

                {/* Search Bar */}
                <form className="flex items-center w-full max-w-md">
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Search for a keyword..."
                        className="w-full text-black px-4 py-2 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </form>



                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
                >
                    <h1>Logout</h1>
                </button>
            </nav>
        </>





    )
}
