import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios';

export class singlePost extends Component {
    state = {
        post: null
    }
    componentDidUpdate = (prevProps) => {
        if (this.props.id && this.props.id !== prevProps.id) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
                .then((res) => {
                    this.setState({ post: res.data })
                })
        }
    }
    renderPost = () => {
        if (this.state.post) {
            return (
                <Modal
                    show={this.props.showModel}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={this.props.closeModelHandler}
                    animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h3> {this.state.post.title}</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.state.post.body}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModelHandler}>Close</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
    }
    render() {
        return (
            <>
                {this.renderPost()}
            </>
        )
    }
}
export default singlePost