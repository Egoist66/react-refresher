import { FC, ReactNode } from "react";


type DefaultData = {
    layout: string
}
type LayoutProps = {
    header?: (() => ReactNode )| ReactNode,
    footer?: (() => ReactNode )| ReactNode,
    _default?: (data?: DefaultData) => ReactNode,
    children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({_default: def, header, footer, children}) => {

    const headerTemplate = typeof header === 'function' ? header() :  header
    const footerTemplate = typeof footer === 'function' ? footer() :  footer

    return (
        <>
            {header &&  <header>
                {headerTemplate}
            </header>}

            <main>
                {children ? children : def && def({layout: Layout.name})}
            </main>

            {footer && <footer>
                {footerTemplate}
            </footer>}
        </>
    )
}