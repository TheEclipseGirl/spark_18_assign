import React from 'react';

class RightTab extends React.Component{

    render() {
        return(
            <div className="tab-container">
                <div className="tab-container-title">
                    <p>{this.props.name}</p>
                </div>
                <div className="tab-container-delete">
                    <img onClick={()=> this.props.deleteFromMain(this.props.name)} title="click To Delete" height="20" width="20" src="https://www.flaticon.com/svg/static/icons/svg/3594/3594713.svg" alt="delete"/>
                </div>
            </div>
        );
    }
}

export default RightTab;