import React from "react";
import QuestionList from "./QuestionList.json"
import styled from "styled-components";

const QuestionContainer=()=>{
    
const MainQuestions  = styled.div`
    font-size: 18px;
    margin-bottom: 60px;
`
const Header = styled(MainQuestions)`
    margin-bottom: 20px;
`
const Options  = styled(MainQuestions)`
    background: #eee;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 14px;
`;

return(
<>
    {QuestionList?.map((data,index)=>{
        return (
        <MainQuestions id="question">
           <Header>{`${index+1}. ${data?.question}`}</Header>
           <Options>{data?.options1}</Options>
           <Options>{data?.options2}</Options>
           <Options>{data?.options3}</Options>
           <Options>{data?.options4}</Options>
        </MainQuestions>
        )
    })}
</>
)
}
export default QuestionContainer;