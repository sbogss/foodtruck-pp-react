import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class MenuModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,

        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    //something might ned to go here

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <i className=//find font awesome thing for a menu
                    />
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Online Order</ModalHeader>
                    <ModalBody>
                        <LocalForm> <-- Not Sure If we Need Local from
                            <div className="form-group">
                                <Label htmlFor="bowl" md={2}>Choose Your Own Bowl</Label>
                                    <Control.select model=''>
                                        <option>Select..</option>
                                        <option>Farfalle (Bowtie)</option>
                                        <option>Conchigilie (Shell)</option>
                                        <option>Fusilli(Rotini)</option>
                                    </Control.select> 
                            </div>
                            <div className="form-group">
                                <Label htmlFor="veggie" md={2}>Veggies to add on:</Label>
                                    <Control.select model=''> <-- Need a checkbox for this
                                        <option>Asparagus</option>
                                        <option>Broccoli</option>
                                        <option>Mushrooms</option>
                                        <option>Onion</option>
                                        <option>Peas</option>
                                        <option>Spinach</option>
                                        <option>Tomatoes</option>
                                        <option>Zucchini</option>
                                    </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="protein" md={2}>Choose your protein:</Label>
                                    <Control.select model=''>
                                        <option>Grilled Tofu</option>
                                        <option>Grilled Tempeh</option>
                                    </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="sauce" md={2}>Pick your sauce:</Label>
                                    <Control.select model=''>
                                        <option>Creamy Tomato</option>
                                        <option>Balsamic Blend</option>
                                        <option>Avocado Pesto</option>
                                        <optoin>Creamy Garlic</optoin>
                                    </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="spice" md={2}>Choose your spice level!</Label>
                                    <Control.select model=''>
                                        <option>No Spice</option>
                                        <option>Kinda Spicy</option>
                                        <option>HOT HOT HOT</option>
                                    </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="bowl" md={2}>Choose a signature bowl:</Label>
                                    <Control.select model=''>
                                        <option>Veg Out</option>
                                        <option>Mushroom Madness</option>
                                        <option>Go Green</option>
                                        <option>Spicy Tomato</option>
                                    </Control.select>
                            </div>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }





}

export default orderingMenu;