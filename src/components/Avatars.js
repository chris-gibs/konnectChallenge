import {useGlobalState} from "../utils/stateContext"
import {useLocation} from "react-router-dom"

const CurrentView = () => {
  return useLocation().pathname
}

const Avatars = () => {
  let view = CurrentView()
  const {store} = useGlobalState()
  const {userDetails, matchDetails} = store

  return (
    <>
      <div id={view === '/' ? 'avatarContainerLrg' : 'avatarContainerSml'}>
        <img id={view === '/' ? 'userImgLrg' : 'userImgSml'} src={userDetails.img} alt="Current User"/>
        <img id={view === '/' ? 'matchImgLrg' : 'matchImgSml'} src={matchDetails.img} alt="Matched User"/>
      </div>
      <h1 id={view === '/' ? 'matchName' : 'matchNameInline'}>{matchDetails.name}</h1>
    </>
  )
}

export default Avatars