# 원티드 프리온보딩 FE 인턴쉽 3주차 과제

## 프로젝트 설명

> 한국 임상정보 웹사이트 https://clinicaltrialskorea.com/ 의 검색창을 클론 코딩하며 검색 캐싱기능을 구현하는 개인 과제 프로젝트입니다.

## 프로젝트 사용 기술

```
- react
- typescript
```

## 사용 라이브러리

### dependencies

```json
    "axios": "^1.5.0",
    "react-router-dom": "^6.15.0",
    "styled-components": "^6.0.7",
    "typescript": "^4.9.5",
```

### devDependencies

```json
  "devDependencies": {
    "@typescript-eslint/parser": "^5.62.0",
    "eslint": "^8.48.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-no-relative-import-paths": "^1.5.2",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.3"
  }
```

## 프로젝트 개발 절차

> 1. 타입스크립트 CRA 프로젝트 생성
> 2. 사용 라이브러리 설치
> 3. eslint 및 prettier 설정
> 4. husky 및 lint-staged 설정
> 5. 검색창 마크업

### 1. Eslint, prettier 규칙 설정

#### 1-1. 관련 라이브러리 설치

```
npm i -D eslint prettier eslint-config-prettier eslint-plugin-import no-relative-imports-path
```

#### 1-2. `.eslintrc` 파일과 `.prettierrc` 파일 생성

- import 문을 깔끔하게 정리하기 위해 eslint에 절대 경로 사용 규칙을 지정했습니다.
  ```json
    // tsconfig.json 파일에서 baseUrl을 src 폴더로 지정했습니다.
    "compilerOptions": {
      ...,
      baseUrl: 'src'
    }
  ```
- `.eslintrc` 파일에 import문 순서 규칙과 절대 경로를 지정해줬습니다.

  ```json
      "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          { "pattern": "react", "group": "builtin", "position": "after" },
          { "pattern": "react", "group": "external", "position": "before" },
          { "pattern": "react-dom", "group": "builtin", "position": "after" },
          { "pattern": "apis/**", "group": "internal" },
          { "pattern": "pages/**", "group": "internal" },
          { "pattern": "components/**", "group": "internal" },
          { "pattern": "hooks/**", "group": "internal" },
          { "pattern": "router/**", "group": "internal" },
          { "pattern": "store/**", "group": "internal" },
          { "pattern": "styles/**", "group": "internal" }
        ],
        "pathGroupsExcludedImportTypes": ["react", "react-dom"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }
    ]
  ```

#### 1-3. huksy와 lint-staged를 활용하여 커밋전 코드 자동 수정

- 먼저 관련 라이브러리를 설치하고 .husky/pre-commit에서 커밋전 자동 실행될 커맨드를 지정했습니다.
  ```bash
  npm i huksy lint-staged
  npx husky install
  npx husky add .husky/pre-commit "npx lint-staged"
  ```
- `package.json`에 `lint-staged` 필드 추가
  ```json
    "lint-staged": {
      "./src/**/*.{js,ts,jsx,tsx}": [
        "eslint",
        "prettier --write --cache ."
      ]
    },
  ```
