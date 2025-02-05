import React from 'react';
import styled from '@emotion/styled';
import KakaoMapScriptLoader from '../components/FindMate/KakaoMapScriptLoader';

const FindMate: React.FC = () => {
    return (
        <FindMatePage>
            <PageTitle>운동 메이트 찾기</PageTitle>
            <KakaoMapScriptLoader />
        </FindMatePage>
    );
};

const FindMatePage = styled.div`
    width: 1440px;
    min-height: calc(100vh - 500px);
    margin: 120px auto 0;
    padding: 20px 60px;
`;
const PageTitle = styled.h2``;

export default FindMate;
