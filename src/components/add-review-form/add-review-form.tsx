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
}

const AddReviewForm: React.FC<Props> = ({isValidForm, rating, comment, error, onFormSubmit, onRadioChange, onTextareaChange}: Props) => {

  const radioItems = new Array(MAX_RATING).fill(``)
    .map((item, i) => {
      item = (
        <React.Fragment key={`star-${i + 1}`}>
          <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1}
            onChange={onRadioChange}
            checked={rating === (i + 1) ? true : false}/>
          <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
        </React.Fragment>
      );

      return item;
    });


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

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            value={comment}
            onChange={onTextareaChange}>
          </textarea>
          {isValidForm ? (
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>) : null}
        </div>
        {error ? <ErrorIndicator error={error} /> : null}
      </form>
    </div>
  );
};


export default AddReviewForm;
