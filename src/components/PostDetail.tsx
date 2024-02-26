export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">계정이름</div>
            <div className="post__date">2024.02.26</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">수정</div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sint porro dolore dolor labore voluptatum dignissimos adipisci magni
            repellat recusandae illum, nulla odio exercitationem, consequatur
            explicabo ad, repudiandae molestiae facere.
          </div>
        </div>
      </div>
    </>
  );
}
