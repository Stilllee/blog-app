export default function PostForm() {
  return (
    <form action="/post" method="POST" className="form">
      <fieldset className="form__block">
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" required />
      </fieldset>
      <fieldset className="form__block">
        <label htmlFor="summary">요약</label>
        <input type="text" name="summary" id="summary" required />
      </fieldset>
      <fieldset className="form__block">
        <label htmlFor="content">내용</label>
        <textarea name="content" id="content" required />
      </fieldset>
      <div className="form__block">
        <input type="submit" value="제출" className="form__btn--submit" />
      </div>
    </form>
  );
}
