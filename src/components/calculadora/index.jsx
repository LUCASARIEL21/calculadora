import React, {useState} from 'react'
import * as S from './styles'

export const Calculadora = () => {
    const [resultado, setResultado] = useState("")

    const handleClick = (e) => {
      setResultado(resultado.concat(e.target.name))
    }

    const clear = () => {
      setResultado("")
    }

    const backspace = () => {
      setResultado(resultado.slice(0, - 1))
    }

    const calcular = () =>{
      try{
        setResultado(eval(resultado).toString())
      }catch(err){
        setResultado("Erro")
      }
    }
  return (
    <S.container>
        <form>
            <S.inp type="text" value={resultado}/>
        </form>
        <S.keypad>
            <S.clear onClick={clear}>Clear</S.clear>
            <S.backspace onClick={backspace}>C</S.backspace>
            <S.div name='/' onClick={handleClick}>&divide;</S.div>
            <S.sete name='7' onClick={handleClick}>7</S.sete>
            <S.oito name='8' onClick={handleClick}>8</S.oito>
            <S.nove name='9' onClick={handleClick}>9</S.nove>
            <S.multi name='*' onClick={handleClick}>&times;</S.multi>
            <S.quatro name='4' onClick={handleClick}>4</S.quatro>
            <S.cinco name='5' onClick={handleClick}>5</S.cinco>
            <S.seis name='6' onClick={handleClick}>6</S.seis>
            <S.menos name='-' onClick={handleClick}>&ndash;</S.menos>
            <S.um name='1' onClick={handleClick}>1</S.um>
            <S.dois name='2' onClick={handleClick}>2</S.dois>
            <S.tres name='3' onClick={handleClick}>3</S.tres>
            <S.mais name='+' onClick={handleClick}>+</S.mais>
            <S.zero name='0' onClick={handleClick}>0</S.zero>
            <S.ponto name='.' onClick={handleClick}>.</S.ponto>
            <S.result onClick={calcular}>=</S.result>
        </S.keypad>
    </S.container>
  )
}