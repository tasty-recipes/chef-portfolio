import React from 'react';
import { connect } from 'react-redux';

class Blog extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                {this.props.blogs.map(blog => {
                    return (
                        <div key={blog.idMeal}>
                            <img src={blog.strMealThumb} alt={blog.strMeal}/>
                            <h3>{blog.strMeal}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    blogs: state.blogs,
})

export default connect(mapStateToProps, {})(Blog);