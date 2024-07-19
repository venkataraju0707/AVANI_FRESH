import React from 'react';
import Image from '../assets/Image.jpg'; // Adjust the path as necessary

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Logo */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <img src={Image} alt="Logo" className="h-12" />
          </div>
          {/* Navigation Links */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul>
              <li><a href="/about" className="text-gray-400 hover:text-gray-100">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-gray-100">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-gray-100">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-gray-100">Terms of Service</a></li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p>Email: VENKATRAJU695@GMAIL.COM</p>
            <p>Phone: 9014813438</p>
            <p>Address: KOTTA ISUKAPALLI</p>
          </div>
          {/* Social Media Links */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-100">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-100">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-100">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
        {/* Copyright Information */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
