import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PostListPage from "../pages/posts/PostListPage";
import PostDetailPage from "../pages/posts/PostDetailPage";
import PostNewPage from "../pages/posts/PostNewPage";
import PostEditPage from "../pages/posts/PostEditPage";
import ProfilePage from "../pages/profile/ProfilePage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/posts/new" element={<PostNewPage />} />
      <Route path="/posts/edit/:id" element={<PostEditPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
