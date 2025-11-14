import React, { useEffect, useState}  from 'react';
import styled from 'styled-components';

  function DynamicTitle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `${count} times`;
    }, [count])


    return (
        <Wrapper>
          <h1>You clicked {count} times</h1>
          <Button onClick={() => setCount(count + 1)}>Click Me</Button>
        </Wrapper>
    );
  }
   
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
  `;

export default DynamicTitle;