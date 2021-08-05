import React, { PropTypes, Component } from 'react';

import { mapMarkerStyle } from './map_marker_styles.js';

export default class MapMarker extends Component {

  render() {
    return (
       <div style={mapMarkerStyle}>
          {this.props.text}
       </div>
    );
  }
}