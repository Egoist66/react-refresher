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

/**
 * Layout component that provides a structure with optional header, footer, and default content.
 * 
 * @param {Object} props - Properties passed to the Layout component.
 * @param {ReactNode | function} [props.header] - The header content or a function returning the header content.
 * @param {ReactNode | function} [props.footer] - The footer content or a function returning the footer content.
 * @param {function} [props._default] - A function that returns the default content if children are not provided.
 * @param {ReactNode} [props.children] - The main content of the layout.
 * 
 * @returns {JSX.Element} The rendered layout component.
*/

export const Layout: FC<LayoutProps> = memo(({ _default: def, header, footer, children }) => {
    const headerTemplate = useMemo(() => typeof header === 'function' ? header() : header, [header]);
    const footerTemplate = useMemo(() => typeof footer === 'function' ? footer() : footer, [footer]);

    useEffect(() => {
        console.log('rendering layout');
    }, [header, footer, children]);

    return (
        <>
            {header && <header>
                {headerTemplate}
            </header>}

            <main>
                {children ? children : def && def({ layout: Layout.name })}
            </main>

            {footer && <footer>
                {footerTemplate}
            </footer>}
        </>
    );
});

