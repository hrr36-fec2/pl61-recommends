import axios from 'axios';

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
      <ul>
        {this.state.tracks.map((ele, i) => {
          return (
            <li key={i}>
              <div>{ele.title}</div>
              <div>{ele.artist + '\ \u00B7\ ' + ele.album}</div>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Recommends;
