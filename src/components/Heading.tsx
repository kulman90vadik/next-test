import { FC } from "react";


type Props = {text: string}

const Heading: FC<Props> = ({text}) => {
  return <h2>{text}</h2>
}
 
export default Heading;