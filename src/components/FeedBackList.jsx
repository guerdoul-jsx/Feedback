import FeedBackItem from "./FeedBackItem"
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from "react"
import FeedBackContext from "./context/FeedBackContext"

const  FeedBackList = ()  => {
    const {feedBack} = useContext(FeedBackContext)
    if(!feedBack || feedBack.length === 0){
        return <h1 className="nofeedback">No Feedback Yet</h1>
    }else{
        return (
            <div className="feedback-list">
                    <AnimatePresence>
                    {feedBack.map((item) => (
                        <motion.div
                            key={item.id}
                            initial ={{opacity:0.5}}
                            animate ={{opacity:1}}
                            exit ={{opacity:0}}
                            >
                            <FeedBackItem key={item.id} item={item} />
                        </motion.div>
                    ))}
            </AnimatePresence>
                </div>
        )
    }
}

FeedBackList.propTypes = {
    feedback : PropTypes.array,
}


export default FeedBackList
