import {useHistory} from "react-router-dom"

const BackButton = () => {
  let history = useHistory()
  return (
    <button type="button" onClick={history.goBack}>{"<-"}</button>
  )
}

export default BackButton