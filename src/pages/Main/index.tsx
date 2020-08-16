import React, { useState, useCallback, useEffect, useMemo } from 'react';

import { Container, Light, SwitchButton, SliderContainer } from './styles';

const Main: React.FC = () => {
  const [stringOn, setStringOn] = useState(true);
  const [ratio, setRatio] = useState('60');
  const [timeInterval, setTimeInterval] = useState(500);
  const [lights, setLights] = useState([
    {
      lightColor: '#FF00E5',
      lightOn: true,
    },
    {
      lightColor: '#FFFFFF',
      lightOn: false,
    },
    {
      lightColor: '#05FF00',
      lightOn: true,
    },
    {
      lightColor: '#FF0000',
      lightOn: false,
    },
    {
      lightColor: '#0047FF',
      lightOn: true,
    },
    {
      lightColor: '#EBFF00',
      lightOn: false,
    },
    {
      lightColor: '#FF7A00',
      lightOn: true,
    },
  ]);

  const changeIntensity = useCallback(() => {
    if (!stringOn) {
      const newLights = lights.map(light => ({
        lightColor: light.lightColor,
        lightOn: false,
      }));
      setLights(newLights);
      return;
    }

    const newLights = lights.map(light => ({
      lightColor: light.lightColor,
      lightOn: !light.lightOn,
    }));
    setLights(newLights);
  }, [lights, stringOn]);

  const switchString = useCallback(() => {
    const newStringON = !stringOn;

    setStringOn(newStringON);

    if (newStringON) {
      let aux = false;
      const newLights = lights.map(light => {
        aux = !aux;
        return {
          lightColor: light.lightColor,
          lightOn: aux,
        };
      });
      setLights(newLights);
    }
  }, [stringOn, lights]);

  useMemo(() => {
    const newTimeInterval = 10 * parseInt(ratio);
    setTimeInterval(newTimeInterval);
  }, [ratio]);

  useEffect(() => {
    clearInterval();
    const interval = setInterval(() => {
      changeIntensity();
    }, timeInterval);
    return () => clearInterval(interval);
  }, [changeIntensity, timeInterval]);

  return (
    <Container>
      <h1>Christmas Lights</h1>
      <div>
        {lights.map(light => (
          <div>
            <Light
              key={light.lightColor}
              lightColor={light.lightColor}
              lightOn={light.lightOn}
            />
          </div>
        ))}
      </div>

      <SliderContainer>
        <div>
          <p>Frequency</p>
          <p>{`${timeInterval} miliseconds`}</p>
          <input
            type="range"
            min="20"
            max="100"
            value={ratio}
            onChange={e => setRatio(e.target.value)}
          />
        </div>
      </SliderContainer>
      <SwitchButton isOn={stringOn} onClick={switchString} type="button">
        {stringOn ? 'Turn OFF' : 'Turn ON'}
      </SwitchButton>
    </Container>
  );
};

export default Main;
