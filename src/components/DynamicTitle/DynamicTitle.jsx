import React, { useEffect, useState, useId}  from 'react';
import styled from 'styled-components';

  function DynamicTitle() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const id = useId();

    useEffect(() => {
      document.title = `${name} clicked ${count} times`;
    }, [count, name])


    return (
        <Wrapper>
          <Form onSubmit={(e) => {
            e.preventDefault()
          }}>
            <Input 
              type='text'
              placeholder='Jason'
              id={`name-${id}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Label htmlFor={`name-${id}`}>Name</Label>
          </Form>
          <Button onClick={() => setCount(count + 1)}>Click Me</Button>
        </Wrapper>
    );
  }

  const Input = styled.input`
    width: 250px;
    height: 35px;
    padding: 0;
    line-height: 1.2;
    font-size: 1.25rem;

    &::placeholder {
      font-size: 1.25rem;
    }
  `;

  const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 600;
  `;

  const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `;
   
  const Button = styled.button`
    background-color: hsl(225deg 100% 50%);
    color: hsl(0deg 0% 100%);
    font-size: 1.25rem;
    font-weight: 700;
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    gap: 20px;
  `;

export default DynamicTitle;