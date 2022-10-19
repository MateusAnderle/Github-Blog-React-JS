import * as S from './styles'
import { Share, GithubLogo, CaretLeft, CalendarBlank, ChatsCircle  } from "phosphor-react";
import { NavLink } from 'react-router-dom'

export function HeaderPost() {
    return (
        <S.Container>
            <S.Content>
                <S.TitleWrapper>
                <NavLink to="/" title="Home" style={{ textDecoration: 'none' }}>
                    <CaretLeft size={12}/><span>Voltar</span>
                </NavLink>
                    <a href="https://github.com/" target="_blank"><span>Github</span> <Share size={12} /></a>
                </S.TitleWrapper>

                <S.TitleSummary>
                    <p>JavaScript data types and data structures.</p>
                </S.TitleSummary>

                <S.PostDetails>
                    <S.DetailsWrapper>
                        <GithubLogo size={20} color={'#3A536B'}/> <p>mateusanderle</p>
                    </S.DetailsWrapper>

                    <S.DetailsWrapper>
                        <CalendarBlank size={20} color={'#3A536B'}/> <p>Há 1 dia</p>
                    </S.DetailsWrapper>

                    <S.DetailsWrapper>
                        <ChatsCircle size={20} color={'#3A536B'}/> <p>5 Comentários</p>
                    </S.DetailsWrapper>
                </S.PostDetails>
            </S.Content>
        </S.Container>
    )
} 