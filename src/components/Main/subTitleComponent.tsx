import React from 'react'
import '../../styles/subtitle.css';

const SubTitleComponent: React.FC = () => {
    return (
        <div className="subtitle">
            <div className="subtitle--container">
                <div className="subtitle--now-popular">최근 인기</div>
                <div className="subtitle--header">자신의 능력으로 리뷰를 남겨보세요!</div>
                <div className="subtitle--sub-header">조회수가 가장 높은 리뷰 요청만 모았습니다.</div>
            </div>
        </div>
    )
}
export default SubTitleComponent;