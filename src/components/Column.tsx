import Card from "./card"
import styled from "styled-components"

const Column = ({props}) => {

  return (
    <>
      <ColumnContainer>
      <h2>{props.title}</h2>
      {
        props.data.map((d, i) => {
          return (
            <Card key={i} data={d} />
          )
        })
      }
      </ColumnContainer>
    </>
  )

}

export default Column

const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
`
