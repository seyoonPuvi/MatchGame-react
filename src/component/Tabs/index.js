import './index.css'

const Tabs = props => {
  const {thumbnailDetails, checkAndUpdateScore} = props
  const {id, thumbnailUrl} = thumbnailDetails
  const onClickThumbnail = () => checkAndUpdateScore(id)
  return (
    <li className="thumbnail-card">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Tabs
