import React from 'react';
import Section from 'components/section';
import { H1, H2 } from 'components/text';
import FadeIn from 'components/interaction/fadeIn';

const Main = () => {
  return (
    <Section color="white" bgColor="night" isAlignCenter isFullWindow>
      <H1 color="white">
        <FadeIn>Hello world!</FadeIn>
        <FadeIn delay={0.3}>I&rsquo;m Soyeon Jung,</FadeIn>
        <FadeIn delay={0.6}>Frontend Developer.</FadeIn>
      </H1>
    </Section>
  );
};

export default Main;
