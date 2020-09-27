import React from 'react'
import styled from 'styled-components'
import { space, colors } from 'src/tokens'

type ContainerProps = {
  color: string
}

const ContainerTag = styled.div`
  background-color: ${(props: ContainerProps) => props.color};
  border-radius: 4px;
  font-size: ${space.s3};
  color: ${colors.base.white};
  font-weight: 600;
  padding: ${space.s1};
`

type TagProps = {
  name: string
  color: string
}

const Tag: React.FC<TagProps> = ({ name, color }) => {
  return <ContainerTag color={color}>{name}</ContainerTag>
}

export default Tag
