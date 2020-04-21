import React from 'react'
import styled from 'styled-components'

// Images
import stine from '../assets/season_18/stine.jpg'
import emilio from '../assets/season_18/emilio.jpg'
import simone from '../assets/season_18/simone.jpg'
import jan from '../assets/season_18/jan.jpg'
import olcay from '../assets/season_18/olcay.jpg'
import bella from '../assets/season_18/bella.jpg'
import jean from '../assets/season_18/jean.jpg'
import ruben from '../assets/season_18/ruben.jpg'
import loes from '../assets/season_18/loes.jpg'
import ron from '../assets/season_18/ron.jpg'

// Map
export const map = {
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

export default ({ name, size, handleClick }) => {
  const img = map[name]

  return <AvatarWrapper avatarsize={size} className='user-wrapper-image'>
    <img onClick={handleClick} alt={name} src={img} />
  </AvatarWrapper>
}