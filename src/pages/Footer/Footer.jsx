/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 my-4">
            <div className="w-full max-w-screen-xl mx-auto py-2 md:py-4 px-8 md:px-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">AvaGoods</a>. All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
    </footer>
  )
}

export default Footer
