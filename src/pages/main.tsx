import React from 'react';
import Section from 'components/section';
import { H1 } from 'components/text';
import FadeIn from 'components/interaction/fadeIn';
import { MoreButton } from 'components/button';
import useWindowHeight from 'hooks/useWindowHeight';

const Main = () => {
  const windowHeight: number = useWindowHeight();
  return (
    <>
      <Section color="white" bgColor="night" isAlignCenter isFullWindow>
        <H1 color="white">
          <FadeIn>Hello world!</FadeIn>
          <FadeIn delay={0.3}>I&rsquo;m Soyeon Jung,</FadeIn>
          <FadeIn delay={0.6}>Frontend Developer.</FadeIn>
        </H1>
        <MoreButton scrollTo={windowHeight}>Learn more about what I do</MoreButton>
      </Section>
      <Section color="white" bgColor="black" isAlignCenter isFullWindow>
        <H1 color="white">
          <FadeIn>Hello world!</FadeIn>
          <FadeIn delay={0.3}>I&rsquo;m Soyeon Jung,</FadeIn>
          <FadeIn delay={0.6}>Frontend Developer.</FadeIn>
        </H1>
      </Section>
    </>
  );
};

export default Main;
