import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { DrawerDemo } from './DrawerDemo'
import { SearchAndmenu } from './SearchAndmenu'

export default function Nav() {
    return (
        <div className='flex justify-between items-center w-full py-2  '>
            <div>
                <Link href="/" className={`text-3xl font-normal flex justify-start items-center w-full text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100`}>
                Lexnes
                </Link>
            </div>
            <div className='flex justify-end items-center w-full gap-2'>
                <ModeToggle />
                <SearchAndmenu />
                <DrawerDemo />
            </div>
        </div>
    )
}
