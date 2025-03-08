'use client';
import Image from "next/image";
import styles from "./header.module.scss";

function Header({ actions, onWalletConnect }) {
    return (
        <nav className={`${styles.header} navbar navbar-expand-lg fixed-top`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image src="/logo.png" alt="logo" width={110} height={35} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${styles.navBar} collapse navbar-collapse justify-content-end`} id="navbarNav">
                    <ul className={`${styles.linkSection} navbar-nav`}>
                        {actions.map(action =>
                            action.title === "menu" ? (
                                <li className={`${styles.dropdown} nav-item dropdown dropdown-menu-end`} key={action.title}>
                                    <button
                                        type="button"
                                        className="btn dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {action.title}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"><Image src="/homepage-Assets/user-round-pen.png" alt="" width={20} height={20} /><span>Profile</span></a></li>
                                        <li><a className="dropdown-item" href="#"><Image src="/homepage-Assets/diversity_4.png" alt="" width={20} height={20} /><span>About Us</span></a></li>
                                        <li><a className="dropdown-item" href="#"><Image src="/homepage-Assets/book-a.png" alt="" width={20} height={20} /><span>My Library</span></a></li>
                                        <li><a className="dropdown-item" href="#"><Image src="/homepage-Assets/folder-code.png" alt="" width={20} height={20} /><span>Developer Kits</span></a></li>
                                        <li><a className="dropdown-item" href="#"><Image src="/homepage-Assets/file-text.png" alt="" width={20} height={20} /><span>Documentation</span></a></li>
                                    </ul>
                                </li>
                            ) : (
                                <li key={action.title} className={`${styles.navItem} nav-item`}>
                                    <a className="nav-link" href="#">{action.title}</a>
                                </li>
                            )
                        )}
                    </ul>
                    <button className={`${styles.tokenBalance}`}>
                        <Image src="/homepage-Assets/token-branded_solana.png" alt="token-img" width={25} height={25} />
                        <p>Bal: <span></span></p>
                    </button>
                    <div className={styles.tools}>
                        <button className={styles.addCart}><Image src="/homepage-Assets/search.png" alt="hh" width={20} height={20} /></button>
                        <button className={styles.search}><Image src="/homepage-Assets/shopping-cart.png" alt="hh" width={20} height={20} /></button>
                    </div>
                    <div className={`${styles.userDropdown} dropdown dropdown-menu-end`}>
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Connect Wallet
                        </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={onWalletConnect}>
                                <Image src="/homepage-Assets/spearwallet.png" alt="" width={25} height={26} />
                                <span>Connect Suiwallet</span>
                            </button>
                            <a className="dropdown-item" href="#"><Image src="/homepage-Assets/Frame 441878712.png" alt="" width={25} height={26} /><span>Connect other wallets</span></a>
                            <a className="dropdown-item" href="#"><Image src="/homepage-Assets/log-out.png" alt="" width={25} height={26} /><span>Logout</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
