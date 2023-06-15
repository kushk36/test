import { useContext, useEffect, useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [message, setMessage] = useState(null)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setRating(feedbackEdit.item.rating)
            setText(feedbackEdit.item.text)
        }
    }, [feedbackEdit])


    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('You Have to enter atleast 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Would You Rate Your Service With Us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder='Write a Review' onChange={handleTextChange} value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;