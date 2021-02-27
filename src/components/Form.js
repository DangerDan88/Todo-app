import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const StyledButton = styled.button`
  padding: 10px;
`;
//TOdO figure out how to get value from form submit getting undefined right now but click handler is working
export default function Form(initialValue) {
  const [toDo, setTodo] = useState(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name);

    //  setTodo(...event.target.name);
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          Goals:
          <input type="text" name="goals" />
        </label>
        <StyledButton type="submit" value="Submit">
          Submit
        </StyledButton>
      </form>
    </FormContainer>
  );
}
