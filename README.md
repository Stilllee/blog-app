# React Blog
![image](https://github.com/Stilllee/blog-app/assets/108785772/37485f61-264f-4597-a19c-ba45d0bf97ea)

<br>

## 목차

- [프로젝트 정보](#프로젝트-정보)
- [주요 구현 기능](#주요-구현-기능)
- [기술 스택](#기술-스택)
- [배포](#배포)
- [설치 및 실행](#설치-및-실행)
- [데모 및 테스트 계정](#데모-및-테스트-계정)
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

## 데모 및 테스트 계정
- [프로젝트 데모 영상 보기](https://youtu.be/_GY_noqN1zY)
- 테스트 계정
  - 이메일: test@email.com
  - 비밀번호: 12345678

<br>

## 구현 내용

### 1. 로그인 / 회원가입 페이지
![image](https://github.com/Stilllee/blog-app/assets/108785772/38c48b5d-d20e-43cc-9076-cd7984f58138)
![chrome_IiwazVtmPc](https://github.com/Stilllee/blog-app/assets/108785772/b4d4eb85-b06b-455b-9d79-c8797b16e511)
- Firebase Auth를 사용하여 사용자 인증 기능을 구현했습니다.
- 이메일과 비밀번호를 통한 로그인 및 회원가입 기능을 제공합니다.
- 회원가입시에는 별도의 과정없이 바로 로그인됩니다.

<br>

### 2. 메인 페이지
![chrome_cYqnv8Gc0S](https://github.com/Stilllee/blog-app/assets/108785772/fa4abe3a-b63c-427b-bdac-13e03cf855ee)
- 글 목록과 함께 캐러셀 기능으로 이미지를 보여줍니다.

<br>

### 3. 글 목록
![chrome_lWDZsM1oGs](https://github.com/Stilllee/blog-app/시글 작성 / 수정 페이지
![chrome_wuhqnqNnCw](https://github.com/Stilllee/blog-app/assets/108785772/ac351bdd-89eb-4ca4-a6a2-86a868a8f87e)
- `PostForm` 컴포넌트를 통해 글을 작성하거나 수정할 수 있습니다.
- - 작성 : 헤더의 '글쓰기' 버튼을 통해 글 작성 페이지(`PostNewPage`)로 이동할 수 있습니다.
- - 수정 : 메인 페이지, 글 상세 페이지, 프로필 페이지에서 '수정' 버튼을 통해 글 수정 페이지(`PostEditPage`)로 이동할 수 있습니다.

<br>

### 7. 게시글 및 댓글 삭제 기능
![chrome_iNenfZV6HA](https://github.com/Stilllee/blog-app/assets/108785772/dd8a0a2b-b0f9-43a3-8488-17efac60eb5d)
![chrome_8vdf3RqrSs](https://github.com/Stilllee/blog-app/assets/108785772/c1b05f64-81d3-433a-8ba8-b66123d61690)
- 글 목록과 상세 페이지, 프로필페이지에서 '삭제' 버튼을 통해 글을 삭제할 수 있습니다.
- 댓글의 '삭제' 버튼을 통해 댓글을 삭제할 수 있습니다.
- 삭제는 실시간으로 반영되며, 삭제 권한은 작성자에게만 부여됩니다.

<br>

### 8. 사용자 프로필 페이지
![image](https://github.com/Stilllee/blog-app/assets/108785772/a60b5db9-3ce9-4f76-a0b1-c182a9848b8c)
![chrome_E6OGGtN1rY](https://github.com/Stilllee/blog-app/assets/108785772/1cdd459a-71d5-4d7c-a644-698667aecf44)
- 사용자의 프로필 정보 및 작성한 글 목록을 보여줍니다.
- 로그아웃 기능을 제공합니다.

<br>

### 9. 다크모드
![chrome_33hvOALzV7](https://github.com/Stilllee/blog-app/assets/108785772/98035b79-2a40-4e85-b7c0-32948c58c018)
- 푸터의 테마 변경 버튼을 통해 다크모드로 전환할 수 있습니다.

<br>

### 9. Context API로 상태관리

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

참고 강의: [fastcampus-react-blog](https://github.com/jen-frontend/fastcampus-react-blog)
