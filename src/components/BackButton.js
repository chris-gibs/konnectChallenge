import {useHistory} from "react-router-dom"

const BackButton = () => {
  let history = useHistory()
  return (
    <button id='back' type="button" onClick={history.goBack} />
  )
}

export default BackButton