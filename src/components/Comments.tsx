import React, { useContext, useState } from "react";
import { PostProps } from "./PostList";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

const COMMENTS = [
  {
    id: 1,
    email: "test@email.com",
    content: "댓글 1",
    createdAt: "2024-03-06",
  },
  {
    id: 2,
    email: "test@email.com",
    content: "댓글 2",
    createdAt: "2024-03-07",
  },
  {
    id: 3,
    email: "test@email.com",
    content: "댓글 3",
    createdAt: "2024-03-08",
  },
  {
    id: 4,
    email: "test@email.com",
    content: "댓글 4",
    createdAt: "2024-03-09",
  },
  {
    id: 5,
    email: "test@email.com",
    content: "댓글 4",
    createdAt: "2024-03-10",
  },
  {
    id: 6,
    email: "test@email.com",
    content: "댓글 5",
    createdAt: "2024-03-11",
  },
];

interface CommentsProps {
  post: PostProps;
}

export default function Comments({ post }: CommentsProps) {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "comment") {
      setComment(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (post && post?.id) {
        const postRef = doc(db, "posts", post.id);

        if (user?.uid) {
          const commentObj = {
            content: comment,
            uid: user.uid,
            email: user.email,
            createdAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          };

          await updateDoc(postRef, {
            comments: arrayUnion(commentObj),
            updateDated: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          });
        }
      }
      toast.success("댓글을 생성했습니다.");
      setComment("");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  return (
    <div className="comments">
      <form action="" className="comments__form" onSubmit={onSubmit}>
        <div className="form__block">
          <label htmlFor="comment">댓글 입력</label>
          <textarea
            name="comment"
            id="comment"
            required
            value={comment}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="form__block form__block-reverse">
          <input type="submit" value="입력" className="form__btn-submit" />
        </div>
      </form>
      <div className="comments__list">
        {COMMENTS.map((comment) => (
          <div key={comment.id} className="comment__box">
            <div className="comment__profile-box">
              <div className="comment__email">{comment.email}</div>
              <div className="comment__date">{comment.createdAt}</div>
              <div className="comment__delete">삭제</div>
            </div>
            <div className="comment__text">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
