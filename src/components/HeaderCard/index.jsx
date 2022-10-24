import * as S from './styles'
import { Share, GithubLogo, Buildings, Users } from "phosphor-react";

export function HeaderCard({
    avatatPhoto,
    userName,
    githubLink,
    bio,
    githubName,
    company,
    followers,
}) {
    return (
        <S.Container>
            <S.AvatarPhoto src={avatatPhoto} />
            <S.Content>
                <S.TitleWrapper>
                    <h3>{userName}</h3>
                    <a href={githubLink} target="_blank">Github <Share size={12} /></a>
                </S.TitleWrapper>

                <S.AvatarSummary>
                    <p>{bio}</p>
                </S.AvatarSummary>

                <S.AvatarDetails>
                    <S.DetailsWrapper>
                        <GithubLogo size={20} color={'#3A536B'}/> <p>{githubName}</p>
                    </S.DetailsWrapper>

                    {company &&
                        <S.DetailsWrapper>
                            <Buildings size={20} color={'#3A536B'}/> <p>{company}</p>
                        </S.DetailsWrapper>
                    }

                    <S.DetailsWrapper>
                        <Users size={20} color={'#3A536B'}/> <p>{followers} {followers >= 2 ? ' Seguidores' : ' Seguidor'}</p>
                    </S.DetailsWrapper>
                </S.AvatarDetails>
            </S.Content>
        </S.Container>
    )
} 