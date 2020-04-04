import * as React from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import {Error, HandleWithEvt} from '../../types';


const MAX_RATING = 5;

type Props = {
  isValidForm: boolean;
  rating: number;
  comment: string;
  error: Error | null;
  onFormSubmit: HandleWithEvt;
  onRadioChange: HandleWithEvt;
  onTextareaChange: HandleWithEvt;
  onTextareaKeyDown: (evt: React.SyntheticEvent, isValidForm: boolean) => void;
}

const AddReviewForm: React.FC<Props> = ({isValidForm, rating, comment, error, onFormSubmit, onRadioChange, onTextareaChange, onTextareaKeyDown}: Props) => {

  const radioItems = new Array(MAX_RATING).fill(``)
    .map((item, i) => {
      item = (
        <React.Fragment key={`star-${i + 1}`}>
          <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1}
            onChange={onRadioChange}
            checked={rating === (i + 1)}/>
          <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
        </React.Fragment>
      );

      return item;
    });

  const badValidMessage = !isValidForm ? <p>Please rate the film and leave your review (at least 50 characters).</p> : null;

  return (
    <div className="add-review">
      <form action="" className="add-review__form"
        onSubmit={onFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars" >
            {radioItems}
          </div>
        </div>
        <div className="sign-in__message" style={{color: `rgba(56, 44, 42, 0.8)`, padding: `5px`, height: `50px`}}>
          {badValidMessage}
        </div>
        <div className="add-review__text" style={{boxShadow: !isValidForm ? `0 0 8px 4px rgba(135, 0, 0, 0.5)` : ``}}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            onKeyDown={(evt) => onTextareaKeyDown(evt, isValidForm)}
            value={comment}
            onChange={onTextareaChange}>
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isValidForm} style={{opacity: !isValidForm ? `0.5` : ``}}>Post</button>
          </div>
        </div>
        {error ? <ErrorIndicator error={error} /> : null}
      </form>
    </div>
  );
};


export default AddReviewForm;
