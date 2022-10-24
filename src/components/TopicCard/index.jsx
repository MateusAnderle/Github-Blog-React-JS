import React, { useContext } from 'react'
import * as S from './styles'
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { DataContext } from '../../context/DataContext';

export function TopicCard({ 
    id,
    title,
    body,
    comments,
    updatedAt,
    githubLink,
    githubName,
}){

    const { setPostData } = useContext(DataContext);

    const markBody = `${body}`;

    function handleIssueId(){
        setPostData(
            {
                id: id,
                title: title, 
                body: body, 
                comments: comments,
                updatedAt: updatedAt,
                githubLink: githubLink,
                githubName: githubName,
            }
        )
    }

    return(
        <NavLink 
            to="/post" 
            title="Post" 
            style={{ textDecoration: 'none' }}
            onClick={handleIssueId}
        >
            <S.Container>
                <S.Header>
                    <S.Title>{title}</S.Title>
                    <S.Time>
                        {formatDistanceToNow(new Date(updatedAt), {
                            addSuffix: true,
                            locale: ptBR
                        })}
                    </S.Time>
                </S.Header>

                <S.Content>
                    <ReactMarkdown children={markBody}/>
                </S.Content>
            </S.Container>
        </NavLink>
    )
}