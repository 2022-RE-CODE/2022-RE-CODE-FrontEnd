import React from 'react'
import '../../styles/allreviews.css';

const ViewAllReviewsComponent: React.FC = () => {

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
        <div className="view-all-review">
            <div className="view-all-review--container">
                <div className="view-all-review--title">모든 리뷰 요청</div>
                <div className="card-container">
                    {CardEl}
                </div>
            </div>
        </div>
    )
}
export default ViewAllReviewsComponent;