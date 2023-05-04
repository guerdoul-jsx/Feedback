import { createContext, useState , useEffect } from "react";


import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



const FeedBackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedBack, setfeedBack] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFeedback()
    }, []);

    const fetchFeedback = async () => {
        
        const response = await fetch(`/Feedback?_sort=id&_order=desc`);
        const data  = await response.json();
        setfeedBack(data)
        setIsLoading(false);

    } 

   const [EditFeedBack , setEditFeedBack] = useState({
    item: {},
    edit : false
   })

   const updateFeedBack = async (id, updtItem) => {
        const response = await fetch(`/Feedback/${id}` , {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(updtItem)
        })

        const data  = await response.json();
        setfeedBack(feedBack.map((item) => item.id === id ? {...item , ...data} : item ))
   }

    const editFeedBack = (item) => {
        setEditFeedBack({
            item,
            edit : true
        })
    }

    const addFeedBack = async(feedback) => {
        const response = await fetch(`/Feedback` , {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(feedback)
        })
        const data = await response.json();

        setfeedBack([data, ...feedBack]);
    }

    const deleteFeedBack = (id) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you Sure To Delete This Feedback',
            buttons: [
            {
                label: 'Yes Delete this feedback',
                onClick: async () => {
                    await fetch(`/Feedback/${id}`, {
                        method: 'DELETE'
                    });
                  setfeedBack(feedBack.filter((itm) => itm.id !== id));
                },
                color: 'Red'
            },
            {
                label: 'Cancel',
                onClick: () => {}
            }
            ]
        })
      }
    return <FeedBackContext.Provider value={{
        feedBack,
        deleteFeedBack,
        addFeedBack,
        editFeedBack,
        EditFeedBack,
        updateFeedBack,
        isLoading
        }
     }>
       {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext