import React from 'react'
import '../../styles/popularReveiewer.css';

const PopularReviewerComponent: React.FC = () => {

    const CardEl = Array.from("____").map(() => {
        return (<div className="card">
            <div className="card--img">예시 이미지</div>
            <div className="card--title">대용량 트래픽 처리 방법좀 알려주세요!</div>
            <div className="card--tags">
                <div className="card--tag1">Spring</div>
                <div className="card--tag2">대용량 처리</div>
            </div>
        </div>)
    })

    return (
        <div className="popular-reviewer">
            <div className="popular-reviewer--container">
                <div className="popular-reviewer--title">최근 인기있는 리뷰어</div>
                <div className="card-container">
                    {CardEl}
                </div>
            </div>
        </div>
    )
}
export default PopularReviewerComponent;