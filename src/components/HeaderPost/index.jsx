import * as S from './styles'
import { Share, GithubLogo, CaretLeft, CalendarBlank, ChatsCircle  } from "phosphor-react";
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function HeaderPost({
    id,
    title,
    comments,
    updatedAt,
    githubLink,
    githubName,
 }) {
    return (
        <S.Container id={id}>
            <S.Content>
                <S.TitleWrapper>
                <NavLink to="/" title="Home" style={{ textDecoration: 'none' }}>
                    <CaretLeft size={12}/><span>Voltar</span>
                </NavLink>
                    <a href={githubLink} target="_blank"><span>Github</span> <Share size={12} /></a>
                </S.TitleWrapper>

                <S.TitleSummary>
                    <p>{title}</p>
                </S.TitleSummary>

                <S.PostDetails>
                    <S.DetailsWrapper>
                        <GithubLogo size={20} color={'#3A536B'}/> <p>{githubName}</p>
                    </S.DetailsWrapper>

                    <S.DetailsWrapper>
                        <CalendarBlank size={20} color={'#3A536B'}/> <p>{formatDistanceToNow(new Date(updatedAt), {
                            addSuffix: true,
                            locale: ptBR
                        })}</p>
                    </S.DetailsWrapper>

                    <S.DetailsWrapper>
                        <ChatsCircle size={20} color={'#3A536B'}/> <p>{comments <= 1 ? comments + ' Comentário' : comments + ' Comentários'}</p>
                    </S.DetailsWrapper>
                </S.PostDetails>
            </S.Content>
        </S.Container>
    )
} 