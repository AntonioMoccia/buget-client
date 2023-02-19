import React from 'react'
import { Layout, Menu } from 'antd'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
function ReactMenu() {

    const { Sider } = Layout
    const navigate = useNavigate()
    const MenuItems = [
        {
            key: '/',
            label: 'Dashboard',
            icon: <RxDashboard className=' text-white' />
        },
        {
            key: '/transaction',
            label: 'Transactions',
            icon: <MdOutlineAttachMoney className=' text-white' />
        }

    ]
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            {/*     <div
                className=" rounded-full"
                style={{
                    height: 40,
                    width: 40,
                    margin: 16,
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            >
                image
            </div> */}
            <div className="text-gray-100 uppercase w-[100%] font-bold text-center h-16 justify-center flex align-middle flex-col">
                Antonio Moccia
            </div>
            <Menu onClick={(e) => {
                navigate(e.key)
            }} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={MenuItems} />

        </Sider>
    )
}

export default ReactMenu