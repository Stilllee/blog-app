import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="header__logo">
        Blog
      </Link>
      <nav>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </nav>
    </header>
  );
}
