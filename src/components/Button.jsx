import React from 'react'

const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border 
      font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'}
      ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}` :
       'bg-red-500  text-white border-red-500'} `}>
         {label}
          {iconUrl && <img src={iconUrl} alt="arrow right icon" className='ml-2 rounded-full w-5 h' />}
    </button>
  )
}

export default Button