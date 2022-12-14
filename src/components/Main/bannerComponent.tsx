import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/banner.css';
import useInterval from '../../utils/useInterval';

const BannerComponent: React.FC = () => {

    const bannerTitle = useMemo(() => {
        return "LEVEL UP YOUR CODES";
      }, []);

    const [landingTitle, setLandingTitle] = useState("");
    const [isIncreasing, setIsIncreasing] = useState(true);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useInterval(() => {
        if (count >= bannerTitle.length) {
            setIsIncreasing(false);
        }
        if (count <= 2) {
            setIsIncreasing(true);
        }
        setLandingTitle((prev: string) => {
          let result = "";
          if (isIncreasing) {
            result = prev ? bannerTitle.slice(0, count) : bannerTitle[0];
            setCount((prev) => prev + 1);
          }
          else {
            result = prev ? bannerTitle.slice(0, count) : bannerTitle[0];
            setCount((prev) => prev - 1);
          }
          return result;
        });
    }, 250);

    return (
        <div className="banner">
            <div className="banner--container">
                <div className="banner--container-firstline">
                    RE: CODE
                </div>
                <div className="banner--container-secondline">
                    {landingTitle}
                </div>
                <button className="btn-start-now" onClick={()=>navigate('/login')}>지금 시작하기</button>
            </div>
            <div className="polygon-1"></div>
            <div className="polygon-2"></div> 
            <div className="polygon-3"></div>
            <div className="polygon-4"></div>
        </div>
    )
}
export default BannerComponent;