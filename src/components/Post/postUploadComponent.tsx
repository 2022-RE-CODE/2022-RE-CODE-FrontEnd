import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles/postinfo.css';
import instanceWithToken from '../api/axiosWithToken.instance';
import FobbidenErrorComponent from '../Auth/fobbidenErrorComponent';
import { CategoryType } from './postType';

type PostUploadComponentProps = {
    isAuthenticated: boolean | null;
};

type CategoriesType = {
    name: string;
}[];

const PostUploadComponent: React.FC<PostUploadComponentProps> = ({
    isAuthenticated,
}) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState<CategoriesType>([]);

    const titleHandler = (e: any) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const contentHandler = (e: any) => {
        e.preventDefault();
        setContent(e.target.value);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        instanceWithToken.post("post", JSON.stringify({
            title: title,
            content: content,
            categories: categories
        }));
        navigate('/post');
    };

    const CategoryHandler = (e: any) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

    const addCategory = (name: string) => {
        if (!name.length) return;
        setCategories(prevState => [...prevState, {name: name}]);
    }

    const deleteCategory = (name: string) => {
        setCategories(categories.filter(state => state.name !== name));
    }

    return (
        <div className="post-upload">
            {/* TODO :: 테스트용 주석 제거 */}
            {/* {isAuthenticated ? */}
                <>
                    <div className="post-upload--container">
                        <div className="post-upload--title1">코드 리뷰 글 작성하기</div>
                        <form className="post-upload--form" onSubmit={submitHandler}>
                            <input type="text" value={title} onChange={titleHandler} placeholder="제목"></input>
                            <textarea value={content} onChange={contentHandler} placeholder="내용"></textarea>
                            <label className="post-upload-category--label"></label>
                            <div className="post-upload-categories">
                                <div className="post-upload-category" onClick={()=>addCategory("리액트")}>리액트</div>
                                <div className="post-upload-category" onClick={()=>addCategory("스프링")}>스프링</div>
                                <div className="post-upload-category" onClick={()=>addCategory("자바")}>자바</div>
                                <div className="post-upload-category" onClick={()=>addCategory("타입스크립트")}>타입스크립트</div>
                                <div className="post-upload-category" onClick={()=>addCategory("넥스트")}>넥스트</div>
                                <div className="post-upload-category-input-wrap">
                                    <div className="post-upload-category-input-label">또는 사용자 지정 카테고리</div>
                                    <input 
                                        className="post-upload-category-input" 
                                        onChange={CategoryHandler}>    
                                    </input>
                                    <button 
                                        className="post-upload-category-button" 
                                        onClick={()=>addCategory(category)}
                                        type="button">
                                            선택하기
                                    </button>
                                </div>
                            </div>
                            <label className="post-upload-category--label-selected"></label>
                            <div className="post-upload-categories">
                                {categories.map((category: CategoryType) => {
                                    return (
                                        <div 
                                            className="post-upload-category" 
                                            onClick={()=>deleteCategory(category.name)}>
                                                {category.name}
                                        </div>
                                    )
                            })}
                            </div>
                            <div className="login--form--btnContainer">
                                <button className="login--form--submitBtn" type="submit">글쓰기</button>
                            </div>
                        </form>
                    </div>
                </>
                {/* : <FobbidenErrorComponent />} */}
        </div>
    )
}

export default PostUploadComponent;