import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect} from 'react-redux';
import {addItem }from '../actions/itemActions'
import { Component } from 'react';

class ItemModal extends Component {
    state = { 
        modal: false,
        name: '',
        title: '',
        message: ''
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            title: this.state.title,
            message: this.state.message

        }

        //Add item via addItem action
        this.props.addItem(newItem);

        //Close Modal
        this.toggle();
    }
    render() {
        return (
            <div>
                <Button
                color='success'
                style={{marginBottom:'2rem', boxShadow:"3px 3px 3px 3px rgba(0, 0, 0, .2)"}}
                onClick={this.toggle}>
                    Add Post
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                    Add A Post
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Name</Label>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add your name"
                            onChange={this.onChange}>
                            </Input>
                            <Input
                            type="text"
                            name="title"
                            id="item"
                            placeholder="Add title"
                            onChange={this.onChange}>
                            </Input>
                            <Input
                            type="textarea"
                            name="message"
                            id="item"
                            placeholder="Add a detailed message"
                            onChange={this.onChange}>
                            </Input>
                            <Button
                            color='success'
                            style={{marginTop:'2rem'}}
                            block
                            >
                                Add Post
                            </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps, {addItem})(ItemModal)