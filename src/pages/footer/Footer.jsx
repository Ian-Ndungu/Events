import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <p>Kenya, Nairobi</p>
            <p>Email: eventy@gmail.com</p>
            <p>Phone: +254 717393483</p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="/user-layout/event-planning" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="/user-layout/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/user-layout/blog" className="text-gray-400 hover:text-white">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/user-layout/contactus" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FacebookOutlined /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white"><TwitterOutlined /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white"><InstagramOutlined /></a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><LinkedinOutlined /></a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-4">FAQ</h5>
            <div className="space-y-4">
              <div className="mb-4">
                <h6 className="text-gray-400 font-bold">What are your payment options?</h6>
                <p className="text-gray-400">We accept Visa, Mastercard, and Cash.</p>
              </div>
              <div className="mb-4">
                <h6 className="text-gray-400 font-bold">Do you offer refunds?</h6>
                <p className="text-gray-400">Yes, we offer refunds within 30 days of purchase.</p>
              </div>
              <div className="mb-4">
                <h6 className="text-gray-400 font-bold">How can I contact customer support?</h6>
                <p className="text-gray-400">You can reach our customer support team at support@eventy.com.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-800 pt-6 mt-6">
          <p className="text-sm">&copy; 2024 Eventy Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
