This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 사용 가능한 스크립트들..

프로젝트 디렉토리에서 사용가능한 스크립트들:

### `yarn start`

개발환경에서 코드를 컴파일 가능합니다.<br />
 [http://localhost:3000](http://localhost:3000)기본브라우저로 해당 포트에 서버가 실행됩니다..

페이지가 수정되면 새로고침되며 내용이 수정됩니다.<br />
또한 문법 오류도 콘솔창에서 확인 가능합니다.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 폴더 구조

![foldering](https://user-images.githubusercontent.com/56239849/85366493-6a1e1400-b562-11ea-8933-d1355da05a69.png)
- **components**: 컴포넌트 파일들이 위치하는 폴더 //페이지 그리는 부분
- **containers**: 컨테이너 파일들이 위치하는 폴더, 주로 state를 props로 매핑하는 코드들이 위치
- **pages**: Routing을 위한 페이지 파일들이 위치하는 폴더 
- **store**: redux 작업을 위한 폴더, 내부에 **actions, reducers** 폴더 존재 // 사용x

![pages](https://user-images.githubusercontent.com/56239849/85366510-72764f00-b562-11ea-9eb4-2ce377851aca.png)
내보낼 페이지를 index.ts에 정리한뒤 app에서 렌더링하는 구조
루트경로("/")기준으로 불러와짐