import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

export default function Footer() {
  const context = useContext(ThemeContext);
  return (
    <footer>
      <Link to="/posts/new">글쓰기</Link>
      <Link to="/posts">게시글</Link>
      <Link to="/profile">프로필</Link>
      <button onClick={context.toggleMode} className="footer__theme-btn">
        {context.theme === "light" ? <IoMdMoon /> : <IoSunnyOutline />}
      </button>
    </footer>
  );
}
