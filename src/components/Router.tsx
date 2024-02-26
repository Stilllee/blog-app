import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PostList from "../pages/posts/PostList";
import PostDetail from "../pages/posts/PostDetail";
import PostNew from "../pages/posts/PostNew";
import PostEdit from "../pages/posts/PostEdit";
import ProfilePage from "../pages/profile/ProfilePage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
