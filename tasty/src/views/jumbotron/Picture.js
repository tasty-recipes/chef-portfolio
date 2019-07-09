import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`

const Picture = () => {
    return (
        <div>
             <Img src='https://source.unsplash.com/featured/?fresh,food' alt="" />
        </div>
    )
}

const mapStateToProps = state => ({
    pic: state.pic,
    isPicLoading: state.isPicLoading,
})

export default connect(mapStateToProps, {})(Picture);