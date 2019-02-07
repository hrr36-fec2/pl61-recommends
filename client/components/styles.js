import styled from 'styled-components';

const Styles = {
  List: styled.ul`
    background-color: #404040;
    font-family: 'Montserrat', sans-serif;
    list-style-type: none;
    padding: 0;
  `,

  Item: styled.div`
    padding: 8px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.5s;

    height: 53px;
    min-width: 650px;
    align-items: center;
    display: flex;

    :hover {
      background-color: black;
    }
  `,

  Wrap: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-width: 600px;
    padding: 0 0.5rem;
  `,

  Title: styled.div`
    color: #FFFFFF;
    font-size: 16px;
  `,

  Info: styled.div`
    color: #D3D3D3;
    font-size: 14px;
  `,

  Icon: styled.i`
    color: #D3D3D3;
    width: 20px;
  `,

  Add: styled.button`
    -o-transition:.3s;
    -ms-transition:.3s;
    -moz-transition:.3s;
    -webkit-transition:.3s;
    transition:.3s;

    background-color: black;
    border-style: solid;
    border-color: white;
    border-radius: 20px;
    color: white;
    width: 60px;
    height: 30px;

    :hover {
      background-color: #303030;
    }

    :focus {
      outline: none;
    }

    :active {
      background-color: white;
      color: black;
    }
  `
}

export default Styles;