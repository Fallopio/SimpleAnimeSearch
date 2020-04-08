import React, { useEffect } from 'react'
import { toggleFav, getTitle } from './../../actions/actions';
import { connect } from 'react-redux';
import { setLocalStr } from '../../utility';
import { Link } from 'react-router-dom';
import './Favs.css'

function FavoriresList(props) {
    useEffect(() => setLocalStr(props.favIds, props.favorites))

    return (
        <div className='Favs'>
            {props.favorites.map((item) =>
                <div className='Favs__card'>
                    <i className="fas fa-star" style={{ color: 'yellow' }} onClick={() => {
                        props.toggleFav(item.id, item)
                    }
                    }></i>
                    <Link className='Favs__card__link' key={item.id} to={'/simpleAnimeSearch/' + item.id}>
                        <h3 className='cardH' onClick={() => props.getTit(item.id)}>
                            {item.attributes.canonicalTitle}
                        </h3>
                    </Link>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: [...state.favorites.favs],
        favIds: [...state.favorites.favIds]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFav: (id) => dispatch(toggleFav(id)),
        getTit: (id) => dispatch(getTitle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriresList)