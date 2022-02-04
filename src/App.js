
import './App.css';

import {withAuthenticator} from '@aws-amplify/ui-react'
import {createPet} from './graphql/mutations'
import { API } from 'aws-amplify'

function App() {

  const handleSubmit = async (e) => {
   e.preventDefault()
    const {target} =e
      try{
          await API.graphql({
              query:createPet,
              variables:{
                  input:{
                    name: target.petName.value,
                    description:target.petDescription.value,
                    petType: target.petType.value,
                  },
              },


      })
    }catch(e){
      console.log(e);

    }

  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
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
            <button>Create a Pet</button>
        </form>
    </div>


  )
}

export default withAuthenticator(App);
