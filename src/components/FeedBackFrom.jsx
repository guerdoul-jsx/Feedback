import Card from "./shared/Card"
import { useState , useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "./context/FeedBackContext";
import { useContext } from "react";
import Input from "./shared/Input/Input";

const FeedBackFrom =() => {

    const [text, settext] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [messageErr, setmessageErr] = useState('');
    const [rating, setRating] = useState(10);
    const {addFeedBack , EditFeedBack , updateFeedBack} = useContext(FeedBackContext);
    
    useEffect(() => {
        if(EditFeedBack.edit === true){
            settext(EditFeedBack.item.text);
        }
    }, [EditFeedBack]);


    const handleText = (e) => {
        if(text === ''){
            setbtnDisabled(true);
            setmessageErr(null);
        }
        else if(text !== '' && text.trim().length <= 10){
            setbtnDisabled(true);
            setmessageErr('The review must be at least 10 character');
        }
        else{
            setbtnDisabled(false);
            setmessageErr(null);
        }
        settext(e.target.value);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        if(text.trim().length >= 10){
            const newFeedBack = {
                text,
                rating
            }
            if(EditFeedBack.edit === true){
                updateFeedBack(EditFeedBack.item.id , newFeedBack)
            }else
            {
                addFeedBack(newFeedBack);
            }
            settext('');
        }
     }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How Would you rate your service with us</h2>
                <RatingSelect select ={(rating) => setRating(rating)} />
                <div className="input-group">
                    <Input inputType='text' placeholder="Write a review" value={text}  onChange={handleText} />
                    <Button className="btn" type="submit" isDisabled = {btnDisabled}>Send</Button>
                </div>
                {
                    (messageErr && <div className="message">{messageErr}</div>)
                }
            </form>
        </Card>
    )
}

FeedBackFrom.propTypes = {};

export default FeedBackFrom
