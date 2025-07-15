import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState([]);
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu);


    useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024) {
        setShowMenu(false); // Set isOpen to false if desktop
        window.removeEventListener('resize', checkScreenSize); // Remove event listener
      }
    };
    // if isOpen add the event listener
    if (showMenu) {
      window.addEventListener('resize', checkScreenSize);
    }

    // Initially check if desktop
    checkScreenSize();

    // remove the event listener when isOpen is false
    return () => {
      if (showMenu) {
        window.removeEventListener('resize', checkScreenSize);
      }
    };
  }, [showMenu]); 

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

            {/* desktop */}
            <nav className='md:flex hidden bg-white p-5  flex-col h-[100vh] w-[250px] sticky left-0 top-0 justify-between items-center gap-4 flex-wrap'>
                <ul className='flex flex-col gap-4 w-full justify-center'>
                    <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/home.svg" alt="" className='p-1' /> <h1>Home</h1> </a> </li>
                    <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/search.svg" alt="" className='p-1' /> <h1>Search</h1> </a> </li>
                    <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/Notes" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/description.svg" alt="" className='p-1' /> <h1>Notes</h1> </a> </li>
                    <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/Task" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/task_alt.svg" alt="" className='p-1' /> <h1>Task</h1> </a> </li>
                    <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/archive.svg" alt="" className='p-1' /> <h1>Archive</h1> </a> </li>
                    <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/Deleted" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/delete.svg" alt="" className='p-1' /> <h1>Bin</h1> </a> </li>
                    <li>
                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
                        >
                            <h1>Logout</h1>
                        </button>
                    </li>
                </ul>




            </nav>



            {/* mobile */}

            <nav className={`md:hidden flex flex-row  backdrop-blur-lg   p-5 absolute h-[100vh] w-[250px] gap-4 flex-wrap transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>

                <div>


                    <ul className='flex flex-col gap-4 w-full justify-center'>
                        <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/home.svg" alt="" className='p-1' /> <h1>Home</h1> </a> </li>
                        <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/search.svg" alt="" className='p-1' /> <h1>Search</h1> </a> </li>
                        <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/Notes" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/description.svg" alt="" className='p-1' /> <h1>Notes</h1> </a> </li>
                        <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/Task" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/task_alt.svg" alt="" className='p-1' /> <h1>Task</h1> </a> </li>
                        <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/archive.svg" alt="" className='p-1' /> <h1>Archive</h1> </a> </li>
                        <li className='bg-[#203562] hover:bg-[#182747] transition-colors duration-150 ease-in-out p-1 rounded-lg'><a href="/Deleted" className='flex flex-row gap-2 p-1 text-white h-[30px]'> <img src="/delete.svg" alt="" className='p-1' /> <h1>Bin</h1> </a> </li>
                        <li>
                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
                            >
                                <h1>Logout</h1>
                            </button>
                        </li>
                    </ul>

                </div>
                <button onClick={toggleMenu} className={`flex flex-col gap-2 right-0 absolute transition-transform duration-300 ease-in-out   ${showMenu ? '' :  'translate-x-full' }`}>
                    <div className={`h-[4px] w-[27px] rounded-full bg-black content-none  transition-transform duration-300 ease-in-out  ${showMenu ? '-rotate-45 translate-y-[7px]' :  '' }`}></div>
                    <div className={`h-[4px] w-[27px] rounded-full bg-black content-none  transition-transform duration-300 ease-in-out  ${showMenu ? 'rotate-45 -translate-y-[5px]' : '' }`}></div>
                </button>
            </nav>
        </>








    )
}
