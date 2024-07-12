import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import {useEffect} from 'react';

export const Toggletheme = () => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches  
  const pageClass = document.documentElement.classList;
  useEffect(()=>{
    systemPreference && pageClass.add('dark')

  })
  const toggle= () => {
    pageClass.toggle('dark')
    }

  return <div className="hidden sm:block">
    <MoonIcon className='h-8 text-gray-100 block dark:hidden cursor-pointer' onClick={toggle} />
    <SunIcon className='h-8 text-gray-100 hidden dark:block cursor-pointer' onClick={toggle} />
  </div>

}