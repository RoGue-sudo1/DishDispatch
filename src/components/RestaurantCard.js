import {CDN_URL} from '../Utils/constants'

const RestaurantCard =({resInfo})=>{

    const {
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRatingString,
        sla
    } = resInfo

    return (
        <div className='m-4 w-64 '>
           
            <div className=''>
                <img src={CDN_URL+cloudinaryImageId} className='py-2 rounded-3xl'/>
            </div>
            <div >
                
                
                <div className='font-bold text-lg'>{name} </div>
                <span className='flex justify-between'>
                <span className='font-semibold'>✳️{avgRatingString} - {costForTwo}</span>
                
                </span>
            </div>
            <div className='font-semibold'>
                {sla.slaString}
            </div>
        </div>
    )
}

export default RestaurantCard