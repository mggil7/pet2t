
import './App.css';

import {withAuthenticator} from '@aws-amplify/ui-react'

import { API } from 'aws-amplify'
import { useEffect, useState } from 'react';

import {createPet} from './graphql/mutations'
import { listPets } from './graphql/queries'

function App() {

  const [petData, setPetData] = useState([]);

  useEffect (() => {
      const fetchPets = async () => {
        const res = await API.graphql({
          query: listPets}) 

        return res.data.listPets.items
            }
        fetchPets().then(pets => setPetData(pets))
        
        
  }, [])

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
