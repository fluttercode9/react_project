import React, { Component } from 'react';
import SandwichBuilder from './components/containers/SandwichBuilder/SandwichBuilder';
import Layout from './components/Layout/Layout';
import ingredient from './components/Sandwich/SandwichIngredients/Ingredient';

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
