import React from 'react'

function Card(props) {
    return (
        <div className='flex md:flex-row flex-col gap-3 items-center mb-16 justify-center'>
            <div className='md:w-[200px] md:h-[250px] overfleow-hidden'>
                <img className='object-cover h-[250px] rounded' src={props.imageUrl} alt="" />
            </div>
            <div className='md:w-[600px] md:px-6'>
                <div className='md:text-lg text-sm flex items-center gap-2 mb-[1px]'>
                    <div className='flex items-center'>
                        <span className="material-symbols-outlined md:text-lg text-sm text-red-500">location_on</span>
                        <span className='font-normal'>{props.location}</span>
                    </div>
                    <span>
                        <a href={props.googleMapsUrl} className="text-gray-300 underline md:text-lg text-sm font-light">View on Google Maps</a>
                    </span>
                </div>
                <h2 className='md:text-3xl text-xl font-bold mb-[2px]'>{props.title}</h2>
                <p className='md:text-lg font-semibold'>{props.startDate} - {props.endDate}</p>
                <p className='md:text-lg text-sm font-extralight'>{props.description}</p>
            </div>
        </div>
    )
}

export default Card