import styled from 'react-sc'
import { Image } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

export const Detail = styled.div`
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
    margin-top:3%;
    padding: 10%;
    padding-top: 25px;
    height: 761px;

`

export const Head = styled.p`
    font-size: 30px;
  	letter-spacing: 0.4px;
    font-weight: bold;

`
export const Head2 = styled.p`
    font-size: 15px;
  	letter-spacing: 0.4px;
    font-weight: bold;
    padding-top: 10px;

`
export const Inboxtext = styled.p`
    font-size: 15px;
    color:#d8d8d8;
  	letter-spacing: 0.4px;
    font-weight: bold;
    padding-left: 5%;
    padding-top: 2%;
    text-align: center;

`
export const Inner = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 340px;
    position:relative;
    padding:3%;
    border: solid 1px rgba(151, 151, 151, 0.66);
`
export const UploadBox = styled.div`
    position:relative;
    border: solid 1px rgba(151, 151, 151, 0.66);
    border-radius: 8px;
    width: 100%;
    height: 250px;
    padding: 0px 20px 40px 20px;
    overflow-y: scroll;

`
export const INInner = styled.div`
    border: dashed 1px rgba(151, 151, 151, 0.66);
    border-radius: 8px;
    position:relative;
    padding:5%;
    padding-top: 15%;
    height: 268px;
`
export const Submitupload = styled.button`
    display:block;
    margin: auto;
    width: 268px;
  	height: 36px;
  	border-radius: 20px;
  	background-color: #3a7bd5;
    padding: 1%;
    color: white;
    float:center;
    border-color: white;
`
export const Submit = styled.button`
    width: 164px;
  	height: 40px;
  	border-radius: 20px;
  	background-color: #f7555f;
    padding: 1%;
    color: white;
    margin: 1% 80%;
    border-color: white;
`

export const inputStyle = styled.input`
    opacity: 0;
    position: absolute;
`

export const Imagestyle = styled(Image)`
  &&&{
    position:relative;
    left:10px;
    display: block;
    margin: auto;
    width: 74px;
    height: 63px;
  }
`
export const DropzoneStyle = styled(Dropzone)`
  &&&{
    border: dashed 1px rgba(151, 151, 151, 0.66);
    border-radius: 8px;
    position:relative;
    padding:5%;
    padding-top: 15%;
    height: 268px;
  }
`
