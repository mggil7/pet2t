
import './App.css';

import {withAuthenticator} from '@aws-amplify/ui-react'

function App() {
  return (
    <div>
        <form>
            <input placeholder ='enter a name' name='petName'/> 
            <input placeholder ='enter a description' name='petDescription'/>
            <select name="petType">
              <option value="none" disabled>
                Please select a pet
              </option>
              <option value='dog'>Dog</option>
              <option value='cat'>Cat</option>
              <option value='rabbit'>Rabbit</option>
              <option value='turtle'>Turtle</option>
            </select>
        </form>
    </div>


  )
}

export default withAuthenticator(App);
