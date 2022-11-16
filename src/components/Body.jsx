import React from 'react'
import Card from './Card'
import data from './data'

function Body() {
    const cardData = data.map( data => <Card key={data.id} {...data} />)
    return (
        <div className='flex p-10 flex-col justify-evenly h-full'>
            {cardData}
        </div>
    )
}

export default Body