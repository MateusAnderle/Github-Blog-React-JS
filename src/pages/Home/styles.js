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

export const SearchFormContainer = styled.form`
        box-sizing: border-box;
    input {
        box-sizing: border-box;
        width: 730px;
        border-radius: 6px;
        border-width: 2px;
        border-color: #1C2F41;
        background-color: #040F1A;
        height: 50px;
        margin-bottom: 100px;
        color: #fff;
        padding: 0 16px;
        font-size: 16px;
        font-family: 'Nunito', sans-serif;

        ::placeholder {
            display: flex;
            align-items: center;
            padding: 12px 0px;
            font-size: 16px;
            font-family: 'Nunito', sans-serif;
            color: #3A536B;
        }
    }

    button {
        align-items: center;
        border: 0;
        padding: 0.8rem 2rem;
        margin-left: 15px;
        background-color: #040F1A;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        border: 2px solid #1C2F41;
        color: #3A536B;
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;

        :hover {
        border-color: #a7a7a7;
        color: #a7a7a7;
        transition: color 0.6s, border-color 0.6s;
        }
    }
`;

export const Summary = styled.div`
    width: 865px;
    height: 240px;
`;

export const Header = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    h2 {
        font-size: 18px;
        color: #C4D4E3;
    }

    p {
        font-size: 14px;
        color: #7B96B2;
    }
`;

export const Search = styled.input`
    box-sizing: border-box;
    width: 100%;
    border-radius: 6px;
    border-width: 2px;
    border-color: #1C2F41;
    background-color: #040F1A;
    height: 50px;
    margin-bottom: 100px;
    color: #fff;
    padding: 0 16px;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;

    ::placeholder {
        display: flex;
        align-items: center;
        padding: 12px 0px;
        font-size: 16px;
        font-family: 'Nunito', sans-serif;
        color: #3A536B;
    }
`;

export const ContentWrapper = styled.div`
    width: 865px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 150px;
`;