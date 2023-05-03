import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedBackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedBack, setfeedBack] = useState([{
        id : 1,
        text : "This come from the context Form number 1",
        rating: 7
    },{
        id : 2,
        text : "This come from the context Form number 2",
        rating: 10
    },{
        id : 3,
        text : "This come from the context Form number 3",
        rating: 9
    },{
        id : 4,
        text : "This come from the context Form number 4",
        rating: 6
    }
   ]);

   const [EditFeedBack , setEditFeedBack] = useState({
    item: {},
    edit : false
   })

   const updateFeedBack = (id, updtItem) => {
        setfeedBack(feedBack.map((item) => item.id === id ? {...item , ...updtItem} : item ))
   }

    const editFeedBack = (item) => {
        setEditFeedBack({
            item,
            edit : true
        })
    }
    const addFeedBack = (feedback) => {
        feedBack.id = uuidv4();
        setfeedBack([feedback, ...feedBack]);
    }
    const deleteFeedBack = (id) => { 
        if(window.confirm('Are you sure to elete this eedback')){
          setfeedBack(feedBack.filter((itm) => itm.id !== id));
        }
      }
    return <FeedBackContext.Provider value={{
        feedBack,
        deleteFeedBack,
        addFeedBack,
        editFeedBack,
        EditFeedBack,
        updateFeedBack
        }
     }>
       {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext