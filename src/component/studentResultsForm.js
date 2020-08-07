import React from 'react';

function ResultsPage(props) {

    const blockStyle = {
        width: "100%",
        display: "block"
    };
    const labelStyle = {
        width: "100%"
    };
    const formContent = <>
        <div>
            <h2>Your details are displayed below</h2>
            <div style={ blockStyle }>
                <label style={ labelStyle }>{ props.location.state.name }</label>
            </div>
            <div style={ blockStyle }>
                <label style={ labelStyle }>{ props.location.state.lastName }</label>
            </div>
        </div>
    </>;
    
    return formContent;
}

export default ResultsPage;