import React from 'react'
import { Typography } from 'antd'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Link } = Typography

const Footer = () => {
  return (
    <footer className="bg-neutral-100 py-16 border-t-4 border-[#ee4d2d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase mb-4">Customer Service</div>
            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Help Centre</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Payment Methods</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">ShopeePay</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Shopee Coins</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Order Tracking</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Free Shipping</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Return & Refund</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Shopee Guarantee</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Overseas Product</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Contact Us</Link></li>
            </ul>
          </div>

          {/* About Shopee */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase mb-4">About Shopee</div>
            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">About Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Shopee Careers</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Shopee Policies</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Shopee Mall</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Seller Centre</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Flash Deals</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Shopee Ambassador</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d]">Media Contact</Link></li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase mb-4">Payment</div>
            <div className="flex flex-wrap gap-2">
               <div className="w-14 h-8 bg-white shadow-sm border border-gray-200 flex items-center justify-center p-1"><img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="Visa" className="max-h-full max-w-full" /></div>
               <div className="w-14 h-8 bg-white shadow-sm border border-gray-200 flex items-center justify-center p-1"><img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c5e" alt="Mastercard" className="max-h-full max-w-full" /></div>
               <div className="w-14 h-8 bg-white shadow-sm border border-gray-200 flex items-center justify-center p-1"><img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="JCB" className="max-h-full max-w-full" /></div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase mb-4">Follow Us</div>
            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d] flex items-center gap-2"><FacebookOutlined /> Facebook</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d] flex items-center gap-2"><InstagramOutlined /> Instagram</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#ee4d2d] flex items-center gap-2"><LinkedinOutlined /> LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-xs text-gray-500">
             © 2024 Shopee. All Rights Reserved.
           </div>
           <div className="text-xs text-gray-500 text-center md:text-right">
             Country & Region: Singapore | Indonesia | Taiwan | Thailand | Malaysia | Vietnam | Philippines | Brazil | México | Colombia | Chile
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer