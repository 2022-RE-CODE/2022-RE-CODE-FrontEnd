import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/postinfo.css';
import instanceWithToken from '../api/axiosWithToken.instance';
import { UserType } from '../../redux/user/reducer/user.reducerType';
import { CategoryType, CommentType } from './postType';
import { Editor } from '@tinymce/tinymce-react';

type PostUploadComponentProps = {
    isAuthenticated: boolean | null,
    postInfo: {
        postId: number,
        title: string,
        content: string,
        view: number,
        likes: number,
        createMinutesAgo: string,
        categories: CategoryType[],
        user: UserType,
        comments: CommentType[]
    } | undefined,
};

type CategoriesType = {
    name: string;
}[];

const PostModifyComponent: React.FC<PostUploadComponentProps> = ({
    isAuthenticated,
    postInfo
}) => {

    const { postId } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState<string | undefined>("");
    const [content, setContent] = useState<string | undefined>("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState<CategoriesType>([]);

    useEffect(() => {
        setTitle(postInfo?.title);
        setContent(postInfo?.content)
    }, [postInfo]);

    const titleHandler = (e: any) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();
        await instanceWithToken.put(`post/update/${postId}`, JSON.stringify({
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
        setCategories(prevState => [...prevState, { name: name }]);
    }

    const deleteCategory = (name: string) => {
        setCategories(categories.filter(state => state.name !== name));
    }

    const handleEditorChange = (content: any, editor: any) => {
        setContent(content);
    };

    return (
        <div className="post-upload">
            <div className="post-upload--container">
                <div className="post-upload--title1">?????? ?????? ??? ????????????</div>
                <form className="post-upload--form" onSubmit={submitHandler}>
                    <input type="text" value={title} onChange={titleHandler} placeholder="??????"></input>
                    <Editor
                        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                        init={{
                            skin: "snow",
                            icons: "thin",
                            placeholder: "Ask a question or post an update...",
                            height: 500,
                            menubar: true,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen textcolor ",
                                "insertdatetime media table paste code help wordcount",
                                "codesample"
                            ],
                            textcolor_rows: "4",
                            codesample_global_prismjs: true,
                            toolbar:
                                "undo redo codesample| styleselect | fontsizeselect | code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent"
                        }}
                        onEditorChange={handleEditorChange}
                        value={content}
                    />
                    <label className="post-upload-category--label"></label>
                    <div className="post-upload-categories">
                        <div className="post-upload-category" onClick={() => addCategory("?????????")}>?????????</div>
                        <div className="post-upload-category" onClick={() => addCategory("?????????")}>?????????</div>
                        <div className="post-upload-category" onClick={() => addCategory("??????")}>??????</div>
                        <div className="post-upload-category" onClick={() => addCategory("??????????????????")}>??????????????????</div>
                        <div className="post-upload-category" onClick={() => addCategory("?????????")}>?????????</div>
                        <div className="post-upload-category-input-wrap">
                            <div className="post-upload-category-input-label">?????? ????????? ?????? ????????????</div>
                            <input
                                className="post-upload-category-input"
                                onChange={CategoryHandler}>
                            </input>
                            <button
                                className="post-upload-category-button"
                                onClick={() => addCategory(category)}
                                type="button">
                                ????????????
                            </button>
                        </div>
                    </div>
                    <label className="post-upload-category--label-selected"></label>
                    <div className="post-upload-categories">
                        {categories.map((category: CategoryType) => {
                            return (
                                <div
                                    className="post-upload-category"
                                    onClick={() => deleteCategory(category.name)}>
                                    {category.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="login--form--btnContainer">
                        <button className="login--form--submitBtn" type="submit">????????????</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModifyComponent;