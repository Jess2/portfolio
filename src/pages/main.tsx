import React from 'react';
import Section from 'components/section';
import { H1, H2 } from 'components/text';
import FadeIn from 'components/interaction/fadeIn';
import { MoreButton } from 'components/button';
import useWindowHeight from 'hooks/useWindowHeight';
import { ProjectList } from '../components/projectCards/projectList';

const Main = () => {
  const windowHeight: number = useWindowHeight();
  return (
    <>
      <Section bgColor="night" isAlignCenter isFullWindow>
        <H1 color="white">
          <FadeIn>Hello world!</FadeIn>
          <FadeIn delay={0.3}>I&rsquo;m Soyeon Jung,</FadeIn>
          <FadeIn delay={0.6}>Frontend Developer.</FadeIn>
        </H1>
        <MoreButton scrollTo={windowHeight}>Learn more about what I do</MoreButton>
      </Section>
      <Section bgColor="black" isAlignCenter isFullWindow>
        <H2 color="white">MY PROJECTS</H2>
        <ProjectList />
      </Section>
    </>
  );
};

export default Main;
