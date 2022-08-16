/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 w-full border border-b-1'>
      <div className='container max-w-5xl'>
        <div className='flex flex-row items-center py-1'>
          <div className='basis-1/3'>
            <img 
              src={'images/Instagram_logo.svg'}
              alt="Logo" 
              width="120"
            />
          </div>
          <div className='basis-1/3'>
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input class="placeholder:text-slate-500 block bg-neutral-200 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm" placeholder="검색" type="text" name="search"/>
          </label>
          </div>
          <div className='basis-1/3'>
            <ul className='flex flex-row items-center justify-end p-2 space-x-4 text-2xl'>
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
                    className='w-6 rounded-full'
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

