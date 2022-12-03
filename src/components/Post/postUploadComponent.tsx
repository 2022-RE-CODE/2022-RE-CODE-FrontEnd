import React, { useState } from 'react'
import '../../styles/postinfo.css';
import instanceWithToken from '../api/axiosWithToken.instance';
import FobbidenErrorComponent from '../auth/fobbidenErrorComponent';

type PostUploadComponentProps = {
    isAuthenticated: boolean | null;
};

type CategoriesType = {
    name: string;
}[];

const PostUploadComponent: React.FC<PostUploadComponentProps> = ({
    isAuthenticated,
}) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
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
    };

    const addCategory = (name: string) => {
        setCategories([{name: name}]);
    }

    return (
        <div className="post-upload">
            {isAuthenticated ?
                <>
                    <div className="post-upload--container">
                        <div className="post-upload--title1">코드 리뷰 글 작성하기</div>
                        <form className="post-upload--form" onSubmit={submitHandler}>
                            <input type="text" value={title} onChange={titleHandler} placeholder="제목"></input>
                            <textarea value={content} onChange={contentHandler} placeholder="내용"></textarea>
                            <label className="post-upload-category--label"></label>
                            <div className="post-upload-categories">
                                <div className="post-upload-category" onClick={()=>addCategory("리액트")}>리액트</div>
                                <div className="post-upload-category">스프링</div>
                                <div className="post-upload-category">자바</div>
                                <div className="post-upload-category">리액트</div>
                                <div className="post-upload-category">리액트</div>
                            </div>
                            <div className="login--form--btnContainer">
                                <button className="login--form--submitBtn" type="submit">글쓰기</button>
                            </div>
                        </form>
                    </div>
                </>
                : <FobbidenErrorComponent />}
        </div>
    )
}

export default PostUploadComponent;