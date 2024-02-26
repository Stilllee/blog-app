import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </nav>
      </header>
      <nav className="post__navigation">
        <div className="post__navigation-active">전체</div>
        <div>나의 글</div>
      </nav>
      <section className="post__list">
        {[...Array(10)].map((e, index) => (
          <article key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">계정이름</div>
                <div className="post__date">2024.02.26</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati sint porro dolore dolor labore voluptatum dignissimos
                adipisci magni repellat recusandae illum, nulla odio
                exercitationem, consequatur explicabo ad, repudiandae molestiae
                facere.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </article>
        ))}
      </section>
      <footer>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </footer>
    </>
  );
}
