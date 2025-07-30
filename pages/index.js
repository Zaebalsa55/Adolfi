import React, { Fragment, useState } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Component1 from '../components/component1'
import EnhancedSimpleRive from '../components/EnhancedSimpleRive'
import MobilePriceTable from '../components/MobilePriceTable'
import ConnectionPath from '../components/ConnectionPath'

const Frame1196 = (props) => {
  const translate = useTranslations()
  const [openFaq, setOpenFaq] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className="frame1196-container10">
        <Head>
          <title>РемСтирМаш - Ремонт стиральных машин в Одессе</title>
        </Head>

        {/* Новый хеддер */}
        <header className="header">
          <div className="header-container">
            {/* Ло��отип ��лева */}
            <div className="header-logo">
              <span className="logo-text">РемСтирМаш</span>
            </div>

            {/* Навигация для десктопа (выш�� 1450px) */}
            <nav className="header-nav desktop-nav">
              <button className="nav-button">Главная</button>
              <button className="nav-button">Выкуп б/у машин</button>
              <button className="nav-button">Статьи</button>
            </nav>

            {/* Телефоны ��ля десктопа */}
            <div className="header-phones desktop-phones">
              <div className="phone-number">+38 (048) 777-77-77</div>
              <div className="phone-number">+38 (063) 123-45-67</div>
            </div>

            {/* Мобильное меню (до 1450px) */}
            <div className="tablet-header">
              <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
              <div className="tablet-phones">
                <div className="phone-number">+38 (048) 777-77-77</div>
                <div className="phone-number">+38 (063) 123-45-67</div>
              </div>
            </div>

            {/* Мобильное меню (до 768px) */}
            <div className="mobile-header">
              <button className={`mobile-menu-toggle mobile-only ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
              <div className="mobile-phone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21H3.08C2.48 21 2 20.52 2 19.92V4.08C2 3.48 2.48 3 3.08 3H20.92C21.52 3 22 3.48 22 4.08V7.08" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 2L9.5 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

          </div>
        </header>

        {/* Выпадающее меню вне хеддера */}
        <div className={`dropdown-menu ${isMobileMenuOpen ? 'dropdown-menu-open' : ''}`}>
          <nav className="dropdown-nav">
            <button className="dropdown-nav-button">Главная</button>
            <button className="dropdown-nav-button">Выкуп б/у машин</button>
            <button className="dropdown-nav-button">Статьи</button>
          </nav>
        </div>
        <div className="frame1196-container19">
          <div className="frame1196-container20">
            <span className="frame1196-text109">
              <span className="frame1196-text110">
                Ремонт стиральных машин в
              </span>
              <span>Одессе!</span>
            </span>
            {/* CSS WASHING MACHINE */}
            <div id="washer" className="frame1196-image1">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                style={{ display: 'none' }}
              >
                <symbol id="wave">
                  <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                  <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                  <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                  <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                </symbol>
              </svg>

              <div id="door">
                <div className="handle"></div>
                <div id="inner-door">
                  <div id="page" className="page">
                    <div id="water" className="water">
                      <svg viewBox="0 0 560 20" className="water-wave water-wave-back">
                        <use xlinkHref="#wave"></use>
                      </svg>
                      <svg viewBox="0 0 560 20" className="water-wave water-wave-front">
                        <use xlinkHref="#wave"></use>
                      </svg>

                      <div className="water-inner">
                        <div className="bubble bubble1"></div>
                        <div className="bubble bubble2"></div>
                        <div className="bubble bubble3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="frame1196-frame956">
              <span className="frame1196-text112">Получ��ть помощь</span>
            </div>
          </div>
          <div className="frame1196-container21">
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text113">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-WwIca'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name9"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text114">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_di5O1X'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text115">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_doHcvi'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name10"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text116">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-OEuTS'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name3"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text117">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_q50k8i'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name2"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text118">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IAeWyo'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name1"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text119">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_y0vWR1'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name11"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text120">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__OZqX_'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name12"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text121">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_oBcU1A'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name13"
            ></Component1>
            <Component1
              text1={
                <Fragment>
                  <span className="frame1196-text122">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_J99Wqz'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="component1root-class-name14"
            ></Component1>
          </div>
        </div>
        <span className="frame1196-text123">
          <span className="frame1196-text124">В</span>
          <span className="frame1196-text125">РемСти��Маш</span>
          <span>
            {' '}
            мы за��оти��ся о надёжной работе вашей техники во всех уголках Одессы.
          </span>
          <br />
          <span>
            Профес��ионально устраняем любые неисправности стиральных машин — от
            самых просты�� до самых сложных.
          </span>
          <br />
          <span>
            Просто позвоните или оста��ьте заявку, и мы вам перезвоним.
          </span>
        </span>
        <div className="frame1196-frame1078">
          <div className="frame1196-container22">
            <div className="frame1196-frame10311">
              <img
                alt="image38228887645"
                src="/external/image38228887645-r4vb-200h.png"
                className="frame1196-image38228881"
              />
            </div>
            <span className="frame1196-text131">Бесплатный вы��зд</span>
            <img
              alt="image"
              src="/vector%2074-200h.png"
              className="frame1196-image2"
            />
          </div>
          <div className="frame1196-container23">
            <div className="frame1196-frame10312">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="frame1196-image3"
              />
            </div>
            <span className="frame1196-text132">Честные цены</span>
            <img
              alt="image"
              src="/vector%2074-200h.png"
              className="frame1196-image4"
            />
          </div>
          <div className="frame1196-container24">
            <div className="frame1196-frame10313">
              <img
                alt="image38228887645"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="frame1196-image38228882"
              />
            </div>
            <span className="frame1196-text133">Ремонт в день обращения</span>
            <img
              alt="image"
              src="/vector%2074-200h.png"
              className="frame1196-image5"
            />
          </div>
        </div>
        <span className="frame1196-text134">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_FrEymg'),
            }}
          ></span>
        </span>
        <div className="frame1196-container25">
          <EnhancedSimpleRive />
          <MobilePriceTable />
        </div>
        <div className="frame1196-frame928">
          <img
            alt="ardologo17574"
            src="/external/ardologo17574-ya2c-200h.png"
            className="frame1196-ardologo1"
          />
          <img
            alt="bekologo17574"
            src="/external/bekologo17574-85r-200h.png"
            className="frame1196-bekologo1"
          />
          <img
            alt="boschlogo17574"
            src="/external/boschlogo17574-lf29-200h.png"
            className="frame1196-boschlogo1"
          />
          <img
            alt="candylogo17574"
            src="/external/candylogo17574-bxi-200h.png"
            className="frame1196-candylogo1"
          />
        </div>
        <span className="frame1196-text135">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_vAlF7-'),
            }}
          ></span>
        </span>
        <div className="frame1196-frame1069">
          <div className="frame1196-container26">
            <div className="frame1196-frame10381">
              <div className="frame1196-frame10371">
                <img
                  alt="image38228857574"
                  src="/external/image38228857574-2mao-200w.png"
                  className="frame1196-image3822885"
                />
              </div>
              <span className="frame1196-text136">
                <span>Гарантийн��й cрок до 24</span>
                <br />
                <span>ме��яцев</span>
              </span>
              <img
                alt="Vector677574"
                src="/external/vector677574-grn.svg"
                className="frame1196-vector671"
              />
            </div>
            <div className="frame1196-frame10382">
              <div className="frame1196-frame10372">
                <img
                  alt="image38228957574"
                  src="/external/image38228957574-iqjwb-200h.png"
                  className="frame1196-image3822895"
                />
              </div>
              <span className="frame1196-text140">
                Низкие цены на весь сервисный ��иапазон услуг
              </span>
              <img
                alt="Vector677574"
                src="/external/vector677574-grn.svg"
                className="frame1196-vector672"
              />
            </div>
            <div className="frame1196-frame10383">
              <div className="frame1196-frame10373">
                <img
                  alt="image38228947574"
                  src="/external/image38228947574-s1td-200h.png"
                  className="frame1196-image3822894"
                />
              </div>
              <span className="frame1196-text141">
                ��алаженные ��вязи с поставщиками
              </span>
              <img
                alt="Vector677574"
                src="/external/vector677574-grn.svg"
                className="frame1196-vector673"
              />
            </div>
            <div className="frame1196-frame10384">
              <div className="frame1196-frame10374">
                <img
                  alt="image38228837574"
                  src="/external/image38228837574-af6g-200h.png"
                  className="frame1196-image3822883"
                />
              </div>
              <span className="frame1196-text142">
                Лучшие мас��ера с многоле��ни�� стажем 7-10 ��ет
              </span>
              <img
                alt="Vector677574"
                src="/external/vector677574-grn.svg"
                className="frame1196-vector674"
              />
            </div>
            <div className="frame1196-frame10385">
              <div className="frame1196-frame10375">
                <div className="frame1196-frame1036">
                  <img
                    alt="image38228877574"
                    src="/external/image38228877574-2bl8-200h.png"
                    className="frame1196-image3822887"
                  />
                </div>
              </div>
              <span className="frame1196-text143">
                Современн��е оборудование по диагно��тике
              </span>
              <img
                alt="Vector677574"
                src="/external/vector677574-grn.svg"
                className="frame1196-vector675"
              />
            </div>
          </div>
        </div>
        <span className="frame1196-text144">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_ni5Ogr'),
            }}
          ></span>
        </span>
        <div className="frame1196-container27">
          <div className="frame1196-group372">
            <img
              alt="image38229027574"
              src="/external/image38229027574-207-300w.png"
              className="frame1196-image38229021"
            />
            <div className="frame1196-frame9481">
              <span className="frame1196-text145">
                Замена манжеты люк�� на ст��ральной машин�� LG
              </span>
            </div>
          </div>
          <div className="frame1196-group373">
            <img
              alt="image38229027574"
              src="/external/image38229027574-8tu-300w.png"
              className="frame1196-image38229022"
            />
            <div className="frame1196-frame9482">
              <span className="frame1196-text146">
                Замена крестовины барабана на gorenje
              </span>
            </div>
          </div>
          <div className="frame1196-group374">
            <img
              alt="image38229027574"
              src="/external/image38229027574-6ww-300w.png"
              className="frame1196-image38229023"
            />
            <div className="frame1196-frame9483">
              <span className="frame1196-text147">
                ��амена втулки с���льника н�� п��оводном пол���
              </span>
            </div>
          </div>
          <div className="frame1196-group377">
            <img
              alt="image38229027574"
              src="/external/image38229027574-om0x-300w.png"
              className="frame1196-image38229024"
            />
            <div className="frame1196-frame9484">
              <span className="frame1196-text148">
                Сгорел ТЭН на стиральной машине indesit
              </span>
            </div>
          </div>
          <div className="frame1196-group376">
            <img
              alt="image38229027556"
              src="/external/image38229027556-sy6w-300w.png"
              className="frame1196-image38229025"
            />
            <div className="frame1196-frame9485">
              <span className="frame1196-text149">
                Лопнула втулка крестовины.
              </span>
            </div>
          </div>
          <div className="frame1196-group375">
            <img
              alt="image38229027556"
              src="/external/image38229027556-vw0l-300w.png"
              className="frame1196-image38229026"
            />
            <div className="frame1196-frame9486">
              <span className="frame1196-text150">
                <span>Замена подшипников бар��бана</span>
                <br />
                <span>на Ariston</span>
              </span>
            </div>
          </div>
        </div>
        <div className="frame1196-container28 faq-title-container">
          <span className="frame1196-text154">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_G-YMnq'),
              }}
            ></span>
          </span>
        </div>
        <div className="frame1196-image7-placeholder" style={{display: 'none'}}>
          <svg
            className="frame1196-horizontal-line frame1196-desktop-svg"
            viewBox="0 0 293 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 73.9388C0 78.357 3.58172 81.9388 8 81.9388C12.4183 81.9388 16 78.357 16 73.9388C16 69.5205 12.4183 65.9388 8 65.9388C3.58172 65.9388 0 69.5205 0 73.9388ZM285 73.9388V75.4388H286.5V73.9388H285ZM277 8C277 12.4183 280.582 16 285 16C289.418 16 293 12.4183 293 8C293 3.58172 289.418 0 285 0C280.582 0 277 3.58172 277 8ZM8 73.9388V75.4388H11.4625V73.9388V72.4388H8V73.9388ZM18.3875 73.9388V75.4388H25.3125V73.9388L25.3125 72.4388H18.3875V73.9388ZM32.2375 73.9388V75.4388L39.1625 75.4388V73.9388V72.4388L32.2375 72.4388V73.9388ZM46.0875 73.9388V75.4388H53.0125V73.9388V72.4388H46.0875V73.9388ZM59.9375 73.9388V75.4388H66.8625V73.9388V72.4388H59.9375V73.9388ZM73.7875 73.9388V75.4388H80.7125V73.9388V72.4388H73.7875V73.9388ZM87.6375 73.9388V75.4388H94.5625V73.9388V72.4388H87.6375V73.9388ZM101.488 73.9388V75.4388H108.413V73.9388V72.4388H101.488V73.9388ZM115.338 73.9388V75.4388H122.263V73.9388V72.4388H115.338V73.9388ZM129.188 73.9388V75.4388H136.113V73.9388V72.4388H129.188V73.9388ZM143.038 73.9388V75.4388H149.963V73.9388V72.4388H143.038V73.9388ZM156.888 73.9388V75.4388H163.813V73.9388V72.4388H156.888V73.9388ZM170.738 73.9388V75.4388H177.663V73.9388V72.4388H170.738V73.9388ZM184.588 73.9388V75.4388H191.513V73.9388V72.4388H184.588V73.9388ZM198.438 73.9388V75.4388H205.363V73.9388V72.4388H198.438V73.9388ZM212.288 73.9388V75.4388H219.213V73.9388V72.4388H212.288V73.9388ZM226.138 73.9388V75.4388H233.063V73.9388V72.4388H226.138V73.9388ZM239.988 73.9388V75.4388H246.913V73.9388V72.4388H239.988V73.9388ZM253.838 73.9388V75.4388H260.763V73.9388V72.4388H253.838V73.9388ZM267.688 73.9388V75.4388L274.613 75.4388V73.9388V72.4388L267.688 72.4388V73.9388ZM281.538 73.9388V75.4388H285V73.9388V72.4388H281.538V73.9388ZM285 73.9388H286.5V70.6418H285L283.5 70.6418V73.9388H285ZM285 64.0479H286.5V57.4541H285L283.5 57.4541V64.0479L285 64.0479ZM285 50.8602H286.5V44.2663H285L283.5 44.2663V50.8602L285 50.8602ZM285 37.6724H286.5V31.0786H285H283.5V37.6724H285ZM285 24.4847H286.5V17.8908H285H283.5V24.4847H285ZM285 11.2969H286.5V8L285 8H283.5V11.2969H285Z" fill="url(#paint0_linear_horizontal1)"/>
            <defs>
              <linearGradient id="paint0_linear_horizontal1" x1="8.00001" y1="326" x2="354" y2="329.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#606060"/>
                <stop offset="1" stopColor="#ED9E65"/>
              </linearGradient>
            </defs>
          </svg>

          {/* УДАЛЕН - Mobile SVG */}
          <svg
            className="frame1196-mobile-svg"
            width="232"
            height="122"
            viewBox="0 0 248 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 130C0 134.418 3.58172 138 8 138C12.4183 138 16 134.418 16 130C16 125.582 12.4183 122 8 122C3.58172 122 0 125.582 0 130ZM240 130V131.5H241.5V130H240ZM232 8C232 12.4183 235.582 16 240 16C244.418 16 248 12.4183 248 8C248 3.58172 244.418 0 240 0C235.582 0 232 3.58172 232 8ZM8 130V131.5H11.4118L11.4118 130V128.5H8V130ZM18.2353 130V131.5H25.0588L25.0588 130V128.5H18.2353V130ZM31.8824 130L31.8824 131.5H38.7059V130V128.5H31.8824V130ZM45.5294 130V131.5H52.3529V130V128.5H45.5294V130ZM59.1765 130V131.5H66V130V128.5H59.1765V130ZM72.8235 130V131.5H79.6471V130V128.5H72.8235V130ZM86.4706 130V131.5H93.2941V130V128.5H86.4706V130ZM100.118 130V131.5H106.941V130V128.5H100.118V130ZM113.765 130V131.5H120.588V130V128.5H113.765V130ZM127.412 130V131.5H134.235V130V128.5H127.412V130ZM141.059 130V131.5H147.882V130V128.5H141.059V130ZM154.706 130V131.5H161.529V130V128.5H154.706V130ZM168.353 130V131.5H175.176V130V128.5H168.353V130ZM182 130V131.5H188.824V130V128.5H182V130ZM195.647 130V131.5H202.471V130V128.5H195.647V130ZM209.294 130V131.5H216.118V130V128.5H209.294V130ZM222.941 130V131.5H229.765V130V128.5H222.941V130ZM236.588 130V131.5H240V130V128.5H236.588V130ZM240 130H241.5V126.611H240H238.5V130H240ZM240 119.833H241.5V113.056H240H238.5V119.833H240ZM240 106.278H241.5V99.5H240H238.5V106.278H240ZM240 92.7222H241.5V85.9444H240H238.5V92.7222H240ZM240 79.1667H241.5V72.3889H240H238.5V79.1667H240ZM240 65.6111H241.5V58.8333H240H238.5V65.6111H240ZM240 52.0555H241.5V45.2778H240H238.5V52.0555H240ZM240 38.5H241.5V31.7222H240H238.5V38.5H240ZM240 24.9444H241.5V18.1667H240H238.5V24.9444H240ZM240 11.3889H241.5V8H240H238.5V11.3889H240Z" fill="url(#paint0_linear_7756_3131)"/>
            <defs>
              <linearGradient id="paint0_linear_7756_3131" x1="8" y1="596.364" x2="297.814" y2="597.691" gradientUnits="userSpaceOnUse">
                <stop stopColor="#606060"/>
                <stop offset="1" stopColor="#ED9E65"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="faq-header-image" style={{marginLeft: '-35px'}}>
          <svg
            className="faq-decoration-image"
            width="290"
            height="127"
            viewBox="0 0 290 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M286 126V126.75H286.75V126H286ZM282 4C282 6.20914 283.791 8 286 8C288.209 8 290 6.20914 290 4C290 1.79086 288.209 0 286 0C283.791 0 282 1.79086 282 4ZM0 126L0 126.75H5V126V125.25H0L0 126ZM8 126V126.75H13V126V125.25H8V126ZM16 126V126.75H21V126V125.25H16V126ZM24 126V126.75H29V126V125.25H24V126ZM32 126V126.75H37V126V125.25H32V126ZM40 126V126.75H45V126V125.25H40V126ZM48 126V126.75H53V126V125.25H48V126ZM56 126V126.75H61V126V125.25H56V126ZM64 126V126.75H69V126V125.25H64V126ZM72 126V126.75H77V126V125.25H72V126ZM80 126V126.75H85V126V125.25H80V126ZM88 126V126.75H93V126V125.25H88V126ZM96 126V126.75H101V126V125.25H96V126ZM104 126V126.75H109V126V125.25H104V126ZM112 126V126.75H117V126V125.25H112V126ZM120 126V126.75H125V126V125.25H120V126ZM128 126V126.75H133V126V125.25H128V126ZM136 126V126.75H141V126V125.25H136V126ZM144 126V126.75H149V126V125.25H144V126ZM152 126V126.75H157V126V125.25H152V126ZM160 126V126.75H165V126V125.25H160V126ZM168 126V126.75H173V126V125.25H168V126ZM176 126V126.75H181V126V125.25H176V126ZM184 126V126.75H189V126V125.25H184V126ZM192 126V126.75H197V126V125.25H192V126ZM200 126V126.75H205V126V125.25H200V126ZM208 126V126.75H213V126V125.25H208V126ZM216 126V126.75H221V126V125.25H216V126ZM224 126V126.75H229V126V125.25H224V126ZM232 126V126.75H237V126V125.25H232V126ZM240 126V126.75H245V126V125.25H240V126ZM248 126V126.75H253V126V125.25H248V126ZM256 126V126.75H261V126V125.25H256V126ZM264 126V126.75H269V126V125.25H264V126ZM272 126V126.75H277V126V125.25H272V126ZM280 126V126.75H286V126V125.25H280V126ZM286 126H286.75V122H286H285.25V126H286ZM286 118H286.75V114H286H285.25V118H286ZM286 110H286.75V106H286H285.25V110H286ZM286 102H286.75V98H286H285.25V102H286ZM286 94H286.75V90H286H285.25V94H286ZM286 86H286.75V82H286H285.25V86H286ZM286 78H286.75V74H286H285.25V78H286ZM286 70H286.75V66H286H285.25V70H286ZM286 62H286.75V58H286H285.25V62H286ZM286 54H286.75V50H286H285.25V54H286ZM286 46H286.75V42H286H285.25V46H286ZM286 38H286.75V34H286H285.25V38H286ZM286 30H286.75V26H286H285.25V30H286ZM286 22H286.75V18H286H285.25V22H286ZM286 14H286.75V10H286H285.25V14H286ZM286 6H286.75V4H286L285.25 4V6L286 6Z" fill="url(#paint0_linear_faq_decoration)"/>
            <defs>
              <linearGradient id="paint0_linear_faq_decoration" x1="3.98164e-06" y1="592.364" x2="332.353" y2="593.217" gradientUnits="userSpaceOnUse">
                <stop stopColor="#606060"/>
                <stop offset="1" stopColor="#FF8B37"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="frame1196-container29">
          <div className="frame1196-container30">
            <svg
              className="frame1196-vertical-line"
              width="4"
              height="535"
              viewBox="0 0 4 535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M2 0L0.5 0L0.5 3.47978L2 3.47978L3.5 3.47978L3.5 0L2 0ZM2 10.4393H0.5L0.5 17.3989H2H3.5L3.5 10.4393H2ZM2 24.3585H0.5L0.5 31.318H2H3.5L3.5 24.3585H2ZM2 38.2776H0.5L0.5 45.2372H2H3.5L3.5 38.2776H2ZM2 52.1967H0.5L0.5 59.1563H2H3.5L3.5 52.1967H2ZM2 66.1159H0.5L0.5 73.0754H2H3.5L3.5 66.1159H2ZM2 80.035H0.5L0.5 86.9945H2H3.5L3.5 80.035H2ZM2 93.9541H0.5L0.5 100.914H2H3.5L3.5 93.9541H2ZM2 107.873H0.5L0.5 114.833H2H3.5L3.5 107.873H2ZM2 121.792H0.5L0.5 128.752H2H3.5L3.5 121.792H2ZM2 135.711H0.5L0.5 142.671H2H3.5L3.5 135.711H2ZM2 149.631H0.5L0.5 156.59H2H3.5L3.5 149.631H2ZM2 163.55H0.5L0.5 170.509H2H3.5L3.5 163.55H2ZM2 177.469H0.5L0.5 184.428H2H3.5L3.5 177.469H2ZM2 191.388H0.5L0.5 198.348H2H3.5L3.5 191.388H2ZM2 205.307H0.5L0.5 212.267H2H3.5L3.5 205.307H2ZM2 219.226H0.5L0.5 226.186H2H3.5L3.5 219.226H2ZM2 233.145H0.5L0.5 240.105H2H3.5L3.5 233.145H2ZM2 247.065H0.5L0.5 254.024H2H3.5L3.5 247.065H2ZM2 260.984H0.5L0.5 267.943H2H3.5L3.5 260.984H2ZM2 274.903H0.5L0.5 281.862H2H3.5L3.5 274.903H2ZM2 288.822H0.5L0.5 295.781H2H3.5L3.5 288.822H2ZM2 302.741H0.5L0.5 309.701H2H3.5L3.5 302.741H2ZM2 316.66H0.5L0.5 323.62H2H3.5L3.5 316.66H2ZM2 330.579H0.5L0.5 337.539H2H3.5L3.5 330.579H2ZM2 344.498H0.5L0.5 351.458H2H3.5L3.5 344.498H2ZM2 358.418H0.5L0.5 365.377H2H3.5L3.5 358.418H2ZM2 372.337H0.5L0.5 379.296H2H3.5L3.5 372.337H2ZM2 386.256H0.5L0.5 393.215H2H3.5L3.5 386.256H2ZM2 400.175H0.5L0.5 407.134H2H3.5L3.5 400.175H2ZM2 414.094H0.5L0.5 421.054H2H3.5L3.5 414.094H2ZM2 428.013H0.5L0.5 434.973H2H3.5L3.5 428.013H2ZM2 441.932H0.5L0.5 448.892H2H3.5L3.5 441.932H2ZM2 455.851H0.5L0.5 462.811H2H3.5L3.5 455.851H2ZM2 469.771H0.5L0.5 476.73H2H3.5L3.5 469.771H2ZM2 483.69H0.5L0.5 490.649H2H3.5L3.5 483.69H2ZM2 497.609H0.5L0.5 504.568H2H3.5L3.5 497.609H2ZM2 511.528H0.5L0.5 518.487H2H3.5L3.5 511.528H2ZM2 525.447H0.5L0.5 532.407H2H3.5L3.5 525.447H2ZM2 539.366H0.5L0.5 546.326H2H3.5L3.5 539.366H2ZM2 553.285H0.5L0.5 560.245H2H3.5L3.5 553.285H2ZM2 567.204H0.5L0.5 574.164H2H3.5L3.5 567.204H2ZM2 581.123H0.5L0.5 584.603H2H3.5L3.5 581.123H2Z" fill="#636160"/>
            </svg>
          </div>
          <div className="frame1196-container31">
            <div
              className="frame1196-container32"
              onClick={() => toggleFaq(0)}
              style={{ cursor: 'pointer', justifyContent: 'flex-start' }}
            >
              <div className="frame1196-container33">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon10"
                  style={{
                    transform: openFaq === 0 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#ED9E65'
                  }}
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="frame1196-text155" style={{ textAlign: 'left', paddingLeft: '15px' }}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_L36BuE'),
                  }}
                ></span>
              </span>
            </div>
            <span
              className="frame1196-text156"
              style={{
                display: 'block',
                maxHeight: openFaq === 0 ? '200px' : '0px',
                overflow: 'hidden',
                opacity: openFaq === 0 ? 1 : 0,
                transition: 'all 0.3s ease',
                paddingTop: openFaq === 0 ? '10px' : '0px',
                paddingLeft: '40px',
                width: '100%',
                wordWrap: 'break-word',
                textAlign: 'left',
                lineHeight: '1.4'
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_s3SMkH'),
                }}
              ></span>
            </span>
          </div>
          <div className="frame1196-container34">
            <div
              className="frame1196-container35"
              onClick={() => toggleFaq(1)}
              style={{ cursor: 'pointer', justifyContent: 'flex-start' }}
            >
              <div className="frame1196-container36">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon12"
                  style={{
                    transform: openFaq === 1 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#ED9E65'
                  }}
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="frame1196-text157" style={{ textAlign: 'left', paddingLeft: '15px' }}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FqAHZv'),
                  }}
                ></span>
              </span>
            </div>
            <span
              className="frame1196-text158"
              style={{
                display: 'block',
                maxHeight: openFaq === 1 ? '200px' : '0px',
                overflow: 'hidden',
                opacity: openFaq === 1 ? 1 : 0,
                transition: 'all 0.3s ease',
                paddingTop: openFaq === 1 ? '10px' : '0px',
                paddingLeft: '40px',
                width: '100%',
                wordWrap: 'break-word',
                textAlign: 'left',
                lineHeight: '1.4'
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_DJtAlR'),
                }}
              ></span>
            </span>
          </div>
          <div className="frame1196-container37">
            <div
              className="frame1196-container38"
              onClick={() => toggleFaq(2)}
              style={{ cursor: 'pointer', justifyContent: 'flex-start' }}
            >
              <div className="frame1196-container39">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon14"
                  style={{
                    transform: openFaq === 2 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#ED9E65'
                  }}
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="frame1196-text159" style={{ textAlign: 'left', paddingLeft: '15px' }}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R2dfrR'),
                  }}
                ></span>
              </span>
            </div>
            <span
              className="frame1196-text160"
              style={{
                display: 'block',
                maxHeight: openFaq === 2 ? '200px' : '0px',
                overflow: 'hidden',
                opacity: openFaq === 2 ? 1 : 0,
                transition: 'all 0.3s ease',
                paddingTop: openFaq === 2 ? '10px' : '0px',
                paddingLeft: '40px',
                width: '100%',
                wordWrap: 'break-word',
                textAlign: 'left',
                lineHeight: '1.4'
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_cJhNjr'),
                }}
              ></span>
            </span>
          </div>
          <div className="frame1196-container40">
            <div
              className="frame1196-container41"
              onClick={() => toggleFaq(3)}
              style={{ cursor: 'pointer', justifyContent: 'flex-start' }}
            >
              <div className="frame1196-container42">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon16"
                  style={{
                    transform: openFaq === 3 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#ED9E65'
                  }}
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="frame1196-text161" style={{ textAlign: 'left', paddingLeft: '15px' }}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_df7kbX'),
                  }}
                ></span>
              </span>
            </div>
            <span
              className="frame1196-text162"
              style={{
                display: 'block',
                maxHeight: openFaq === 3 ? '200px' : '0px',
                overflow: 'hidden',
                opacity: openFaq === 3 ? 1 : 0,
                transition: 'all 0.3s ease',
                paddingTop: openFaq === 3 ? '10px' : '0px',
                paddingLeft: '40px',
                width: '100%',
                wordWrap: 'break-word',
                textAlign: 'left',
                lineHeight: '1.4'
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_ZFeooW'),
                }}
              ></span>
            </span>
          </div>
          <div className="frame1196-container43">
            <div
              className="frame1196-container44"
              onClick={() => toggleFaq(4)}
              style={{ cursor: 'pointer', justifyContent: 'flex-start' }}
            >
              <div className="frame1196-container45">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon18"
                  style={{
                    transform: openFaq === 4 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#ED9E65'
                  }}
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="frame1196-text163" style={{ textAlign: 'left', paddingLeft: '15px' }}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tCxv3Q'),
                  }}
                ></span>
              </span>
            </div>
            <span
              className="frame1196-text164"
              style={{
                display: 'block',
                maxHeight: openFaq === 4 ? '200px' : '0px',
                overflow: 'hidden',
                opacity: openFaq === 4 ? 1 : 0,
                transition: 'all 0.3s ease',
                paddingTop: openFaq === 4 ? '10px' : '0px',
                paddingLeft: '40px',
                width: '100%',
                wordWrap: 'break-word',
                textAlign: 'left',
                lineHeight: '1.4'
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_kUAGnL'),
                }}
              ></span>
            </span>
          </div>
        </div>
        <div className="frame1196-image7">
          <svg
            className="frame1196-horizontal-line2"
            style={{display: 'none'}}
            viewBox="0 0 362 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 8.53906C0 12.9573 3.58172 16.5391 8 16.5391C12.4183 16.5391 16 12.9573 16 8.53906C16 4.12078 12.4183 0.539062 8 0.539062C3.58172 0.539063 0 4.12078 0 8.53906ZM354 8.53906H355.5V7.03906H354V8.53906ZM346 167.997C346 172.415 349.582 175.997 354 175.997C358.418 175.997 362 172.415 362 167.997C362 163.579 358.418 159.997 354 159.997C349.582 159.997 346 163.579 346 167.997ZM8 8.53906V10.0391H11.46V8.53906V7.03906L8 7.03906V8.53906ZM18.38 8.53906V10.0391L25.3 10.0391V8.53906V7.03906L18.38 7.03906V8.53906ZM32.22 8.53906V10.0391L39.14 10.0391V8.53906V7.03906L32.22 7.03906V8.53906ZM46.06 8.53906V10.0391L52.98 10.0391V8.53906V7.03906L46.06 7.03906V8.53906ZM59.9 8.53906V10.0391L66.82 10.0391V8.53906V7.03906L59.9 7.03906V8.53906ZM73.74 8.53906V10.0391L80.66 10.0391V8.53906V7.03906L73.74 7.03906V8.53906ZM87.58 8.53906V10.0391L94.5 10.0391V8.53906V7.03906L87.58 7.03906V8.53906ZM101.42 8.53906V10.0391L108.34 10.0391V8.53906V7.03906L101.42 7.03906V8.53906ZM115.26 8.53906V10.0391L122.18 10.0391V8.53906V7.03906L115.26 7.03906V8.53906ZM129.1 8.53906V10.0391L136.02 10.0391V8.53906V7.03906L129.1 7.03906V8.53906ZM142.94 8.53906V10.0391L149.86 10.0391V8.53906V7.03906L142.94 7.03906V8.53906ZM156.78 8.53906V10.0391L163.7 10.0391V8.53906V7.03906L156.78 7.03906V8.53906ZM170.62 8.53906V10.0391L177.54 10.0391V8.53906V7.03906L170.62 7.03906V8.53906ZM184.46 8.53906V10.0391L191.38 10.0391V8.53906V7.03906L184.46 7.03906V8.53906ZM198.3 8.53906V10.0391L205.22 10.0391V8.53906V7.03906L198.3 7.03906V8.53906ZM212.14 8.53906V10.0391L219.06 10.0391V8.53906V7.03906L212.14 7.03906V8.53906ZM225.98 8.53906V10.0391L232.9 10.0391V8.53906V7.03906L225.98 7.03906V8.53906ZM239.82 8.53906V10.0391L246.74 10.0391V8.53906V7.03906L239.82 7.03906V8.53906ZM253.66 8.53906V10.0391L260.58 10.0391V8.53906V7.03906L253.66 7.03906V8.53906ZM267.5 8.53906V10.0391L274.42 10.0391V8.53906V7.03906L267.5 7.03906V8.53906ZM281.34 8.53906V10.0391L288.26 10.0391V8.53906V7.03906L281.34 7.03906V8.53906ZM295.18 8.53906V10.0391H302.1V8.53906V7.03906L295.18 7.03906V8.53906ZM309.02 8.53906V10.0391H315.94V8.53906V7.03906L309.02 7.03906V8.53906ZM322.86 8.53906V10.0391L329.78 10.0391V8.53906V7.03906L322.86 7.03906V8.53906ZM336.7 8.53906V10.0391L343.62 10.0391V8.53906V7.03906L336.7 7.03906V8.53906ZM350.54 8.53906V10.0391L354 10.0391V8.53906V7.03906L350.54 7.03906V8.53906ZM354 8.53906H352.5V12.1631H354H355.5V8.53906H354ZM354 19.4112H352.5V26.6593H354H355.5V19.4112H354ZM354 33.9074H352.5V41.1554H354H355.5V33.9074H354ZM354 48.4035H352.5V55.6516H354H355.5V48.4035H354ZM354 62.8997H352.5V70.1478H354H355.5V62.8997H354ZM354 77.3959H352.5V84.644H354H355.5V77.3959H354ZM354 91.892H352.5V99.1401H354H355.5V91.892H354ZM354 106.388H352.5V113.636H354H355.5V106.388H354ZM354 120.884H352.5L352.5 128.132H354H355.5L355.5 120.884H354ZM354 135.381H352.5V142.629H354H355.5V135.381H354ZM354 149.877H352.5V157.125H354H355.5V149.877H354ZM354 164.373H352.5V167.997H354H355.5V164.373H354Z" fill="url(#paint0_linear_horizontal2)"/>
            <defs>
              <linearGradient id="paint0_linear_horizontal2" x1="8.00001" y1="-324" x2="354" y2="-320.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#606060"/>
                <stop offset="1" stopColor="#ED9E65"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile SVG - новый дизайн из Figma */}
          <svg
            className="frame1196-mobile-line"
            style={{display: 'none'}}
            width="207"
            height="122"
            viewBox="0 0 248 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM240 8H241.5V6.5H240V8ZM232 167C232 171.418 235.582 175 240 175C244.418 175 248 171.418 248 167C248 162.582 244.418 159 240 159C235.582 159 232 162.582 232 167ZM8 8V9.5H11.4118V8V6.5L8 6.5V8ZM18.2353 8V9.5L25.0588 9.5V8V6.5L18.2353 6.5V8ZM31.8824 8V9.5L38.7059 9.5V8V6.5L31.8824 6.5V8ZM45.5294 8V9.5L52.3529 9.5V8V6.5L45.5294 6.5V8ZM59.1765 8V9.5L66 9.5V8V6.5L59.1765 6.5V8ZM72.8235 8V9.5L79.6471 9.5V8V6.5L72.8235 6.5V8ZM86.4706 8V9.5L93.2941 9.5V8V6.5L86.4706 6.5V8ZM100.118 8V9.5L106.941 9.5V8V6.5L100.118 6.5V8ZM113.765 8V9.5L120.588 9.5V8V6.5L113.765 6.5V8ZM127.412 8V9.5L134.235 9.5V8V6.5L127.412 6.5V8ZM141.059 8V9.5L147.882 9.5V8V6.5L141.059 6.5V8ZM154.706 8V9.5L161.529 9.5V8V6.5L154.706 6.5V8ZM168.353 8V9.5L175.176 9.5V8V6.5L168.353 6.5V8ZM182 8V9.5L188.824 9.5V8V6.5L182 6.5V8ZM195.647 8V9.5L202.471 9.5V8V6.5L195.647 6.5V8ZM209.294 8V9.5L216.118 9.5V8V6.5L209.294 6.5V8ZM222.941 8V9.5L229.765 9.5V8V6.5L222.941 6.5V8ZM236.588 8V9.5H240V8V6.5L236.588 6.5V8ZM240 8H238.5V11.6136H240H241.5V8H240ZM240 18.8409H238.5V26.0682H240H241.5V18.8409H240ZM240 33.2955H238.5V40.5227H240H241.5V33.2955H240ZM240 47.75H238.5V54.9773H240H241.5V47.75H240ZM240 62.2045H238.5L238.5 69.4318H240H241.5L241.5 62.2045H240ZM240 76.6591H238.5V83.8864H240H241.5V76.6591H240ZM240 91.1136H238.5V98.3409H240H241.5V91.1136H240ZM240 105.568H238.5V112.795H240H241.5V105.568H240ZM240 120.023H238.5V127.25H240H241.5V120.023H240ZM240 134.477H238.5V141.705H240H241.5V134.477H240ZM240 148.932H238.5V156.159H240H241.5V148.932H240ZM240 163.386H238.5V167H240H241.5V163.386H240Z" fill="url(#paint0_linear_7761_3134)"/>
            <defs>
              <linearGradient id="paint0_linear_7761_3134" x1="8" y1="-323.584" x2="240.013" y2="-322.006" gradientUnits="userSpaceOnUse">
                <stop stopColor="#606060"/>
                <stop offset="1" stopColor="#ED9E65"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="frame1196-frame956">
          <span className="frame1196-text112">Проконсультироваться</span>
        </div>
        <span className="frame1196-text166">
          <span className="frame1196-text167">
            РЕМОНТ СТИРАЛЬНЫХ МАШИН В СЕРВИСНОМ ЦЕНТРЕ РЕМСТИРМАШ В О��ЕССЕ
          </span>
          <br />
          <br />
          <span className="frame1196-text170">
            Стиральная машина — это техника, которая ��олжна работать исправно:
            отжимать, стирать и радовать стабильност��ю. Но на практик�� даже
            самая н��дёжная техника со временем треб��ет внима��ия. Механические
            дет��л�� изнашиваются, элек��роника даёт сбои, а ������овая нагрузка
            дел��ет своё дело. Вот по��ему ремонт стиральных машин в Одессе — э��о
            не просто разовая услу��а, �� реальная не��бходимос��ь для большинства
            владельцев. Важно доверить рем��нт пров������ре����ным специалистам, а ��е
            случайному мастеру.
          </span>
          <br />
          <br />
          <span className="frame1196-text173">
            Под бре��дом Р��мСт��р��аш работает команда мастеров, каждый из которых
            занимается ремонтом стиральных машин более д��сяти ��ет. Мы обуча��ись
            у спец��алистов европейских брендов, прошли сертификацию, посещали
            техкурсы и накопили опыт раб��ты с техникой любых поколений. Сегодня
            мы предлагаем ремонт стиральн��х машин в Одессе с гарантией,
            ис��ользованием оригинальных запчастей и вниманием к каждой детали. В
            нашем распоряжении — профессионально оснащённая мастерская, склад
            комплектующих и выездной сервис. Мы ��аходим даже редкие детали и
            точно знаем, как продлить жизнь вашей технике.
          </span>
          <br />
          <br />
          <span className="frame1196-text176">Почему выбирают нас:</span>
          <br />
          <br />
          <span className="frame1196-text179">
            На рын��е ремонта бытовой техники с 2011 года.
          </span>
          <br />
          <br />
          <span className="frame1196-text182">
            Работаем напрямую с поставщика��и — без переплат и посредников.
          </span>
          <br />
          <br />
          <span className="frame1196-text185">
            В штате только опыт��ые мастера с профильной подготовкой.
          </span>
          <br />
          <br />
          <span className="frame1196-text188">
            Исп��льзуем совре��енное оборудование и точную диагностику.
          </span>
          <br />
          <br />
          <span className="frame1196-text191">
            Работаем как с тип��вым��, так и со сложными н��исправностями.
          </span>
          <br />
          <br />
          <span className="frame1196-text194">
            ��астые поломки стиральных машин
          </span>
          <br />
          <br />
          <span>
            ��емонт стиральных машин в Одессе необходим как новым, так и давн��
            используемым моделям. Все узлы т���хники имеют ограниченный ресурс, и
            пр�� активной эксплуатации однажды в��ходят из строя. Мы собрали самые
            часты�� пр��чины, по к��торым клиенты обращаются в наш сервис:
          </span>
          <br />
          <span>
            Машина ��е сливает в��ду — проблема с пом��ой или засор сливной
            системы.
          </span>
          <br />
          <span>
            Шум и вибрации — чаще всего износ амортизаторов или подшипников.
          </span>
          <br />
          <span>
            Не запускае����ся стирка — п��оверяем модуль уп��авления или кнопку
            питания.
          </span>
          <br />
          <span>
            Течёт корпус — ус��раняем �����течки, заменяем шлан��и, манжет��, патрубки.
          </span>
          <br />
          <span>Не греет в��ду — диагностика и замена ТЭНа.</span>
          <br />
          <span>
            Ошибка на экране ��� расшифровываем код неисправности и устраняем
            причину.
          </span>
          <br />
          <span>
            Регулярное техобслуживание — профилактика раз в 12 ��есяцев
            продлева��т срок службы.
          </span>
          <br />
          <br />
          <span>
            Мы обслуживаем бренды: LG, Samsung, Bosch, Electrolux, Whirlpool,
            Indesit, Zanussi, Gorenje, AEG, Miele и другие. Работаем не только
            по ��дессе, но и в пригородах. Возможен в��езд мастера на д��м либо
            доставка техн��ки в ��астерскую.
          </span>
          <br />
          <span>Сервисная мастерская по ремонту стиральных машин</span>
          <br />
          <span>
            Се��висн��й центр РемСтир��а�� — это современная профессиональная
            мастерская в Одессе, где выполняются все виды ремонта: от бы��трой
            замены деталей до полного восстановления после серьёзных поломок. Мы
            берёмся за любую технику: от массовых моделей д�� премиум-сегмента.
          </span>
          <br />
          <span>
            ���ыполняем замену амортизаторов, подшипников, сливных насосов,
            уп��авляющих модулей, датчиков, ��ЭНов. Также восстанавливаем
            герметичн��сть, меняе�� люки, устраняем вибрации и по����оронние шумы.
            Проводим профилактику и глубокую чистку ����р��бана и бака.
          </span>
          <br />
          <span>
            Каждый ремонт начинается �� диагност��ки — мастер объясняет, в чём
            пр��блема, и предла����ет решение. Только после согласования с клиентом
            мы ��ри��тупаем к работе.
          </span>
          <br />
          <span>
            Мы ��еним доверие и работаем аккурат��о — без спешки и ха��туры.
          </span>
          <br />
          <span>
            Ниже на сайте — ка��та п��оезда к нашей мастерской, а также телефоны
            службы поддержки. Звоните для записи, консу��ь��ации или если заметили
            сбои в работе вашей стиральной ��ашины. Мы всё объясним, рассчитаем
            стоимость и помож��м.
          </span>
          <br />
          <span>
            РемСт��рМаш — это ��емонт стиральных ма��ин в Одессе ��ы��тро, надёжно и
            профессионально.
          </span>
        </span>
        <span className="frame1196-text229">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_d8RZZ2'),
            }}
          ></span>
        </span>
        <div className="frame1196-frame1075">
          <div className="frame1196-frame1072">
            <div className="frame1196-frame1071">
              <img
                alt="unsplash3TLl97HNJo7693"
                src="/external/unsplash3tll97hnjo7693-7wy6-200h.png"
                className="frame1196-unsplash3t-ll97hn-jo"
              />
              <span className="frame1196-text230">Alia Main</span>
            </div>
            <img
              alt="Frame10707693"
              src="/external/frame10707693-7odp.svg"
              className="frame1196-frame1070"
            />
            <span className="frame1196-text231">
              Я считаю это победа над часами, которым 13-14 лет))) Очень круто!!
              Благодарю!! Немного подождала, но ооочень не зря!!! Класс!!!
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .frame1196-container10 {
            width: 100%;
            display: flex;
            z-index: 999;
            overflow: auto;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            justify-content: flex-start;
            background-image: url('/asfalt--dark--1920x1080%201.png');
          }
          .frame1196-dropdown1 {
            display: none;
          }
          .frame1196-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .frame1196-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .frame1196-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .frame1196-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .frame1196-text100 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .frame1196-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .frame1196-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .frame1196-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .frame1196-text101 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .frame1196-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .frame1196-dropdown-toggle3 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .frame1196-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .frame1196-text102 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .frame1196-container11 {
            display: none;
          }
          .frame1196-container12 {
            width: 100%;
            height: 95px;
            display: flex;
            max-width: 100%;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .frame1196-container13 {
            flex: 1;
            width: 100%;
            height: 39px;
            display: flex;
            max-width: 160px;
            min-width: 138px;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            justify-content: center;
            background-color: #d25904;
          }
          .frame1196-container14 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-container15 {
            flex: 1;
            width: 100%;
            height: 39px;
            display: flex;
            max-width: 160px;
            min-width: 138px;
            align-items: center;
            justify-content: center;
            background-color: #d25904;
          }
          .frame1196-container16 {
            flex: 1;
            width: 100%;
            height: 39px;
            display: flex;
            max-width: 160px;
            min-width: 138px;
            align-items: center;
            justify-content: center;
            background-color: #d25904;
          }
          .frame1196-container17 {
            flex: 1;
            width: 100%;
            height: 39px;
            display: flex;
            max-width: 160px;
            min-width: 138px;
            align-items: center;
            justify-content: center;
            background-color: #d25904;
          }
          .frame1196-container18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 150px;
            min-width: 138px;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container19 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 999;
            flex-wrap: wrap;
            align-self: center;
            min-height: 550px;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('/frame%201200.png');
          }
          .frame1196-container20 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 600px;
            align-self: flex-start;
            max-height: 400px;
            min-height: 0px;
            align-items: center;
            margin-left: 86px;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-text109 {
            color: rgb(74, 74, 74);
            width: 100%;
            height: 100%;
            font-size: 30px;
            font-style: Regular;
            text-align: center;
            font-family: Noto Serif SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-image1 {
            top: -88px;
            left: 191px;
            width: 177px;
            height: 177px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-frame956 {
            gap: 18px;
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            padding: 0 25px;
            overflow: visible;
            max-width: 357px;
            align-self: center;
            min-height: 63px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(236, 157, 101, 1);
          }
          .frame1196-text112 {
            color: rgba(255, 255, 255, 1);
            width: 100%;
            height: auto;
            font-size: 20px;
            max-width: 100%;
            align-self: stretch;
            box-shadow: 0px 0px 1px 0px rgba(255, 255, 255, 0.25);
            font-style: Medium;
            text-align: center;
            font-family: Spectral SC;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container21 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 782px;
            min-width: 650px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-text113 {
            display: inline-block;
          }
          .frame1196-text114 {
            display: inline-block;
          }
          .frame1196-text115 {
            display: inline-block;
          }
          .frame1196-text116 {
            display: inline-block;
          }
          .frame1196-text117 {
            display: inline-block;
          }
          .frame1196-text118 {
            display: inline-block;
          }
          .frame1196-text119 {
            display: inline-block;
          }
          .frame1196-text120 {
            display: inline-block;
          }
          .frame1196-text121 {
            display: inline-block;
          }
          .frame1196-text122 {
            display: inline-block;
          }
          .frame1196-text123 {
            color: rgba(74, 74, 74, 1);
            width: 100%;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: center;
            font-family: Nunito;
            font-weight: 500;
            line-height: normal;
            padding-top: var(--dl-layout-space-threeunits);
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-text124 {
            color: rgba(74, 74, 74, 1);
            font-weight: 500;
          }
          .frame1196-text125 {
            color: rgba(236, 157, 101, 1);
            font-weight: 800;
          }
          .frame1196-frame1078 {
            gap: 33px;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            flex-shrink: 0;
            padding-top: 50px;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: 50px;
            justify-content: center;
          }
          .frame1196-container22 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .frame1196-frame10311 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #ed9e65;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image38228881 {
            top: 19px;
            left: 7px;
            width: 61px;
            height: 33px;
            position: absolute;
          }
          .frame1196-text131 {
            color: rgba(86, 86, 86, 1);
            width: 276px;
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: center;
            font-family: Nunito;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-image2 {
            width: 200px;
            object-fit: cover;
          }
          .frame1196-container23 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .frame1196-frame10312 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #ed9e65;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image3 {
            width: 110px;
            height: 52px;
            object-fit: cover;
          }
          .frame1196-text132 {
            color: rgb(86, 86, 86);
            width: 276px;
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-image4 {
            width: 200px;
            object-fit: cover;
          }
          .frame1196-container24 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .frame1196-frame10313 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #ed9e65;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image38228882 {
            top: 18px;
            left: 13px;
            width: 59px;
            height: 45px;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .frame1196-text133 {
            color: rgb(86, 86, 86);
            width: 276px;
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-image5 {
            width: 200px;
            object-fit: cover;
          }
          .frame1196-text134 {
            color: rgba(71, 74, 111, 1);
            height: auto;
            font-size: 25px;
            font-style: Regular;
            text-align: center;
            font-family: Georgia;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-frame928 {
            gap: 21px;
            width: 692px;
            height: auto;
            display: flex;
            align-items: center;
          }
          .frame1196-ardologo1 {
            width: 113px;
            height: 100px;
          }
          .frame1196-bekologo1 {
            width: 110px;
            height: 109px;
          }
          .frame1196-boschlogo1 {
            width: 193px;
            height: 107px;
          }
          .frame1196-candylogo1 {
            width: 213px;
            height: 132px;
          }
          .frame1196-text135 {
            color: rgba(71, 74, 111, 1);
            height: auto;
            font-size: 25px;
            font-style: Regular;
            text-align: center;
            font-family: Georgia;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-frame1069 {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            flex-wrap: wrap;
            margin-top: 54px;
            min-height: 500px;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .frame1196-container26 {
            width: 1332px;
            height: 700px;
            display: flex;
            padding: 50px;
            flex-wrap: wrap;
            max-width: 1200px;
            max-height: 600px;
            align-items: center;
            justify-content: center;
          }
          .frame1196-frame10381 {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 109px;
            left: 456px;
            width: 282px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .frame1196-frame10371 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #ed9e65;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image3822885 {
            top: 9px;
            left: 16.5px;
            width: 44px;
            height: 50px;
            position: absolute;
          }
          .frame1196-text136 {
            color: rgb(74, 74, 74);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Nunito;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-vector671 {
            width: 238px;
            height: auto;
          }
          .frame1196-frame10382 {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 109px;
            left: 456px;
            width: 282px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .frame1196-frame10372 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #e9a777;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image3822895 {
            top: 14px;
            left: 15px;
            width: 53px;
            height: 40px;
            position: absolute;
          }
          .frame1196-text140 {
            color: rgba(74, 74, 74, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Nunito;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-vector672 {
            width: 238px;
            height: auto;
          }
          .frame1196-frame10383 {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 109px;
            left: 456px;
            width: 282px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .frame1196-frame10373 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #ed9e65;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image3822894 {
            top: 13px;
            left: 8.5px;
            width: 63px;
            height: 38px;
            position: absolute;
          }
          .frame1196-text141 {
            color: rgb(74, 74, 74);
            width: 100%;
            height: auto;
            font-size: 16px;
            max-width: var(--dl-layout-size-xlarge);
            min-width: auto;
            align-self: center;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-vector673 {
            width: 238px;
            height: auto;
          }
          .frame1196-frame10384 {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 109px;
            left: 456px;
            width: 282px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .frame1196-frame10374 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #ed9e65;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image3822883 {
            top: 11px;
            left: 12.5px;
            width: 56px;
            height: 45px;
            position: absolute;
          }
          .frame1196-text142 {
            color: rgb(74, 74, 74);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-vector674 {
            width: 238px;
            height: auto;
          }
          .frame1196-frame10385 {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 109px;
            left: 456px;
            width: 282px;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .frame1196-frame10375 {
            gap: 18px;
            width: 80px;
            height: 68px;
            display: flex;
            padding: 9px 0 0;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: #ed9e65;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-frame1036 {
            gap: 18px;
            width: 100%;
            height: 68px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 3px 3px 6.099999904632568px 0px
              rgba(0, 0, 0, 0.10000000149011612);
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(243, 239, 224, 1);
          }
          .frame1196-image3822887 {
            top: 12px;
            left: 12px;
            width: 55px;
            height: 44px;
            position: absolute;
          }
          .frame1196-text143 {
            color: rgb(74, 74, 74);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-vector675 {
            width: 238px;
            height: auto;
          }
          .frame1196-text144 {
            color: rgb(71, 74, 111);
            height: auto;
            font-size: 25px;
            font-style: Regular;
            text-align: center;
            font-family: 'Georgia';
            font-weight: 400;
            line-height: normal;
            padding-top: var(--dl-layout-space-threeunits);
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container27 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 1251px;
            display: flex;
            padding: 50px;
            flex-wrap: wrap;
            max-width: 1200px;
            align-items: center;
            justify-content: center;
          }
          .frame1196-group372 {
            width: 283px;
            height: 361px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1196-image38229021 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 361px;
            position: absolute;
          }
          .frame1196-frame9481 {
            gap: 10px;
            top: 282px;
            left: 0px;
            width: 100%;
            height: 79px;
            display: flex;
            padding: 28px 0;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: rgba(243, 239, 224, 0.8999999761581421);
          }
          .frame1196-text145 {
            color: rgba(52, 52, 52, 1);
            width: 264px;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: Noto Serif SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-group373 {
            width: 270px;
            height: 361px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1196-image38229022 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 361px;
            position: absolute;
          }
          .frame1196-frame9482 {
            gap: 10px;
            top: 282px;
            left: 0px;
            width: 100%;
            height: 79px;
            display: flex;
            padding: 28px 0;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: rgba(243, 239, 224, 0.8999999761581421);
          }
          .frame1196-text146 {
            color: rgba(52, 52, 52, 1);
            width: 264px;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: Noto Serif SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-group374 {
            width: 270px;
            height: 361px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1196-image38229023 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 361px;
            position: absolute;
          }
          .frame1196-frame9483 {
            gap: 10px;
            top: 282px;
            left: 0px;
            width: 100%;
            height: 79px;
            display: flex;
            padding: 28px 0;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: rgba(243, 239, 224, 0.8999999761581421);
          }
          .frame1196-text147 {
            color: rgba(52, 52, 52, 1);
            width: 264px;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: Noto Serif SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-group377 {
            width: 270px;
            height: 361px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1196-image38229024 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 361px;
            position: absolute;
          }
          .frame1196-frame9484 {
            gap: 10px;
            top: 282px;
            left: 0px;
            width: 100%;
            height: 79px;
            display: flex;
            padding: 28px 0;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: rgba(243, 239, 224, 0.8999999761581421);
          }
          .frame1196-text148 {
            color: rgba(52, 52, 52, 1);
            width: 264px;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: Noto Serif SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-group376 {
            width: 270px;
            height: 361px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1196-image38229025 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 361px;
            position: absolute;
          }
          .frame1196-frame9485 {
            gap: 10px;
            top: 282px;
            left: 0px;
            width: 100%;
            height: 79px;
            display: flex;
            padding: 28px 0;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: rgba(243, 239, 224, 0.8999999761581421);
          }
          .frame1196-text149 {
            color: rgba(52, 52, 52, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: Noto Serif SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-group375 {
            width: 270px;
            height: 361px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1196-image38229026 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 361px;
            position: absolute;
          }
          .frame1196-frame9486 {
            gap: 10px;
            top: 282px;
            left: 0px;
            width: 100%;
            height: 79px;
            display: flex;
            padding: 28px 0;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: rgba(233, 227, 209, 0.8299999833106995);
          }
          .frame1196-text150 {
            color: rgba(52, 52, 52, 1);
            width: 264px;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: center;
            font-family: IBM Plex Serif;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .frame1196-text154 {
            color: rgba(71, 74, 111, 1);
            height: auto;
            font-size: 25px;
            font-style: Regular;
            text-align: center;
            font-family: Georgia;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-image6 {
            width: 351px;
            object-fit: cover;
            padding-right: 163px;
          }
          .frame1196-container29 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 284px;
            height: 387px;
            display: flex;
            position: relative;
            max-width: 300px;
            min-width: 400px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .frame1196-container30 {
            top: 0px;
            flex: 0 0 auto;
            left: 26px;
            width: 2px;
            border: none;
            height: 100%;
            display: flex;
            z-index: 1;
            position: absolute;
            flex-grow: 1;
            transform: translateX(-1px);
            align-items: flex-start;
            flex-direction: column;
            overflow: hidden;
          }
          .frame1196-container31 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            max-height: 100%;
            align-items: center;
            margin-left: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container32 {
            width: 100%;
            height: 25%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-container33 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 31px;
            max-height: 31px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-layout-radius-inputradius);
            justify-content: center;
          }
          .frame1196-icon10 {
            width: 31px;
            height: 31px;
          }
          .frame1196-text155 {
            color: #000000;
            width: 100%;
            height: var(--dl-layout-size-xsmall);
            align-self: center;
            text-align: center;
          }
          .frame1196-text156 {
            width: var(--dl-layout-size-xxlarge);
            display: none;
            padding-left: var(--dl-layout-space-fourunits);
          }
          .frame1196-container34 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            max-height: 100%;
            align-items: center;
            margin-left: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container35 {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-container36 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 31px;
            max-height: 31px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-layout-radius-inputradius);
            justify-content: center;
          }
          .frame1196-icon12 {
            width: 31px;
            height: 31px;
          }
          .frame1196-text157 {
            color: #000000;
            width: 100%;
            height: var(--dl-layout-size-xsmall);
            align-self: center;
            text-align: center;
          }
          .frame1196-text158 {
            width: var(--dl-layout-size-xxlarge);
            display: none;
            padding-left: var(--dl-layout-space-fourunits);
          }
          .frame1196-container37 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            max-height: 100%;
            align-items: center;
            margin-left: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container38 {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-container39 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 31px;
            max-height: 31px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-layout-radius-inputradius);
            justify-content: center;
          }
          .frame1196-icon14 {
            width: 31px;
            height: 31px;
          }
          .frame1196-text159 {
            color: #000000;
            width: 100%;
            height: var(--dl-layout-size-xsmall);
            align-self: center;
            text-align: center;
          }
          .frame1196-text160 {
            width: var(--dl-layout-size-xxlarge);
            display: none;
            padding-left: var(--dl-layout-space-fourunits);
          }
          .frame1196-container40 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            max-height: 100%;
            align-items: center;
            margin-left: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container41 {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-container42 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 31px;
            max-height: 31px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-layout-radius-inputradius);
            justify-content: center;
          }
          .frame1196-icon16 {
            width: 31px;
            height: 31px;
          }
          .frame1196-text161 {
            color: #000000;
            width: 100%;
            height: var(--dl-layout-size-xsmall);
            align-self: center;
            text-align: center;
          }
          .frame1196-text162 {
            width: var(--dl-layout-size-xxlarge);
            display: none;
            padding-left: var(--dl-layout-space-fourunits);
          }
          .frame1196-container43 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            max-height: 100%;
            align-items: center;
            margin-left: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container44 {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-container45 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 31px;
            max-height: 31px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-layout-radius-inputradius);
            justify-content: center;
          }
          .frame1196-icon18 {
            width: 31px;
            height: 31px;
          }
          .frame1196-text163 {
            color: #000000;
            width: 100%;
            height: var(--dl-layout-size-xsmall);
            align-self: center;
            text-align: center;
          }
          .frame1196-text164 {
            width: var(--dl-layout-size-xxlarge);
            display: none;
            padding-left: var(--dl-layout-space-fourunits);
          }
          .frame1196-image7 {
            width: 351px;
            object-fit: cover;
            padding-right: 163px;
          }
          .frame1196-frame1068 {
            gap: 18px;
            width: 357px;
            height: auto;
            display: flex;
            padding: 0 25px;
            overflow: hidden;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(236, 157, 101, 1);
          }
          .frame1196-text165 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Playfair Display SC;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-text166 {
            color: rgba(52, 52, 52, 1);
            width: 1103px;
            height: auto;
            font-size: 16px;
            font-style: Bold;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            font-family: IBM Plex Serif;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-text167 {
            font-weight: 700;
          }
          .frame1196-text170 {
            font-weight: 400;
          }
          .frame1196-text173 {
            font-weight: 400;
          }
          .frame1196-text176 {
            font-weight: 700;
          }
          .frame1196-text179 {
            font-weight: 400;
          }
          .frame1196-text182 {
            font-weight: 400;
          }
          .frame1196-text185 {
            font-weight: 400;
          }
          .frame1196-text188 {
            font-weight: 400;
          }
          .frame1196-text191 {
            font-weight: 400;
          }
          .frame1196-text194 {
            font-weight: 700;
          }
          .frame1196-text229 {
            color: rgba(71, 74, 111, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            margin-top: var(--dl-layout-space-twounits);
            text-align: center;
            font-family: Georgia;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-frame1075 {
            gap: 105px;
            width: 270px;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-shrink: 0;
          }
          .frame1196-frame1072 {
            gap: 34px;
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-fourunits);
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .frame1196-frame1071 {
            gap: 127px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .frame1196-unsplash3t-ll97hn-jo {
            width: 53px;
            height: 53px;
            border-radius: 250px;
          }
          .frame1196-text230 {
            color: rgba(106, 102, 102, 1);
            height: auto;
            flex-grow: 1;
            font-size: 17px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Georgia;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-frame1070 {
            width: 172px;
            height: 13px;
          }
          .frame1196-text231 {
            color: rgba(55, 55, 55, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Nunito;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .frame1196-dropdown1 {
              width: 100%;
              height: 100%;
              display: flex;
              max-width: var(--dl-layout-size-xlarge);
              justify-content: flex-end;
            }
            .frame1196-container19 {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              margin-bottom: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .frame1196-container20 {
              width: 547px;
              position: relative;
              align-self: center;
              align-items: center;
            }
            .frame1196-image1 {
              top: -104px;
              left: 175px;
            }
            .frame1196-frame1078 {
              flex-wrap: wrap;
              padding-left: 50px;
              padding-right: 50px;
            }
            .frame1196-container26 {
              height: 100%;
              min-height: fit-content;
            }
            .frame1196-container27 {
              width: 100%;
            }
            .frame1196-container29 {
              padding-top: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-text166 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .frame1196-dropdown1 {
              width: auto;
              height: auto;
              align-self: center;
              align-items: flex-end;
              justify-content: center;
            }
            .frame1196-container19 {
              width: 100%;
              align-self: center;
              background: none;
              align-items: center;
              margin-right: 2px;
              justify-content: center;
            }
            .frame1196-container20 {
              align-self: center;
              align-items: center;
              margin-left: var(--dl-layout-space-unit);
              justify-content: flex-start;
            }
            .frame1196-image1 {
              top: -57px;
              left: 200px;
              width: 128px;
              height: 128px;
              position: absolute;
            }
            .frame1196-container21 {
              height: 100%;
              max-width: 100%;
              min-width: 100%;
            }
            .frame1196-frame1078 {
              flex-wrap: wrap;
            }
            .frame1196-container26 {
              gap: var(--dl-layout-space-threeunits);
              height: 100%;
              max-height: 100%;
            }
            .frame1196-container27 {
              width: 100%;
              flex-wrap: wrap;
            }
            .frame1196-image6 {
              width: 347px;
              height: 100%;
              align-self: center;
              padding-left: 0px;
            }
            .frame1196-container29 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .frame1196-dropdown1 {
              width: auto;
              height: auto;
              display: flex;
              padding-bottom: 0px;
            }
            .frame1196-container13 {
              display: none;
            }
            .frame1196-container14 {
              display: none;
            }
            .frame1196-container19 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              background: noone;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container20 {
              width: var(--dl-layout-size-xxlarge);
              align-self: center;
              margin-top: 0px;
              align-items: center;
              margin-left: 0px;
              justify-content: center;
            }
            .frame1196-text109 {
              font-size: 15px;
            }
            .frame1196-text110 {
              color: #4a4a4a;
            }
            .frame1196-image1 {
              top: -49px;
              left: 85px;
              width: 107px;
              height: 109px;
              position: absolute;
              align-self: center;
            }
            .frame1196-frame956 {
              width: 274px;
              height: 42px;
              overflow: hidden;
            }
            .frame1196-text112 {
              font-size: 15px;
            }
            .frame1196-container21 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex: 1;
              width: 100%;
              height: 100%;
              flex-wrap: wrap;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              flex-direction: row;
            }
            .frame1196-text123 {
              padding-top: var(--dl-layout-space-fourunits);
            }
            .frame1196-frame1078 {
              flex-wrap: wrap;
              background-size: auto;
              background-color: transparent;
              background-position: center;
            }
            .frame1196-frame10311 {
              border-color: #ed9e65;
            }
            .frame1196-image3823007 {
              margin-right: 0px;
            }
            .frame1196-container26 {
              gap: var(--dl-layout-space-fourunits);
            }
            .frame1196-image6 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
              padding-left: var(--dl-layout-space-twounits);
            }
            .frame1196-container29 {
              width: 100%;
              height: 100%;
              max-width: 100%;
              min-width: 100%;
              margin-right: 0px;
            }
            .frame1196-container30 {
              left: 40px;
              bottom: -1px;
            }
            .frame1196-container31 {
              gap: var(--dl-layout-space-twounits);
              flex: 1;
              width: 295px;
              max-width: 320px;
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container32 {
              flex: 1;
            }
            .frame1196-text155 {
              color: rgb(0, 0, 0);
            }
            .frame1196-text156 {
              width: 272px;
              height: 100%;
              display: flex;
              align-self: flex-end;
              text-align: center;
              padding-left: 0px;
            }
            .frame1196-container34 {
              gap: var(--dl-layout-space-twounits);
              flex: 1;
              width: 295px;
              max-width: 320px;
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container35 {
              flex: 1;
            }
            .frame1196-text157 {
              color: rgb(0, 0, 0);
            }
            .frame1196-text158 {
              width: 100%;
              height: 100%;
              align-self: flex-end;
              text-align: center;
              padding-left: 0px;
            }
            .frame1196-container37 {
              gap: var(--dl-layout-space-twounits);
              flex: 1;
              width: 295px;
              max-width: 320px;
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container38 {
              flex: 1;
            }
            .frame1196-text159 {
              color: rgb(0, 0, 0);
            }
            .frame1196-text160 {
              width: 100%;
              height: 100%;
              align-self: flex-end;
              text-align: center;
              padding-left: 0px;
            }
            .frame1196-container40 {
              gap: var(--dl-layout-space-twounits);
              flex: 1;
              width: 295px;
              max-width: 320px;
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container41 {
              flex: 1;
            }
            .frame1196-text161 {
              color: rgb(0, 0, 0);
            }
            .frame1196-text162 {
              width: 100%;
              height: 100%;
              align-self: flex-end;
              text-align: center;
              padding-left: 0px;
            }
            .frame1196-container43 {
              gap: var(--dl-layout-space-twounits);
              flex: 1;
              width: 295px;
              max-width: 320px;
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container44 {
              flex: 1;
            }
            .frame1196-text163 {
              color: rgb(0, 0, 0);
            }
            .frame1196-text164 {
              width: 100%;
              height: 100%;
              align-self: flex-end;
              text-align: center;
              padding-left: 0px;
            }
            .frame1196-image7 {
              width: 100%;
              height: auto;
              padding-left: 39px;
              padding-right: 156px;
            }
            .frame1196-text166 {
              width: 100%;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              background-color: #ffffff;
            }
            .frame1196-vertical-line {
              height: 100%;
            }
            .frame1196-vertical-line path {
              vector-effect: non-scaling-stroke;
            }
            .faq-title-container {
              position: relative;
            }
            .faq-header-image {
              position: absolute;
              top: 100%;
              left: -35px;
              width: auto;
              margin: 0;
              padding: 0;
              z-index: 1;
            }
            .faq-decoration-image {
              max-width: none;
              height: auto;
              object-fit: contain;
              display: block;
            }
          }
        `}
      </style>
    </>
  )
}

export default Frame1196

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
