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
import { useEffect, useState } from "react"
import  Cross from "../assets/Cross.svg"

// TODO: Fix design

Modal.setAppElement('#root')

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileLists, setfileLists] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('files', selectedFiles[i]);
      }

      const response = await fetch('http://localhost:5000/upload-files', {
        method: 'POST',
        body: formData,
      });

      console.log('Upload successful', response);
    } catch (error) {
      console.error('Error uploading files', error);
    }
  };

  useEffect(() => {
    getFiles()
  }, [selectedFiles, isOpen])

  async function getFiles () {
    try {
    const response = await fetch("http://localhost:5000/files")
      const data = await response.json()
      setfileLists(data.files)
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

            {fileLists.map((d, i) => {
              return (
               <>
                 <p>{d}</p>
               </>
              )
            })}

              <input onChange={handleFileChange} type="file" multiple />
              <button onClick={handleUpload}> Upload</button>
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
                <p>{props.data.date}</p>

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
