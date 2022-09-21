import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getCharacterDetail} from '../redux/actions/index'

function CharacterDetail() {

    let { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.characterDetail)

    useEffect(() => {
        dispatch(getCharacterDetail(id));
    }, [])

    useEffect(() => {
        dispatch(getCharacterDetail(id));
    }, [detail])

    return (
        <div>
            <h2 className='text-center'>{detail.name}</h2>
            <img src={detail.image} className="rounded mx-auto d-block" alt={detail.name}></img>
            <div className='text-center fw-bold my-2'>
                <p>{`Gender: ${detail.gender}`}</p>
                <p>{`Status: ${detail.status}`}</p>
                <p>{`Specie: ${detail.species}`}</p>
                <p>{`Type: ${detail.type}`}</p>
                <p>Origin: {detail.origin !== undefined ? detail.origin.name : "loading"}</p>
                <p>Location: {detail.location !== undefined ? detail.location.name : "loading"}</p>
            </div>
            
        </div>
      )
  
}

export default CharacterDetail