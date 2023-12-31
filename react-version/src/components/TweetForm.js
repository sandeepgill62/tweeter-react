function TweetForm () {
  const textAreaPlaceholderValue = "What are you humming about?"
  return (
    <section className="newtweet">
      <form method="post" onClick={(event) => event.preventDefault()} action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={textAreaPlaceholderValue}></textarea>
        <input type="submit" value="Tweet" className="form__input"></input>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;