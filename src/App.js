import React, { Component } from 'react';
import SandwichBuilder from './components/containers/SandwichBuilder/SandwichBuilder';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <SandwichBuilder/>
          
        
        
        </Layout>
      </div>
    );
  }
}

export default App;
