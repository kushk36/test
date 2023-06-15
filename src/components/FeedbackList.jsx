import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext';


const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div>
            <div className="feedback-list">
                <AnimatePresence>
                    {feedback.map((item) => (
                        <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <FeedbackItem key={item.id} item={item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
    // return (
    //     <div>
    //         <div className="feedback-list">
    //             {feedback.map((item) => (
    //                 <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
    //             ))}
    //         </div>
    //     </div>
    // );
};

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//         })
//     )
// }

export default FeedbackList;