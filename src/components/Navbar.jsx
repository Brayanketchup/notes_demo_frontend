import React from 'react'



export const Navbar = () => {
    return (

        <>
            <nav className='bg-purple-600 p-5 flex flex-row justify-between items-center'>
                <button>
                    <h1>
                        Filters
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
