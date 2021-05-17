import { getDefaultNormalizer } from "@testing-library/dom";
import React, { Component } from "react";
import Contact from './Contact'

export default class Contacts  extends Component {
   state ={
       contacts : [
           {
               id:1,
               nom:"fatima",
               email:"fnbz3010@gmail.com",
               tel:"0000000000"
           },
           {
            id:2,
            nom:"fatima2",
            email:"fnbz2011@gmail.com",
            tel:"0000000002"
        },
        {
            id:3,
            nom:"fatima3",
            email:"fnbz3013@gmail.com",
            tel:"0000000003"
        }
       ]
   }
    render(){
     return (
         <div>
             {this.state.contacts.map(contact =>(
                 <Contact
                 key={contact.id}
                 nom={contact.nom}
                 email={contact.email}
                 tel={contact.tel}
                 />
             ))}
         </div>
     )
 }
}

