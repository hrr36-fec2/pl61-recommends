class Recommends extends React.Component {
  constructor() {
    super();
    this.state = {
      recommends: []
    }
  }

  getRecommends() {
    axios.get('http://127.0.0.1:3003/recommends')
      .then(res => {
        this.setState({ recommends: res });
      })
      .catch(err => { console.log(err) });
  }

  render() {
    return (<div>Hello world!</div>);
  }
}

export default Recommends;
