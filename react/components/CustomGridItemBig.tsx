import React, {ReactNode} from 'react'

type Props = {
  element: ReactNode
}

const CustomGridItemBig = ({element}: Props) => {
  return(<div>
    {element}
  </div>)
}

export default CustomGridItemBig