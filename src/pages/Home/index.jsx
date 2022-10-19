import React from 'react'
import * as S from './styles'
import backgroundImage from '../../assets/backgroundImage.png'
import { HeaderCard } from '../../components/HeaderCard'
import { TopicCard } from '../../components/TopicCard'
import { useForm } from 'react-hook-form'

export function Home() {

  const { register, handleSubmit } = useForm();

  /*const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )*/

  async function handleSearch(data){
    alert('oi')
    console.log(data.query)
    //await fetchTransactions(data.query)
    //exemplo na DT MONEY > PAGES > TRANSACTIONS
  }

  return (
    <S.Container>
      <S.Background src={backgroundImage} alt=""/>
        
      <HeaderCard />

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
      
      {/*Aqui vai um MAP*/}
      <S.ContentWrapper> 
        <TopicCard/>
        <TopicCard/>
        <TopicCard/>
      </S.ContentWrapper>

    </S.Container>
  )
}
