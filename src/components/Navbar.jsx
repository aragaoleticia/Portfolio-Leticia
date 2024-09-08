import React, { useState } from 'react';
import { ContactItem } from '../data/data';
import DownloadIcon from '../assets/icons8-download.png';
import ResumePDF from '../assets/leticia-aragao-resume.pdf';

export default function Navbar() {

    const [copied, setCopied] = useState(false);

    setTimeout(() => {
        setCopied(false)
    }, 3000);

    const handleEmailCLick = (email) => {
        navigator.clipboard.writeText(email);
        setCopied(true);
    }

  return (
    <div className='flex gap-6 mt-6 justify-center'>
        <a
            href={`${ResumePDF}?dl=`}
            download
            onClick={(event) => event.stopPropagation()}
            className='flex items-center text-gray-800 hover:scale-105 transition-transform duration-300' 
        >
            <img src={DownloadIcon} className='w-6 mr-2' alt='Download icon'/>
            CV
        </a>
      {ContactItem.map(({id, name, link, email, icon}) => (
        <div key={id}>
            {email ? (
                <button
                    onClick={() => handleEmailCLick(email)}
                    className='flex items-center text-gray-800 hover:scale-105 transition-transform duration-300'
                >
                    <img src={icon}  className='w-6 mr-2' alt={`${name} icon`}/>
                    {name}
                </button>
            ) : (
                <a
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center text-gray-800 hover:scale-105 transition-transform duration-300'
                >
                    <img src={icon} alt={`${name} icon`} className='w-6 mr-2'/>
                    {name}
                </a>
            )
            }

            {email && copied && (
                <div className='text-center absolute top-16 bg-gray-100 text-gray-800 px-2 py-1 rounded-md shadow-md'>
                    Email copied
                </div>
            )}
        </div>
      ))}
    </div>
  )
}
