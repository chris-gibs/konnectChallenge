import {useGlobalState} from "../utils/stateContext"
import {useLocation} from "react-router-dom"

const CurrentView = () => {
  return useLocation().pathname
}

const Avatars = () => {
  let view = CurrentView()
  const {store} = useGlobalState()
  const {userImg, matchImg, matchName} = store

  return (
    <>
      <div id={view === '/' ? 'avatarContainerLrg' : 'avatarContainerSml'}>
        <img id={view === '/' ? 'userImgLrg' : 'userImgSml'} src={userImg} alt="Current User"/>
        <img id={view === '/' ? 'matchImgLrg' : 'matchImgSml'} src={matchImg} alt="Matched User"/>
      </div>
      <h1 id={view === '/' ? 'matchName' : 'matchNameInline'}>{matchName}</h1>
    </>
  )
}

export default Avatars