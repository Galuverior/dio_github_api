import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.25rem;
  display: flex;
  margin: 0;
`

WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 1rem;
  border: 0.0625rem solid #ccc;
  padding: 1rem;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: white;
  margin: 0.5rem;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`

WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  padding: 1rem;
  margin-top: -0.3125rem;
  border: 0.0625rem solid #ccc;
  display: none;

  &.is-selected {
    display: block;
  }
`

WrapperTabPanel.tabsRole = 'TabPanel'
