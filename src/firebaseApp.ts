import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// initializeApp : Firebase 앱을 초기화하는 데 사용
// FirebaseApp, getApp : Firebase 앱 인스턴스를 관리하는 데 사용

/**
 * Firebase의 인증 서비스를 사용하기 위해 가져옴
 */
import "firebase/auth";

/**
 * app 변수를 선언하여 Firebase 애플리케이션 인스턴스를 저장
 */
export let app: FirebaseApp;

/**
 * Firebase 구성 설정
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

/**
 * Firebase 앱 인스턴스 초기화 시도
 */

try {
  // getApp 함수로 이미 초기화된 Firebase 앱 인스턴스가 있는지 확인
  // "app" 이름으로 초기화된 인스턴스가 있으면, 그 인스턴스를 app 변수에 할당
  app = getApp("app");
} catch (e) {
  // 오류가 발생하면(앱이 아직 초기화되지 않았다면)
  // initializeApp 함수로 "app"이라는 이름의 인스턴스를 생성하며, firebaseConfig 객체에 정의된 설정을 사용
  app = initializeApp(firebaseConfig, "app");
}

/**
 * Firebase 초기화
 */
const firebase = initializeApp(firebaseConfig);
// initializeApp 함수를 사용하여 Firebase 앱을 초기화. firebaseConfig에 정의된 설정을 사용

export const db = getFirestore(app);

export default firebase;
