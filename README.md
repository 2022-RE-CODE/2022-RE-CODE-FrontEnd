## 📖 상세 내용
🐷 자바 수행평가 결과물로 만든 프로젝트입니다. 개발을 시작한지 얼마 되지 않은 주니어 개발자들은 자신의 코드가 어떤지, 리팩토링은 어떤식으로 해야하는지, 성능은 잘 나오는지 궁금한 경우가 많습니다.

하지만 회사를 다니고 있는것도 아니고, 주변에 물어볼 사람도 없다면 자신의 코드가 어떻고 뭐가 문제이며 어떤식으로 재구성해야 하는지 알기 힘듭니다.

따라서 **주니어 개발자**를 타깃으로 한 코드리뷰 서비스를 만들고자 했습니다. 타깃은 **주니어 개발자**이지만 자신의 코드가 어떤지 궁금하며 **피드백 받고 싶은 모든 개발자들**에게 도움이 되는 서비스입니다.

</aside>

## 💫 담당한 기능

- Typescript 환경에서 Redux를 이용한 유저 상태 관리
- Toast 메세지를 통한 예외 처리
- Axios intercepter를 활용한 토큰 전송
- useMemo, useCallback으로 랜더링 최적화
- 배너 Interval 애니메이션
- 게시글 CRUD 및 댓글 CRD 기능 
- 포트폴리오 링크 CRUD 기능

## 💡 개발하면서 만난 문제점과 해결에 대해서

- **프로젝트의 결제 시스템**  
    프로젝트를 구상할 때 결제시스템을 통해 코드리뷰를 해주면 돈을 받아 사람들로 하여금 코드 리뷰를 해주는 동기 부여가 될 수 있도록 기획하였습니다. 
    하지만 결제 시스템 도입시 사업자 번호가 필요해서 기획을 새로 엎게 되었습니다.
    다시 새로 만든 기획은 코드 리뷰하는 과정의 재미에 집중했습니다. 
    학교 수업 시간에 포스트잇에 피드백을 하나씩 적어 붙인 경험이 있었는데 
    그냥 댓글을 남기는 것 보다는 포스트잇처럼 하나씩 붙인다는 개념으로 가면 더 재밌지 않을까 해서 레이아웃을 수정하였습니다.
    
    
- **포트폴리오 페이지 랜더링 최적화**  
포트폴리오 페이지는 구성 요소가 많아 랜더링을 하게 되면 성능의 저하가 발생합니다. 따라서 부모 컴포넌트에서
자식 컴포넌트로 보내는 prop 함수를 useCallback으로 설정해 불필요한 랜더링을 낮췄습니다.
     
- **setInterval의 한계점**  
setInterval은 react의 수명주기에 맞지 않는 코드입니다.  
props나 state가 바뀌면 리액트가 리랜더링을 하게 되는데 setInterval은 랜더와 관계없이 계속 살아남습니다.    
react는 리랜더링을 하면서 이전의 render된 내용들을 다 잊고 새로 그리게 되는데, setInterval은 그렇지 않습니다.   
하지만 이 문제점을 해결한 커스텀 훅이 있습니다. 
```ts
import { useEffect, useRef } from "react";

interface IUseInterval {
    (callback: () => void, interval: number): void;
}
  
const useInterval: IUseInterval = (callback, interval) => {
    const savedCallback = useRef<(() => void) | null>(null); // callBack함수를 저장할 savedCallback을 정의합니다.
    
    // callback이 바뀔때마다 업데이트
    useEffect(() => {
        savedCallback.current = callback; // savedCallback.current에 Callback함수를 저장합니다.
    });
  
    useEffect(() => {
        // tick함수가 한번 실행 될 때 callback함수를 실행합니다.
        function tick() { 
            // 만약 현재 callback 함수가 있으면
            if (savedCallback.current) {
                savedCallback.current();
        }
    }
    let id = setInterval(tick, interval); // interval에 맞춰 tick함수를 실행합니다.
    return () => clearInterval(id); // 컴포넌트가 언마운트될 때 clearInterval을 해줍니다.
    }, [interval]);
};

export default useInterval;
```
    
react 생명주기는 마운트 -> 업데이트 -> 언마운트 순으로 진행되는데 useInteraval을 활용하면 setInterval을 실행하고 컴포넌트가 언마운트 되기 전에 clearInterval을 해줍니다.   
따라서 이 훅은 리액트의 생명 주기에 딱 알맞는 훅이라고 할 수 있습니다.  
이 프로젝트에서는 useInterval을 사용해 banner의 애니매이션 interval을 설정하였습니다.

## 💡 느낀 점

- **채팅 기능 취소가 아쉽다.**
    
    유저와 유저끼리 서로 피드백에 대해 실시간으로 소통을 할 수 있었으면 더 좋은 프로젝트가 되지 않았나 생각합니다.  
    
    백엔드의 채팅 기능을 직접 구현하였는데 프로젝트 버전이 바뀐 뒤 연결이 되지 않은 문제 때문에 최종적으로 프로젝트에는 도입할 수 없었습니다. 
    
    하지만 스프링으로 채팅 기능을 완성도 있게 구현한 것이 좋은 경험이었습니다.
    
- **spring**
    
    개발 초기에 백엔드 기능을 맡아 개발하였는데 스프링을 배울 수 있는 좋은 기회였습니다.
    
    nest.js랑 구조가 비슷하다는 생각이 들었고 방학 때 한번 제대로 배워보고 싶은 욕구가 생겼습니다. 

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/gimhanul">
                <img alt="김영민" src="https://avatars.githubusercontent.com/min050410" width="100" />
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/dlatldhs">
                <img alt="최원용" src="https://avatars.githubusercontent.com/wonyongChoi05?" width="100" />
            </a>
        </td>
    </tr>
    <tr>
        <td align="center">FRONT</td>
        <td align="center">BACK</td>
    </tr>
    <tr>
        <td align="center">김영민</td>
        <td align="center">최원용</td>
    </tr>
</table>

<aside>
