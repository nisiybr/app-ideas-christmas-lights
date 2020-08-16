import styled from 'styled-components';
import { shade, rgba } from 'polished';

interface LightProps {
  lightColor: string;
  lightOn: boolean;
}
interface SwitchButtonProps {
  isOn: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 3%;
    color: #01d63c;
    font-size: 96px;
    font-weight: bold;
    line-height: 100px;
    text-shadow: 9px 8px 6px rgba(0, 0, 0, 0.4);
  }

  div {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: column;
    }

    div + div {
      margin-left: 10%;
    }
  }
`;
export const Light = styled.div<LightProps>`
  min-height: 100px;
  min-width: 100px;

  background-color: ${props =>
    props.lightOn ? props.lightColor : shade(0.6, props.lightColor)};
  border-radius: 50%;
  border: 2px #19241c solid;
  box-shadow: ${props =>
    !props.lightOn
      ? '7px 11px 8px rgba(0, 0, 0, 0.25)'
      : `0px 200px 100px 280px ${rgba(props.lightColor, 0.5)}`};
`;

export const SwitchButton = styled.button<SwitchButtonProps>`
  margin-top: 5%;
  min-height: 200px;
  min-width: 200px;
  border-radius: 50%;

  border: ${props => (props.isOn ? '6px solid #0019f7' : '15px solid #0019f7')};
  background-color: ${props => (props.isOn ? '#008D28' : '#01D63C')};

  font-size: 48px;
  line-height: 67px;
  font-weight: bold;
  color: #0047ff;

  transition: background 1s;
  transition: border 0.5s;
`;
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    margin-top: -1%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    p {
      width: 100%;
      font-size: 30px;
      color: #000;
      text-align: center;
      font-weight: bold;
      color: #01d63c;
    }

    input {
      margin-top: 1%;
      -webkit-appearance: none;
      width: 70%;
      height: 15px;
      border-radius: 20px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      direction: rtl;
    }

    input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4caf50;
      cursor: pointer;
    }
    input:hover {
      opacity: 1;
    }
    input::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4caf50;
      cursor: pointer;
    }
  }
`;
