import React, { useContext } from 'react'
import * as S from './styles'
import backgroundImage from '../../assets/backgroundImage.png'
import { HeaderPost } from '../../components/HeaderPost'
import ReactMarkdown from 'react-markdown'
import { DataContext } from '../../context/DataContext'
import remarkGfm from 'remark-gfm'

export function Post(){

  const { postData } = useContext(DataContext);
  
  const mark = `${postData.body}`;

  return (
    <S.Container>
      <S.Background src={backgroundImage} alt=""/>
        
      <HeaderPost 
        id={postData.id}
        title={postData.title}
        comments={postData.comments}
        updatedAt={postData.updatedAt}
        githubLink={postData.githubLink}
        githubName={postData.githubName}
      />

        <S.Content>
          <ReactMarkdown children={mark} remarkPlugins={[remarkGfm]}/>
        </S.Content>
      
    </S.Container>
  )
}
