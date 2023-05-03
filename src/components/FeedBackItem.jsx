import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes , FaEdit} from 'react-icons/fa'
import FeedBackContext from "./context/FeedBackContext"
import { useContext } from "react"
const  FeedBackItem = ({item}) => {
    const {deleteFeedBack , editFeedBack} = useContext(FeedBackContext);
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={(e) => deleteFeedBack(item.id)} className="close">
                <FaTimes color = "purple" />
            </button>
            <button className="edit" onClick={(e) => editFeedBack(item)}>
                <FaEdit color = "purple" />
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item : PropTypes.object,
}

export default FeedBackItem
