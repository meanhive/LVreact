import React from 'react';
import ItemOfCatalog from '../Catalog/itemOfCatalog';
import {connect} from "react-redux";
import { deleteUserChoice } from "../../actions/actionsData";
import Navbar from '../Navbar/Navbar';

class userCatalog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            deleting: false
        };
    }

    // deleteData(id, url) {
    //     return fetch(url + '/' + id, {
    //       method: 'delete'
    //     })
    //     .then(response => {
    //         response.json();
    //         this.props.dispatch(deleteUserChoice(id));
    //     });
    //   }

    handleDelete(id){
        //set state for delete animation
        this.setState(() => {

            return {deleting: true};
          });
        console.log(this.state.deleting);
        setTimeout(()=>this.props.dispatch(deleteUserChoice(id)), 1000);
        setTimeout(()=>this.setState((state) => {
            return {deleting: false};
          }), 2000);
    }

    render() {
        return (
            <>
                <Navbar />

                <div className="choice-back-color">
                    <div className="wave-block">
                        <div className="hotels-offers">
                            {this.props.userItems.map(i => (
                                <ItemOfCatalog key={i.id} id={i.id} description={i.description} destination={i.destination} smoking={i.smoking} WiFi={i.WiFi} rating={i.rating} addEvent={() => this.handleDelete(i.id)} deleting={this.state.deleting} selected={[this.props.deleting && 'is-delete'].join(' ')}/>     
                            ))
                            }
                        
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => ({
    userItems: state.data.userItems
});

export default connect(mapStateToProps)(userCatalog);
