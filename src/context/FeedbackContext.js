import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is from context item1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is from context item2',
            rating: 9
        },
        {
            id: 3,
            text: 'This is from context item3',
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // edit item function
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // update item function
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))
    }

    // add item function
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback);
        setFeedback([newFeedback, ...feedback])
    }

    // delete item function
    const deleteFeedback = (id) => {
        if (window.confirm('Are You Sure!!')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    return <FeedbackContext.Provider value={{ feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;