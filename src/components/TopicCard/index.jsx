import React from 'react'
import * as S from './styles'
import { NavLink } from 'react-router-dom';

export function TopicCard(){
    return(
        <NavLink to="/post" title="Post" style={{ textDecoration: 'none' }}>
            <S.Container>
                <S.Header>
                    <S.Title>JavaScript data types and data structures stats</S.Title>
                    <S.Time>Há 1 dia</S.Time>
                </S.Header>

                <S.Content>
                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available...
                </S.Content>
            </S.Container>
        </NavLink>
    )
}