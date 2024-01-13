import './header.css'
import { useEffect, useRef, useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'
import bannerVideo from '../../assets/skl.mp4'
import pumpTranscode from '../../assets/pump-transcode.mp4'

export default function Header() {
  const [isOpenSideBar, setOpenSideBar] = useState(false)
  const myvideo = useRef(null)
  const pumpTranscodevideo = useRef(null)
  useEffect(() => {
    myvideo.current.play()
    pumpTranscodevideo.current.play()
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
                <source src={bannerVideo} data-wf-ignore="true" />
                {/*<source src={bannerVideo} data-wf-ignore="true" />*/}
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
                  href="#"
                  target="noreferrer"
                  className="button-2 button-6 hero-btn hero-x v2 white-btn w-button"
                >
                  Bridge to SKALE
                </a>
                <a
                  href="#"
                  target="noreferrer"
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
        <div className="div-block-323">
          <div></div>
          <div className="div-block-326"></div>
          <div className="container stats-home">
            <div className="div-block-331">
              <div className="div-block-330">
                <div className="div-block-327">
                  <div className="div-block-329">
                    <div className="div-block-321">
                      <div id="total-transactions" className="text-block-86">
                        255,922,478
                      </div>
                      <div className="text-block-84">Total Transactions</div>
                    </div>
                    <div className="div-block-333"></div>
                    <div className="div-block-321">
                      <div className="div-block-332">
                        <div className="text-block-86">$</div>
                        <div id="total-gas" className="text-block-86">
                          3,173,652,583
                        </div>
                      </div>
                      <div className="text-block-84">Total Gas Fees Saved</div>
                    </div>
                  </div>
                </div>
                <div className="div-block-324">
                  <div className="div-block-325">
                    <div id="wallets" className="text-block-88">
                      9,181,396
                    </div>
                    <div className="text-block-89">Unique Wallets</div>
                  </div>
                  <div className="div-block-325 v2">
                    <div id="nodes" className="text-block-88">
                      125
                    </div>
                    <div className="text-block-89">Validator Nodes</div>
                  </div>
                </div>
                <div className="div-block-328">
                  <div className="div-block-322">
                    <img
                      src="./img/noun-eco-friendly.png"
                      loading="lazy"
                      alt=""
                      className="image-244"
                    />
                    <div className="text-block-85">Eco-Friendly</div>
                  </div>
                  <a href="#" target="noreferrer" className="link-block-23 w-inline-block">
                    <div className="text-block-87">View Stats</div>
                    <img
                      src="./img/Right-Up-Circle.svg"
                      loading="lazy"
                      alt=""
                      className="image-245"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container network-description">
          <div className="columns home w-row">
            <div className="column-19 w-col w-col-6">
              <h2 className="c-h2 left-align mb-12">Zero Gas Fees. Forever</h2>
              <p className="c-p">
                SKALE is a limitlessly scalable, fast, on-demand blockchain network with zero gas
                fees, allowing quick deployment of interoperable EVM-compatible chains without
                compromising security or decentralization. <br />
                <br />
                SKALE&nbsp;is a fully decentralized, open-source, community-owned network.
              </p>
            </div>
            <div className="column w-col w-col-6">
              <div className="div-block-3 temp-side-img gas">
                <div className="background-video-3 w-background-video w-background-video-atom">
                  <video
                    id="52e91c41-2ead-19a4-7524-38ec12ea5714-video"
                    muted
                    preload="auto"
                    loop
                    ref={pumpTranscodevideo}
                    style={{ backgroundImage: 'url("/img/pump-poster-00001.jpg")' }}
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source src={pumpTranscode} data-wf-ignore="true" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <img className="image-15" src="./img/asteroid.png" alt="" sizes="100vw" loading="lazy" />
          <h2 className="heading-3 center home left-align">
            <strong className="c-h2 left-align">
              Create a World-Class User Experience for Games, NFT&nbsp;Platforms, and Web3
              Applications
            </strong>
          </h2>
          <div className="w-layout-grid grid-2 home-grid">
            <div id="w-node-c0f430e4-55e7-9d1d-19e5-9cee8dd4fc2c-eddc2eca" className="div-block-6">
              <h4 className="c-h3 left-align mt-24">Ethereum Native</h4>
              <p className="c-p mb-32 mob-left">
                Native integration with Ethereum boosts security, reliability, and fosters a shared
                revenue stream, bringing value to both networks.
              </p>
            </div>
            <div id="w-node-db0b9a9e-a3b5-0988-7819-07741f71aaa1-eddc2eca" className="div-block-6">
              <h4 className="c-h3 left-align mt-24">Modular</h4>
              <p className="c-p mb-32 mob-left">
                Network capacity increases as new nodes join the network, allowing for limitless
                scalability. 100 chains = 39,770 TPS; 1000 chains = 397,700 TPS, etc.
              </p>
            </div>
            <div id="w-node-b8a9e753-2e89-be78-6741-540e7e4e1e62-eddc2eca" className="div-block-6">
              <h4 className="c-h3 left-align mt-24">Shared Security</h4>
              <p className="c-p mb-32 mob-left">
                SKALE is a multichain network with shared security, but not shared performance; each
                node runs 8 chains, randomly rotated for collusion resistance.
              </p>
            </div>
            <div id="w-node-_74ae4ab9-dd27-fe1a-e0f7-09df0149da79-eddc2eca" className="div-block-6">
              <h4 className="c-h3 left-align mt-24">Eco-Friendly</h4>
              <p className="c-p mb-32 mob-left">
                SKALE is an eco-friendly blockchain using PoS and efficient containerization to
                optimize resource allocation of SKALE compute, reducing waste.
              </p>
            </div>
            <div id="w-node-fd949f8a-f4e7-6c5b-e9fb-a614c58c1a10-eddc2eca" className="div-block-6">
              <h4 className="c-h3 left-align mt-24">On-chain File&nbsp;Storage</h4>
              <p className="c-p mb-32 mob-left">
                On-chain file storage for Dapps enables full websites, AI/ML integration, and
                trustless on-chain NFT image storage.
              </p>
            </div>
            <div id="w-node-_92a8fd03-0a6b-bab8-8755-394313fffff5-eddc2eca" className="div-block-6">
              <h4 className="c-h3 left-align mt-24">Instant Finality</h4>
              <p className="c-p mb-32 mob-left">
                Instant block finality on SKALE prevents MEV, time bandit attacks, and re-orgs,
                solving latency and slow finality plaguing other blockchains.
              </p>
            </div>
          </div>
          <div className="div-block-74">
            <img src="./img/f_saturn.png" loading="lazy" alt="" className="image-16 v2" />
          </div>
        </div>
        <div className="container">
          <div className="columns-3 home v2 w-row">
            <div className="column-45 w-col w-col-9">
              <h2 className="c-h2 left-align mb-0 p-r v2">What’s New With SKALE</h2>
            </div>
            <div className="column-22 v2 w-col w-col-3">
              <a href="#" target="noreferrer" className="nav_link">
                See all
              </a>
            </div>
          </div>
          <div className="home-posts w-dyn-list">
            <div role="list" className="collection-list-7 w-dyn-items">
              <div role="listitem" className="no-padding w-dyn-item">
                <a href="#" className="post-link w-inline-block">
                  <div
                    id="w-node-b34d7692-2f47-bdea-255d-042c8e9aec21-eddc2eca"
                    data-w-id="b34d7692-2f47-bdea-255d-042c8e9aec21"
                    className="blog-item v2 v3"
                  >
                    <div className="blog-img-holder">
                      <img
                        loading="lazy"
                        alt=""
                        src="./img/Skale-Ballers-Banner.png"
                        className="div-block-3"
                      />
                    </div>
                    <div>
                      <p className="paragraph p date home-date blog-item v2">January 11, 2024</p>
                      <h4 className="c-h4 left-align home-h-margin v2">
                        Ballers Studio Launches Flagship game Ballers City on SKALE
                      </h4>
                      <p className="c-p home-box-p">
                        Join Ballers City on SKALE, the world's fastest blockchain, and dive into a
                        seamless gaming experience with zero gas fees. Play, earn, and connect!
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="no-padding w-dyn-item">
                <a
                  href="/blog/skale-chain-pricing-is-now-live-on-mainnet"
                  className="post-link w-inline-block"
                >
                  <div
                    id="w-node-b34d7692-2f47-bdea-255d-042c8e9aec21-eddc2eca"
                    data-w-id="b34d7692-2f47-bdea-255d-042c8e9aec21"
                    className="blog-item v2 v3"
                  >
                    <div className="blog-img-holder">
                      <img
                        loading="lazy"
                        alt=""
                        src="./img/Skale-Chain-Live.png"
                        className="div-block-3"
                      />
                    </div>
                    <div>
                      <p className="paragraph p date home-date blog-item v2">January 9, 2024</p>
                      <h4 className="c-h4 left-align home-h-margin v2">
                        SKALE Chain Pricing Is Now Live On Mainnet{' '}
                      </h4>
                      <p className="c-p home-box-p">
                        Discover how the SKALE Chain pricing model is implemented, offering a
                        sustainable, zero gas fee system with a strategic three-phase economic plan.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="no-padding w-dyn-item">
                <a href="#" className="post-link w-inline-block">
                  <div
                    id="w-node-b34d7692-2f47-bdea-255d-042c8e9aec21-eddc2eca"
                    data-w-id="b34d7692-2f47-bdea-255d-042c8e9aec21"
                    className="blog-item v2 v3"
                  >
                    <div className="blog-img-holder">
                      <img
                        loading="lazy"
                        alt=""
                        src="./img/year-in-review.png"
                        className="div-block-3"
                      />
                    </div>
                    <div>
                      <p className="paragraph p date home-date blog-item v2">January 4, 2024</p>
                      <h4 className="c-h4 left-align home-h-margin v2">
                        2023: A Monumental Year for SKALE - Year in Review
                      </h4>
                      <p className="c-p home-box-p">
                        Explore SKALE's remarkable 2023 journey, including major milestones, network
                        upgrades, DApp launches, and key partnerships in our comprehensive year in
                        review.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="c-h2 left-align mb-0 p-r v2 large">
            <strong>SKALE's Expanding Spectrum of Use Cases</strong>
          </h2>
          <div className="columns-13 reverse new-column vice-versa w-row">
            <div className="column-12 hc-12 center w-col w-col-6 w-col-stack">
              <div className="uptitle">GAMING</div>
              <h4 className="c-h2 left-align font-v2 mt-24 smaller">
                The Future of Gaming is Here
              </h4>
              <p className="c-p center">
                Create player-first web3 experiences with SKALE’s unrivaled speed, scale, and
                gas-free infrastructure. Reimagine gaming and bring your vision to life.
              </p>
              <div className="div-block-346">
                <a
                  href="#"
                  target="noreferrer"
                  className="button-2 button-6 hero-btn hero-x v2 white-btn _w-100 w-button"
                >
                  Start Building
                </a>
                <a
                  href="#"
                  target="noreferrer"
                  className="button-2 button-6 hero-btn hero-x v2 invert-bg _w-100 w-button"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="column-11 reverse flex-align-center hc-11 w-col w-col-6 w-col-stack">
              <img
                src="https://assets-global.website-files.com/625c39b93541414104a1d654/6555c161c6a7b45c717a2586_Frame%2045585.png"
                loading="lazy"
                sizes="100vw"
                srcSet="https://assets-global.website-files.com/625c39b93541414104a1d654/6555c161c6a7b45c717a2586_Frame%2045585-p-500.png 500w, https://assets-global.website-files.com/625c39b93541414104a1d654/6555c161c6a7b45c717a2586_Frame%2045585-p-800.png 800w, https://assets-global.website-files.com/625c39b93541414104a1d654/6555c161c6a7b45c717a2586_Frame%2045585.png 831w"
                alt=""
                className="image-243 mb-32"
              />
            </div>
          </div>
        </div>
        <div className="container small">
          <h2 className="c-h2 left-align mb-0 p-r v2 smaller">Why Choose SKALE For Gaming</h2>
          <div className="w-layout-grid grid-33">
            <div
              id="w-node-ba33d296-6fd6-0dde-907d-4e8a89484d9e-eddc2eca"
              className="div-block-6 about-kit vertical flex-left no-pointer"
            >
              <div className="div-block-18 max-none">
                <img src="./img/1_Frame.svg" loading="lazy" alt="" className="tech-icon small" />
              </div>
              <h4 className="c-h3 left-align mt-24 mb-v2-h">Zero Gas Fees</h4>
              <p className="c-p mob-left">
                Transactions are free on SKALE. Offer unlimited free mints, onboard players within
                seconds, and build great experiences.
              </p>
            </div>
            <div className="div-block-6 about-kit vertical flex-left no-pointer">
              <div className="div-block-18 max-none">
                <img src="./img/2_Frame.svg" loading="lazy" alt="" className="tech-icon small" />
              </div>
              <h4 className="c-h3 left-align mt-24 mb-v2-h">Game Changing Speed</h4>
              <p className="c-p mob-left">
                <a href="#" target="noreferrer">
                  The fastest blockchain in the industry
                </a>
                , SKALE offers unparalleled speed, low latency, and instant finality. Your players
                will want to play.
              </p>
            </div>
            <div className="div-block-6 about-kit vertical flex-left no-pointer">
              <div className="div-block-18 max-none">
                <img src="./img/3_Frame.svg" loading="lazy" alt="" className="tech-icon small" />
              </div>
              <h4 className="c-h3 left-align mt-24 mb-v2-h">Built-in Game Development Tools</h4>
              <p className="c-p mob-left">
                Native file storage, RNG, and UX/UI. Prototype quicker, build faster, and iterate
                more without added costs.&nbsp; &nbsp;
              </p>
            </div>
            <div className="div-block-6 about-kit vertical flex-left no-pointer">
              <div className="div-block-18 max-none">
                <img src="./img/4_Frame.svg" loading="lazy" alt="" className="tech-icon small" />
              </div>
              <h4 className="c-h3 left-align mt-24 mb-v2-h">Configure to Your Needs</h4>
              <p className="c-p mob-left">
                Prototype your game or build your own chain. Permissioned or permissionless, you
                take control.
              </p>
            </div>
          </div>
        </div>
        <div className="div-block-78">
          <img
            className="image-70"
            src="./img/planet.png"
            alt=""
            sizes="(max-width: 991px) 100vw, 250px"
            loading="lazy"
          />
          <img
            className="image-25 second up"
            src="./img/planet_2.png"
            alt=""
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 150px, 224px"
            loading="lazy"
          />
          <div className="container">
            <h2 className="c-h2 left-align mb-0 p-r v2 smaller">Gas Free Gaming in Action</h2>
            <div className="columns-13 reverse new-column w-row">
              <div className="column-12 hc-12 _w-100 w-col w-col-6 w-col-stack w-col-tiny-tiny-stack">
                <h4 className="c-h2 left-align font-v2 mt-24 smaller mt-0">
                  No lag. No interruptions. Just gameplay.&nbsp;
                </h4>
                <p className="c-p">Create an invisible gaming experience.</p>
              </div>
              <div className="column-11 reverse flex-align-center hc-11 w-col w-col-6 w-col-stack w-col-tiny-tiny-stack">
                <div
                  style={{ paddingTop: '56.17021276595745%' }}
                  className="w-embed-youtubevideo youtube"
                >
                  <iframe
                    src="https://www.youtube.com/embed/zg0bT_rFPFc?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=1&amp;start=0"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'auto',
                      border: '0',
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen=""
                    title="Gas Free Gaming on SKALE"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="c-h2 left-align mb-0 p-r v2 smaller">
            Player-first Games Powered by SKALE
          </h2>
          <div className="w-layout-grid grid-2 home-grid _3">
            <div id="w-node-_086f26cc-095c-d7c9-517b-b3618762d65f-eddc2eca" className="div-block-6">
              <div className="div-block-347">
                <img
                  src="./img/StrayShot.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 85vw, 664.359375px"
                  alt=""
                  className="image-257"
                />
              </div>
              <h4 className="c-h3 left-align mt-24">StrayShot</h4>
              <p className="c-p mb-32 mob-left">
                StrayShot is a P2E game that delivers a thrilling shooter experience to players.
              </p>
            </div>
            <div id="w-node-_086f26cc-095c-d7c9-517b-b3618762d665-eddc2eca" className="div-block-6">
              <div className="div-block-347">
                <img src="./img/plane.png" loading="lazy" alt="" className="image-257" />
              </div>
              <h4 className="c-h3 left-align mt-24">Untitled</h4>
              <p className="c-p mb-32 mob-left">
                A 32-bit multiplayer platformer. Adventure into the blockchain one pixel at a time.
              </p>
            </div>
            <div id="w-node-_086f26cc-095c-d7c9-517b-b3618762d66b-eddc2eca" className="div-block-6">
              <div className="div-block-347">
                <img
                  src="./img/6555cbb412b967bc2243a05b.png"
                  loading="lazy"
                  alt=""
                  className="image-257"
                />
              </div>
              <h4 className="c-h3 left-align mt-24">Gamifly</h4>
              <p className="c-p mb-32 mob-left">
                A fully transparent sports metaverse that provides esports events for fans and
                gamers alike.
              </p>
            </div>
          </div>
          <div className="div-block-346 mt-64">
            <a
              href="#"
              target="noreferrer"
              className="button-2 button-6 hero-btn hero-x v2 white-btn w-button"
            >
              View All Games
            </a>
          </div>
        </div>
        <div className="container">
          <div className="columns-13 reverse new-column w-row">
            <div className="column-12 hc-12 center w-col w-col-6 w-col-stack">
              <div className="uptitle">AI</div>
              <h4 className="c-h2 left-align font-v2 mt-24 smaller">
                Empowering AI with SKALE Chains
              </h4>
              <p className="c-p center">
                SKALE Chains are revolutionizing AI with zero gas fees and instant finality which
                cater to the nuanced requirements of AI applications. These features are essential
                for AI to optimally function on blockchain.
              </p>
            </div>
            <div className="column-11 reverse flex-align-center hc-11 w-col w-col-6 w-col-stack">
              <div className="div-block-20 _w-100">
                <img
                  src="./img/6555c3bcec563ca4d836a5e3.png"
                  loading="lazy"
                  sizes="100vw"
                  alt=""
                  className="image-243"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-78">
          <img
            src="./img/6555fba6453b5de7d86ea0e7.png"
            loading="lazy"
            alt=""
            className="image-70 left"
          />
          <div className="container">
            <h2 className="c-h2 left-align mb-0 p-r v2 smaller">AI-Optimized Features</h2>
            <div className="w-layout-grid grid-2 home-grid _3">
              <div
                id="w-node-a157e035-4bdc-f010-4e6e-e0fa6cae90a3-eddc2eca"
                className="div-block-6 vv"
              >
                <img src="./img/Frame-1.svg" loading="lazy" alt="" className="image-255" />
                <h4 className="c-h3 left-align mt-24">Predictable Costs for High Throughput</h4>
                <p className="c-p mb-32 mob-left">
                  AI applications require automated, high-volume transactions that are impossible
                  without zero gas fees.
                </p>
              </div>
              <div
                id="w-node-a157e035-4bdc-f010-4e6e-e0fa6cae90a8-eddc2eca"
                className="div-block-6 vv"
              >
                <img src="./img/Frame-2.svg" loading="lazy" alt="" className="image-255" />
                <h4 className="c-h3 left-align mt-24">AI/ML Execution within Smart Contracts</h4>
                <p className="c-p mb-32 mob-left">
                  Run pre-trained AI models within a smart contract, creating a trustless
                  environment for AI-driven executions.
                </p>
              </div>
              <div
                id="w-node-a157e035-4bdc-f010-4e6e-e0fa6cae90ad-eddc2eca"
                className="div-block-6 vv"
              >
                <img src="./img/Frame-3.svg" loading="lazy" alt="" className="image-255" />
                <h4 className="c-h3 left-align mt-24">Instant Finality and Zero MEV</h4>
                <p className="c-p mb-32 mob-left">
                  Once a transaction is commenced, it immediately comes to finality, preventing
                  manipulations like front-running.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-64 left">
          <div className="uptitle left-1">OTHER USE CASES</div>
          <div className="w-layout-grid grid-32">
            <div className="solution-card _w-30">
              <div className="img-holder solution-img solution-2 square img-holder-fix">
                <div
                  data-poster-url="https://assets-global.website-files.com/625c39b93541414104a1d654/628d239d6ba392b7c348dd08_defi2-poster-00001.jpg"
                  data-video-urls="https://assets-global.website-files.com/625c39b93541414104a1d654/628d239d6ba392b7c348dd08_defi2-transcode.mp4,https://assets-global.website-files.com/625c39b93541414104a1d654/628d239d6ba392b7c348dd08_defi2-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-beta-bgvideo-upgrade="false"
                  className="background-video-5 img-holder-video w-background-video w-background-video-atom"
                >
                  <video
                    id="99290e9f-5537-83a9-5eee-b434ef5f051e-video"
                    autoPlay=""
                    loop=""
                    style='background-image:url("https://assets-global.website-files.com/625c39b93541414104a1d654/628d239d6ba392b7c348dd08_defi2-poster-00001.jpg")'
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d239d6ba392b7c348dd08_defi2-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d239d6ba392b7c348dd08_defi2-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
              <h4 className="heading h4 solution-card-title">DeFi</h4>
              <p className="c-p mb-32 mob-left">
                <a href="https://skale.space/network/defi" target="noreferrer" className="link-18">
                  Unlock DeFi’s full potential
                </a>{' '}
                on the only EVM network with zero gas fees. Stay secure with no MEV or
                Front-Running.
              </p>
            </div>
            <div className="solution-card _w-30">
              <div className="img-holder solution-img solution-3 square img-holder-fix">
                <div
                  data-poster-url="https://assets-global.website-files.com/625c39b93541414104a1d654/628d236d0626895c9b65b3e1_media2-poster-00001.jpg"
                  data-video-urls="https://assets-global.website-files.com/625c39b93541414104a1d654/628d236d0626895c9b65b3e1_media2-transcode.mp4,https://assets-global.website-files.com/625c39b93541414104a1d654/628d236d0626895c9b65b3e1_media2-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-beta-bgvideo-upgrade="false"
                  className="background-video-6 w-background-video w-background-video-atom"
                >
                  <video
                    id="3a3f9703-a6bc-ad70-d75a-a01314b89fbc-video"
                    autoPlay=""
                    loop=""
                    style='background-image:url("https://assets-global.website-files.com/625c39b93541414104a1d654/628d236d0626895c9b65b3e1_media2-poster-00001.jpg")'
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d236d0626895c9b65b3e1_media2-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d236d0626895c9b65b3e1_media2-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
              <h4 className="heading h4 solution-card-title">Web3</h4>
              <p className="c-p mb-32 mob-left">
                Harness the power of decentralized customization, high performance, and easy
                onboarding with configurable AppChains.
              </p>
            </div>
            <div className="solution-card _w-30">
              <div className="img-holder solution-img solution-6 square">
                <div
                  data-poster-url="https://assets-global.website-files.com/625c39b93541414104a1d654/6299aa05d0f8473012c30bdd_icon 6-poster-00001.jpg"
                  data-video-urls="https://assets-global.website-files.com/625c39b93541414104a1d654/6299aa05d0f8473012c30bdd_icon 6-transcode.mp4,https://assets-global.website-files.com/625c39b93541414104a1d654/6299aa05d0f8473012c30bdd_icon 6-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-beta-bgvideo-upgrade="false"
                  className="background-video-9 w-background-video w-background-video-atom"
                >
                  <video
                    id="3d98270e-559e-e9d4-81bb-a642a1a16275-video"
                    autoPlay=""
                    loop=""
                    style='background-image:url("https://assets-global.website-files.com/625c39b93541414104a1d654/6299aa05d0f8473012c30bdd_icon 6-poster-00001.jpg")'
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/6299aa05d0f8473012c30bdd_icon 6-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/6299aa05d0f8473012c30bdd_icon 6-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
              <h4 className="heading h4 solution-card-title">NFTs</h4>
              <p className="c-p mb-32 mob-left">
                Take advantage of free NFT minting, on-chain file storage, and instant transaction
                time thanks to SKALE’s modular architecture.
              </p>
            </div>
            <div className="solution-card _w-30">
              <div className="img-holder solution-img solution-4 square">
                <div
                  data-poster-url="https://assets-global.website-files.com/625c39b93541414104a1d654/628d2336b69ec4db0af77cb6_commerce2-poster-00001.jpg"
                  data-video-urls="https://assets-global.website-files.com/625c39b93541414104a1d654/628d2336b69ec4db0af77cb6_commerce2-transcode.mp4,https://assets-global.website-files.com/625c39b93541414104a1d654/628d2336b69ec4db0af77cb6_commerce2-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-beta-bgvideo-upgrade="false"
                  className="background-video-7 w-background-video w-background-video-atom"
                >
                  <video
                    id="3832c896-a63a-7151-317d-e6c474c6b0d0-video"
                    autoPlay=""
                    loop=""
                    style='background-image:url("https://assets-global.website-files.com/625c39b93541414104a1d654/628d2336b69ec4db0af77cb6_commerce2-poster-00001.jpg")'
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d2336b69ec4db0af77cb6_commerce2-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/628d2336b69ec4db0af77cb6_commerce2-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
              <h4 className="heading h4 solution-card-title">dE-commerce</h4>
              <p className="c-p mb-32 mob-left">
                Revolutionize online commerce with feeless transactions and secure smart contract
                functionality.
              </p>
            </div>
            <div className="solution-card _w-30">
              <div className="img-holder solution-img solution-5 square">
                <div
                  data-poster-url="https://assets-global.website-files.com/625c39b93541414104a1d654/6299a997b5e99d284fa14595_icon 4-poster-00001.jpg"
                  data-video-urls="https://assets-global.website-files.com/625c39b93541414104a1d654/6299a997b5e99d284fa14595_icon 4-transcode.mp4,https://assets-global.website-files.com/625c39b93541414104a1d654/6299a997b5e99d284fa14595_icon 4-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-beta-bgvideo-upgrade="false"
                  className="background-video-8 w-background-video w-background-video-atom"
                >
                  <video
                    id="fcfdf8d1-5343-0479-665a-af4d5af16564-video"
                    autoPlay=""
                    loop=""
                    style='background-image:url("https://assets-global.website-files.com/625c39b93541414104a1d654/6299a997b5e99d284fa14595_icon 4-poster-00001.jpg")'
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/6299a997b5e99d284fa14595_icon 4-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://assets-global.website-files.com/625c39b93541414104a1d654/6299a997b5e99d284fa14595_icon 4-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                  <div className="w-video w-embed"></div>
                </div>
              </div>
              <h4 className="heading h4 solution-card-title">DAOs</h4>
              <p className="c-p mb-32 mob-left">
                Power your DAO with a secure consensus mechanism, enabling democratic
                decision-making with real-time voting at zero cost.
              </p>
            </div>
          </div>
          <div className="div-block-4 skale-stats-container hide">
            <img
              src="https://assets-global.website-files.com/625c39b93541414104a1d654/627367ed395deab0416c01c9_blur-logo.svg"
              loading="lazy"
              alt=""
              className="image-17 skale-stats-left-logo"
            />
            <img
              src="https://assets-global.website-files.com/625c39b93541414104a1d654/627367ed395deab0416c01c9_blur-logo.svg"
              loading="lazy"
              alt=""
              className="image-18 skale-stats-right-logo"
            />
            <div className="div-block-5">
              <h2 className="heading-3 stat-head black">SKALE Stats</h2>
              <div className="w-layout-grid grid">
                <div id="w-node-_093ff125-e1dd-1c47-542c-ca84ae8b5d9c-eddc2eca">
                  <h5
                    id="w-node-_27c3efdd-8a42-eeeb-4b22-e6877c0b401f-eddc2eca"
                    className="h5 black"
                  >
                    2,500
                  </h5>
                  <p className="paragraph p black">Transaction per second</p>
                </div>
                <div id="w-node-cb1aa167-4319-fad6-5a46-2e4ecf9a6931-eddc2eca">
                  <h5
                    id="w-node-cb1aa167-4319-fad6-5a46-2e4ecf9a6932-eddc2eca"
                    className="h5 black"
                  >
                    100,000,000,000
                  </h5>
                  <p className="paragraph p black">Total transactions</p>
                </div>
                <div id="w-node-_41dafc5d-968f-fca8-36f4-1c8c2e1bcd16-eddc2eca">
                  <h5
                    id="w-node-_41dafc5d-968f-fca8-36f4-1c8c2e1bcd17-eddc2eca"
                    className="h5 black"
                  >
                    0.00025
                  </h5>
                  <p className="paragraph p black">Avg cost per transaction</p>
                </div>
                <div id="w-node-c7272309-dc1d-b40b-9d25-740b528eb794-eddc2eca">
                  <h5
                    id="w-node-c7272309-dc1d-b40b-9d25-740b528eb795-eddc2eca"
                    className="h5 black"
                  >
                    152
                  </h5>
                  <p className="paragraph p black">Validator nodes</p>
                </div>
                <div id="w-node-_80026f7d-81f3-47c7-a614-618763411e91-eddc2eca">
                  <h5
                    id="w-node-_80026f7d-81f3-47c7-a614-618763411e92-eddc2eca"
                    className="h5 black"
                  >
                    $1B TVL
                  </h5>
                  <p className="paragraph p black">Staking</p>
                </div>
                <div id="w-node-_5e799cfa-51cc-101d-c3a2-694c617632ff-eddc2eca">
                  <h5
                    id="w-node-_5e799cfa-51cc-101d-c3a2-694c61763300-eddc2eca"
                    className="h5 black"
                  >
                    40+
                  </h5>
                  <p className="paragraph p black">Ecosystem partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
