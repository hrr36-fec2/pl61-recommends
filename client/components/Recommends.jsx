import React from 'react';
import axios from 'axios';
import Tracks from './tracks.jsx';
import { Refresh, Container, Toggle, Header, Info, Arrow, Title, Flex } from './styles.js';

export default class Recommends extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      fade: false,
      class: 'fas fa-caret-down'
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.getRecommends = this.getRecommends.bind(this);
  }

  componentDidMount() {
    this.getRecommends();
  }

  getRecommends() {
    axios.get('http://127.0.0.1:3003/recommends/10')
      .then(res => {
        this.setState({ tracks: res.data });
      })
      .catch(err => { console.log(err); });
  }

  handleToggle() {
    if (this.state.fade) {
      this.setState({
        fade: false,
        class: 'fas fa-caret-down'
      });
    } else {
      this.setState({
        fade: true,
        class: 'fas fa-caret-up'
      });
    }
  }

  removeTrack(id) {
    let arr = this.state.tracks;

    const getSong = () => {
      return axios.get('http://127.0.0.1:3003/recommends/1')
        .then(res => {
          for (let obj of arr) {
            if (obj.track_id === res.data[0].track_id) {
              return getSong();
            }
          }

          return res;
        });
    };

    getSong()
      .then(res => {
        arr.splice(id, 1);
        arr = arr.concat(res.data);
        this.setState({ tracks: arr });
      })
      .catch(err => { console.log(err); });
  }

  render() {
    return (
      <Container>
        <Header>
          <div>
            <Toggle>
              <Flex onClick={this.handleToggle}>
                <Title>Recommended Songs</Title>
                <Arrow className={this.state.class}></Arrow>
              </Flex>
            </Toggle>
            <Info>Songs that you might like.</Info>
          </div>
          <Refresh fade={this.state.fade} onClick={this.getRecommends}>REFRESH</Refresh>
        </Header>
        <Tracks fade={this.state.fade} tracks={this.state.tracks} removeTrack={this.removeTrack}/>
      </Container>
    );
  }
}