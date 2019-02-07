import Styles from './styles';

const {Item, Wrap, Title, Icon, Info, Add} = Styles;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'fas fa-music'
    };
  }

  render() {
    return (
      <Item onMouseEnter={() => {this.setState({ class: 'fas fa-play' })}} onMouseLeave={() => {this.setState({ class: 'fas fa-music' })}}>
        <Icon className={this.state.class}></Icon>
        <Wrap>
          <div>
            <Title>{this.props.ele.title}</Title>
            <Info>{this.props.ele.artist + '\ \u00B7\ ' + this.props.ele.album}</Info>
          </div>
          <Add>ADD</Add>
        </Wrap>
      </Item>
    );
  }
}