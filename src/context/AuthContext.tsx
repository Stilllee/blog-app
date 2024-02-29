import { ReactNode, createContext, useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";

interface AuthProps {
  children: ReactNode; // ReactNode: React 컴포넌트의 자식 타입
}

const AuthContext = createContext({
  user: null as User | null, // user의 초기값 null
});

export const AuthContextProvider = ({ children }: AuthProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // 로그인한 사용자의 정보인 user를 상태로 설정
      } else {
        setCurrentUser(user); // 로그아웃시 user는 null이 되므로 setCurrentUser(null)과 동일하게 동작함
      }
    });
  }, [auth]);

  return (
    // user: currentUser => 다른 컴포넌트에서 user라는 이름으로 사용함
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
