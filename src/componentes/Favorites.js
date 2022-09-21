import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteCharacterFavorite} from '../redux/actions/index'
import { Link } from 'react-router-dom'

function Favorites() {

  const favorites = useSelector(state => state.favorites);

  const dispatch = useDispatch();

  return (
    <div className='container-sm d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 my-3'>
      {favorites.map(f => 
      <div key={f.id} className="card mb-3" style={{width: "18rem"}}>
        <img src={f.image} className="card-img-top" alt={f.name} />
        <div className="card-body">
            <h5 className="card-title">{f.name}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to={`/character/${f.id}`} className="btn btn-dark">More Info</Link>
            <button onClick={() => dispatch(deleteCharacterFavorite(f.id))} className="btn btn-dark m-2" >Delete favorite</button>
        </div>
      </div>)}
    </div>
  )
}

export default Favorites