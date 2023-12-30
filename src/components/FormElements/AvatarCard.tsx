import React from 'react'
import Image from 'next/image'
import { DUMMY_AVATAR_PATH } from '@/data/dummyUsers'
interface PropsTypes{
    alt: string
}
const AvatarCard: React.FC<PropsTypes> = ({alt}) => {
  return (
    <div className=''>
        <Image src={DUMMY_AVATAR_PATH} alt={alt} className='rounded-full w-[200px] aspect-square' width={200} height={200} />
    </div>
  )
}

export default AvatarCard