import React, { CSSProperties } from 'react'
import FadeLoader from 'react-spinners/FadeLoader'
import ClipLoader from 'react-spinners/ClipLoader'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

export const NormalLoader = () => {
  const color = 'bg-emerald-500'
  return (
    <div className='flex items-center justify-center h-screen'>
      <FadeLoader
        color={'green'}
        loading={true}
        cssOverride={override}  
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
