import React, { Component } from 'react';
class Search extends Component {
  render() {
    let {color,width,height} =this.props
    return (
    <svg fill={color} width={width} height={height} viewBox="0 0 1024 1024" version="1.1" ><path d="M1015.111051 937.596118 723.051275 643.612527c118.749568-156.845211 106.645902-381.213281-36.368302-524.226462-156.304905-156.304905-409.726685-156.304905-566.031591 0-156.304905 156.26909-156.304905 409.691893 0 565.996798 142.963039 142.963039 367.155101 155.137313 523.988032 36.58115l292.124244 294.01429c9.598612 9.597589 25.205055 9.597589 34.801621 0l43.546795-43.546795C1024.743432 962.799126 1024.743432 947.19473 1015.111051 937.596118zM194.804243 613.397365c-114.784256-114.783233-114.784256-300.878628 0-415.627069 114.78528-114.784256 300.841789-114.784256 415.628092 0 114.78528 114.748441 114.78528 300.843836 0 415.627069C495.646032 728.182644 309.589522 728.182644 194.804243 613.397365z"></path></svg>
    );
  }
}

export default Search;
