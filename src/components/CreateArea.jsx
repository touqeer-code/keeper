import React, {useState} from "react";


function CreateArea(props){

    const [note, setNote] = useState({
        title : "",
        content : ""
    });

    function handleChange(event){
     const {name, value} = event.target;

     setNote(prevNote  => {
        return {
            ...prevNote,
            [name]: value
        };
    
     });
    }

    function transferApp(event){

        props.onAdd(note);
        setNote({
            title:"",
            content :"" 
        });

       

            event.preventDefault();
    }

    return(

     <div>
      <form>

       <input 
       onChange={handleChange} 
       value={note.title} 
        name="title" 
        placeholder="write title here" 

        />
       <textarea  
       onChange={handleChange} 
       value = {note.content} 
       name="content" 
       placeholder="write content here" 
       rows="3"

       />
       <button onClick={transferApp}>Add</button>







      </form>
    




     </div>



    );
     
    }


    export default CreateArea;