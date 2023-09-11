//import {useNavigation} from 'next/navigation';
"use client"
const details = [

  { id : 1, name: 'Yash', role: 'Senior Developer'},
  
  { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
  
  { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  
  ];

export default function DeveloperPage({params}) {

const id=params.id;
const developer=details.find((dev)=>dev.id===parseInt(id));
    return (
      <div>
        {developer?
        (
        <div>
            <h1>Name:{developer.name}</h1>
            <p><i>Role:{developer.role}</i></p>
        </div>
        ):(
            <h1>developer does not exist!!!</h1>
        )}
       
      </div>
      
    )
  }