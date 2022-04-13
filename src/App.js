import './App.css';
import About from './components/About';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import { useState } from 'react';
import ContactForm from './components/Contact';

function App() {
  // this could be declared as just a regular array but...we chose to use the useState hook here so that we can have the option to change the categories at some point in the future.
  const [categories] = useState([
    {
        name: "commercial",
        description:
        "Photos of grocery stores, food trucks, and other commercial projects",  
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delecious delacacies" },
    { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beuty of nature",}
]);

  // set state initial state to the first category in our array
  const [currentCatagory, setCurrentCategory] = useState(categories[0]);
  // hook for displaying contact form or not
  const [contactSelected, setContactSelected] = useState(false);

  // the teranery operator in main is equiv to an if else statement
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCatagory={currentCatagory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
<main>
 {!contactSelected ? (
   <>
   <Gallery currentCatagory={currentCatagory}></Gallery>
   <About></About>
   </>
 ) : (
   <ContactForm></ContactForm>
 )}
</main>
    </div>
  );
}

export default App;
