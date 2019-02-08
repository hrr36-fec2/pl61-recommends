import axios from 'axios';
import Styles from './styles';
import Track from './track.jsx';

const {List} = Styles;

class Recommends extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: []
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

  render() {
    return (
      <List>
        {this.state.tracks.map(ele => {
          return (
            <li key={ele.track_id}>
              <Track ele={ele}/>
            </li>
          )
        })}
      </List>
    );
  }
}

export default Recommends;
