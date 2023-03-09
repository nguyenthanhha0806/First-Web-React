import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button(
    {
        to,
        href,
        primary = false,
        outline = false,
        rounded = false,
        small = false,
        large = false,
        leftIcon = false,
        rightIcon = false,
        text = false,
        className = false,
        disable = false,
        children,
        onClick,
        ...passProps
    }) {

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    }
    if (disable) {
        delete props.onClick;
    }
    if (to) {
        props.to = to
        Comp = Link
    }
    else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        disable,
        small,
        large,
        text,
        leftIcon,
        rightIcon,

    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('button-content')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;