import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless';


import styles from './Header.module.scss'
import images from '../../../../assets/images'
import { Wrapper as PopperWrapper } from '../../../Popper'
import AccountItem from '../../../AccountItem/AccountItem';
import Button from '../../../Button';

const cx = classNames.bind(styles)


function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0);
    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={
                        attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )
                    }
                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>UpLoad</Button>
                    <Button primary>Log in</Button>

                </div>
            </div>
        </header>
    )
}

export default Header;