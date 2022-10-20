import React, { CSSProperties } from 'react'
import { ClipLoader } from 'react-spinners'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  background:"green"
};


export default function AuthLoader() {
  const color = 'bg-emerald-500'
  return (
    <div className='flex items-center justify-center h-screen'>
      <ClipLoader
        color={'green'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
