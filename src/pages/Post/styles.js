import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #071422;
    color: #FFF;
    font-family: 'Nunito', sans-serif;
`;

export const Background = styled.img`
    height: 296px;
    width: 100%;
    max-width: 1440px;
`;

export const Content = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 865px;
    padding: 40px 40px;
    font-size: 16px;
    font-weight: 400;
    color: #AFC2D4;
    text-align: justify;
    font-family: 'Nunito', sans-serif;
    min-height: 50vh;
    margin-bottom: 150px;
`;