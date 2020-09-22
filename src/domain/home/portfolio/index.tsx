/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'
import { projects } from './data'

import { CircleSquareBottom, CircleHorizontalBottom } from './shapes'

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
    padding-bottom: ${space.s12};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s40};
    padding-bottom: ${space.s16};
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

const ProjectName = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s5};
  text-align: center;
  font-weight: 500;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s5};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s6};
  }
`

const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  padding-bottom: ${space.s12};
  justify-content: center;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

const Project = styled.div`
  padding-top: ${space.s6};
  padding-bottom: ${space.s6};
  flex: 1;
  @media (min-width: ${breakpoints.md}) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

const ContainerProjectLink = styled.a`
  display: flex;
  justify-content: center;
  padding-top: ${space.s3};
`

const ProjectLink = styled.a`
  color: ${colors.text.primary};
  font-size: ${space.s4};
  text-align: center;
  font-weight: 500;
`

const MyPortfolio: React.FC = () => {
  return (
    <>
      <Container>
        <Title>My portfolio</Title>
        <Body>These are the projects I have been working on lately</Body>
        <CircleSquareBottom />
        <CircleHorizontalBottom />
      </Container>
      <ContainerProjects>
        {projects.map((project) => (
          <Project key={project.projectName}>
            <ProjectName>{project.projectName}</ProjectName>
            <Body>{project.description}</Body>
            <ContainerProjectLink>
              <ProjectLink href={project.projectLink} target="_blank">
                See more
              </ProjectLink>
            </ContainerProjectLink>
          </Project>
        ))}
      </ContainerProjects>
    </>
  )
}

export default MyPortfolio
