import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'

import { CustomButton } from './button.types'

export interface IButton {
  handleClick(): void

  rounded: boolean
  color: 'dark' | 'light' | 'red' | 'orange'
  small: boolean
}

export const SButton: FunctionComponent<IButton> = (
  {
    children,
    handleClick,
    rounded = false,
    color = '',
    small = false
  }
) => {
  const [buttonColor, setButtonColor] = useState(color)

  useEffect(() => {
    let colorClass = 'button--'

    setButtonColor(colorClass + color)
  }, [color])

  const onClick = () => {
    handleClick && handleClick()
  }

  return (
    <CustomButton
      className={classNames({ [`${buttonColor}`]: true, 'button--rounded': rounded, 'button--small': small })}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  )
}
