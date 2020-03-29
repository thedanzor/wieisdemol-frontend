import React from 'react'
import styled from 'styled-components'

// Images
import stine from './assets/stine.jpg'
import emilio from './assets/emilio.jpg'
import simone from './assets/simone.jpg'
import jan from './assets/jan.jpg'
import olcay from './assets/olcay.jpg'
import bella from './assets/bella.jpg'
import jean from './assets/jean.jpg'
import ruben from './assets/ruben.jpg'
import loes from './assets/loes.jpg'
import ron from './assets/ron.jpg'

// Map
const map = {
  stine,
  emilio,
  simone,
  jan,
  olcay,
  bella,
  jean,
  ruben,
  loes,
  ron
}

// Style
const AvatarWrapper = styled.div`
  width: ${props => `${props.avatarsize}px`};
  height: ${props => `${props.avatarsize}px`};
  border-radius: ${props => `${props.avatarsize}px`};
  float: left;
  margin: 0px 10px;
  overflow: hidden;

  > img {
    width: 100%;
  }
`

export default ({ name, size }) => {
  const img = map[name]

  return <AvatarWrapper avatarsize={size}>
    <img alt={name} src={img} />
  </AvatarWrapper>
}