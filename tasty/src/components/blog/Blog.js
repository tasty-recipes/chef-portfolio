import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Div = styled.div`
    width: 32%;
    margin: 10px;
    border: 1px dotted gray;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 35px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 35px 0px rgba(0,0,0,0.75);
`

const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    align-content: center;
`

const Title = styled.h3`
    margin: 10px;

`

const Img = styled.img`
    border-radius: 10px;
    width: 50%;
    padding: 20px;
`

const Button = styled.button`
    background-color: steelblue;
    border-radius: 10px;
    font-size: 20px;
    -webkit-box-shadow: 10px 10px 18px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 18px -9px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 18px -9px rgba(0,0,0,0.75);
`

class Blog extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Main>
                    {this.props.blogs.map(blog => {
                        return (
                            <Div key={blog.idMeal}>
                                <div>
                                    <Img src={blog.strMealThumb} alt={blog.strMeal}/>
                                </div>
                                <Title>{blog.strMeal}</Title>
                            </Div>
                        )
                    })}
                </Main>
                <Button>Load More</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    blogs: state.blogs,
})

export default connect(mapStateToProps, {})(Blog);