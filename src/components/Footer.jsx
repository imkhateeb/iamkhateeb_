import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin} from 'react-icons/bs';
import {FaXTwitter} from 'react-icons/fa6';
import {FaGithubSquare} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {SiCodechef} from 'react-icons/si';
import {SiLeetcode} from 'react-icons/si';
import {SiCodeforces} from 'react-icons/si';
import {BsHeartFill} from 'react-icons/bs';

export default function Footer() {
   return (
      <div className='w-full flex flex-col items-center justify-center bg-gradient-to-t from-gray-800 to-black text-white py-5 px-10 max-sm:px-2'>
         <div className='flex items-center'>
            <p className='sm:mr-2 text-gray-300 max-sm:text-center sm:text-lg'>CONNECT ME AT :</p>
            <div className='flex gap-4 max-sm:gap-3 justify-evenly my-5 ml-2'>
               <Link target='_blank' to="https://www.linkedin.com/in/iamkhateeb/">
                  <BsLinkedin fontSize={30} color='blue' />
               </Link>

               <Link target='_blank' to="https://twitter.com/iamkhateeb_?t=JN7rdnWAOIF0VF2VazvqTw&s=09">
                  <FaXTwitter fontSize={30}  />
               </Link>

               <Link target='_blank' to="https://github.com/imkhateeb">
                  <FaGithubSquare fontSize={30}  />
               </Link>

               <Link target='_blank' to="https://www.instagram.com/iamkhateeb_/?utm_source=qr&igshid=MThlNWY1MzQwNA%3D%3D">
                  <AiFillInstagram fontSize={30} color='#ED008C'  />
               </Link>
            </div>
         </div>
         <div className='flex items-center'>
            <p className='sm:mr-2 text-gray-300 max-sm:text-center sm:text-lg'>I CODE AT :</p>
            <div className='flex gap-4 max-sm:gap-3 justify-evenly my-5 sm:ml-2'>
               <Link target='_blank' to="https://www.codechef.com/users/iamkhateeb_786">
                  <SiCodechef fontSize={30} className='text-yellow-500'  />
               </Link>

               <Link target='_blank' to="https://leetcode.com/iamkhateeb_/">
                  <SiLeetcode fontSize={30} color='red'  />
               </Link>

               <Link target='_blank' to="https://codeforces.com/profile/mdkhateebur.2022ug3006">
                  <SiCodeforces fontSize={30} className='text-red-400' />
               </Link>
            </div>
         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='text-gray-400'>Email me : <span className='text-gray-200 font-bold'>luckykhateeb2@gmail.com</span></p>
            <p className='text-gray-400'>Contact me : <span className='text-gray-200 font-bold'>+91 9905522972</span></p>
         </div>

         <div className='flex items-center justify-center my-5'>
            <p className='flex items-center'>Made with <BsHeartFill fontSize={20} color='red' className='mx-2'/>in IIIT Ranchi</p>
         </div>
      </div>
   )
}
