// Original
import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content w-full h-full">
            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-75">
                    <li><a>All Collection</a></li>
                    <li><a>Latest Books</a></li>
                    <li><a>Health Care</a></li>
                    <li><a>Educational</a></li>
                    <li><a>General Knowledge</a></li>
                    <li><a>Entertainment</a></li>
                    <li><a>Inspirational</a></li>
                    <li><a>Business</a></li>
                    <li><a>For Kids</a></li>
                    <li><a>News Papers</a></li>
                </ul>
                </div>
                <div><div className='text-4xl text-center'>
                AmsBooks
                </div></div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-3xl">Home</a>
                <a className="btn btn-ghost text-3xl">About</a>
                <a className="btn btn-ghost text-3xl">Contact</a>
                {/* <Link to="/" className="btn btn-ghost text-3xl">Home</Link>
                <Link to="/about" className="btn btn-ghost text-3xl">About</Link>
                <Link to="/contact" className="btn btn-ghost text-3xl">Contact</Link> */}
            </div>
            <div className="navbar-end">
                <button className="btn rounded-full">Logout</button>
            </div>
        </div>
    );
}



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing

// export default function Navbar() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status

//     // Function to handle logout
//     const handleLogout = () => {
//         // Perform logout operation here
//         setIsLoggedIn(false);
//     };

//     return (
//         <div className="navbar bg-neutral text-neutral-content w-full h-full">
//             <div className="navbar-start ">
//                 {isLoggedIn ? (
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//                         </div>
//                         <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-75">
//                             <li><Link to="/">All Collection</Link></li>
//                             <li><Link to="/latest-books">Latest Books</Link></li>
//                             <li><Link to="/health-care">Health Care</Link></li>
//                             <li><Link to="/educational">Educational</Link></li>
//                             <li><Link to="/general-knowledge">General Knowledge</Link></li>
//                             <li><Link to="/entertainment">Entertainment</Link></li>
//                             <li><Link to="/inspirational">Inspirational</Link></li>
//                             <li><Link to="/business">Business</Link></li>
//                             <li><Link to="/for-kids">For Kids</Link></li>
//                             <li><Link to="/news-papers">News Papers</Link></li>
//                         </ul>
//                     </div>
//                 ) : null}
//                 <div><div className='text-4xl text-center'>
//                     AmsBooks
//                 </div></div>
//             </div>
//             <div className="navbar-center">
//                 {isLoggedIn ? (
//                     <>
//                         <Link to="/" className="btn btn-ghost text-3xl">Home</Link>
//                         <Link to="/about" className="btn btn-ghost text-3xl">About</Link>
//                         <Link to="/contact" className="btn btn-ghost text-3xl">Contact</Link>
//                     </>
//                 ) : null}
//             </div>
//             <div className="navbar-end">
//                 {isLoggedIn ? (
//                     <button className="btn rounded-full" onClick={handleLogout}>Logout</button>
//                 ) : (
//                     // Render login and sign up buttons if user is not logged in
//                     <>
//                         <Link to="/login" className="btn rounded-full">Login</Link>
//                         <Link to="/signup" className="btn rounded-full">Sign Up</Link>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }



// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//     return (
//         <div className="navbar bg-neutral text-neutral-content w-full h-full">
//             <div className="navbar-start ">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-75">
//                         <li><a>All Collection</a></li>
//                         <li><a>Latest Books</a></li>
//                         <li><a>Health Care</a></li>
//                         <li><a>Educational</a></li>
//                         <li><a>General Knowledge</a></li>
//                         <li><a>Entertainment</a></li>
//                         <li><a>Inspirational</a></li>
//                         <li><a>Business</a></li>
//                         <li><a>For Kids</a></li>
//                         <li><a>News Papers</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <div className='text-4xl text-center'>
//                         AmsBooks
//                     </div>
//                 </div>
//             </div>
//             <div className="navbar-center">
//                 <Link to="/" className="btn btn-ghost text-3xl">Home</Link>
//                 <Link to="/about" className="btn btn-ghost text-3xl">About</Link>
//                 <Link to="/contact" className="btn btn-ghost text-3xl">Contact</Link>
//             </div>
//             <div className="navbar-end">
//                 <button className="btn rounded-full">Logout</button>
//             </div>
//         </div>
//     );
// }
