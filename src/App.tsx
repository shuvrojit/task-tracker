import { useState } from "react"
import Column from "./components/Column"
import Card from "./components/card"
import data from "../data"
import styled from "styled-components"

function App() {
  const filteredData = []
  const incomplete = data.filter((d) => d.status === "Incomplete")
  const todo = data.filter((d) => d.status === "To Do")
  const overdue = data.filter((d) => d.status === "Overdue")
  const doing = data.filter((d) => d.status === "Doing")
  const under_review = data.filter((d) => d.status === "Under Review")
  const completed = data.filter((d) => d.status === "Completed")

  function pushFiltered(title: string, data ) {
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
        filteredData.map((d, i) => {
          return (
            <Column props={d} key={i}/>
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
flex-direction: row;
`
