import React from 'react'
import {GeicoTemplate, ProgressiveTemplate } from '../Templates'
import { useContextState } from 'dynamic-context-provider'

export default function InsuranceTemplate(){
    const { insurance } = useContextState()
  
    const insuranceMapper= {
      'geico': <GeicoTemplate />, 'progressive': <ProgressiveTemplate />
    }
    return insuranceMapper[insurance] || <div>There was an issue loading the insurance card</div>
  }