import Column from "./components/Column"
import data from "../data"
import styled from "styled-components"
import {CardData} from "../data"

export interface FilteredData {
  title: string,
  data: CardData[],
}

function App() {
  const filteredData: FilteredData[] = []
  const incomplete = data.filter((d) => d.status === "Incomplete")
  const todo = data.filter((d) => d.status === "To Do")
  const overdue = data.filter((d) => d.status === "Overdue")
  const doing = data.filter((d) => d.status === "Doing")
  const under_review = data.filter((d) => d.status === "Under Review")
  const completed = data.filter((d) => d.status === "Completed")

  function pushFiltered(title: string, data: CardData[] ) {
  filteredData.push({
    title: `${title}`,
    data: data,
  })
  }

  pushFiltered("Incomplete", incomplete)
  pushFiltered("To Do", todo)
  pushFiltered("Doing", doing)
  pushFiltered("Under Review", under_review)
  pushFiltered("Completed", completed)
  pushFiltered("Overdue", overdue)


  return (
    <>
      <MainContainer>

      {
        filteredData.map((filData: FilteredData, i: number) => {
          return (
            <Column {...filData} key={i}/>
          )

        })
      }
        </MainContainer>
    </>
  )
}

export default App

const MainContainer = styled.div`
display: flex;
height: 96vh;
width: 200vw;
flex-direction: row;
`
