import styled from 'styled-components';

export const Container = styled.div`
    height: 260px;
    width: 415px;
    background-color: #112131;
    border-radius: 8px;
    margin-bottom: 36px;
`;

export const Header = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin:0;
    padding: 32px;
`;

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: start;
    font-size: 20px;
    color: #E7EDF4;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    overflow: hidden;
    height: 50px;
`;

export const Time = styled.div`
    display: flex;
    flex: 1;
    color: #7B96B2;
    padding-top: 4px;
    margin-left: 16px;
    justify-content: flex-end;
    font-size: 12px;
    text-align: start;
    white-space: nowrap;
`;


export const Content = styled.div`
    box-sizing: border-box;
    padding: 0 32px 32px 32px;
    text-align: justify;
    color: #AFC2D4;
    height: 110px;
    width: 100%;
    overflow: hidden;
`;
