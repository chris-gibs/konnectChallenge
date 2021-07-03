import {useGlobalState} from "../utils/stateContext"

const Avatars = () => {
  const {store} = useGlobalState()
  const {currentUserImg, matchImg} = store

  return (
    <>
      <img src={currentUserImg} alt="Current User"/>
      <img src={matchImg} alt="Matched User"/>
    </>
  )
}

export default Avatars