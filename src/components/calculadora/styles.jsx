import styled from 'styled-components';

export const container = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 256px;
    text-align: center;
    border: 10px solid #101116;
    background: #101116;
    border-radius: 5px;
`;

export const keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);
`;

export const inp = styled.input`
    height: 75px;
    width: 249px;
    background-color: #10111600;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    text-align: right;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1px;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const clear = styled.button`
    grid-column: 1/3;
    grid-row: 1;
    font-weight: bolder;
    color: #262834;
    background: #56cbdb;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
`;

export const result = styled.button`
    grid-column: 3/5;
    grid-row: 5;
    color: #262834;
    background: #56cbdb;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
`;

export const backspace = styled.button`
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bolder;
    color: #262834;
    background: #56cbdb;
    font-size: 20px;
`;

export const div = styled.button`
    margin: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #56cbdb;
    color: white;
    font-weight: 500;
    font-size: 20px;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const multi = styled.button`
    margin: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #56cbdb;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const menos = styled.button`
    margin: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #56cbdb;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const mais = styled.button`
    margin: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #56cbdb;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const ponto = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const zero = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const um = styled.button`
    margin: 5px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const dois = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const tres = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const quatro = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const cinco = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const seis = styled.button`
    margin: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const sete = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const oito = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;

export const nove = styled.button`
    margin: 5px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: #262834;;
    color: white;
    font-weight: 500;
    & :focus,
    & :active{
        outline: none;
    }
`;