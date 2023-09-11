import Link from "next/link";
import { Fragment } from "react";

const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ];


export default function AboutUsPage() {
    return (
        <Fragment>
            <h1>Know about this people...</h1>
                <ul>
                    {details.map((user)=>(
                    <li key={user.id}>
                        <Link href={`/aboutUs/${user.id}`}>{user.name}</Link>
                    </li>
                    ))}
                    
                </ul>
        </Fragment>
      
      
    )
  }