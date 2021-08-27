import {useState} from 'react'
import {getGifs} from '../helpers/getGifs'
import { useEffect } from 'react';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs =>{
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);

    return state;
}
