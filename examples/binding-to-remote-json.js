import React from 'react';
import TreeView from '../src/deni-react-treeview/deni-react-treeview';

class Example extends React.Component {

  render() {

    return (
      <TreeView url="https://denimar.github.io/static-data/countries.json" />
    );

  }

}

export default Example;