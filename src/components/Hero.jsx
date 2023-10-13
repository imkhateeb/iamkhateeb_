import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import Client from '../utils/Client';
import { Dna } from 'react-loader-spinner';


import { styles } from '../styles';
import { Link } from 'react-router-dom';

import { BiLinkExternal } from 'react-icons/bi';



const Hero = () => {
  const [master, setMaster] = useState(null);
  const [errorOnFetchingMaster, setErrorOnFetchingMaster] = useState(false);


  const fetchMaster = () => {
    Client.fetch(`*[_type == 'master' && username == 'iamkhateeb']`).then((data) => {
      setMaster(data[0]);
    }).catch((error) => {
      setErrorOnFetchingMaster(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    })
  }


  useEffect(() => {
    fetchMaster();
  }, [])



  return (
    <section className='w-full h-screen max-sm:h-[80vh] mx-auto'>
      <div
        className={`flex flex-row max-md:flex-col`}
      >
        <div className={`${styles.paddingX} inset-0 top-[24px] max-w-7xl mx-auto items-start gap-5`}>

          <div>

            <div className='flex flex-col justify-center items-center mt-5'>
              <img
                src={logo}
                alt='logo'
                width={250}
                height={250}
                className='rounded-full mt-24 max-sm:mt-32'
              />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Khateeb</span></h1>
              <div>
                <p className={`${styles.heroSubText} text-white`}>I am a <br className='sm:block hidden' /> full-stack web developer <br /> and a competetive programmer</p>
              </div>
            </div>
          </div>

          <div>
            {!master ? (
              <Dna
                visible={true}
                height="50"
                width="50"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                className="font-bold"
              />
            ) : (
              <Link to={master.resume} target="_blank" rel="noreferrer noopener" className='flex items-center py-2 px-4 rounded-lg cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all duration-200 ease-linear w-[170px] text-black mt-4 justify-center'>
                My Resume <BiLinkExternal color='blue' fontSize={30} className='ml-2' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero