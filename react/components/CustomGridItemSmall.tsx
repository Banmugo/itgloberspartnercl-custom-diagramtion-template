import React, {ReactNode} from 'react'

type Props = {
  elementOne: ReactNode,
  elementTwo: ReactNode
}

const CustomGridItemSmall = ({elementOne, elementTwo}: Props) => {
  return <div>
    {elementOne}
    {elementTwo}
  </div>
}

export default CustomGridItemSmall