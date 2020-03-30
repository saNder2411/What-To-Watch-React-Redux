import * as React from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';


const MAX_RATING = 5;

const AddReviewForm = ({isValidForm, rating, comment, error, onFormSubmit, onRadioChange, onTextareaChange}) => {

  const radioItems = new Array(MAX_RATING).fill(``)
    .map((item, i) => {
      item = (
        <React.React.Fragment key={`star-${i + 1}`}>
          <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1}
            onChange={onRadioChange}
            checked={rating === (i + 1) ? true : false}/>
          <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
        </React.React.Fragment>
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
        {error ? <ErrorIndicator message={error.message} /> : null}
      </form>
    </div>
  );
};


export default AddReviewForm;
