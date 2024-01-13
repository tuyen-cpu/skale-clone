import './header.css'
import { useEffect, useRef, useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'

export default function Header() {
  const [isOpenSideBar, setOpenSideBar] = useState(false)
  const myvideo = useRef(null)
  useEffect(() => {
    myvideo.current.play()
  }, [])
  return (
    <>
      <div className="header-parent">
        <div className="div-block-304">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="collection-item-7 w-dyn-item">
                <a href="#" target="noreferrer" className="link-block-21 w-inline-block"></a>
                <div className="text-block-73">
                  Introducing Levitation Protocol: The Future of ZK Scaling
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div
            data-animation="over-right"
            className="navbar-2 nav-spaceing w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="medium"
            role="banner"
            data-no-scroll="1"
            data-duration="400"
            data-doc-height="1"
          >
            <div className="container-2 w-container">
              <a href="/" aria-current="page" className="link-block w-inline-block w--current">
                <img
                  src="https://assets-global.website-files.com/625c39b93541414104a1d654/625c68f38c04ec14737f2ad8_svg-gobbler%20(3)%201.svg"
                  loading="lazy"
                  alt=""
                  className="image"
                />
              </a>
              <nav
                role="navigation"
                data-w-id="98d4d624-d2ed-bed3-9e88-7348d80df61a"
                className="nav-menu w-nav-menu"
              >
                <div className="div-block-50 desktop">
                  <a
                    href="/"
                    aria-current="page"
                    className="nav-link-2 w-nav-link w--current"
                    style={{ maxWidth: '1140px' }}
                  >
                    Home
                  </a>
                  <div
                    data-hover="true"
                    data-delay="0"
                    className="w-dropdown"
                    style={{ maxWidth: '1140px' }}
                  >
                    <div
                      className="dropdown-toggle w-dropdown-toggle"
                      id="w-dropdown-toggle-0"
                      aria-controls="w-dropdown-list-0"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex="0"
                    >
                      <a href="#" className="dropdown-link-container nav-link-2 w-inline-block">
                        <div>Network</div>
                        <div className="icon-5 w-icon-dropdown-toggle" aria-hidden="true"></div>
                      </a>
                      <nav
                        className="dropdown-links w-dropdown-list"
                        id="w-dropdown-list-0"
                        aria-labelledby="w-dropdown-toggle-0"
                      >
                        <a href="#" className="dropdown-link w-dropdown-link" tabIndex="0">
                          Stats
                        </a>
                        <a href="#" className="dropdown-link w-dropdown-link" tabIndex="0">
                          Ecosystem
                        </a>
                        <a href="#" className="dropdown-link w-dropdown-link" tabIndex="0">
                          Token
                        </a>
                        <div className="tiny-rect"></div>
                      </nav>
                    </div>
                  </div>
                  <div
                    data-hover="true"
                    data-delay="0"
                    className="w-dropdown"
                    style={{ maxWidth: '1140px' }}
                  >
                    <div
                      className="dropdown-toggle nav-link-2 w-dropdown-toggle"
                      id="w-dropdown-toggle-1"
                      aria-controls="w-dropdown-list-1"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex="0"
                    >
                      <a href="#" className="dropdown-link-container w-inline-block">
                        <div>Developers</div>
                        <div className="icon-5 w-icon-dropdown-toggle" aria-hidden="true"></div>
                      </a>
                      <nav
                        className="dropdown-links w-dropdown-list"
                        id="w-dropdown-list-1"
                        aria-labelledby="w-dropdown-toggle-1"
                      >
                        <a
                          href="https://skale.space/developers/#grants"
                          className="dropdown-link w-dropdown-link"
                          tabIndex="0"
                        >
                          Grants
                        </a>
                        <a
                          href="https://skale.space/developers/#validators"
                          className="dropdown-link w-dropdown-link"
                          tabIndex="0"
                        >
                          Validators
                        </a>
                        <div className="tiny-rect"></div>
                      </nav>
                    </div>
                  </div>
                  <a href="/blog" className="nav-link-2 w-nav-link" style={{ maxWidth: '1140px' }}>
                    Blog
                  </a>
                  <a
                    href="/community"
                    className="nav-link-2 w-nav-link"
                    style={{ maxWidth: '1140px' }}
                  >
                    Community
                  </a>
                  <a href="/about" className="nav-link-2 w-nav-link" style={{ maxWidth: '1140px' }}>
                    About
                  </a>
                </div>
                <ul role="list" className="list-5 header-socials drawer-socials desktop">
                  <li className="list-item-6">
                    <a href="#" target="noreferrer" className="header-social-links w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/625c39b93541414104a1d654/625d13986d89775c64cfebe4_telegram.svg"
                        loading="lazy"
                        width="20"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-item-6">
                    <a href="#" target="noreferrer" className="header-social-links w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/625c39b93541414104a1d654/62734bb8fdadb403a9cf6319_discord.svg"
                        loading="lazy"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-item-7">
                    <a href="#" target="noreferrer" className="header-social-links w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/625c39b93541414104a1d654/62734bb87c8e0802fff6dcab_github.svg"
                        loading="lazy"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-item-8">
                    <a href="#" target="noreferrer" className="header-social-links w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/625c39b93541414104a1d654/62734bb87c8e08cca7f6dcaa_email.svg"
                        loading="lazy"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
                <div
                  data-w-id="1c66a9f0-0c86-b29b-95d5-e8fff6af38a8"
                  className="drawer-content"
                  style={{
                    transform:
                      'translate3d(100px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d',
                    opacity: 0,
                  }}
                >
                  <div className="text-block-7 mobile-menu-title">Menu</div>
                  <div className="div-block-50 mobile-nav-container">
                    <a
                      href="/old-home"
                      className="nav-link-2 w-nav-link"
                      style={{ maxWidth: '1140px' }}
                    >
                      Home
                    </a>
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="dropdown w-dropdown"
                      style={{ maxWidth: '1140px' }}
                    >
                      <div
                        className="dropdown-toggle-2 nav-link-2 dropdown-toggle-3 dropdown-toggle-4 dropdown-toggle-5 dropdown-toggle-6 dropdown-toggle-7 dropdown-toggle-8 dropdown-toggle-9 dropdown-toggle-10 navlink2 nav-link-2 w-dropdown-toggle"
                        id="w-dropdown-toggle-2"
                        aria-controls="w-dropdown-list-2"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabIndex="0"
                      >
                        <a href="https://skale.space/network" className="w-inline-block">
                          <div
                            data-w-id="02103a1c-2afd-ca29-1cf0-74da1c111e94"
                            className="text-block-23"
                          >
                            Network
                          </div>
                        </a>
                        <div className="icon-6 w-icon-dropdown-toggle" aria-hidden="true"></div>
                      </div>
                      <nav
                        className="dropdown-list w-dropdown-list"
                        id="w-dropdown-list-2"
                        aria-labelledby="w-dropdown-toggle-2"
                      >
                        <a
                          href="https://skale.space/stats"
                          className="nav-link-2 sub-link v2 w-nav-link"
                          tabIndex="0"
                          style={{ maxWidth: '1140px' }}
                        >
                          Stats
                        </a>
                        <a
                          href="/ecosystem"
                          className="nav-link-2 sub-link v2 w-nav-link"
                          tabIndex="0"
                          style={{ maxWidth: '1140px' }}
                        >
                          Ecosystem
                        </a>
                        <a
                          href="https://skale.space/network/#token"
                          className="nav-link-2 sub-link v2 w-nav-link"
                          tabIndex="0"
                          style={{ maxWidth: '1140px' }}
                        >
                          Token
                        </a>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="dropdown-2 w-dropdown"
                      style={{ maxWidth: '1140px' }}
                    >
                      <div
                        className="dropdown-toggle-2 nav-link-2 dropdown-toggle-3 dropdown-toggle-4 dropdown-toggle-5 dropdown-toggle-6 dropdown-toggle-7 dropdown-toggle-8 dropdown-toggle-9 dropdown-toggle-10 navlink2 nav-link-2 w-dropdown-toggle"
                        id="w-dropdown-toggle-3"
                        aria-controls="w-dropdown-list-3"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabIndex="0"
                      >
                        <a href="https://skale.space/developers" className="w-inline-block">
                          <div
                            data-w-id="3ed42ae5-336c-8d71-d427-bd343829b4e3"
                            className="text-block-23"
                          >
                            Developers
                          </div>
                        </a>
                        <div className="icon-6 w-icon-dropdown-toggle" aria-hidden="true"></div>
                      </div>
                      <nav
                        className="dropdown-list w-dropdown-list"
                        id="w-dropdown-list-3"
                        aria-labelledby="w-dropdown-toggle-3"
                      >
                        <a
                          id="grantsClick"
                          href="https://skale.space/developers/#grants"
                          data-w-id="744e0b10-583d-79ec-0ac0-30fbaf6dd6a0"
                          className="nav-link-2 drop-link menu-button-2 sub-link w-nav-link"
                          tabIndex="0"
                          style={{ maxWidth: '1140px' }}
                        >
                          Grants
                        </a>
                        <a
                          id="validatorsLink"
                          href="https://skale.space/developers/#validators"
                          data-w-id="57b75670-419c-e653-6d5a-282b2fa8be6c"
                          className="nav-link-2 drop-link menu-button-2 sub-link w-nav-link"
                          tabIndex="0"
                          style={{ maxWidth: '1140px' }}
                        >
                          Validators
                        </a>
                      </nav>
                    </div>
                    <a
                      href="/blog"
                      className="nav-link-2 w-nav-link"
                      style={{ maxWidth: '1140px' }}
                    >
                      Blog
                    </a>
                    <a
                      href="/community"
                      className="nav-link-2 w-nav-link"
                      style={{ maxWidth: '1140px' }}
                    >
                      Community
                    </a>
                    <a
                      href="/about"
                      className="nav-link-2 w-nav-link"
                      style={{ maxWidth: '1140px' }}
                    >
                      About
                    </a>
                  </div>
                  <div className="div-block-95 black-bg">
                    <ul role="list" className="list-5 header-socials drawer-socials">
                      <li className="list-item-8">
                        <a href="#" className="header-social-links twitter w-inline-block">
                          <img
                            src="https://assets-global.website-files.com/625c39b93541414104a1d654/628125fb64f151303be3318e_Message.svg"
                            loading="lazy"
                            width="20"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="list-item-7">
                        <a
                          href="#"
                          target="noreferrer"
                          className="header-social-links twitter w-inline-block"
                        >
                          <img
                            src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d02fe290acc2b8492caaf_logo-twitter%203.svg"
                            loading="lazy"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="list-item-6">
                        <a
                          href="#"
                          target="noreferrer"
                          className="header-social-links w-inline-block"
                        >
                          <img
                            src="https://assets-global.website-files.com/625c39b93541414104a1d654/62734bb8fdadb403a9cf6319_discord.svg"
                            loading="lazy"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="list-item-6">
                        <a
                          href="#"
                          target="noreferrer"
                          className="header-social-links w-inline-block"
                        >
                          <img
                            src="https://assets-global.website-files.com/625c39b93541414104a1d654/62734bb87c8e0802fff6dcab_github.svg"
                            loading="lazy"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <ul role="list" className="list-5 header-socials">
                <li className="list-item-8">
                  <a href="#" target="noreferrer" className="w-inline-block">
                    <div
                      data-tf-hidden="utm_source=xxxxx,utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx"
                      data-tf-popup="sd38Fy"
                      data-tf-iframe-props="title=Contact Us Form"
                      data-tf-medium="snippet"
                      className="header-social-links"
                    >
                      <img
                        src="https://assets-global.website-files.com/625c39b93541414104a1d654/628125fb64f151303be3318e_Message.svg"
                        loading="lazy"
                        width="24"
                        alt=""
                      />
                    </div>
                  </a>
                </li>
                <li className="list-item-7">
                  <a
                    href="#"
                    target="noreferrer"
                    className="header-social-links twitter w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d02fe290acc2b8492caaf_logo-twitter%203.svg"
                      loading="lazy"
                      width="32"
                      height="40"
                      alt=""
                      className="image-253"
                    />
                  </a>
                </li>
                <li className="list-item-6">
                  <a href="#" target="noreferrer" className="header-social-links w-inline-block">
                    <img
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/62734bb8fdadb403a9cf6319_discord.svg"
                      loading="lazy"
                      width="24"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-item-6">
                  <a href="#" target="noreferrer" className="header-social-links w-inline-block">
                    <img
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/62734bb87c8e0802fff6dcab_github.svg"
                      loading="lazy"
                      width="24"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <div className="menu-button-2 w-nav-button">
                <Hamburger
                  toggled={isOpenSideBar}
                  toggle={setOpenSideBar}
                  color="#fff"
                  distance="md"
                  rounded
                  size={21}
                />
              </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden overflow-unset">
        <div className="div-block home v2 pad-5">
          <div className="video-code-container w-embed">
            <div className="background-video-2 hide w-background-video w-background-video-atom">
              <video
                id="4b33688e-afcf-3aad-da1b-75aa4167e092-video"
                muted
                preload="auto"
                loop
                ref={myvideo}
                style={{
                  backgroundImage:
                    "url('https://global-uploads.webflow.com/625c39b93541414104a1d654/6278d9990c924b03af8b372c_skl-poster-00001.jpg')",
                }}
                playsInline=""
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="https://skale-blog.s3.us-west-2.amazonaws.com/skl.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="https://skale-blog.s3.us-west-2.amazonaws.com/skl.mp4"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
          <div className="home-contents v4">
            <div className="div-block-2 home-hero-desc v4">
              <h4 className="c-h4">Modular - Zero Gas Fees - AppChains</h4>
              <h1 className="c-h1">
                SKALE is the World’s <br />
                Fastest Blockchain
                <br />
              </h1>
              <p className="c-p centered max-w-700 p-hero">
                Easily create invisible Web3 experiences designed for fast, secure, user-centric
                Ethereum scaling
                <br />
              </p>
              <div className="div-block-302">
                <a
                  href="https://bridge.skale.space/"
                  target="_blank"
                  className="button-2 button-6 hero-btn hero-x v2 white-btn w-button"
                >
                  Bridge to SKALE
                </a>
                <a
                  href="https://docs.skale.network/docs/"
                  target="_blank"
                  className="button-2 button-6 hero-btn hero-x v2 invert-bg w-button"
                >
                  Developer Docs
                </a>
              </div>
            </div>
            <div className="div-block-52 v4 hidden">
              <a href="#gasless" className="w-inline-block">
                <div className="div-block-53 scroll-down-btn">
                  <img
                    src="https://assets-global.website-files.com/625c39b93541414104a1d654/627351b8df11bd956d32064d_down-arrow.svg"
                    loading="lazy"
                    width="32"
                    style={{
                      transform:
                        'translate3d(0px, -39.5251px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      opacity: '0.72694',
                      transformStyle: 'preserve-3d',
                      willChange: 'opacity, transform',
                    }}
                    alt=""
                    className="arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
