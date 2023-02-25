import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons'
import { Typography } from 'antd'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        title: 'Category',
        key: 'category',
        dataIndex: 'category'
    },
    {
        title: 'Date',
        key: 'date',
        dataIndex: 'date',
    },
    {
        title: 'Descrizione',
        key: 'descrizione',
        dataIndex: 'descrizione',
    },
    {
        title: 'Importo',
        key: 'importo',
        dataIndex: 'importo',
        render: (_, { importo }) => {
            return (
                <Typography.Text>{importo} €</Typography.Text>
            )
        }
    },
    {
        title: 'Payment_method',
        key: 'payment_method',
        dataIndex: 'payment_method',
    },
    {
        title: 'Type',
        key: 'type',
        dataIndex: 'type',
        render: (_, { type }) => {
            return type === 'entrata' ?
                (
                    <>
                        <CaretUpFilled className="text-green-600 text-lg" />
                    </>
                )
                : (
                    <>
                        <CaretDownFilled className="text-red-600 text-lg" />
                    </>
                )
        }
    },
]