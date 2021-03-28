import React from 'react';

const CurrentTab = (props) => {

    return (
        <div className="px-3 px-lg-5">
            {props.children}
        </div>
    );
};

export default CurrentTab;
