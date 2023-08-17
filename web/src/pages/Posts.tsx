import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import PostFilter from '../components/Posts/PostFilter';
import PostList from '../components/Posts/PostList';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { loggedInState } from '../recoil/AuthState/atoms';

const Posts: React.FC = () => {
    const loggedIn = useRecoilValue(loggedInState);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigate(location.pathname);
    }, []);

    return (
        <Page>
            <Title>커뮤니티</Title>
            <PostFilter />
            <PostList />
            {loggedIn && (
                <Link to="/posts/createpost">
                    <NewPost>게시글 작성</NewPost>
                </Link>
            )}
        </Page>
    );
};

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 750px;
    margin: 150px auto;
    min-height: calc(100vh - 300px);
`;

const Title = styled.h1`
    width: 750px;
`;

const NewPost = styled.button`
    position: absolute;
    right: 0px;
    bottom: 0px;
    padding: 0 10px;
    border-style: none;
    border-radius: 15px;
    background-color: #d7d7d7;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
    &: hover {
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
    }
`;

export default Posts;
