import Image from 'next/image'
import React from 'react'

interface PropsTypes{
    alt: string
}
const AvatarCard: React.FC<PropsTypes> = ({alt}) => {
  return (
    <div className=''>
        <Image src="/assets/img/avatar.png" alt={alt} className='rounded-full w-[200px] aspect-square' width={200} height={200} />
    </div>
  )
}

export default AvatarCard