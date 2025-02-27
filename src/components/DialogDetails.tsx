/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'



export default function DialogDetails({ Img }: any) {
  return (
    <Dialog>
      <DialogTrigger className="bg-black/10 w-full">
        <Image
          alt='name'
          src={Img}
          width={10000}
          height={10000}
          className='w-full rounded-xl'
        />
      </DialogTrigger>
      <DialogContent className='max-w-4xl w-full max-h-[90%] h-auto'>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription className='max-h-[90%] h-auto'>
            <Image
              alt='name'
              src={Img}
              className='max-w-96 max-h-96 rounded-xl'
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
