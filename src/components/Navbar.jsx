import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); 
  };

    return (

        <>
            <nav className='bg-purple-600 p-5 flex flex-row justify-between items-center'>
                <button>
                    <h1>
                        Filters
                    </h1>
                </button>
                <button onClick={handleLogout} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
                    <h1>
                        logout
                    </h1>
                </button>


                <form>
                    <textarea name="searchBar" id="searchBar" placeholder='Search for a keyword...' className=' text-black resize-none rounded-full border-[1px] border-black justify-center content-center px-2 '></textarea>
                </form>

            </nav>

            {/* <div>
                <ul>
                    <li></li>
                </ul>
            </div> */}
        </>





    )
}
