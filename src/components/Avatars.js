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
      <h2 id={view === '/' ? undefined : 'matchName'}>{matchName}</h2>
    </>
  )
}
// 'matchNameMatched'
export default Avatars