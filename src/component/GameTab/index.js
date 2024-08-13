import './index.css'

const GameTab = props => {
  const {tabBtnDetails, updateTabToShown, tabToShown} = props
  const {tabId, displayText} = tabBtnDetails

  const activeTabClassName = tabId === tabToShown ? 'active-tab' : null

  const onClickTab = () => updateTabToShown(tabId)

  return (
    <li>
      <button
        type="button"
        className={`tab_btn ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default GameTab
