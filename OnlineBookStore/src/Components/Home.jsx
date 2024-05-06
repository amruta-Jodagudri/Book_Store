import React from 'react';

export default function Home() {
    return (
        <div>
        <div className="hero w-full h-full image-full bg-neutral">
            <figure><img src="https://img.freepik.com/free-photo/close-up-opened-book-library_23-2147845965.jpg?w=870&t=st=1711862271~exp=1711862871~hmac=445a4453162db2f9793d8e40ef584abc94659249c984dedeca250d274a3045f3" className='blur-sm' alt="img1" /></figure>
            <div className="hero-content text-center">
                <div className="max-w-lg">
                <h1 className="text-6xl text-white font-bold">Ams Book Store</h1>
                <p className="py-6 text-white text-2xl">Every book in a bookstore is a fresh beginning. Every book is the next iteration of a very old story. Every bookstore, therefore,
                                is like a safe-deposit box for civilization.</p>
                <div className='pr-24 pl-28'><label className="input input-bordered flex items-center">
                <input type="text" className="grow" placeholder="Search Name,Author" />
                <span className="badge badge-info">Search</span>
                </label></div>
                </div>
            </div>
        </div>
        </div>
    );
}
