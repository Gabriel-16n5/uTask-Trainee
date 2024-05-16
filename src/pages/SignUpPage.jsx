import React from "react"
import SimpleNavBar from "../components/SimpleNavBar";
import SignUpContainer from "../components/SignUpContainer";
import {PageContainer} from "../style/SignUpPageCss"

export default function SignUpPage() {
    return (
      <PageContainer>
        <SimpleNavBar/>
        <SignUpContainer/>
      </PageContainer>
    )
  }