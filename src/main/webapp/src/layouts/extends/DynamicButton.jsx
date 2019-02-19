import React from 'react';

class DynamicButton extends React.Component {

    render() {
        const { meta, has } = this.props;
        if(meta.btnRights) {
          return meta.btnRights.get(has) ? this.props.children : null;
        }
        return null;
    }

}

export default DynamicButton;


