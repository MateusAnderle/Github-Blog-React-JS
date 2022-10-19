import * as S from './styles'
import { Share, GithubLogo, Buildings, Users } from "phosphor-react";

export function HeaderCard() {
    return (
        <S.Container>
            <S.AvatarPhoto src="https://avatars.githubusercontent.com/u/100309091?v=4" />
            <S.Content>
                <S.TitleWrapper>
                    <h3>Mateus Anderle da Silva</h3>
                    <a href="https://github.com/" target="_blank">Github <Share size={12} /></a>
                </S.TitleWrapper>

                <S.AvatarSummary>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                </S.AvatarSummary>

                <S.AvatarDetails>
                    <S.DetailsWrapper>
                        <GithubLogo size={20} color={'#3A536B'}/> <p>mateusanderle</p>
                    </S.DetailsWrapper>

                    <S.DetailsWrapper>
                        <Buildings size={20} color={'#3A536B'}/> <p>Rocketseat</p>
                    </S.DetailsWrapper>

                    <S.DetailsWrapper>
                        <Users size={20} color={'#3A536B'}/> <p>32 Seguidores</p>
                    </S.DetailsWrapper>
                </S.AvatarDetails>
            </S.Content>
        </S.Container>
    )
} 