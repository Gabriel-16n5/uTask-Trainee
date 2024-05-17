import React from 'react';
import SimpleNavBar from '../components/SimpleNavBar';
import SignInContainer from '../components/SignInContainer';
import { PageContainer } from '../style/SignInPageCss';

export default function SignInPage() {
  return (
    <PageContainer>
      <SimpleNavBar />
      <SignInContainer />
    </PageContainer>
  );
}
