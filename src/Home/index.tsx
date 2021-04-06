import React, { Component } from 'react';
const importAll = (requireContext: any) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./src/Icon/svg', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
export default class Home extends Component {
  render() {
    return (
      <div>
        ewHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome
      </div>
    );
  }
}
