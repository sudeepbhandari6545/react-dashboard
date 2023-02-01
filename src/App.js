import { Tooltip } from 'antd'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
//icons
import { FiSettings } from 'react-icons/fi'

const App = () => {
  const activeMenu = true
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <Tooltip title="Setting" placement="top">
                <button
                  type="button"
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  style={{ background: 'blue', borderRadius: '50%' }}
                >
                  <FiSettings />
                </button>
              </Tooltip>
            </div>
          </div>
          {activeMenu ? (
            <>
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                sidebar
              </div>
            </>
          ) : (
            <>
              <div className="w-0 dark:bg-secondary-dark-bg">close sidebar</div>
            </>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          ></div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
