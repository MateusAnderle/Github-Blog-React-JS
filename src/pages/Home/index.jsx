import React, { useContext, useEffect, useState } from 'react'
import * as S from './styles'
import backgroundImage from '../../assets/backgroundImage.png'
import { HeaderCard } from '../../components/HeaderCard'
import { TopicCard } from '../../components/TopicCard'
import { useForm } from 'react-hook-form'
import { DataContext } from '../../context/DataContext'

export function Home() {
  const { register, handleSubmit } = useForm();
  const { userData, userIssue, fetchData } = useContext(DataContext);

  function handleSearch(data){
    fetchData(data.query)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <S.Container>
      <S.Background src={backgroundImage} alt=""/>
        
      <HeaderCard 
        avatatPhoto={userData?.avatar_url}
        userName={userData?.name}
        githubLink={userData?.html_url}
        bio={userData?.bio}
        githubName={userData?.login}
        company={userData?.company}
        followers={userData?.followers}
      />

      <S.Summary>
        <S.Header>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </S.Header>

        <S.SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
          <input
            type="text" 
            placeholder='Buscar conteúdo' 
            {...register('query')}
          />

          <button type="submit">
            Buscar
          </button>
        </S.SearchFormContainer>
      </S.Summary>
    
      <S.ContentWrapper>
          {userIssue?.items?.map((item) => {
            return (
              <TopicCard 
                id={item.id} 
                title={item.title} 
                body={item.body} 
                comments={item.comments}
                updatedAt={item.updated_at}
                githubLink={userData?.html_url}
                githubName={userData?.login}
              />
            )
          })}
      </S.ContentWrapper>
    </S.Container>
  )

}
