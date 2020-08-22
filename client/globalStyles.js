// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 100px;
    background: #1b2838;

    font-family: Sans-serif;
    color: white;
    font-size: 12px;
    text-shadow: 1px 1px 2px #000000aa;
    letter-spacing: 2px;
    font-weight: normal;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 20px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  width: 5px;
  height: 20px;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: #070e14 !important;
    border-radius: 3px;
}

::-webkit-scrollbar-track {
    background: #16202d !important;
    border: 1px solid #16202d !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #b30000;
}

/* Arrows on Scrollbar */
::-webkit-scrollbar-button {
    background: #0b151f;
    background-size: 10px 10px;
    background-repeat: no-repeat;
    background-position: center center;

    -webkit-box-shadow: inset 1px 1px 2px rgba(0,0,0,0.2);
    width: 40px;
    border-radius: 5px;

}

/* Left */
::-webkit-scrollbar-button:horizontal:decrement {
  border-width: 10px 20px 10px 0;
  border-color: transparent #407899 transparent transparent;
  background-position: -18px 0px;
  background-image:url('https://store.steampowered.com//public/images//v6/icon_cluster_controls.png');

}

/* Right */
::-webkit-scrollbar-button:horizontal:increment {
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent #407899;
  background-position: -9px 0px;
  background-image:url('https://store.steampowered.com//public/images//v6/icon_cluster_controls.png');


}
`;

export default GlobalStyle;