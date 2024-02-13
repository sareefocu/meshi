import React, { useEffect, useLayoutEffect, useState } from 'react'
import { items } from "../../../public/Items.json";
import { Carousel } from "react-bootstrap";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaShare } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import itams from "./index.json"
function Productdetails() {
    const initialTime = 900; // 10 minutes in seconds
    const [time, setTime] = useState(initialTime);
    const [mySidenavopen, setmySidenavopen] = useState(true);
    const [size, setsize] = useState(6);
    const [loading, setloading] = useState(true);
    const [data133, setdata133] = useState([]);
    useEffect(() => {
        return () => {
            let data1 = JSON.parse(localStorage.getItem("d1"))
            setdata133(data1)
        }
    }, [])

    useLayoutEffect(() => {
        setloading(true)
        const timer = setInterval(() => {
            if (time <= 0) {
                clearInterval(timer);
            } else {
                setTime((prevTime) => prevTime - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
            setloading(false)
        };
    }, [time]);
    const router = useRouter();
    const [data1, setdata1] = useState({})
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useLayoutEffect(() => {
        let a = itams.filter((el) => {
            return el._id === router.query.id; // Assuming router.params.id is the correct property
        });
        console.log("itamsitamsitamsitams", a);
        setdata1(a[0])
    }, [router.query.id]);

    const totalMrp = data133.reduce(
        (sum, product) => sum + parseInt(product.mrp * product.quantity),
        0
    );
    return (
        data1 && <>
            <title>Sale Sale Sale - Home</title>
            <meta httpEquiv="Pragma" content="no-cache" />
            <meta httpEquiv="Expires" content={-1} />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="Keywords" content="Maha Sale" />
            <meta name="Description" content="Maha Sale" />
            <meta property="og:title" content="Maha Sale" />
            <meta name="theme-color" content="#9f2089" id="themeColor" />
            <meta
                name="viewport"
                content="width=device-width,minimum-scale=1,user-scalable=no"
            />
            <link rel="shortcut icon" href="https://www.meesho.com/favicon.ico" />
            <link
                rel="stylesheet"
                href="/assets/website/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                href="/assets/website/css/custom.css"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        body,\n        a,\n        p,\n        span,\n        div,\n        input,\n        button,\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6,\n        button,\n        input,\n        optgroup,\n        select,\n        textarea {\n            font-family: 'Poppins', sans-serif !important;\n        }\n    "
                }}
            />
            {/* Meta Pixel Code */}
            <noscript>
                &lt;img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=239159289163632&amp;ev=PageView&amp;noscript=1"
                /&gt;
            </noscript>
            {/* End Meta Pixel Code */}
            <link
                rel="stylesheet"
                href="chrome-extension://mhnlakgilnojmhinhkckjpncpbhabphi/content.css"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
            />
            <style
                id="_goober"
                dangerouslySetInnerHTML={{
                    __html:
                        " .go1475592160{height:0;}.go1671063245{height:auto;}.go1888806478{display:flex;flex-wrap:wrap;flex-grow:1;}@media (min-width:600px){.go1888806478{flex-grow:initial;min-width:288px;}}.go167266335{background-color:#313131;font-size:0.875rem;line-height:1.43;letter-spacing:0.01071em;color:#fff;align-items:center;padding:6px 16px;border-radius:4px;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);}.go3162094071{padding-left:20px;}.go3844575157{background-color:#313131;}.go1725278324{background-color:#43a047;}.go3651055292{background-color:#d32f2f;}.go4215275574{background-color:#ff9800;}.go1930647212{background-color:#2196f3;}.go946087465{display:flex;align-items:center;padding:8px 0;}.go703367398{display:flex;align-items:center;margin-left:auto;padding-left:16px;margin-right:-8px;}.go3963613292{width:100%;position:relative;transform:translateX(0);top:0;right:0;bottom:0;left:0;min-width:288px;}.go1141946668{box-sizing:border-box;display:flex;max-height:100%;position:fixed;z-index:1400;height:auto;width:auto;transition:top 300ms ease 0ms,right 300ms ease 0ms,bottom 300ms ease 0ms,left 300ms ease 0ms,max-width 300ms ease 0ms;pointer-events:none;max-width:calc(100% - 40px);}.go1141946668 .notistack-CollapseWrapper{padding:6px 0px;transition:padding 300ms ease 0ms;}@media (max-width:599.95px){.go1141946668{width:100%;max-width:calc(100% - 32px);}}.go3868796639 .notistack-CollapseWrapper{padding:2px 0px;}.go3118922589{top:14px;flex-direction:column;}.go1453831412{bottom:14px;flex-direction:column-reverse;}.go4027089540{left:20px;}@media (min-width:600px){.go4027089540{align-items:flex-start;}}@media (max-width:599.95px){.go4027089540{left:16px;}}.go2989568495{right:20px;}@media (min-width:600px){.go2989568495{align-items:flex-end;}}@media (max-width:599.95px){.go2989568495{right:16px;}}.go4034260886{left:50%;transform:translateX(-50%);}@media (min-width:600px){.go4034260886{align-items:center;}}"
                }}
            />
            <div id="container" style={{ overflow: "hidden" }}>
                <div style={{ height: "100%" }} data-reactroot="">
                    <div>
                        <div className="_2dxSCm">
                            <div className="_38U37R">
                                <div>
                                    <div className="_1FWdmb" style={{}}>
                                        <div className="d-flex align-items-center">
                                            <a
                                                className="_3NH1qf "
                                                id="back-btn"
                                                style={{ marginTop: 5 }}
                                            >
                                                <svg
                                                    width={25}
                                                    height={25}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    mt={2}
                                                    iconsize={24}
                                                    className="sc-gswNZR ffVWIj"
                                                >
                                                    <path
                                                        d="M13.7461 2.31408C13.5687 2.113 13.3277 2 13.0765 2C12.8252 2 12.5843 2.113 12.4068 2.31408L6.27783 9.24294C5.90739 9.66174 5.90739 10.3382 6.27783 10.757L12.4068 17.6859C12.7773 18.1047 13.3757 18.1047 13.7461 17.6859C14.1166 17.2671 14.0511 16.5166 13.7461 16.1718L8.29154 9.99462L13.7461 3.82817C13.9684 3.57691 14.1071 2.72213 13.7461 2.31408Z"
                                                        fill="#666666"
                                                    />
                                                </svg>
                                            </a>
                                            <a className="_3NH1qf d-none" id="showmenu">
                                                <svg
                                                    width="100%"
                                                    height="100%"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    mt={5}
                                                    iconsize={24}
                                                    className="sc-gswNZR jQgwzc"
                                                >
                                                    <path
                                                        d="M2 17.2222C2 17.8359 2.49746 18.3333 3.11111 18.3333H20.8889C21.5025 18.3333 22 17.8359 22 17.2222C22 16.6086 21.5025 16.1111 20.8889 16.1111H3.11111C2.49746 16.1111 2 16.6086 2 17.2222ZM2 11.6667C2 12.2803 2.49746 12.7778 3.11111 12.7778H20.8889C21.5025 12.7778 22 12.2803 22 11.6667C22 11.053 21.5025 10.5556 20.8889 10.5556H3.11111C2.49746 10.5556 2 11.053 2 11.6667ZM3.11111 5C2.49746 5 2 5.49746 2 6.11111C2 6.72476 2.49746 7.22222 3.11111 7.22222H20.8889C21.5025 7.22222 22 6.72476 22 6.11111C22 5.49746 21.5025 5 20.8889 5H3.11111Z"
                                                        fill="#333333"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                className="Z4_K_h"
                                                style={{
                                                    width: "auto",
                                                    height: "auto",
                                                    marginRight: 10,
                                                    marginLeft: 10
                                                }}
                                                href="/"
                                            >
                                                <svg
                                                    viewBox="0 0 156 36"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height={25}
                                                    width={90}
                                                    iconsize={20}
                                                    className="sc-gswNZR gNMKRJ"
                                                >
                                                    <g clipPath="url(#meeshoLogo_svg__a)">
                                                        <path fill="#fff" d="M0 0h156v36H0z" />
                                                        <path
                                                            d="M56.307 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.053-3.535a8.967 8.967 0 0 0-3.235-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.481 6.157.989 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.518 1.414 1.186 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.007 2.007 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.281 0-4.004-.613-5.176-1.847-.926-.976-1.481-2.358-1.673-4.125h13.78c.707 0 1.244-.144 1.624-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.262-.89 1.154 0 2.12.25 2.894.752.774.5 1.37 1.226 1.777 2.165.34.783.532 1.732.59 2.828H40.93c.107-.864.304-1.655.603-2.349.475-1.078 1.16-1.915 2.054-2.505ZM81.13 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.054-3.535a8.966 8.966 0 0 0-3.234-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.48 6.157.99 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.519 1.414 1.185 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.008 2.008 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.282 0-4.004-.613-5.176-1.847-.931-.976-1.481-2.358-1.674-4.125h13.78c.703 0 1.245-.144 1.625-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.261-.89 1.155 0 2.121.25 2.895.752.774.5 1.37 1.226 1.776 2.165.34.783.533 1.732.591 2.828h-11.18c.106-.864.303-1.655.603-2.349.47-1.078 1.154-1.915 2.054-2.505ZM97.993 21.394l-4.559-.868c-.881-.152-1.535-.438-1.96-.868-.425-.425-.64-.957-.64-1.597 0-.85.358-1.535 1.07-2.054.716-.514 1.816-.774 3.306-.774.792 0 1.62.108 2.483.318.868.215 1.772.564 2.712 1.047.514.241.98.326 1.391.25a1.71 1.71 0 0 0 1.025-.595 2.47 2.47 0 0 0 .546-1.096 1.975 1.975 0 0 0-.112-1.208c-.166-.394-.479-.716-.935-.957a13.835 13.835 0 0 0-3.396-1.347c-1.173-.29-2.425-.434-3.763-.434-1.852 0-3.494.29-4.926.868-1.427.577-2.546 1.4-3.351 2.46-.805 1.066-1.208 2.327-1.208 3.786 0 1.61.492 2.926 1.48 3.942.99 1.02 2.426 1.709 4.31 2.076l4.559.867c.94.184 1.646.466 2.12.842.47.38.707.921.707 1.62 0 .818-.358 1.48-1.07 1.981-.715.501-1.798.752-3.26.752-1.034 0-2.081-.112-3.146-.34-1.065-.228-2.206-.63-3.418-1.208-.488-.242-.936-.318-1.347-.228-.412.09-.747.29-1.002.59-.26.305-.412.662-.457 1.074a2.24 2.24 0 0 0 .228 1.23c.197.412.542.77 1.025 1.07 1.154.671 2.46 1.14 3.92 1.414 1.458.273 2.84.411 4.147.411 2.886 0 5.199-.63 6.93-1.892 1.732-1.262 2.6-3.002 2.6-5.222 0-1.642-.51-2.948-1.526-3.919-1.011-.957-2.51-1.624-4.483-1.99ZM125.603 12.32c-1.155-.666-2.631-1.002-4.421-1.002-1.794 0-3.396.416-4.81 1.253a7.254 7.254 0 0 0-2.483 2.443V4.437c0-.944-.25-1.656-.751-2.143-.501-.488-1.208-.73-2.121-.73s-1.611.242-2.099.73c-.487.487-.729 1.199-.729 2.143v27.082c0 .944.242 1.664.729 2.165.488.501 1.186.752 2.099.752 1.915 0 2.872-.97 2.872-2.917v-9.986c0-1.732.492-3.123 1.481-4.17.989-1.047 2.318-1.575 3.991-1.575 1.369 0 2.38.393 3.034 1.185.653.792.979 2.054.979 3.786v10.76c0 .944.251 1.664.752 2.165.501.501 1.208.752 2.121.752s1.611-.25 2.098-.752c.488-.5.729-1.221.729-2.165V20.486c0-2.067-.29-3.777-.867-5.128-.582-1.355-1.446-2.367-2.604-3.038ZM150.618 12.642c-1.7-.944-3.709-1.413-6.018-1.413-1.731 0-3.297.268-4.698.796-1.396.532-2.599 1.306-3.601 2.326-1.003 1.02-1.772 2.233-2.305 3.647-.532 1.414-.796 3.015-.796 4.81 0 2.37.47 4.429 1.414 6.178.939 1.75 2.264 3.092 3.968 4.036 1.701.944 3.709 1.414 6.018 1.414 1.732 0 3.297-.269 4.698-.797 1.396-.532 2.599-1.306 3.602-2.326 1.002-1.02 1.771-2.242 2.304-3.669.532-1.427.796-3.038.796-4.832 0-2.371-.47-4.42-1.414-6.156-.944-1.736-2.264-3.074-3.968-4.014Zm-1.07 14.201c-.469 1.079-1.132 1.893-1.982 2.439-.85.546-1.838.818-2.961.818-1.701 0-3.07-.613-4.103-1.847-1.034-1.23-1.548-3.047-1.548-5.45 0-1.61.237-2.957.707-4.036.469-1.078 1.132-1.883 1.982-2.416.85-.532 1.839-.796 2.962-.796 1.7 0 3.069.6 4.102 1.799 1.034 1.199 1.548 3.015 1.548 5.45 0 1.614-.237 2.961-.707 4.04ZM15.512 34.431c-1.387 0-2.555-1.167-2.555-2.554V20.18c.013-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.924 3.88v11.695a2.557 2.557 0 0 1-2.554 2.554C1.18 34.431 0 33.246 0 31.877V20.22a8.993 8.993 0 0 1 2.649-6.389 8.998 8.998 0 0 1 6.384-2.648 9.012 9.012 0 0 1 6.483 2.742A8.997 8.997 0 0 1 22 11.184a8.982 8.982 0 0 1 6.385 2.648 9.008 9.008 0 0 1 2.649 6.39v11.654c0 1.37-1.181 2.555-2.555 2.555a2.557 2.557 0 0 1-2.555-2.554V20.18c.014-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.923 3.88v11.695c-.01 1.387-1.177 2.554-2.564 2.554Z"
                                                            fill="#570D48"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="meeshoLogo_svg__a">
                                                            <rect width="100%" height="100%" fill="#fff" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                            <h4 className="header-title" />
                                        </div>
                                        <div className="header-menu">
                                            <a className="_3NH1qf" href="#">
                                                <svg
                                                    width={24}
                                                    height={25}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    ml={16}
                                                    iconsize={24}
                                                    className="sc-gswNZR dJzkYm"
                                                >
                                                    <path fill="#fff" d="M0 .657h24v24H0z" />
                                                    <path fill="#fff" d="M2 2.657h20v20H2z" />
                                                    <path
                                                        d="M22 9.174c0 3.724-1.87 7.227-9.67 12.38a.58.58 0 0 1-.66 0C3.87 16.401 2 12.898 2 9.174S4.59 3.67 7.26 3.66c3.22-.081 4.61 3.573 4.74 3.774.13-.201 1.52-3.855 4.74-3.774C19.41 3.669 22 5.45 22 9.174Z"
                                                        fill="#ED3843"
                                                    />
                                                </svg>
                                            </a>
                                            <a className="_3NH1qf" href="#" onclick="openNav()">
                                                <svg
                                                    width={24}
                                                    height={25}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    ml={16}
                                                    iconsize={24}
                                                    className="sc-gswNZR dJzkYm"
                                                >
                                                    <g clipPath="url(#cart-header_svg__a)">
                                                        <path fill="#fff" d="M2.001 1.368h20v20h-20z" />
                                                        <g clipPath="url(#cart-header_svg__b)">
                                                            <g clipPath="url(#cart-header_svg__c)">
                                                                <path
                                                                    d="M6.003 5.183h15.139c.508 0 .908.49.85 1.046l-.762 7.334c-.069.62-.537 1.1-1.103 1.121l-12.074.492-2.05-9.993Z"
                                                                    fill="#C53EAD"
                                                                />
                                                                <path
                                                                    d="M11.8 21.367c.675 0 1.22-.597 1.22-1.334 0-.737-.545-1.335-1.22-1.335-.673 0-1.22.598-1.22 1.335s.547 1.334 1.22 1.334ZM16.788 21.367c.674 0 1.22-.597 1.22-1.334 0-.737-.546-1.335-1.22-1.335-.673 0-1.22.598-1.22 1.335s.547 1.334 1.22 1.334Z"
                                                                    fill="#9F2089"
                                                                />
                                                                <path
                                                                    d="m2.733 4.169 3.026 1.42 2.528 12.085c.127.609.615 1.036 1.181 1.036h9.615"
                                                                    stroke="#9F2089"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="cart-header_svg__a">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(2.001 1.368)"
                                                                d="M0 0h20v20H0z"
                                                            />
                                                        </clipPath>
                                                        <clipPath id="cart-header_svg__b">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(2.001 1.368)"
                                                                d="M0 0h20v20H0z"
                                                            />
                                                        </clipPath>
                                                        <clipPath id="cart-header_svg__c">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(2.001 3.368)"
                                                                d="M0 0h20v18H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="header__cart-count header__cart-count--floating bubble-count">
                                                    1
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="search-bar d-none">
                                        <div className="_3QNhdh" id="guidSearch">
                                            <div className="ORogdv">
                                                <div className="_1k9EoO">
                                                    <div className="_2d36Hu">
                                                        <a href="javascript:void(0)" className="search-div">
                                                            <div
                                                                placeholder="Search for Sarees, Kurtis, Cosmetics, etc."
                                                                className="sc-eeMvmM fscVpr"
                                                            >
                                                                <div className="sc-cUEOzv ilUiic">
                                                                    <svg
                                                                        width={20}
                                                                        height={21}
                                                                        viewBox="0 0 20 21"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            width={20}
                                                                            height={20}
                                                                            transform="translate(0 0.560547)"
                                                                            fill="white"
                                                                        />
                                                                        <g clipPath="url(#clip0_2444_6193)">
                                                                            <path
                                                                                d="M13.4564 12.0018L11.4426 14.0156L16.3498 18.9228C16.7013 19.2743 17.2711 19.2743 17.6226 18.9228L18.3636 18.1818C18.7151 17.8303 18.7151 17.2604 18.3636 16.909L13.4564 12.0018Z"
                                                                                fill="#ADADC4"
                                                                            />
                                                                            <path
                                                                                d="M14.7135 8.69842C14.7135 12.3299 11.7696 15.2738 8.13812 15.2738C4.50664 15.2738 1.56274 12.3299 1.56274 8.69842C1.56274 5.06694 4.50664 2.12305 8.13812 2.12305C11.7696 2.12305 14.7135 5.06694 14.7135 8.69842Z"
                                                                                fill="#EAEAF2"
                                                                                stroke="#ADADC4"
                                                                                strokeWidth="1.125"
                                                                            />
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_2444_6193">
                                                                                <rect
                                                                                    width={18}
                                                                                    height={18}
                                                                                    fill="white"
                                                                                    transform="translate(1 1.56055)"
                                                                                />
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                </div>
                                                                <input
                                                                    fontSize="13px"
                                                                    fontWeight="book"
                                                                    type="text"
                                                                    placeholder="Search for Sarees, Kurtis, Cosmetics, etc."
                                                                    readOnly=""
                                                                    className="sc-dkrFOg bWTBPR sc-bCfvAP dsLogY search-input-elm sc-bCfvAP dsLogY search-input-elm"
                                                                    color="greyBase"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-inner">
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    {bootstrap.map((item, index) => (
                                        <Carousel.Item key={item.id} interval={4000}>
                                            <img src={data1[index === 0 ? "images" : "images" + index]} alt="slides" className='img-fluid'
                                                loading="lazy"
                                                style={{ height: 300, margin: "auto", display: "block" }} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="product-title-div mt-4">

                                <h1 className="product-title">COMBO OF 3 SUIT SETS 1</h1>
                                <div className="ProductWishListIconstyled__ProductWishList-sc-1clzx80-1 gNlzBX">
                                    <div className="ProductWishListIconstyled__WishListIcon-sc-1clzx80-3 bdcVUy">
                                        <svg
                                            width={16}
                                            height={16}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            iconsize={17}
                                            className="sc-gswNZR ProductWishListIconstyled__ProductWishListImage-sc-1clzx80-0 kwsBSS iZRFqd"
                                        >
                                            <g clipPath="url(#wishlist-product_svg__a)">
                                                <path
                                                    d="M4.616 2.048c.856 0 1.672.384 2.416 1.144a1.35 1.35 0 0 0 1.936 0c.744-.76 1.56-1.136 2.416-1.136 1.28 0 2.52.888 3.08 2.2.584 1.376.264 2.856-.888 4.056L8.336 13.8a.478.478 0 0 1-.336.152.447.447 0 0 1-.336-.152l-5.24-5.488C1.272 7.104.952 5.624 1.536 4.248c.56-1.312 1.8-2.2 3.08-2.2Zm0-1.248c-3.584 0-6.52 4.784-3.088 8.376l5.24 5.488c.336.36.784.536 1.232.536.448 0 .896-.176 1.232-.536l5.24-5.488C17.896 5.592 14.96.8 11.376.8c-1.096 0-2.248.448-3.296 1.512a.103.103 0 0 1-.08.032.103.103 0 0 1-.08-.032C6.872 1.248 5.712.8 4.616.8Z"
                                                    fill="#333"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="wishlist-product_svg__a">
                                                    <path
                                                        fill="#fff"
                                                        transform="translate(0 .8)"
                                                        d="M0 0h16v14.4H0z"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span
                                        fontSize="small"
                                        fontWeight="book"
                                        color="greyBase"
                                        className="sc-dkrFOg gTFoAs ProductWishListIconstyled__Text1-sc-1clzx80-2 dyZkZi ProductWishListIconstyled__Text1-sc-1clzx80-2 dyZkZi"
                                    >
                                        Wishlist
                                    </span>
                                </div>
                                <div className="ProductShareIconstyles__ProductShare-sc-uxw4hm-0 cDBOnq">
                                    <div className="ProductShareIconstyles__ShareIcon-sc-uxw4hm-2 clikdT">
                                        <svg
                                            width={17}
                                            height={17}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            iconsize={17}
                                            className="sc-gswNZR juWHgk"
                                        >
                                            <path fill="#fff" d="M.947.979h16v16h-16z" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.489 3.912c0-1.62 1.266-2.933 2.829-2.933 1.562 0 2.828 1.313 2.828 2.933 0 1.62-1.266 2.933-2.828 2.933a2.784 2.784 0 0 1-2.175-1.057L7.071 8.303a3.007 3.007 0 0 1 .295 1.866l3.643 2.18a2.797 2.797 0 0 1 2.309-1.238c1.562 0 2.828 1.314 2.828 2.934s-1.266 2.933-2.828 2.933c-1.563 0-2.829-1.313-2.829-2.933 0-.172.014-.34.042-.504l-3.636-2.176a2.798 2.798 0 0 1-2.32 1.254c-1.562 0-2.828-1.314-2.828-2.934s1.266-2.933 2.828-2.933a2.75 2.75 0 0 1 1.674.568l4.33-2.673a3.042 3.042 0 0 1-.09-.735Zm4.423 0c0-.914-.714-1.654-1.594-1.654-.88 0-1.595.74-1.595 1.653s.714 1.654 1.595 1.654c.88 0 1.594-.74 1.594-1.654ZM6.17 9.684c0-.913-.714-1.653-1.595-1.653-.88 0-1.594.74-1.594 1.653s.714 1.653 1.594 1.653c.88 0 1.595-.74 1.595-1.653Zm7.148 2.706c.88 0 1.594.74 1.594 1.653s-.714 1.654-1.594 1.654c-.88 0-1.595-.74-1.595-1.654 0-.913.714-1.653 1.595-1.653Z"
                                                fill="#353543"
                                            />
                                            <mask
                                                id="share_svg__a"
                                                maskUnits="userSpaceOnUse"
                                                x={1}
                                                y={0}
                                                width={16}
                                                height={17}
                                                style={{ maskType: "luminance" }}
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M13.318.979c-1.563 0-2.829 1.313-2.829 2.933 0 .254.031.5.09.735L6.249 7.32a2.75 2.75 0 0 0-1.674-.568c-1.562 0-2.828 1.313-2.828 2.933 0 1.62 1.266 2.934 2.828 2.934.96 0 1.808-.496 2.32-1.254l3.636 2.176a3.064 3.064 0 0 0-.042.504c0 1.62 1.266 2.933 2.829 2.933 1.562 0 2.828-1.313 2.828-2.933 0-1.62-1.266-2.934-2.828-2.934-.953 0-1.796.49-2.309 1.238l-3.643-2.18a3.06 3.06 0 0 0-.295-1.866l4.072-2.515a2.784 2.784 0 0 0 2.175 1.057c1.562 0 2.828-1.313 2.828-2.933 0-1.62-1.266-2.933-2.828-2.933Z"
                                                    fill="#fff"
                                                />
                                            </mask>
                                        </svg>
                                    </div>
                                    <span
                                        fontSize="small"
                                        fontWeight="book"
                                        color="greyBase"
                                        className="sc-dkrFOg gTFoAs ProductShareIconstyles__Text1-sc-uxw4hm-1 cHjLGv ProductShareIconstyles__Text1-sc-uxw4hm-1 cHjLGv"
                                    >
                                        Share
                                    </span>
                                </div>
                                <div className="product-price d-flex my-2">
                                    <span className="price" data-price={299.0}>
                                        ₹299.00
                                    </span>
                                    <span className="mrp" data-mrp={2999.0}>
                                        ₹2999.00
                                    </span>
                                    <span className="discount">90% off</span>
                                </div>
                            </div>
                            <span className="Offersstyled__OfferWrapper-sc-1ng6jp-0 hdHcbs">
                                <span
                                    fontSize="15px"
                                    fontWeight="demi"
                                    color="greenBase"
                                    className="sc-ipEyDJ gHgHGw"
                                >
                                    Save ₹661 with 4 Special Offers
                                </span>
                                <svg
                                    width={16}
                                    height={16}
                                    fill="#91E5BD"
                                    xmlns="http://www.w3.org/2000/svg"
                                    iconsize={16}
                                    className="sc-gswNZR EaPUQ"
                                >
                                    <rect width={16} height={16} rx={8} />
                                    <path
                                        d="M6.387 4.59a.647.647 0 0 0 0 .908L8.86 8l-2.474 2.502a.647.647 0 0 0 0 .91.63.63 0 0 0 .899 0l2.927-2.96a.647.647 0 0 0 0-.91l-2.927-2.96a.636.636 0 0 0-.9.007Z"
                                        fill="#038D63"
                                    />
                                </svg>
                            </span>
                            <div className="aMaAEs">
                                <div className="_3Zuayz mt-2">
                                    <div className="_3_L3jD">
                                        <div className="gUuXy- _16VRIQ _1eJXd3">
                                            <span
                                                id="productRating_LSTETHFZZUWAC8X2PGQZ7T8VQ_ETHFZZUWAC8X2PGQ_"
                                                className="_1lRcqv"
                                            >
                                                <div className="_3LWZlK _3uSWvT">
                                                    4.4
                                                    <img
                                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                                                        className="_1wB99o _19cuvx"
                                                    />
                                                </div>
                                            </span>
                                            <span className="_2_R_DZ">
                                                <span>1527 ratings and 1916 reviews</span>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="ShippingInfoMobilestyles__Dot-sc-b8wrmp-7 bxhscH" />
                                    <span className="b7864- _2Z07dN">
                                        <svg
                                            width={55}
                                            height={20}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            iconsize={20}
                                            className="sc-gswNZR eCiixe"
                                        >
                                            <path
                                                d="M9.901 5.496a2 2 0 0 1 2-2h41.6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-41.6a2 2 0 0 1-2-2v-9Z"
                                                fill="#FFE7FB"
                                            />
                                            <path
                                                d="M24.712 6H19.5v1.03h2.052v5.843h1.12V7.03h2.041V6ZM24.698 8.229v4.644h1.06v-2.17c0-1.09.52-1.532 1.228-1.532a.95.95 0 0 1 .353.06V8.198a.85.85 0 0 0-.363-.068c-.55 0-1.031.314-1.267.844h-.02v-.746h-.991ZM32.226 12.873V8.229h-1.07v2.67c0 .697-.481 1.188-1.09 1.188-.56 0-.884-.383-.884-1.1V8.23h-1.06v2.975c0 1.129.628 1.816 1.63 1.816.658 0 1.188-.314 1.443-.766h.05v.619h.981ZM35.25 13.02c1.1 0 1.846-.59 1.846-1.532 0-1.855-2.543-1.03-2.543-2.052 0-.304.236-.55.698-.55.422 0 .765.246.814.59l.992-.207c-.167-.706-.893-1.188-1.836-1.188-1.03 0-1.728.57-1.728 1.434 0 1.856 2.543 1.03 2.543 2.052 0 .393-.265.658-.756.658-.481 0-.874-.255-.992-.668l-.972.197c.226.795.943 1.266 1.934 1.266ZM40.083 12.97c.343 0 .638-.058.795-.136l-.118-.855a.992.992 0 0 1-.471.099c-.501 0-.747-.226-.747-.914V9.132h1.287v-.903h-1.287V6.746l-1.07.206V8.23h-.844v.903h.844v2.21c0 1.207.658 1.629 1.61 1.629ZM45.823 11.744l-.894-.265c-.206.422-.589.657-1.09.657-.746 0-1.256-.53-1.355-1.305h3.525v-.265c-.02-1.6-1.03-2.485-2.297-2.485-1.365 0-2.308 1.07-2.308 2.485 0 1.403.992 2.454 2.425 2.454.933 0 1.61-.442 1.994-1.276ZM43.73 8.906c.6 0 1.12.373 1.169 1.198h-2.406c.118-.766.56-1.198 1.237-1.198ZM46.776 10.556c0 1.463.923 2.464 2.17 2.464.619 0 1.237-.255 1.542-.854h.03v.707h.981V6h-1.07v2.828c-.246-.432-.766-.747-1.463-.747-1.247 0-2.19.992-2.19 2.475Zm1.07 0c0-.874.501-1.542 1.316-1.542.805 0 1.296.638 1.296 1.542 0 .893-.49 1.522-1.296 1.522-.795 0-1.315-.648-1.315-1.522Z"
                                                fill="#9F2089"
                                            />
                                            <path
                                                d="M16.5 3.239 9.027.059a.746.746 0 0 0-.585 0L.969 3.24a.782.782 0 0 0-.47.721v6.36c0 5.321 3.139 7.611 7.947 9.622a.746.746 0 0 0 .576 0c4.809-2.01 7.948-4.3 7.948-9.622V3.96c0-.316-.186-.6-.47-.721Z"
                                                fill="#FFE7FB"
                                            />
                                            <path
                                                d="m15.748 3.894-6.75-2.871a.673.673 0 0 0-.528 0l-6.75 2.87a.706.706 0 0 0-.424.652v5.745c0 4.806 2.835 6.874 7.178 8.69.167.07.353.07.52 0 4.343-1.816 7.178-3.884 7.178-8.69V4.545a.706.706 0 0 0-.424-.651Z"
                                                fill="#60014A"
                                            />
                                            <path
                                                d="M10.852 6.455c.804.006 1.482.28 2.04.817.565.54.843 1.185.837 1.946l-.023 3.58c-.003.426-.37.77-.824.77-.45-.003-.814-.35-.81-.777l.022-3.58a1.098 1.098 0 0 0-.367-.85 1.216 1.216 0 0 0-.885-.35 1.247 1.247 0 0 0-.921.372c-.23.227-.344.54-.347.856l-.02 3.528c-.003.432-.376.782-.833.78-.458-.004-.828-.357-.824-.79l.022-3.548c.004-.31-.11-.617-.334-.844a1.254 1.254 0 0 0-.918-.378 1.253 1.253 0 0 0-.892.34c-.24.23-.37.513-.37.845l-.022 3.576c-.004.43-.373.777-.827.774-.455-.003-.818-.353-.815-.783l.023-3.564c.003-.66.25-1.308.714-1.799.6-.632 1.34-.948 2.199-.942.82.006 1.521.285 2.082.853.578-.565 1.272-.835 2.093-.832Z"
                                                fill="#FF9D00"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    className="sc-dkrFOg kdtyUz DeliveryBadge__BadgeRow-sc-skvcwk-4 cYgzqn DeliveryBadge__BadgeRow-sc-skvcwk-4 cYgzqn mb-4"
                                    color="white"
                                >
                                    <div className="sc-hhOBVt evBRxL">
                                        <span
                                            fontSize="10px"
                                            fontWeight="demi"
                                            color="greyT1"
                                            className="sc-jrcTuL eXZucf"
                                        >
                                            Free Delivery
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid p-0">
                                <div className="color-div">
                                    <h4>Product ID</h4>
                                    <div className="color-list p-2">
                                        <div
                                            className="color-box color-item p-2 me-2 active "
                                            data-mrp={2999.0}
                                            data-selling-price={299.0}
                                            onclick="manage_color_click($(this),'Multi Color1','0',0, 'https://img.myshopline.com/image/store/1704689667447/Untitleddesign-a84dd8a5-e871-49f4-ac09-2527b52bace4.png?w=1080&h=1080,https://img.myshopline.com/image/store/1704689667447/WhatsAppImage2023-05-23at8-45-34PM-2-1200x1600-1a84f7e0-8e58-4759-a695-eefbd1c29d0b_375x.jpg?w=12,https://img.myshopline.com/image/store/1704689667447/WhatsAppImage2023-05-23at8-45-35PM-600x-95ae8515-cd71-426e-afee-c9744f0fb3d6_375x.jpg?w=600&h=800,https://img.myshopline.com/image/store/1704689667447/WhatsAppImage2023-05-23at8-45-35PM-1200x1600-de4e7314-4c89-4d28-a2c3-4952536426e8_375x.jpg?w=1200,https://img.myshopline.com/image/store/1704689667447/WhatsAppImage2023-05-24at8-05-23PM-600x-18b737e0-659c-46fa-a7fc-cf6ee7a7bde1_375x.jpg?w=600&h=800');"
                                        >
                                            {/* <img src="https://img.myshopline.com/image/store/1704689667447/Untitleddesign-a84dd8a5-e871-49f4-ac09-2527b52bace4.png?w=1080&h=1080" alt="img0" class="color_img_0"> */}
                                            <div
                                                style={{ backgroundColor: "Multi Color1" }}
                                                className="color-round  color-item-box"
                                            />
                                            <span className="color-name">Multi Color1</span>
                                        </div>
                                    </div>
                                </div>
                                {/*<div class="_1fhgRH mb-5"> <div> <div class="blog-breadcrumbs"> <ul class="cd-breadcrumb"> <li> <a aria-label="home" href="/" class="underline-a">Home</a> </li> <li class="current">COMBO OF 3 SUIT SETS 1</li> </ul> </div> </div> <div class="container p-1 card"> <div class="product-title-header"> <h1 class="product-title">COMBO OF 3 SUIT SETS 1</h1> <span class="share-icon" style="background-image: url('https://cdn.shopify.com/s/files/1/0057/8938/4802/files/share_icon_1.png?v=1689752691');"></span> <p class="pdp-title-extra-info"> <small> Home Theater Sound Bar with 60W Sound Output, 2.0 Channel, Bluetooth,AUX, USB Compatible</small> </p> </div>*/}
                                {/*<img class="" src="https://kurti.valentine-deal.shop//assets/website/images/pay-latter.jpg" alt="pay-latter">*/}
                                {/*<div class="container-fluid p-3 pb-0 mt-1">*/}
                                {/*    <div class="aMaAEs">*/}
                                {/*        <div class="_3Zuayz">*/}
                                {/*            <div class="_3_L3jD">*/}
                                {/*                <div class="gUuXy- _16VRIQ _1eJXd3">*/}
                                {/*                    <span id="productRating_LSTETHFZZUWAC8X2PGQZ7T8VQ_ETHFZZUWAC8X2PGQ_" class="_1lRcqv">*/}
                                {/*                        <div class="product-rating">*/}
                                {/*                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 22 22">*/}
                                {/*                                <g id="Group_334346" data-name="Group 334346" transform="translate(17150 -5434)">*/}
                                {/*                                    <rect id="Rectangle_114376" data-name="Rectangle 114376" width="22" height="22" transform="translate(-17150 5434)" fill="transparent"></rect>*/}
                                {/*                                    <g id="Group_334341" data-name="Group 334341" transform="translate(-17149 5435)">*/}
                                {/*                                        <path id="Path_332351" data-name="Path 332351" d="M1153.144,361.362a1.527,1.527,0,0,1,2.738,0l2.313,4.692,5.154.768a1.527,1.527,0,0,1,.848,2.6l-3.729,3.683.868,5.179a1.526,1.526,0,0,1-2.216,1.6l-4.606-2.424-4.607,2.424a1.526,1.526,0,0,1-2.216-1.6l.868-5.179-3.729-3.683a1.526,1.526,0,0,1,.848-2.6l5.154-.768Z" transform="translate(-1144.374 -360.511)" fill="#f4c730" fill-rule="evenodd"></path>*/}
                                {/*                                    </g>*/}
                                {/*                                </g>*/}
                                {/*                            </svg>*/}
                                {/*                            <span>5.0</span>*/}
                                {/*                            <span class="rating__caption">*/}
                                {/*                                120 ratings and 5 reviews*/}
                                {/*                            </span>*/}
                                {/*                        </div>*/}
                                {/*                    </span>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<img class="" src="https://kurti.valentine-deal.shop//assets/website/images/review.jpg" alt="review">*/}
                            </div>
                            <div className="storage-div mt-3">
                                <div
                                    className="sc-kDvujY iGlGaV SizeSelectionstyled__SizeCard-sc-155vsje-0 eeldyg SizeSelectionstyled__SizeCard-sc-155vsje-0 eeldyg"
                                    color="white"
                                >
                                    <h6
                                        fontSize="17px"
                                        fontWeight="bold"
                                        color="greyBase"
                                        className="sc-gswNZR hmRtgo SizeSelectionstyled__Headline6Styled-sc-155vsje-1 keaMtN SizeSelectionstyled__Headline6Styled-sc-155vsje-1 keaMtN"
                                    >
                                        Select Size
                                    </h6>
                                    <div className="sc-kImNAt hnbNOX SizeSelectionstyled__SizeSelectorChipsStyled-sc-155vsje-2 dEkkqK">
                                        <span
                                            className="sc-eKJbhj dqLmGj dress-size active"
                                            onclick="manage_size_click($(this))"
                                        >
                                            <span
                                                fontSize="15px"
                                                fontWeight="demi"
                                                color="greyBase"
                                                className="sc-gswNZR iwPwcX"
                                            >
                                                S
                                            </span>
                                        </span>
                                        <span
                                            className="sc-eKJbhj dqLmGj dress-size"
                                            onclick="manage_size_click($(this))"
                                        >
                                            <span
                                                fontSize="15px"
                                                fontWeight="demi"
                                                color="greyBase"
                                                className="sc-gswNZR iwPwcX"
                                            >
                                                M
                                            </span>
                                        </span>
                                        <span
                                            className="sc-eKJbhj dqLmGj dress-size"
                                            onclick="manage_size_click($(this))"
                                        >
                                            <span
                                                fontSize="15px"
                                                fontWeight="demi"
                                                color="greyBase"
                                                className="sc-gswNZR iwPwcX"
                                            >
                                                L
                                            </span>
                                        </span>
                                        <span
                                            className="sc-eKJbhj dqLmGj dress-size"
                                            onclick="manage_size_click($(this))"
                                        >
                                            <span
                                                fontSize="15px"
                                                fontWeight="demi"
                                                color="greyBase"
                                                className="sc-gswNZR iwPwcX"
                                            >
                                                XL
                                            </span>
                                        </span>
                                        <span
                                            className="sc-eKJbhj dqLmGj dress-size"
                                            onclick="manage_size_click($(this))"
                                        >
                                            <span
                                                fontSize="15px"
                                                fontWeight="demi"
                                                color="greyBase"
                                                className="sc-gswNZR iwPwcX"
                                            >
                                                XXL
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="container-fluid product-detail mb-4 card"
                                style={{ marginTop: 3, padding: "20px 16px" }}
                            >
                                <h6
                                    fontSize="17px"
                                    fontWeight="bold"
                                    color="greyBase"
                                    className="sc-hBxehG jvhzrN"
                                >
                                    Product Details
                                </h6>
                                <div className="product-details">
                                    <div style={{ overflow: "hidden" }}>
                                        <style
                                            type="text/css"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    'body{font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen,Ubuntu,Cantarell,\'Open Sans\',\'Helvetica Neue\',sans-serif;line-height:1.4;margin:1rem}table{border-collapse:collapse}table:not([cellpadding]) td,table:not([cellpadding]) th{padding:.4rem}table:not([border="0"]):not([style*=border-width]) td,table:not([border="0"]):not([style*=border-width]) th{border-width:1px}table:not([border="0"]):not([style*=border-style]) td,table:not([border="0"]):not([style*=border-style]) th{border-style:solid}table:not([border="0"]):not([style*=border-color]) td,table:not([border="0"]):not([style*=border-color]) th{border-color:#ccc}iframe,video{max-width:100%;outline:none}img{height:auto;max-width:100%}figure{display:table;margin:1rem auto}figure figcaption{color:#999;display:block;margin-top:.25rem;text-align:center}hr{border-color:#ccc;border-style:solid;border-width:1px 0 0 0}code{background-color:#e8e8e8;border-radius:3px;padding:.1rem .2rem}.mce-content-body:not([dir=rtl]) blockquote{border-left:2px solid #ccc;margin-left:1.5rem;padding-left:1rem}.mce-content-body[dir=rtl] blockquote{border-right:2px solid #ccc;margin-right:1.5rem;padding-right:1rem}@media screen and (max-width: 750px){table{width: 100%}}'
                                            }}
                                        />
                                        <div
                                            className="mce-content-body aside hasColor"
                                            style={{ wordBreak: "break-word" }}
                                        >
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n      .mce-content-body img {\n        opacity: 0;\n      }\n      .mce-content-body img[srcset],\n      .mce-content-body img[src] {\n        opacity: 1;\n      }\n      .mce-content-body.aside table{\n        min-width: 100% !important;\n      }\n      @media (max-width: 749.98px){\n        .mce-content-body table{\n          min-width: 100% !important;\n        }\n        .mce-content-body .table-wraper-fix > table > tbody > tr td,\n        .mce-content-body .table-wraper-fix > table > tbody > tr th{\n          min-width: 54px;\n        }\n      }\n\n      .mce-content-body .table-wraper-fix{\n        padding-bottom: 1px;\n        padding-right: 1px;\n      }\n\n      @media (min-width: 749.98px){\n        .mce-content-body .table-wraper-fix > table > tbody > tr td,\n        .mce-content-body .table-wraper-fix > table > tbody > tr th{\n          min-width: 80px !important;\n          box-sizing: border-box !important;\n        }\n        .mce-content-body.bottom .table-wraper-fix > table > tbody > tr td,\n        .mce-content-body.bottom .table-wraper-fix > table > tbody > tr th{\n          min-width: 120px !important;\n        }\n      }\n\n      .table-wraper-fix > table > tbody > tr td,\n      .table-wraper-fix > table > tbody > tr th {\n        padding: 8px;\n      }\n    "
                                                }}
                                            />
                                            <p
                                                className="product-extra-note fw-3 fs-13 mb-0 font-italic text-justify"
                                                data-mce-fragment={1}
                                            >
                                                <span data-mce-fragment={1}>
                                                    Light, bright, and full of life, this suit set will make a
                                                    delightful addition to your wardrobe. Tailored with flowy
                                                    silhouettes with classic golden prints, it is spruced up
                                                    with a trendy fit.
                                                </span>
                                            </p>
                                            <p
                                                className="product-extra-note fw-3 fs-13 mb-0 font-italic text-justify"
                                                data-mce-fragment={1}
                                            >
                                                Model height: 5.4ft
                                            </p>
                                            <p data-mce-fragment={1}>
                                                Fabric:<span data-mce-fragment={1}>&nbsp;Cotton</span>
                                            </p>
                                            <p data-mce-fragment={1}>
                                                <img
                                                    className="lozad lazyloaded"
                                                    data-src="https://img.myshopline.com/image/store/2006524221/1682322632613/Handmade-pico.png?w=16&h=16"
                                                    alt=""
                                                    data-mce-src="https://img.myshopline.com/image/store/2006524221/1682322632613/Handmade-pico.png?w=16&h=16"
                                                    data-mce-fragment={1}
                                                    referrerPolicy="same-origin"
                                                    decoding="async"
                                                    src="https://img.myshopline.com/image/store/2006524221/1682322632613/Handmade-pico.png?w=16&h=16"
                                                    data-loaded="true"
                                                />
                                                &nbsp;Handcrafted in India
                                            </p>
                                            <p data-mce-fragment={1}>
                                                Size : Refer to size chart. Model is wearing size Small.
                                            </p>
                                            <p data-mce-fragment={1}>
                                                <strong data-mce-fragment={1}>DISCLAIMER</strong>:
                                                <br data-mce-fragment={1} />
                                            </p>
                                            <p
                                                className="product-extra-note fw-3 fs-13 mb-0 font-italic text-justify"
                                                data-mce-fragment={1}
                                            >
                                                Natural-dyed colors might bleed during the first few washes
                                                or rub against the skin &amp; other light-colored garments.
                                                In the artful process of hand block-printing, embroidery
                                                work and stitching, variations are likely to come into
                                                existence. These irregularities are the hallmark of all
                                                handmade products and give each style a unique identity.
                                            </p>
                                            <p
                                                className="fs-13 pt-3 font-italic fw-3 text-justify"
                                                data-mce-fragment={1}
                                            >
                                                Like most brands, our products are photographed
                                                professionally under controlled lighting. Colours tend to be
                                                perceived differently depending on factors such as shot
                                                angles, lighting, background tones and color temperatures.
                                                As a result, prints and colors may vary 10% -12%.
                                                Nevertheless, we strive to match the tones as close to the
                                                original product colors as possible.
                                            </p>
                                            <p
                                                className="fs-13 pt-3 font-italic fw-3 text-justify"
                                                data-mce-fragment={1}
                                            >
                                                <img
                                                    className="lozad lazyloaded"
                                                    data-src="https://img.myshopline.com/image/store/2006524221/1682322632613/size-chart-480x480-010b75a9-9edc-4035-8ab8-a16dceb1b759-480x480.jpg?w=480&h=480"
                                                    alt=""
                                                    data-mce-src="https://img.myshopline.com/image/store/2006524221/1682322632613/size-chart-480x480-010b75a9-9edc-4035-8ab8-a16dceb1b759-480x480.jpg?w=480&h=480"
                                                    data-mce-fragment={1}
                                                    referrerPolicy="same-origin"
                                                    decoding="async"
                                                    src="https://img.myshopline.com/image/store/2006524221/1682322632613/size-chart-480x480-010b75a9-9edc-4035-8ab8-a16dceb1b759-480x480.jpg?w=480&h=480"
                                                    data-loaded="true"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products" id="products">
                                <h4
                                    fontSize="21px"
                                    fontWeight="book"
                                    color="greyBase"
                                    className="sc-gswNZR wDrko"
                                >
                                    Products For You
                                </h4>
                                <div className="product_loader" style={{ display: "none" }} />
                            </div>
                            <div className="button-container flex">
                                <button
                                    className="buynow-button buynow-button-white product-page-buy add_cart"
                                    onClick={() => {
                                        setmySidenavopen(!mySidenavopen);

                                        // Step 1: Retrieve existing array from localStorage
                                        const existingProductsJSON = localStorage.getItem("d1");
                                        const existingProducts = existingProductsJSON ? JSON.parse(existingProductsJSON) : [];

                                        // Step 2: Check if the product with the same name already exists
                                        const existingProductIndex = existingProducts.findIndex(product => product.Title === data1.Title);

                                        if (existingProductIndex !== -1) {
                                            // If the product exists, update its quantity
                                            existingProducts[existingProductIndex].quantity += 1;
                                        } else {
                                            // If the product doesn't exist, add it with quantity 1
                                            const newProduct = { ...data1, quantity: 1 };
                                            existingProducts.push(newProduct);
                                        }

                                        // Step 3: Update stored value in localStorage
                                        localStorage.setItem("d1", JSON.stringify(existingProducts));
                                        setdata133(existingProducts);
                                    }}

                                >
                                    <svg
                                        width={21}
                                        height={21}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        ml={4}
                                        mr={4}
                                        iconsize={20}
                                        className="sc-gswNZR egWgdn"
                                    >
                                        <g clipPath="url(#cart_svg__a)">
                                            <path fill="#fff" d="M.394.479h20v20h-20z" />
                                            <g clipPath="url(#cart_svg__b)">
                                                <g clipPath="url(#cart_svg__c)">
                                                    <path
                                                        d="M4.396 4.293h15.139c.507 0 .907.491.849 1.046l-.762 7.335c-.068.619-.536 1.1-1.102 1.12l-12.075.492-2.05-9.993Z"
                                                        fill="#C53EAD"
                                                    />
                                                    <path
                                                        d="M10.193 20.478c.674 0 1.22-.598 1.22-1.335s-.546-1.334-1.22-1.334c-.674 0-1.22.597-1.22 1.334 0 .737.546 1.335 1.22 1.335ZM15.181 20.478c.674 0 1.22-.598 1.22-1.335s-.546-1.334-1.22-1.334c-.674 0-1.22.597-1.22 1.334 0 .737.546 1.335 1.22 1.335Z"
                                                        fill="#9F2089"
                                                    />
                                                    <path
                                                        d="M1.126 3.28 4.152 4.7 6.68 16.784c.127.608.615 1.035 1.18 1.035h9.615"
                                                        stroke="#9F2089"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="cart_svg__a">
                                                <path
                                                    fill="#fff"
                                                    transform="translate(.394 .479)"
                                                    d="M0 0h20v20H0z"
                                                />
                                            </clipPath>
                                            <clipPath id="cart_svg__b">
                                                <path
                                                    fill="#fff"
                                                    transform="translate(.394 .479)"
                                                    d="M0 0h20v20H0z"
                                                />
                                            </clipPath>
                                            <clipPath id="cart_svg__c">
                                                <path
                                                    fill="#fff"
                                                    transform="translate(.394 2.479)"
                                                    d="M0 0h20v18H0z"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Add to Cart
                                </button>
                                <button
                                    className=" buynow-button product-page-buy buy_now"
                                    onClick={() => {
                                        setmySidenavopen(!mySidenavopen);

                                        // Step 1: Retrieve existing array from localStorage
                                        const existingProductsJSON = localStorage.getItem("d1");
                                        const existingProducts = existingProductsJSON ? JSON.parse(existingProductsJSON) : [];

                                        // Step 2: Check if the product with the same name already exists
                                        const existingProductIndex = existingProducts.findIndex(product => product.Title === data1.Title);

                                        if (existingProductIndex !== -1) {
                                            // If the product exists, update its quantity
                                            existingProducts[existingProductIndex].quantity += 1;
                                        } else {
                                            // If the product doesn't exist, add it with quantity 1
                                            const newProduct = { ...data1, quantity: 1 };
                                            existingProducts.push(newProduct);
                                        }

                                        // Step 3: Update stored value in localStorage
                                        localStorage.setItem("d1", JSON.stringify(existingProducts));
                                        setdata133(existingProducts);
                                        router.push("/cart");
                                    }}
                                >
                                    <svg
                                        width={21}
                                        height={21}
                                        fill="#ffffff"
                                        xmlns="http://www.w3.org/2000/svg"
                                        ml={4}
                                        mr={4}
                                        stroke="transparent"
                                        btntype="solid"
                                        className="sc-gswNZR dXbsni PdpFooter__SolidButtonBigStyled-sc-rnhxff-1 kEhBpR"
                                        iconsize={20}
                                    >
                                        <path
                                            d="M1.894 4.546v11.796a.5.5 0 0 0 .837.369l6.74-6.18a.5.5 0 0 0-.017-.752l-6.74-5.617a.5.5 0 0 0-.82.384ZM11.894 4.546v11.796a.5.5 0 0 0 .837.369l6.74-6.18a.5.5 0 0 0-.017-.752l-6.74-5.617a.5.5 0 0 0-.82.384Z"
                                            fill="#fff"
                                        />
                                    </svg>
                                    Buy Now
                                </button>
                            </div>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        '\n    .only-desktop {\n        display: block !important;\n        height: 100% !important;\n    }\n\n    .product-details img {\n        max-width: 100%;\n    }\n\n    .share-icon {\n        width: 30px;\n        height: 30px;\n        display: block;\n        /* background-color: #fff; */\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 20px 20px;\n        border-radius: 30px;\n        position: absolute;\n        right: 0;\n        /* border: 1px solid #eee; */\n        padding: 20px;\n        border-radius: 50%;\n        z-index: 1;\n        top: 6px;\n    }\n\n    .eeldyg.eeldyg {\n        margin-bottom: 8px;\n    }\n\n    .iGlGaV {\n        background-color: rgb(255, 255, 255);\n        border-radius: 0px;\n        margin-bottom: 8px;\n        padding: 20px 16px;\n        border-top: 5px solid #eaeaf2;\n        border-bottom: 5px solid #eaeaf2;\n    }\n\n    .keaMtN.keaMtN {\n        margin-bottom: 16px;\n    }\n\n    .hmRtgo {\n        color: rgb(53, 53, 67);\n        font-style: normal;\n        font-weight: 700;\n        font-size: 17px;\n        line-height: 20px;\n        font-family: "Mier bold";\n        margin: 0px;\n        padding: 0px;\n    }\n\n    .hnbNOX {\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .dqLmGj {\n        background: rgb(255, 255, 255);\n        padding: 6px 16px;\n        border-radius: 40px;\n        border: 1px solid rgb(53, 53, 67);\n        margin: 6px 12px 6px 0px;\n        min-width: 46px;\n        height: 32px;\n        display: flex;\n        -webkit-box-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        align-items: center;\n        position: relative;\n        cursor: pointer;\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    .iwPwcX {\n        color: rgb(53, 53, 67);\n        font-style: normal;\n        font-weight: 600;\n        font-size: 15px;\n        line-height: 20px;\n        font-family: "Mier demi";\n        text-align: center;\n        margin: 0px;\n        padding: 0px;\n    }\n'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="mySidenav" className="sidenav" style={{ right: !mySidenavopen ? "0%" : "-100%" }}>
                <div className="sidenav-div">
                    <div className="drawer__title">
                        <img
                            src="https://kurti.valentine-deal.shop/assets/website/images/M favicon.png"
                            className="_31Y9yB logo-icon"
                            style={{ width: "auto", height: 30 }}
                        />
                        <h3 className="ui2-heading">
                            <span>
                                <b>Your Cart</b>
                            </span>
                        </h3>
                        <a className="closebtn" onClick={() => {
                            setmySidenavopen(!mySidenavopen)
                        }}>
                            ×
                        </a>
                    </div>
                </div>
                <div className="cart-products-list">

                    {data133 && data133?.map((el, index) => {
                        return (
                            <div className="cart-product cart-product-index-0">
                                <div className="cart-product-img">

                                    <img
                                        src={el.images}
                                        alt=""
                                    />
                                </div>
                                <div className="cart-product-details">

                                    <div className="cart-product-title">

                                        <p>{el.Title}</p>
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107"
                                            className="remove-cart-item"
                                            data-index={0}
                                            alt=""
                                            onClick={() => {
                                                const updatedProducts = JSON.parse(localStorage.getItem("d1")).filter((ela) => ela._id !== el._id);
                                                localStorage.setItem("d1", JSON.stringify(updatedProducts)); setdata133(updatedProducts)
                                                setdata133(updatedProducts)


                                            }}
                                        />
                                    </div>
                                    <div className="cart-product-pricing">

                                        <p className="cart-product-price">₹{el.mrp}</p>&nbsp;
                                        <span className="cart-product-mrp">₹{el.selling_price}</span>
                                    </div>
                                    <div className="cart-product-description">
                                        <span className="sc-lbxAil evmCQI" />
                                        <div className="cart-qty-wrapper">
                                            <span className="minus" data-index={0} onClick={() => {
                                                // Step 1: Retrieve existing array from localStorage
                                                const existingProductsJSON = localStorage.getItem("d1");
                                                const updatedProducts = JSON.parse(localStorage.getItem("d1")).map((ela) => {
                                                    if (ela.quantity > 0) {
                                                        if (ela._id === el._id) {
                                                            ela.quantity -= 1; // Increment quantity
                                                        }
                                                        return ela;
                                                    } else {
                                                        return ela;

                                                    }
                                                });
                                                console.log("updatedProducts", updatedProducts);
                                                // Step 3: Update stored value in localStorage
                                                localStorage.setItem("d1", JSON.stringify(updatedProducts)); setdata133(updatedProducts)
                                                setdata133(updatedProducts)

                                            }}>
                                                -
                                            </span>
                                            <span className="num">{el.quantity}</span>
                                            <span className="plus" data-index={0} onClick={() => {
                                                const existingProductsJSON = localStorage.getItem("d1");
                                                const updatedProducts = JSON.parse(existingProductsJSON).map((ela) => {
                                                    if (ela._id === el._id) {
                                                        ela.quantity += 1; // Increment quantity
                                                    }
                                                    return ela;
                                                });
                                                let dat1 = JSON.stringify(updatedProducts)
                                                console.log("updatedProducts", updatedProducts);
                                                localStorage.setItem("d1", dat1);
                                                setdata133(updatedProducts)

                                            }}>
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })}

                </div>
                <div className="cart__footer" style={{}}>
                    <div className="cart__price__details">
                        <div className="cart__breakup__inner">
                            <div className="cart__total">
                                <span className="">Cart Total:</span>
                                <span className="cartTotalAmount">₹{totalMrp}.00</span>
                            </div>
                            <div
                                className="shipping__total"
                                style={{ borderBottom: "1px dashed #000" }}
                            >
                                <span className="">Shipping:</span>
                                <span className="">FREE</span>
                            </div>
                            <div className="mc_pay__total">
                                <span className="">To Pay:</span>
                                <span className="cartTotalAmount">₹{totalMrp}.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="cart__checkout">
                        <div className="cart__final__payment">
                            <h2 className="cart__final__price cartTotalAmount">₹{totalMrp}.00</h2>
                            <p className="cart__tax__text">Inclusive of all taxes</p>
                        </div>
                        <a
                            href="/cart"
                            className="btn btn-dark cart__confirm__order"
                        >
                            Confirm Order
                        </a>
                    </div>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n                    .steps.svelte-idjy9v .steps-inner .step.active .info-wrap .circle-box.svelte-idjy9v {\n                        border-color: #000000;\n                        color: #000000;\n                        background: #fff;\n                    }\n\n\n                    .steps.svelte-idjy9v .steps-inner .step.active .info-wrap .title.svelte-idjy9v {\n                        color: #000000;\n                    }\n\n                    .steps.svelte-idjy9v .steps-inner .step.svelte-idjy9v:last-child {\n                        justify-content: center;\n                    }\n\n                    .steps.svelte-idjy9v.svelte-idjy9v {\n                        padding: 2.3rem 1.2rem 0.5rem;\n\n                    }\n\n                    ._2dxSCm .search-div:before {\n                        background: url('https://kurti.valentine-deal.shop/assets/images/theme/search.svg');\n                    }\n                "
                }}
            />
            <use-chat-gpt-ai-content-menu id="USE_CHAT_GPT_AI_ROOT_Context_Menu" />
            <use-chat-gpt-ai
                id="USE_CHAT_GPT_AI_ROOT"
                data-version="3.0.0"
                style={{ display: "none" }}
            />
            <max-ai-minimum-app
                id="USE_CHAT_GPT_AI_ROOT_Minimize_Container"
                data-version="3.0.0"
            />
            <div
                id="MAXAI_SNACKBAR_CONTAINER"
                style={{ zIndex: 2147483647, color: "rgb(255, 255, 255)" }}
            />
        </>

    )
}

export default Productdetails