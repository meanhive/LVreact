import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';

import { connect } from 'react-redux';
import {changeCheckboxAll, changeCheckboxHotel, changeCheckboxMotel, changeCheckboxHostel, changeCheckboxFlat} from '../../actions/actionFilterMenu';



export default class FilterMenu extends React.Component {

  
  //  
  render() {

    // console.log("filter menu clickecd", this.props);
    let firstField, secondField, thirdField, fourtField, fithField;
    const dispatch = this.props.dispatch;
    // console.log("Dispach --->", dispatch);
    // console.log(this.props);
    let smallScreenClass = `preferences`;


    if(this.props.smallscreen) {
      smallScreenClass = `preferences ${this.props.smallscreen}`;
    }

    const {checkAll, checkFlat, checkHostel, checkHotel, checkMotel} = this.props;
    // console.log(this.props);


    if(this.props.hotelClicked) {
      firstField = 'Choose all';
      secondField = 'Hotel';
      thirdField = 'Motel';
      fourtField = 'Hostel';
      fithField = 'Flat';
      
    } else if(this.props.restClicked) {
      firstField = 'Choose all';
      secondField = 'Restaurants';
      thirdField = 'Cafes';
      fourtField = 'Snack-bars';
      fithField = 'Pubs'

    } else if(this.props.entClicked) {
      firstField = 'Choose all';
      secondField = 'Cinema';
      thirdField = 'Theatre';
      fourtField = 'Active Rest';
      fithField = 'Passive Rest'
    }

    return (
      <div className={smallScreenClass}>
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>

                <ItemForCheck content={firstField} checked={checkAll} dispatch={dispatch} action={changeCheckboxAll} propCheck={this.props}/>
                <ItemForCheck content={secondField}  checked={checkHotel} dispatch={dispatch} action={changeCheckboxHotel} propCheck={this.props}/>
                <ItemForCheck content={thirdField}  checked={checkMotel} dispatch={dispatch} action={changeCheckboxMotel} propCheck={this.props}/>
                <ItemForCheck content={fourtField} checked={checkHostel} dispatch={dispatch} action={changeCheckboxHostel} propCheck={this.props}/>
                <ItemForCheck content={fithField} checked={checkFlat} dispatch={dispatch} action={changeCheckboxFlat} propCheck={this.props}/>
                {/* <hr style={{color: "red",
                border: "1px solid red",
                width: "100%"}}/>
                <ItemForCheck content="sortByincrease" checked={checkFlat} dispatch={dispatch} action={changeCheckboxFlat}/>
                <ItemForCheck content="sortbYLOWER" checked={checkFlat} dispatch={dispatch} action={changeCheckboxFlat}/> */}
            </div>
            <ButtonFilter checkedItems={this.props}/>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    checkAll: state.filter.checkAll,
    checkHotel: state.filter.checkHotel,
    checkMotel: state.filter.checkMotel,
    checkHostel: state.filter.checkHostel,
    checkFlat: state.filter.checkFlat,
    hotelClicked: state.click.clickedHotels,
    restClicked: state.click.clickedRestaraunts,
    entClicked: state.click.clickedEntertainment
  }
}



const WrapperComponent = connect(mapStateToProps)(FilterMenu)
export {WrapperComponent};