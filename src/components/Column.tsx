import Card from "./card"
import styled from "styled-components"

const Column = ({props}) => {

  return (
    <>
      <ColumnContainer >
        <RowContainer>
      <h2>{props.title}</h2>
          <p>0</p>
        </RowContainer>
        <div className="column-container">
      {
        props.data.map((d, i) => {
          return (
            <Card key={i} data={d} />
          )
        })
      }
        </div>
      </ColumnContainer>
    </>
  )

}

export default Column

const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
color: #605766;
border-radius: 4px;
margin: 0.5rem;
background-color: #F2F4F7;

`

const RowContainer = styled.div`
padding: 1rem;

display: flex;
flex-direction: row;
justify-content: space-between;

background-color: #F2F4F7;
h2 {
font-size: 1rem;
font-weight: 700;
}
`
