import axios from 'axios';

class Recommends extends React.Component {
  constructor() {
    super();
    this.state = {
      recommends: []
    }
  }

  componentDidMount() {
    this.getRecommends();
  }

  getRecommends() {
    axios.get('http://127.0.0.1:3003/recommends')
      .then(res => {
        console.log(res.data)
        // this.setState({ recommends: res });
      })
      .catch(err => { console.log(err); });
  }

  render() {
    return (<div>Hello world!</div>);
  }
}

export default Recommends;
