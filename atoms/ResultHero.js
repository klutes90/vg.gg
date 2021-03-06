import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

export default class ResultHero extends React.Component {
  handleClick = () => {
    Router.push({
      pathname: '/heroes',
      asPath: `/heroes/${this.props.item}`,
      query: { hero: this.props.item },
    });
  };
  render() {
    return <Block onClick={this.handleClick}>{this.props.item}</Block>;
  }
}

const Block = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;
