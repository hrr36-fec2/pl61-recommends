import React from 'react';
import { Item, Wrap, Title, Icon, Info, Button } from './styles.js';

export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'fas fa-music'
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleAdd = this.handleAdd.bind(this, this.props.id);
  }

  handlePlay() {
    console.log('PLAY');
  }

  handleAdd() {
    this.props.removeTrack(this.props.id);
  }

  render() {
    return (
      <Item onMouseEnter={() => { this.setState({ class: 'fas fa-play' }); }} onMouseLeave={() => { this.setState({ class: 'fas fa-music' }); }}>
        <Icon className={this.state.class} onClick={this.handlePlay}></Icon>
        <Wrap>
          <Title>{this.props.ele.title}</Title>
          <Info>{this.props.ele.artist + ' \u00B7 ' + this.props.ele.album}</Info>
        </Wrap>
        <Button onClick={this.handleAdd}>ADD</Button>
      </Item>
    );
  }
}