import React, { Component } from 'react';
import styled from '@emotion/styled';

  class Filter extends Component {
  
    componentDidUpdate(prevProps) {}

    render() {
      const { props, state, methods } = this.props;
      let classList =
        props.filterData &&
        props.filterData.map((filter, i) => (
        <a key={i} 
            onClick={()=>methods.selectedFilterFun(filter)}
            className={
            filter.selected
              ? "active"
              : ""
          }>
          <span> {filter.name}</span>
        </a>
      ));
  
      return (
        <FilterDivContainer shadow>
            <FilterContainer>{classList}</FilterContainer>
        </FilterDivContainer>
      );
    }
  }
  

const FilterDivContainer = styled.div`
display:flex;
justify-content: space-between;
flex-flow: row nowrap;
border-radius: ${props => props.shadow ? '6px 6px 0px 0px': '6px'};
background-color: #ffffff;
padding:10px;
box-shadow: ${props => props.shadow ? '0px 2px 3px 0px rgba(0,0,0,0.3)': ''};
`;

const FilterContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
a {
color: black;
cursor:pointer;
text-align: center;
text-decoration: none;
opacity: 0.4;
font-size: 14px;
font-weight: 500;
border-bottom:2px solid  #fff;
padding:5px 10px;
margin-right: 10px;
transition:0.3s;
&:hover{
color: #281045;
opacity: 1;
}
}
.active{
color: #281045;
border-bottom:2px solid  #ff9e31;
opacity: 1;
}
`;

export default Filter;