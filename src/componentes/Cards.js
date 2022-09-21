import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {addCharacterFavorite} from '../redux/actions/index'

function Cards({name, image, id, addCharacterFavorite}) {
  return (
    <div className="card mb-3" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to={`/character/${id}`} className="btn btn-dark">More Info</Link>
            <button onClick={() => addCharacterFavorite({name, image, id})} className="btn btn-dark mx-2" >Add to favorites</button>
        </div>
    </div>
  )
}



function mapDispatchToProps(dispatch) {
  return {
      addCharacterFavorite: (character) => dispatch(addCharacterFavorite(character))
  };
}

export default connect(null, mapDispatchToProps)(Cards);