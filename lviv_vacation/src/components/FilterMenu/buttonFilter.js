import React from 'react';

export default class ButtonFilter extends React.Component {
constructor(props) {
  super(props);

  this.clickButtonFilter = this.clickButtonFilter.bind(this);
}
 

  clickButtonFilter(e) {
    e.preventDefault();
  }

  render() {

    console.log(this.props);

    return (
        <div className="check-item filter-button-container" >
            <input type="submit" value="Filter" className="filter-button" onClick={this.clickButtonFilter}/>
        </div>
    )
  }
}


