import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-2">
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Street, City, Country</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer