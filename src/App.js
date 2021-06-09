import React from 'react';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Section1 from './components/section1'
import Cardsection from './components/cardsection'
import Cards from './components/cards'
import Profile from './components/profile'
import About from './components/about'
import Form from './components/form'

function App() {
  return (
  <>
      <Navbar />

    <div className="py-8">
      <Section1 />
      <Cardsection/>
      <Cards/>
      <About/>
      <Form/>
      <Profile/>
    </div>

      <Footer/>
  </>
  );
}

export default App;
