import React from'react'

function Navbar() {
    return (
        <nav className='bg-red-500 text-center text-white py-3 flex items-center justify-center gap-3'>
            <span className="material-symbols-outlined text-3xl">public</span>
            <h1 className=' text-lg font-sans'>my travel journal</h1>
        </nav>
    )
}

export default Navbar