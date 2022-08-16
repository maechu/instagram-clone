/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='sticky top-0 w-full border border-b-1 z-50'>
      <div className='container max-w-5xl'>
        <div className='flex flex-row py-1 items-center'>
          <div className='basis-1/3'>
            <img 
              src={'images/Instagram_logo.svg'}
              alt="Logo" 
              width="120"
            />
          </div>
          <div className='basis-1/3'>
            <div className='relative'>
              <FontAwesomeIcon 
                icon="magnifying-glass" 
                className='absoulute left-3 top-3 text-gray-300' 
              />
              <input
                type="text" 
                className='p-2 bg-gray-100 rounded-lg w-80 pl-10 align-middle focus:outline-0 placeholder:font-light'/>
            </div>
          </div>
          <div className='basis-1/3'>
            <ul className='flex flex-row space-x-4 p-2 text-2xl justify-end items-center'>
              <li>
                <a className='cursor-pointer'>
                  <FontAwesomeIcon icon="house" />
                </a>
              </li>
              <li>
                <a className='cursor-pointer'>
                  <FontAwesomeIcon 
                    icon={['far', 'comment-dots']} />
                </a>
              </li>
              <li>
                <a className='cursor-pointer'>
                  <FontAwesomeIcon 
                    icon={['far', 'square-plus']} />
                </a>
              </li>
              <li>
                <a className='cursor-pointer'>
                  <FontAwesomeIcon 
                    icon={['far', 'compass']} />
                </a>
              </li>
              <li>
                <a className='cursor-pointer'>
                  <FontAwesomeIcon 
                    icon={['far', 'heart']} />
                </a>
              </li>
              <li>
                <a className='cursor-pointer'>
                  <img 
                    className='rounded-full w-6'
                    src={'images/smiley.svg'} 
                    alt="User Profile" 
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

