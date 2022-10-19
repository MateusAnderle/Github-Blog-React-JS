import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    padding: 32px 40px;
    background-color: #0B1B2B;
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: row;
    width: 865px;
    margin: -80px 20px 0;
    border-radius: 8px;
    align-items: center;
`;

export const Content = styled.div`
    margin-left: 32px;
    width: 100%;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
        font-size: 14px;
        color: #3294F8;
        text-decoration: none;
        text-align: center;
        display: flex;
        align-items: center;

        span {
            margin-left: 8px;
            margin-right: 8px;
        }
    }
`;

export const TitleSummary = styled.div`
    p {
        color: #E7EDF4;
        font-size: 24px;
        margin-bottom: 5px;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
    }
`;

export const PostDetails = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    color: #C4D4E3;

    p{
        margin-left: 5px;
    }
`;
