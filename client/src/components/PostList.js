import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class PostList extends Component {
  state = {};
  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    return (
      <Container >
        <ListGroup style={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, .2)"}}>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name, title, message, date }) => (
              //CSS transition for list group items so they fade
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <h2 style={{backgroundColor:"#F1F1F1" , padding:'10px'}}>{title}</h2>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    style={{float:'right'}}
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  <h6 style={{float:'right', marginRight:"30px"}}>{name}</h6>
                  <div className="wrapper" style={{ marginLeft: "50px" }}>
                  
                    <h6 >{message}</h6>
                    {date}
                  </div>
                  
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

PostList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
const mapStatetoProps = (state) => ({
  item: state.item,
});
export default connect(mapStatetoProps, { getItems, deleteItem })(PostList);
