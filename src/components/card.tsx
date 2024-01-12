import styled from "styled-components"
import Modal from "react-modal"
import ClientImage from "/client-image.jpg"
import ProfileImage from "/profile-image.jpg"
import StackImage from "../assets/stack.svg"
import TaskImage from "../assets/tasks.svg"
import AttachImage from "../assets/Attach.svg"
import CommentImage from "../assets/Comment.svg"
import CalendarImage from "../assets/Calendar.svg"
import Profile1 from "/extra-profile-1.jpg"
import Profile2 from "/extra-profile-2.jpg"
import { useState } from "react"

// TODO: Fix design

Modal.setAppElement('#root')

const Card = () => {
  const date = new Date();
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal () {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={toggleModal}
            role={"dialog"}
          >
            <p>Content</p>
            <p onClick={toggleModal}>close</p>
          </Modal>

          <CardContainer>
            <RowContainer>
            <ProfileStyles>
                <Image src={ClientImage} alt="client-image" />
                <h3>Client Name</h3>
            </ProfileStyles>
          <ProfileStyles>
                <Image src={ProfileImage} alt="profile-image" />
                <h3>Profile Name</h3>
            </ProfileStyles>
            </RowContainer>

            <RowContainer>
            <Wrapper>
              <img src={StackImage} alt="stack" />
              <p>Nunc eleifend leo vitae magna...</p>
            </Wrapper>
              <Wrapper style={{backgroundColor: "grey"}}>
              <img src={TaskImage} alt="tasks" />
              <p>1/2</p>
            </Wrapper>

            </RowContainer>
            <RowContainer>
              <Image src={Profile1} alt="profile" />
              <Image src={Profile2} alt="profile" />
              <Elipse>12+</Elipse>

              <RowContainer>
              <Image src={CommentImage} alt="comment" />
                <p>15</p>
                </RowContainer>
              <RowContainer>
                <Image onClick={toggleModal} src={AttachImage} alt="attach" />
                <p>23</p>
                </RowContainer>
              <RowContainer>
              <Image src={CalendarImage} alt="calendar" />
                <p>{date.toDateString()}</p>

              </RowContainer>
            </RowContainer>

              </CardContainer>
        </>
    )
}

export default Card

const Image = styled.img`
width: 1.8rem;
height: 1.8rem;
border-radius: 50%;
object-fit: cover;
`

const Elipse = styled.div`
width: 1.8rem;
height: 1.8rem;
border-radius: 50%;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;

`


const ProfileStyles = styled.div`
h3 {
font-size: 1rem;
font-weight: 500;
}
display: flex;
flex-direction: row;
align-items: center;
gap: 0.5rem;
`

const CardContainer = styled.div`
width: 400px;
height: 120px;
border: 0.5px solid grey;
`

const RowContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0.5rem;
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
