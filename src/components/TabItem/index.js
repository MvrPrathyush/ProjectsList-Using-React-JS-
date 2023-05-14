import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isTabActive} = props
  const {displayText, tabId} = tabDetails
  const updateTabId = () => {
    onClickTabItem(tabId)
  }

  const selectedTab = isTabActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${selectedTab}`}
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
