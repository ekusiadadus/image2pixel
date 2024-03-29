import React, { type FC } from 'react'
import styled from '@emotion/styled'
import { fontSize } from '../../constants'

export type TextProps = {
  text: string
  className?: string
}

export const Text: FC<TextProps> = ({ text, className = '' }) => {
  return <Wrapper className={className}>{text}</Wrapper>
}

const Wrapper = styled.p`
  font-size: ${fontSize.m};
`
