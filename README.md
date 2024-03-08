# Blog

<br>

## 목차

- [프로젝트 정보](#프로젝트-정보)
- [주요 구현 기능](#주요-구현-기능)
- [기술 스택](#기술-스택)
- [배포](#배포)
- [설치 및 실행](#설치-및-실행)
- [구현 내용](#구현-내용)
  <br>

## 프로젝트 정보

React와 Firebase를 이용한 블로그 프로젝트입니다. <br>
이 프로젝트는 최신 웹 개발 기술을 실제로 적용하고 깊이 있게 이해하기 위해 구축되었습니다.

### 프로젝트 개요

- 주제 : 블로그 프로젝트
- 작업 기간 : 2024.02.26 ~ 2024.03.07
- 주요 목표 :

  - **React** 앱의 구조를 이해하고, 라우팅을 설계 및 구현합니다.
  - **Firebase** 이해 및 활용
  - - 데이터 조회, 생성, 수정, 삭제 등 Firebase의 CRUD 기능을 구현함으로써 기본 원리를 이해합니다.
  - - Firebase Auth를 사용하여 사용자 인증을 구현하고, 쿼리와 같은 심화 기능을 사용합니다.
  - **Context API**를 전역 상태 관리에 적용합니다.

  <br>

### 주요 구현 기능

- 게시글 및 댓글 CRUD
- 사용자 인증 및 권한관리
- 다크모드
- 카테고리별 글 목록 및 사용자별 작성 글 관리

<br>

## 기술 스택

<div>
  <img alt="Create React App" src="https://img.shields.io/badge/Create React App-09D3AC?style=flat-square&logo=createreactapp&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
  <img alt="css3" src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white" />
</div>

<br>

## 설치 및 실행

```bash
yarn install
yarn start
```

<br>

## 배포

- Firebase CLI 사용
- 배포 링크 : [React Blog](https://react-blog-9837c.web.app/)

<br>

## 데모 영상

<br>

## 구현 내용

### 1. 로그인 / 회원가입 페이지

- Firebase Auth를 사용하여 사용자 인증 기능을 구현했습니다.
- 이메일과 비밀번호를 통한 로그인 및 회원가입 기능을 제공합니다.

### 2. 메인 페이지

- 글 목록과 함께 캐러셀 기능으로 이미지를 보여줍니다.

### 3. 글 목록 페이지

- Firebase의 Firestore를 이용하여 작성된 글의 목록을 실시간으로 보여줍니다.
- 게시글마다 작성자, 작성일, 제목, 요약 내용 등이 표시됩니다.

- 각 글을 선택하면 해당 글의 상세페이지로 이동합니다.

### 4. 글 상세 페이지

- 선택된 글의 제목, 내용, 작성자, 작성일, 카테고리 등의 세부 정보를 표시합니다.
- 댓글 기능을 통해 사용자들이 글에 대한 의견을 남길 수 있습니다.

### 5. 글 작성 / 수정 페이지

- `PostForm` 컴포넌트를 통해 글을 작성하거나 수정할 수 있습니다.
- - 작성 : 헤더의 '글쓰기' 버튼을 통해 글 작성 페이지(`PostNewPage`)로 이동할 수 있습니다.
- - 수정 : 메인 페이지, 글 상세 페이지, 프로필 페이지에서 '수정' 버튼을 통해 글 수정 페이지(`PostEditPage`)로 이동할 수 있습니다.

### 6. 카테고리 메뉴

- 카테고리별로 글을 분류하고, 해당 카테고리의 글 목록을 볼 수 있습니다.
- 내가 작성한 글 목록만 볼 수 있는 메뉴도 제공합니다.

### 7. 사용자 프로필 페이지

- 사용자의 프로필 정보 및 작성한 글 목록을 보여줍니다.
- 로그아웃 기능을 제공합니다.

### 8. Context API로 상태관리

React의 Context API를 사용하여 애플리케이션의 상태를 관리합니다.

#### AuthContext

사용자 인증 상태를 관리합니다.

```tsx
interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext({
  user: null as User | null, // 초기 사용자 상태는 null
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
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
```

```tsx
export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
  // ...
  <div className="profile__email">{user?.email}</div>
  <div className="profile__name">{user?.displayName || "사용자"}</div>
  // ...
```

#### ThemeContext

다크모드 테마 상태를 관리합니다.

```tsx
const ThemeContext = createContext({
  theme: "light",
  toggleMode: () => {},
});

interface ThemeProps {
  children: ReactNode;
}

export const ThemecontextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );

  const toggleMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

```tsx
function App() {
  const context = useContext(ThemeContext);

  return (
    <div className={context.theme === "light" ? "light" : "dark"}>
    // ...
```

<br>

## 폴더 구조

```bash
.
├── .firebaserc         # Firebase 로컬 환경 설정 파일
├── .env                # 환경 변수 설정 파일
├── firebase.json       # Firebase 서비스 설정 파일
├── package.json        # 프로젝트 의존성 및 메타데이터
├── README.md           # 프로젝트 설명 문서
├── tsconfig.json       # TypeScript 컴파일러 설정
├── yarn.lock           # Yarn 패키지 매니저 의존성 버전 잠금
├── public              # 정적 파일 디렉토리
├── src                 # 소스 코드 디렉토리
│   ├── components      # 재사용 가능한 UI 컴포넌트들
│   │   ├── Carousel.tsx     # 이미지 캐러셀 컴포넌트
│   │   ├── Comments.tsx     # 댓글 표시 컴포넌트
│   │   ├── Footer.tsx       # 페이지 하단 푸터 컴포넌트
│   │   ├── Header.tsx       # 페이지 상단 헤더 컴포넌트
│   │   ├── Loader.tsx       # 로딩 인디케이터 컴포넌트
│   │   ├── LoginForm.tsx    # 로그인 폼 컴포넌트
│   │   ├── PostDetail.tsx   # 포스트 상세 보기 컴포넌트
│   │   ├── PostForm.tsx     # 포스트 작성/수정 폼 컴포넌트
│   │   ├── PostList.tsx     # 포스트 목록 컴포넌트
│   │   ├── Profile.tsx      # 사용자 프로필 컴포넌트
│   │   ├── Router.tsx       # 라우팅 설정 컴포넌트
│   │   └── SignUpForm.tsx   # 회원가입 폼 컴포넌트
│   ├── context         # React Context API를 사용한 상태 관리 디렉토리
│   │   ├── AuthContext.tsx  # 인증 상태 관리 컨텍스트
│   │   └── ThemeContext.tsx # 테마 상태 관리 컨텍스트
│   ├── pages           # 각 페이지 컴포넌트들
│   │   ├── home
│   │   │   └── Home.tsx            # 홈페이지 컴포넌트
│   │   ├── login
│   │   │   └── LoginPage.tsx       # 로그인 페이지 컴포넌트
│   │   ├── posts
│   │   │   ├── PostDetailPage.tsx  # 포스트 상세 페이지
│   │   │   ├── PostEditPage.tsx    # 포스트 수정 페이지
│   │   │   ├── PostListPage.tsx    # 포스트 목록 페이지
│   │   │   └── PostNewPage.tsx     # 새 포스트 작성 페이지
│   │   ├── profile
│   │   │   └── ProfilePage.tsx     # 사용자 프로필 페이지
│   │   └── signup
│   │       └── SignupPage.tsx      # 회원가입 페이지
```

<br>

관련 강의: [fastcampus-react-blog](https://github.com/jen-frontend/fastcampus-react-blog)
