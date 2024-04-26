import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
    return (
        <main
            style={{
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "1rem",
                paddingRight: "1rem",
            }}>
            {children}
        </main>
    )
}

export default Container