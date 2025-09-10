import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./Button.module.scss"

function Button({
    onClick,
    primary = false,
    rounded = false,
    bordered = false,
    title,
    children,
    href,
    size = "medium",
    className,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, [styles[size]], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
    })
    const Component = href ? "a" : "button"
    return (
        <Component {...passProps} className={classNames} onClick={onClick} title={title}>
            {children}
        </Component>
    )
}

Button.prototype = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Button
