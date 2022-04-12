import { capitalizeFirstLetter } from "../../utils/helpers";
import { useEffect } from 'react';

function Nav (props) {
  const {
      categories = [],
      setCurrentCategory,
      currentCatagory
  }= props;

  // use effect takes two arguments a function and an array of dependencies when currentCategory value chenges the document.title value will update
  useEffect(() => {
      document.title = capitalizeFirstLetter(currentCatagory.name);
  }, [currentCatagory]);
  
 return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span>Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className={`mx-1 ${
// this short circuit means that currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned.
                            currentCatagory.name === category.name &&  'navActive'
                        }`} key={category.name}>
                            <span 
                            onClick={() => {
                                setCurrentCategory(category)
                            }} 
                            
                            >
                               {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    );
};

export default Nav;