import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';


function Gallery({ currentCatagory }) {
   const { name, description } =  currentCatagory;
  
    return (
        <section>
            <h1 data-testid="h1tag">{ capitalizeFirstLetter(name)}</h1>
            <p> {description} </p>
         <PhotoList category = {currentCatagory.name} />
        </section>
    );
};

export default Gallery;