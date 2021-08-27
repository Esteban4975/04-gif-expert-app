/*import React,{useState,useEffect} from 'react';
import { getGifts } from '../helpers/getGifs';*/
import {GifGridItem} from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    const {data:images,loading} = useFetchGifs(category);
    
    /*
    useEffect(()=>{
        getGifts(category)
            .then( setImages );
    },[category]);      // los [] indican que solo se ejecutara la función getGifts la primera vez que se renderiza
*/

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="card animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map((img)=>(
                        <GifGridItem 
                            key={img.id}
                            {...img}/>
                    ))
                }
            </div>
        </>
    )
}
