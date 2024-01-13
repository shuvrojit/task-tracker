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
import React, { useEffect, useState } from "react"
import  Cross from "../assets/Cross.svg"
import {CardData} from "../../data"


Modal.setAppElement('#root')

const Card = (data: CardData ) => {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedFiles, setSelectedFiles] = useState<(string | File)[]>([]);
  const [fileLists, setFileLists] = useState<string[]>([]);

  const handleFileChange = async (e: React.ChangeEvent) => {
    setSelectedFiles([...selectedFiles, ...(e.target as HTMLInputElement).files as FileList ]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('files', selectedFiles[i]);
      }

      const response = await fetch('https://task-tracker-bt10.onrender.com/upload-files', {
        method: 'POST',
        body: formData,
      });

      // console.log('Upload successful', response);
    } catch (error) {
      console.error('Error uploading files', error);
    }
    getFiles()
  };

  useEffect(() => {
    getFiles()
  }, [selectedFiles, isOpen])

  async function getFiles () {
    try {
      const response = await fetch("https://task-tracker-bt10.onrender.com/files", {mode: "cors"})
      const data = await response.json()
      setFileLists(data.files)
    } catch(e) {
      console.error(e)
    }
  }

  function toggleModal () {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Modal
            isOpen={isOpen}
            // onAfterOpen={getFiles}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={toggleModal}
            role={"dialog"}
            // style={{
              // overlay: {
                // width: "900px",
                // height: "600px",
              // }
            // }}
          >
            <img style={{position: "absolute", top: "1rem", right: "1rem", width: "3rem", height: "3rem"}} src={Cross} alt="cross" onClick={toggleModal} />

            <RowContainer style={{margin: "2.5rem"}}>
              <input onChange={handleFileChange} type="file" multiple />
              <UploadBtn onClick={handleUpload}> Upload</UploadBtn>
            </RowContainer>

            <div style={{margin: "1rem", display: "flex", flexDirection: "column"}}>

            {fileLists.map((d, i) => {
              return (
               <div key={i}>
                 <p >{d} </p>
               </div>
              )
            })}
            </div>


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
              <Wrapper style={{backgroundColor: "#F2F4F7"}}>
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
                <p>{fileLists.length}</p>
                </RowContainer>
              <RowContainer>
              <Image src={CalendarImage} alt="calendar" />
                <p>{data.date}</p>

              </RowContainer>
            </RowContainer>

              </CardContainer>
        </>
    )
}

export default Card

const Image = styled.img`
width: 1.6rem;
height: 1.6rem;
border-radius: 50%;
object-fit: cover;
`

const Elipse = styled.div`
width: 1.6rem;
height: 1.6rem;
border-radius: 50%;
background-color: #F2F4F7;
display: flex;
color: black;
justify-content: center;
align-items: center;
font-size: 0.8rem;

`


const ProfileStyles = styled.div`
h3 {
font-size: 0.9rem;
font-weight: 600;
}
display: flex;
flex-direction: row;
align-items: center;
gap: 0.5rem;
`

const CardContainer = styled.div`
width: 328px;
height: 120px;
border-radius: 4px;
background-color: white;
font-size: 0.9rem;
margin: 0.5rem ;
padding: 0.5rem;

`

const RowContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0.5rem 0;
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
p {
font-size: 0.9rem;
}
`

const UploadBtn = styled.button`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

&:hover:after {
  transform: translate(0, 0);
}

&:active {
  background-color: #ffdeda;
  outline: 0;
}

&:hover {
  outline: 0;
}

@media (min-width: 768px) {
  & {
    padding: 0 40px;
  }
}
`
