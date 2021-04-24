import React from 'react'
import { ContainerButton } from './index'

type ButtonLinkProps = {
  link: JSX.Element
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ link }) => {
  return <ContainerButton>{link}</ContainerButton>
}

export default ButtonLink
