import axios from 'axios';
import Tracks from './tracks.jsx';
import { Refresh, Container, Toggle, Header, Info, Arrow, Title } from './styles.js';

export default class Recommends extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      fade: false,
      class: "fas fa-caret-down"
    }
  }

  componentDidMount() {
    this.getRecommends();
  }

  getRecommends() {
    axios.get('http://127.0.0.1:3003/recommends')
      .then(res => {
        this.setState({ tracks: res.data });
      })
      .catch(err => { console.log(err); });
  }

  handleToggle() {
    if (this.state.fade) {
      this.setState({
        fade: false,
        class: "fas fa-caret-down"
      });
    } else {
      this.setState({
        fade: true,
        class: "fas fa-caret-up"
      });
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <div>
            <Toggle onClick={this.handleToggle.bind(this)}>
              <Title>Recommended Songs</Title>
              <Arrow className={this.state.class}></Arrow>
            </Toggle>
            <Info>Much lorem. Such ipsum.</Info>
          </div>
          <Refresh fade={this.state.fade} onClick={this.getRecommends.bind(this)}>REFRESH</Refresh>
        </Header>
        <Tracks fade={this.state.fade} tracks={this.state.tracks}/>
      </Container>
    );
  }
}