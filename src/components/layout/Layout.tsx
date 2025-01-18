import { FC, memo, ReactNode, useEffect, useMemo } from "react";


type DefaultData = {
    layout: string
}
type LayoutProps = {
    header?: (() => ReactNode )| ReactNode,
    footer?: (() => ReactNode )| ReactNode,
    _default?: (data?: DefaultData) => ReactNode,
    children?: ReactNode
}

export const Layout: FC<LayoutProps> = memo(({_default: def, header, footer, children}) => {

    const headerTemplate = useMemo(() => typeof header === 'function' ? header() :  header, [header])
    const footerTemplate = useMemo(() => typeof footer === 'function' ? footer() :  footer, [footer])


    useEffect(() => {
        console.log('rednering layout');
    },[header, footer, children])

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
})