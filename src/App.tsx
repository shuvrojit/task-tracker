import { useState } from "react"
import Column from "./components/Column"
import Card from "./components/card"
import data from "../data"
import styled from "styled-components"

function App() {
  const filteredData = []
  const upcoming = data.filter((d) => d.status === "Upcoming")
  const incomplete = data.filter((d) => d.status === "Incomplete")
  const todo = data.filter((d) => d.status === "To Do")

  function pushFiltered(title: string, data ) {
  filteredData.push({
    title: `${title}`,
    data: data,
  })
  }

  pushFiltered("Upcoming", upcoming)
  pushFiltered("Incomplete", incomplete)
  pushFiltered("To Do", todo)


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
