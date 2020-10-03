import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import MainButton from 'src/components/button'
import { CircleHollow } from './shapes'

const Container = styled.div`
  position: relative;
  padding-top: ${space.s12};
  padding-bottom: ${space.s8};
  max-width: 600px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s40};
    padding-bottom: ${space.s24};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s40};
    padding-bottom: ${space.s32};
  }
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s6};
  text-align: center;
  font-weight: 700;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s8};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s12};
  }
`

const Body = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s4};
  font-weight: 400;
  text-align: center;
  line-height: 1.8;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s4};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s5};
  }
`

const Contact: React.FC = () => {
  const onSendEmail = () => {
    window.open('mailto:tomasgil1234@gmail.com')
  }
  return (
    <Container>
      <Title>Contact</Title>
      <CircleHollow />
      <Body>If you want to know how I can help dont hesitate in sending me an email</Body>
      <MainButton text={'Send me an email'} onClickButton={onSendEmail} />
    </Container>
  )
}

export default Contact
