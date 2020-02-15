import React, { Component } from 'react';
import ReactForceGraph2D from 'react-force-graph-2d';
import { genRandomTree } from '../datasets/randomData.js';

class ForceGraph2D extends Component {
  constructor(props) {
		super(props);
		this.state = {
			gridRow: 2 / -1
		}
	}

  render() {
    return (
      <div>
        <ReactForceGraph2D
          graphData={genRandomTree(13)}
          width={600}
          height={500}
          linkColor={link => 'gray'}
          linkCurvature={0.275}
        />
      </div>
    );
  }

}

export default ForceGraph2D;