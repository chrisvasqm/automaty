import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    spacing?: number
    alingItems?: 'center' | 'start' | 'end'
    [key: string]: any
}

const HStack = ({ children, spacing = 0, alignItems = 'start', ...rest }: Props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: alignItems,
                justifyContent: 'flex-start',
                gap: spacing + 'rem',
            }}
            {...rest}
        >
            {children}
        </div>
    )
}

export default HStack