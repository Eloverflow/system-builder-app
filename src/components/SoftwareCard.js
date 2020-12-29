import React from 'react';

class SoftwareCard extends React.Component{
    render(){
        return(
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{this.props.software.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Add software</a>
                </div>
            </div>
        );
    }
}

export default SoftwareCard