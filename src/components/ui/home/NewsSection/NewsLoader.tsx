import React from 'react'
import { Skeleton } from '../../skeleton'

function NewsLoader() {
  return (
    <div className="mb-6 flex flex-wrap">
    <div className="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
      <Skeleton
        className="h-56 bg-gray-300 w-full object-cover"
      />
    </div>

    <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
    <Skeleton className="bg-gray-300 w-full h-5 " />
    <div className="flex items-center space-x-5 mt-4 justify-between">
            
            <Skeleton className="bg-gray-300 w-full  h-7" />
          </div>
    </div>
  </div>
  )
}

export default NewsLoader;