import React from 'react'
import { getCateg, getAnime } from './../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { queryParts } from './../../constants';

function Categories(props) {
    return (
        <div>
            {props.categ.map(item =>
                <Link to='/simpleAnimeSearch'
                    onClick={
                        () => props.search(queryParts.categSearch + item.attributes.title + queryParts.mostPop)}>
                    {item.attributes.title}</Link>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categ: state.categories,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: (catName) => dispatch(getAnime(catName))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)