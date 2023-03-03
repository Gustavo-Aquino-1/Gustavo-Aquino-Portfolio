import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [color, setColor] = useState('white');
  const [subColor, setSubColor] = useState('black');

  const changeTheme =  useCallback(() => {
    setColor(color === 'white' ? 'black': 'white')
  },[color])

  useEffect(() => {
    setSubColor(color === 'white' ? 'black' : 'white')
  },[color])

  const contextValue = useMemo(() => ({
    color,
    changeTheme,
    subColor
  }), [changeTheme, color, subColor]);

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioProvider