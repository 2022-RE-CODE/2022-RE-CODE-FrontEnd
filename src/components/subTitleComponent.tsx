import React from 'react'
import '../styles/subtitle.css';

const SubTitleComponent: React.FC = () => {
    return (
        <div className="subtitle">
            <div className="subtitle--container">
                <div className="subtitle--now-popular">최근 인기</div>
                <div className="subtitle--header">자신의 능력으로 추가 수익을 만들어보세요!</div>
                <div className="subtitle--sub-header">공개하자마자 뜨거운 반응인 리뷰 요청만 모았습니다.</div>
            </div>
        </div>
    )
}
export default SubTitleComponent;