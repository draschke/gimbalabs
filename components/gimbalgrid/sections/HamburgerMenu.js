import { motion } from "framer-motion";
import React, { useState } from "react";
import WithTransfer from "../WithTransfer";

const gdsEase12 = {
  duration: 0.3,

  ease: [0.6, 0.01, -0.05, 0.9],
};
export default function HamburgerMenu(props) {
  const [hov, setHov] = useState(true);

  const regState = [];
  const hovState = [];
  const variants = hov ? hovState : regState;

  const lineOne = {
    transition: gdsEase12,
    y: !hov ? 0 : 0,
    x: !hov ? -9 : 0,
    // rotate: !hov ? -90 : 0,
  };
  const lineTwo = {
    transition: gdsEase12,
    y: !hov ? 0 : 0,
    x: !hov ? 0 : 0,
  };
  const lineThree = {
    transition: gdsEase12,
    y: !hov ? 0 : 0,
    x: !hov ? 9 : 0,
    // rotate: !hov ? -90 : 0,
  };

  return (
    <WithTransfer {...props}>
      <div
        // onMouseOver={() => setHov(true)}
        // onMouseLeave={() => setHov(false)}
        className="  w-full grid "
      >
        <div className="py-5 w-full h-full flex items-center justify-center group">
          <div className=" flex flex-col items-center">
            <motion.div
              animate={lineOne}
              className="h-1 bg-black2-900 w-full my-1 "
            ></motion.div>
            <motion.div
              animate={lineTwo}
              className="h-1 bg-black2-900 w-full my-1 "
            ></motion.div>
            <motion.div
              animate={lineThree}
              className="h-1 bg-black2-900 w-full my-1 "
            ></motion.div>

            <div>Menu</div>
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}

const svg = (
  <svg
    height="100px"
    width="100px"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    x="0px"
    y="0px"
  >
    <g>
      <path d="M56.906,80.625H56.9v.008l-.008.008-.064.032-.329.153c-.45.193-.908.353-1.373.506a17.526,17.526,0,0,1-2.908.675,9.532,9.532,0,0,1-3.332-.041,3.675,3.675,0,0,1-1.944-1.06,2.56,2.56,0,0,1-.361-.53,4.677,4.677,0,0,1-3.494.193l.009.024c0,.073.072.2-.057.177q-1,.144-2.12.313a4.679,4.679,0,0,1-.474.048c-.144.016-.28.024-.425.032-.281-.008-.57-.024-.868-.04s-.61-.04-.923-.056c-.152-.008-.313-.024-.474-.032-.16-.032-.313-.057-.474-.089-.634-.128-1.316-.224-2-.4-.337-.105-.675-.2-1.028-.305l-.265-.072-.08-.025c-.041,0-.081-.024-.113-.016l-.056.08-.04.041a2.7,2.7,0,0,1-.225.185c-.161.1-.321.2-.49.28s-.337.137-.514.193a5.143,5.143,0,0,1-2.056.145,7.757,7.757,0,0,1-1.975-.506,6.245,6.245,0,0,1-.972-.458l-.129-.08-.04.056-.016.016H27.3s.017-.008,0,.008l-.064.04a3.556,3.556,0,0,1-1.108.546,5.923,5.923,0,0,1-2.208.113,17.884,17.884,0,0,1-1.976-.418c-.634-.161-1.293-.361-1.895-.538a6.7,6.7,0,0,0-1.711-.321l-.417.008a.293.293,0,0,0-.129.024l-.233.048c-.3.064-.626.137-.972.241a11.818,11.818,0,0,1-4.834.61,11.513,11.513,0,0,1-1.357-.361c-.265-.12-.538-.249-.8-.377q-.639,1.6,1.429,1.124a1.23,1.23,0,0,1,1.205,1.205c.032,2.642,9.524-.177,11.62.514a13.721,13.721,0,0,0,7.115.891,21.286,21.286,0,0,1,5.276-.578c4.8.465,9.533,1.413,14.367,1.662,4.433.225,8.826.1,13.2.9,5.613,1.02,10.44,1.59,16.093.337,3.646-.812,7.854-2.136,11.62-1.43,2.956.562,5.541,1.133,8.384-.321a17.734,17.734,0,0,1,4.369-1.951c3.734-.731,8.191,1.533,10.528-2.393a1.222,1.222,0,0,1,1.357-.555q4.06.615,1.5-2.489c-.024-.008-.048-.024-.072-.032-.128.1-.257.185-.386.265-.273.16-.529.313-.811.449a5.211,5.211,0,0,1-.522.145l-.265.056-.2.024c-.233.024-.466.04-.7.065-.081.016-.225.016-.249.032a.737.737,0,0,1-.129.032,11.853,11.853,0,0,0-1.959,1.212c-.193.121-.386.241-.57.354a1.483,1.483,0,0,1-.378.184l-.321.113a7.651,7.651,0,0,1-1.22.329,12.677,12.677,0,0,1-2.185.193,17.416,17.416,0,0,1-1.879-.072c-.209-.025-.418-.008-.618-.025-.217-.04-.426.009-.635-.023a6.473,6.473,0,0,0-1.172-.049h-.008c-.065,0-.121-.048-.185,0a5.181,5.181,0,0,1-1.558.675,7.162,7.162,0,0,1-3.14.329,5.1,5.1,0,0,1-1.574-.457c-.177-.089-.137-.073-.16-.089a.14.14,0,0,1-.033-.024.212.212,0,0,1-.04-.048c-.016-.016-.016.024-.032.032l-.016.024h.008l-.12.121-.338.321-.353.257a4.547,4.547,0,0,1-.723.433,7.894,7.894,0,0,1-2.923.812,6.571,6.571,0,0,1-2.843-.338c-.225-.1-.45-.2-.666-.313-.2-.145-.4-.281-.595-.426a.619.619,0,0,1-.152-.224c-.033-.041-.089.056-.137.088l-.056.056-.313.257-.37.305c-.128.1-.281.169-.417.257a3.75,3.75,0,0,1-.844.418,5.078,5.078,0,0,1-2.449.281c-.45.2-.939.4-1.486.6a20.633,20.633,0,0,1-2.047.651c-.378.112-.787.152-1.2.232a6.165,6.165,0,0,1-1.3.145c-.458.016-.931.056-1.413.032-.482-.056-1-.1-1.494-.193a30.827,30.827,0,0,1-3.027-.779,28.443,28.443,0,0,0-3.124-.811c-.257-.024-.515-.056-.779-.088-.265-.016-.506.024-.763.024a8.027,8.027,0,0,0-.875.1l-.948.144a12.762,12.762,0,0,1-4.473.1,5.884,5.884,0,0,1-2.45-1.116A7.146,7.146,0,0,1,57,80.729l-.1-.1ZM118.18,56.349c2.385,1.533,7.083,4.409,5.5,7.115a3.317,3.317,0,0,1-2.794,1.421,9.5,9.5,0,0,1,.2,2.715,4.887,4.887,0,0,1-.634,2.055,3.933,3.933,0,0,1-.739.892c-.128.1-.153.12-.153.12h-.008l.024.2c.025.3.049.586.065.875a7.143,7.143,0,0,1-.193,1.968,4.671,4.671,0,0,1-.321.923,3.509,3.509,0,0,1,1.4,5.172,1.09,1.09,0,0,1,.932,1.132c-.041,5.309-.7,11.821-4.16,16.15-3.606,4.521-9.974,6.007-15.435,6.673-16.455,2.008-33.142,1.944-49.7,1.518-8.312-.209-16.479-1.02-24.75-1.766-4.947-.458-10.6-.466-15.1-2.867C6.7,97.65.708,85.66,6.128,80.207c-.056-.738.378-1.525,1.518-2.272-.056-.088-.112-.177-.16-.257a5.639,5.639,0,0,1-.313-.859,5.113,5.113,0,0,1-.073-.94,5.982,5.982,0,0,1,.185-.915,1.485,1.485,0,0,1,.177-.4l.1-.2L7.59,74.3l-.072-.056-.3-.249c-.193-.169-.362-.362-.546-.546a8.41,8.41,0,0,1-2.233-5.815,5.253,5.253,0,0,1,1.293-3.356A5.11,5.11,0,0,1,7.084,63.2a3.011,3.011,0,0,1-.257-.635,4.876,4.876,0,0,1,1.341-4.32c-.578-.313-1.14-.651-1.686-1.02a1.23,1.23,0,0,1-.474-1.406c-1.694-4.224.048-9.628,1.815-13.531,2.2-4.875,6.465-7.814,11.267-9.942,4.16-1.855,8.553-3.06,12.736-4.826,4.61-1.944,9.324-4.393,14.416-4.666a202.392,202.392,0,0,1,36.579,1.02c9.549,1.244,20.928,4.224,28.742,10.167a18.857,18.857,0,0,1,6.714,9.17c1.036,2.988,2.77,7.108,1.63,10.32A7.876,7.876,0,0,1,118.18,56.349Zm.393,5.983c.515.08,3.807.666,2.37-.764a16.55,16.55,0,0,0-1.357-1.22c-1.085-.852-2.225-1.606-3.341-2.4-3.132,2.007-7.549,2.811-11.564,3.172a10.261,10.261,0,0,1,.465,2.056C109.6,62.444,114.117,61.6,118.573,62.332Zm.121,5.043a8.419,8.419,0,0,0-.321-2.643c-.153-.023-.3-.056-.434-.08-3.662-.666-7.6.057-11.323.7a7.448,7.448,0,0,1,1.558,1.622,8.4,8.4,0,0,1,1.454,3.622,5.7,5.7,0,0,1-.041,2.016,3.677,3.677,0,0,1-1.068,2.015,5.413,5.413,0,0,1-1.678.948,2.27,2.27,0,0,0-.835.538l-.056.056-.025.024c-.008,0-.008.008-.016.016-.072.185-.152.378-.248.611-.065.128-.121.273-.193.417s-.169.313-.185.362c-.064.152-.129.3-.193.425-.032.056-.056.121-.088.177a1.169,1.169,0,0,0,.3.016c.1.008.193,0,.281,0l.128-.008.073-.008h.136c.538.016,1.1,0,1.7-.04a12.882,12.882,0,0,0,1.847-.273,6.451,6.451,0,0,0,.907-.289l.217-.089a.424.424,0,0,0,.145-.08c.144-.1.281-.193.433-.289a11.767,11.767,0,0,1,2.313-1.518c.169-.064.346-.113.522-.161a2.413,2.413,0,0,1,.418-.072c.225-.024.449-.056.682-.088l.153-.016.08-.024a.648.648,0,0,1,.169-.04c.152-.089.3-.185.45-.282a2.856,2.856,0,0,0,1.22-1.782,4.968,4.968,0,0,0,.105-1.325l-.033-.362-.016-.184-.007-.1L117.192,71c-.088-.5-.168-1-.257-1.518l.683-.394c.2-.12.506-.313.506-.321a1.65,1.65,0,0,0,.273-.337A2.627,2.627,0,0,0,118.694,67.375Zm-4.328,29.384c3.879-3.831,4.617-10.376,4.682-15.555a4.169,4.169,0,0,1-2.667.433c-1.975,2.763-4.328,2.963-7.822,2.642-4.714-.433-8.038,3.509-12.576,3.18-2.457-.184-4.9-1.084-7.356-.851-3.236.313-6.32,1.164-9.5,1.767-5.124.971-9.557.53-14.648-.394-6.513-1.188-13.114-.771-19.683-1.55-2.747-.329-5.83-1.22-8.561-1.164-2.481.048-4.922.827-7.4.811-2.064-.016-3.678-.94-5.637-1.212-3.1-.418-6,.738-9.051.866-2.369.1-3.847-.61-4.232-2.633a7.271,7.271,0,0,1-2.289-.876c-2.393,3.2-.1,8.987,1.534,12.07,2.425,4.6,7.653,5.758,12.456,6.272,11.708,1.253,23.393,2.273,35.182,2.386,13.21.128,26.533.4,39.687-1.013C102.207,101.328,109.965,101.1,114.366,96.759Zm.731-41.021c4.8-2.867,1.943-10.9-.378-14.76-2.634-4.377-6.89-6.642-11.4-8.7a71.312,71.312,0,0,0-16.848-5.4c-11.251-2.016-23.1-2.016-34.532-1.807a1.711,1.711,0,0,1,.362.289,3.481,3.481,0,0,1,.257.41,1.057,1.057,0,0,1,.08.345c.016.193-.016.306-.1.345s-.209,0-.354-.08c-.072-.032-.136-.1-.217-.144a1.883,1.883,0,0,1-.273-.137,1.171,1.171,0,0,0-1.228.249.732.732,0,0,0-.257.482,1.06,1.06,0,0,0,.225.538,4.208,4.208,0,0,0,.393.49c.1.144.145.257.1.345s-.161.12-.338.129a1.336,1.336,0,0,1-.738-.2,1.706,1.706,0,0,1-.868-1.06,1.761,1.761,0,0,1,.538-1.7,2.116,2.116,0,0,1,.3-.225c-5.878.274-10.576,1.839-16.085,4.16-4.417,1.856-9.091,3.068-13.427,5.116-3.935,1.847-8.167,4.111-10.039,8.255-1.55,3.429-3.734,8.834-1.935,12.488a1.382,1.382,0,0,1,.121.442c7.331,4.537,17.442,3.3,25.657,3.188,11.781-.177,23.586.144,35.375.04,10.143-.088,20.414.747,30.541.129C104.858,58.677,110.816,58.3,115.1,55.738Zm-7.846,16.391a3.548,3.548,0,0,0,0-1.2,5.534,5.534,0,0,0-2.747-4.047c-2.128,4.031-8.786,5.388-13.965,5.356a42.47,42.47,0,0,1-18.053-3.967,10.945,10.945,0,0,1-3.309-2.08c-1.759,2.891-5.18,3.229-8.119,4.385-4.979,1.967-8.175,5.621-12.391,8.569a.539.539,0,0,0,.08.152,1.391,1.391,0,0,0,.675.321,7.442,7.442,0,0,0,2.465.009,16.169,16.169,0,0,0,2.514-.571,11.54,11.54,0,0,0,1.156-.425l.273-.121c.177-.1.337-.168.522-.289.378-.273.747-.554,1.125-.827.224.321.449.634.674.948l.337.473.185.249c.064.072.064.072.1.113a5.241,5.241,0,0,0,.643.626,3.507,3.507,0,0,0,1.5.707,10.9,10.9,0,0,0,3.67-.073c.329-.04.65-.088.963-.128a14.592,14.592,0,0,1,2.08-.088c.337.048.675.1,1,.136A26.729,26.729,0,0,1,72,81.332c1.012.345,1.927.626,2.8.835.434.105.844.145,1.245.225.41.032.811.016,1.2.032a5.947,5.947,0,0,0,1.14-.064c.37-.057.723-.064,1.068-.145.507-.112.98-.208,1.438-.329-.956-.41-1.687-.835-2.329-1.132-1.879-.948-2.763-1.052-2.746-1.285-.017-.145,1.019-.386,3.131.313A37.461,37.461,0,0,0,82.829,81a5.137,5.137,0,0,0,.787.064c.305-.1.6-.185.884-.265.417-.136.811-.233,1.164-.322.016-.007.04-.023.056-.031.1-.065.193-.121.281-.193l.273-.249.129-.129a1.709,1.709,0,0,0,.2-.192c.217-.217.354-.41.531-.619s.345-.409.521-.618l.274-.313a1.374,1.374,0,0,1,.257-.273c.168.3.321.6.514.915s.4.61.6.915l.329.226c.129.048.257.1.385.16A4.961,4.961,0,0,0,92,80.224a6.03,6.03,0,0,0,2.128-.659,2.585,2.585,0,0,0,.458-.289l.217-.161.169-.176a1.361,1.361,0,0,0,.112-.129,1.271,1.271,0,0,0,.209-.393l.321-.779c.185-.482.378-.98.562-1.47A10.321,10.321,0,0,0,97.9,78.425a2.864,2.864,0,0,0,.867.217,4.827,4.827,0,0,0,2.12-.257,2.881,2.881,0,0,0,1.566-1.269,11.481,11.481,0,0,1,1.807-2.586l.08-.08a4.686,4.686,0,0,1,1.558-1.044,3.609,3.609,0,0,0,1.012-.523A1.434,1.434,0,0,0,107.251,72.129ZM89.157,69.824c5,.032,15.877-.506,13.307-7.854-2.955,1.349-5.87,3.244-9.058,3.807a50.292,50.292,0,0,1-9.26.449c-2.915-.024-6.015.04-8.817-.9a44.558,44.558,0,0,1-5.4-2.69c.731,2.521,2.883,3.172,5.694,4.416A32.913,32.913,0,0,0,89.157,69.824ZM96.4,62.179c.506-.233,1.012-.482,1.51-.723-8.537.241-17.105-.088-25.666-.169a14.8,14.8,0,0,0,3.726,1.719,38.869,38.869,0,0,0,9.452.835C89.222,63.9,92.884,63.857,96.4,62.179ZM67.619,63.5a9.808,9.808,0,0,1-.329-1.96.967.967,0,0,1-.225-.257h-.747c-3.212.033-6.432.024-9.644.008C59.275,64.331,63.773,63.769,67.619,63.5Zm-1.413,2.465c-4.312.217-8.682.209-11.532-3.333-1.646,2.924-6.626,3.333-9.541,3.181-1.831-.1-4.882-.354-7-1.494-1.028,2.064-4.08,3.252-7.164,3.951a29.107,29.107,0,0,0,2.867,3.011c1.727,1.438,3.887,2.137,5.622,3.534,1.429,1.148,4.087,4.866,6.288,3.4a52.633,52.633,0,0,0,4.882-3.863,30.152,30.152,0,0,1,7.79-5.284C60.657,68.145,64.19,67.64,66.206,65.961Zm-13.62-4.706c-4.77-.04-9.541-.08-14.311-.064C39.616,64.411,50.691,64.516,52.586,61.255ZM41.343,79.646v-.025a14.127,14.127,0,0,1-1.622-1.381c-2-1.935-4.57-2.747-6.65-4.473-1.806-1.51-3.212-3.389-4.954-4.963-1.414.209-2.683.338-3.566.418-3.277.313-7.1.851-10.223-.434a5.13,5.13,0,0,1-2.971-3.638,1.428,1.428,0,0,1-.185,0A9.538,9.538,0,0,1,9.4,64.821l.008.04a3.686,3.686,0,0,0-1.879,1,2.885,2.885,0,0,0-.691,1.871,6.1,6.1,0,0,0,1.59,4.1c.129.12.241.264.378.377l.2.169.048.04.144.088.281.193.193.121A5.144,5.144,0,0,1,9.212,71.4c-.16-.94-.088-1.526.089-1.566.193-.04.449.482.819,1.277.385.779.875,1.871,1.871,1.975a8.715,8.715,0,0,0,2.77-.281l1.205-.225-.53.86a1.883,1.883,0,0,0-.064.578c0,.225,0,.426.008.594a1.891,1.891,0,0,1-.049.426c-.04.1-.088.145-.144.152a.238.238,0,0,1-.168-.12,1.443,1.443,0,0,1-.226-.313,3.814,3.814,0,0,1-.256-.587c-.016-.04-.024-.08-.04-.12a6.762,6.762,0,0,1-.836.257,4.7,4.7,0,0,1-1.9.121,2.858,2.858,0,0,1-1-.378l-.16.193c-.274.353-.538.634-.819,1.044l-.1.136-.032.048-.04.089c-.024.056-.089.112-.089.161a2.966,2.966,0,0,1-.064.305c.024.1,0,.193.024.289a2.133,2.133,0,0,0,.916,1.18c.249.153.554.265.819.41.281.1.594.153.884.241a9.892,9.892,0,0,0,3.918-.514c.345-.1.707-.185,1.092-.257l.282-.057a1.567,1.567,0,0,1,.393-.04l.618-.008a8.836,8.836,0,0,1,2.265.442c.667.2,1.245.393,1.839.554a15.842,15.842,0,0,0,1.686.4,4.1,4.1,0,0,0,1.374-.016,1.674,1.674,0,0,0,.449-.217l.025-.016.08-.072.169-.169c.112-.113.184-.217.273-.321l.53-.627c.466.37.955.811,1.4,1.1a5.843,5.843,0,0,0,.7.362,6.22,6.22,0,0,0,1.454.417,3.451,3.451,0,0,0,1.3-.032l.249-.088.217-.1a.725.725,0,0,0,.08-.073l.241-.257.45-.546c.3.08.618.193.923.289.225.072.45.153.675.225.329.105.65.217.964.322.626.192,1.236.3,1.815.457.144.032.289.072.433.1l.426.049.827.1c.273.032.53.056.787.088.233,0,.458-.007.675-.007S41.142,79.637,41.343,79.646Zm-27.5-14.472c4.095,4.425,24.092.851,21.98-3.437A1.191,1.191,0,0,1,35.7,61.2c-1.566.016-3.124.04-4.69.072s-3.212.081-4.874.1a1.07,1.07,0,0,1-.57.674C21.78,63.994,18.006,66.523,13.846,65.174ZM13.653,62.5c2.835,1.518,5.606.265,8.208-1.165a43.029,43.029,0,0,1-7.646-.891,7.049,7.049,0,0,0-.947,1.928A1.452,1.452,0,0,1,13.653,62.5Zm-2.522.233a7.916,7.916,0,0,1,.724-2.923c-.482-.153-.964-.321-1.43-.514,0,.008-.008.008-.008.016-.474.506-1.542,1.614-1.317,2.433C9.317,62.54,10.425,62.669,11.131,62.733Z"></path>
      <path d="M115.867,86.9l-.305,1.775a11.135,11.135,0,0,1-1.983,4.73,11.506,11.506,0,0,1-3.534,3.084,21.634,21.634,0,0,1-7.211,2.473,34.721,34.721,0,0,1-4.988.53,4.974,4.974,0,0,1-1.814-.08,6.194,6.194,0,0,1,1.766-.394c1.149-.176,2.819-.441,4.859-.915a22.57,22.57,0,0,0,6.778-2.618,10.528,10.528,0,0,0,3.115-2.835,9.555,9.555,0,0,0,1.262-2.53,15.642,15.642,0,0,1-2.98,1.237c-.3.105-.642.169-.964.257-.329.072-.578.121-.947.177a6.9,6.9,0,0,1-2.008-.1c-.634-.113-1.2-.265-1.767-.386-.265-.048-.562-.128-.8-.145l-.361-.056c-.136-.008-.289,0-.426,0a2.96,2.96,0,0,0-1.357.37,6.581,6.581,0,0,1-1.751.634c-1.421.265-2.634-1.092-2.955-1.068h-.032l-.04-.008a4.294,4.294,0,0,0-1.365.177c-.49.128-.98.281-1.5.4a5.2,5.2,0,0,1-.771.144c-.3.041-.5.041-.747.057l-1.389.072c-1.8.081-3.365.153-4.658.209a17.462,17.462,0,0,1-4.087-.04,17.659,17.659,0,0,1,4.031-.659c1.285-.144,2.835-.305,4.609-.482.45-.04.908-.088,1.382-.128.225-.024.5-.04.69-.072a6.4,6.4,0,0,0,.683-.161c.474-.144.964-.289,1.461-.442a5.047,5.047,0,0,1,1.759-.256h.016a2.253,2.253,0,0,1,.98.353c.217.128.434.265.659.4a2.416,2.416,0,0,0,.578.241c.088.032.169.016.257.04l.016.113v.016l.008-.016.1-.073.209-.048a7.148,7.148,0,0,0,1.325-.554,4.173,4.173,0,0,1,1.887-.53c.153,0,.289-.008.442,0l.5.048c.345.032.618.105.932.161.586.12,1.164.273,1.718.361a5.415,5.415,0,0,0,1.6.081c.233-.04.594-.105.859-.161.281-.08.547-.128.836-.233a11.734,11.734,0,0,0,4.015-1.975Z"></path>
      <path d="M115.4,47.306a10.547,10.547,0,0,1-.145,3.276,6.679,6.679,0,0,1-.321,1.157c-.137.329-.273.642-.41.956-.209.329-.433.658-.642.963a6.819,6.819,0,0,1-.723.779,8.175,8.175,0,0,1-3.011,1.823c-1.9.651-3.148.466-3.148.321-.025-.224,1.156-.393,2.77-1.2a8.426,8.426,0,0,0,2.506-1.823,5.605,5.605,0,0,0,.562-.658c.144-.233.3-.466.457-.708.129-.321.266-.642.394-.963a6.115,6.115,0,0,0,.241-.907,10.761,10.761,0,0,0,.185-2.868c-.081-.875-.378-1.606-.812-1.694l-.425-.088-.016-.41a6.306,6.306,0,0,0-.635-3.051,2.337,2.337,0,0,0-.554-.611c-.177-.128-.273-.217-.257-.273s.145-.08.378-.048a1.883,1.883,0,0,1,.931.514,5.178,5.178,0,0,1,1.2,2.995,2.16,2.16,0,0,1,1,.956A4.7,4.7,0,0,1,115.4,47.306Z"></path>
      <path d="M115.434,69.712a3.225,3.225,0,0,1-.29,1.332,4.888,4.888,0,0,1-1.2,1.679c-.883.8-1.662.884-1.718.723-.081-.185.449-.563,1.011-1.357a3.533,3.533,0,0,0,.8-2.3,8.066,8.066,0,0,1-1.421.514c-.081.016,1.5-3.462,1.574-3.646.281-.707.4-1.269.578-1.245.144.016.345.49.265,1.438a5.271,5.271,0,0,1-.426,1.622,1.044,1.044,0,0,1,.434.241A1.372,1.372,0,0,1,115.434,69.712Z"></path>
      <path d="M105.982,36.312l.337.554-.522.3a5.731,5.731,0,0,1-.851.474,4.045,4.045,0,0,1-2.273.1c-.321-.08-.611-.184-.884-.28-.256-.113-.5-.225-.706-.338-.819-.458-1.245-.859-1.173-1.028s.659-.072,1.518.137a5.754,5.754,0,0,0,2.948.16,5.473,5.473,0,0,0-1.518-.979c-.627-.3-1.109-.482-1.076-.659.032-.152.473-.3,1.309-.193a4.324,4.324,0,0,1,1.413.418A3.524,3.524,0,0,1,105.982,36.312Z"></path>
      <path d="M96.843,32.755l.008.7-.691-.016-.329-.016a4.6,4.6,0,0,1-2.8-1.116,1.606,1.606,0,0,1-.5-.9c-.032-.273.073-.353.153-.385.1-.04.192.1.337.193a3.683,3.683,0,0,0,.578.321A7.307,7.307,0,0,0,95.309,32c-.024-.048-.04-.105-.073-.161a3.5,3.5,0,0,0-.618-.674c-.449-.378-.8-.643-.731-.82.057-.152.49-.216,1.173.008a2.845,2.845,0,0,1,1.132.731A2.643,2.643,0,0,1,96.843,32.755Z"></path>
      <path d="M96.481,38.3a1.07,1.07,0,0,1-.04.441,1.231,1.231,0,0,1-.225.514,1.558,1.558,0,0,1-1.172.667,1.528,1.528,0,0,1-1.293-.546,1.226,1.226,0,0,1-.193-1.156,1.567,1.567,0,0,1,.217-.354.59.59,0,0,1,.2-.137.341.341,0,0,1,.313-.024.356.356,0,0,1,.144.282c.016.064,0,.152.009.224s.048.121.064.161c.064.113.112.16.168.169a1.162,1.162,0,0,0,.273.032.758.758,0,0,0,.587-.434c.176-.273.3-.554.5-.57C96.192,37.557,96.441,37.79,96.481,38.3Z"></path>
      <path d="M89.141,33.9a1.661,1.661,0,0,1-.273,1.445,2.015,2.015,0,0,1-1.662.691,2.408,2.408,0,0,1-1.574-.634,1.675,1.675,0,0,1-.442-.731,1.382,1.382,0,0,1,.008-.747,1.344,1.344,0,0,1,.562-.731c.161-.08.289-.1.362-.04s.088.193.048.37a2.525,2.525,0,0,0-.024.554.58.58,0,0,0,.3.377,1.633,1.633,0,0,0,.8.225c.659-.016.835-.177.932-.683.064-.482.032-.9.216-.972C88.555,32.963,88.917,33.2,89.141,33.9Z"></path>
      <path d="M87.816,41.556a.966.966,0,0,1,.016.635,1.588,1.588,0,0,1-.594.859,1.846,1.846,0,0,1-1.277.3,1.513,1.513,0,0,1-1.2-.827,1.406,1.406,0,0,1-.105-.394,2.723,2.723,0,0,1,.04-.377,1.286,1.286,0,0,1,.29-.474,1.449,1.449,0,0,1,.329-.241.885.885,0,0,1,.233-.056.346.346,0,0,1,.313.08.336.336,0,0,1,.04.313,1.575,1.575,0,0,1-.088.225,2.1,2.1,0,0,0-.024.209c-.016.056.024.113.015.144l.016.009h.017c.008-.009.024-.009.024-.016.024-.024.128.048.289.064a1.014,1.014,0,0,0,.835-.257c.12-.1.225-.209.321-.3a.408.408,0,0,1,.3-.129C87.688,41.331,87.768,41.411,87.816,41.556Z"></path>
      <path d="M85.993,75.076A1.758,1.758,0,0,1,85.68,76.4a2.807,2.807,0,0,1-4,.177c-.065.112-.137.225-.2.329a2.034,2.034,0,0,1-.144.3l-.37.643-.458-.266a7.614,7.614,0,0,1-1.549-1.164c-.3-.345-.4-.6-.33-.7s.354-.009.755.176c.273.089.619.233,1.036.4.056-.12.113-.248.177-.377s.128-.273.2-.417c.057-.129.073-.233.129-.346l.554-1.237.715,1.149c.048.072.088.153.128.225s.105.137.161.209a2.01,2.01,0,0,0,1.333.57,1.723,1.723,0,0,0,1.149-.305c.538-.434.545-1.117.754-1.117C85.816,74.643,85.913,74.779,85.993,75.076Z"></path>
      <path d="M82.612,29.317l.249.563-.578.272a6.056,6.056,0,0,1-3.421.4c-.819-.128-1.3-.3-1.3-.474s.506-.337,1.3-.449a13.454,13.454,0,0,0,2.112-.418,3.173,3.173,0,0,0-2.1-.5c-.819.024-1.381.08-1.445-.1-.065-.169.385-.554,1.293-.836a4.263,4.263,0,0,1,1.718-.176,3.054,3.054,0,0,1,1.092.361,2.551,2.551,0,0,1,.9.948C82.492,29.044,82.556,29.181,82.612,29.317Z"></path>
      <path d="M79.569,35.34a1.036,1.036,0,0,1,.161.627,1.2,1.2,0,0,1-.667,1.02,1.442,1.442,0,0,1-1.51-.2,1.7,1.7,0,0,1-.65-1.156,1.516,1.516,0,0,1,0-.538,1.242,1.242,0,0,1,.128-.434.909.909,0,0,1,.353-.474.324.324,0,0,1,.306-.088.353.353,0,0,1,.192.265,3.79,3.79,0,0,0,.089.489,1.43,1.43,0,0,0,.417.868c.1.08.177.1.2.12.024.041.112-.008.217-.112.184-.233.289-.546.49-.562C79.392,35.155,79.481,35.212,79.569,35.34Z"></path>
      <path d="M74.188,36.216a1.555,1.555,0,0,1-.634,1.373,1.815,1.815,0,0,1-1.743.273,2.13,2.13,0,0,1-1.012-.723c-.409-.522-.465-.931-.329-1.036.153-.12.5.072.94.3.449.249,1.028.378,1.3.121.048-.024.056-.072.1-.1a.321.321,0,0,1,.056-.089c.008-.056.04-.056.04-.056.065-.008-.12-.185-.329-.217a3.638,3.638,0,0,0-.618-.152c-.177-.056-.273-.121-.289-.217s.048-.193.193-.3a1.385,1.385,0,0,1,.722-.29,1.506,1.506,0,0,1,.651.025,1.211,1.211,0,0,1,.393.168,1.15,1.15,0,0,1,.369.37A1.249,1.249,0,0,1,74.188,36.216Z"></path>
      <path d="M71.4,92.318c-.016.1-.579.1-1.566.024-.5-.032-1.093-.105-1.8-.145s-1.5-.1-2.377-.152c-3.534-.2-8.416-.249-13.853-.337-1.341-.041-2.658-.065-3.919-.129-.635-.032-1.261-.056-1.863-.088-.594-.008-1.181-.008-1.743-.016-1.156.016-2.249.08-3.316.064a20.364,20.364,0,0,1-2.891-.209h-.009a4.514,4.514,0,0,1-1.212-.418,8.551,8.551,0,0,0-.859-.345c-.265-.024-.523-.048-.763-.072-.257,0-.5,0-.731-.008-.466,0-.859,0-1.189-.008-.642-.032-.988-.1-.995-.169s.345-.161.979-.257c.321-.056.7-.128,1.173-.184.232-.025.482-.185.754-.217.282,0,.579-.145.892-.145h.008l.024.145a7.979,7.979,0,0,1,1.036.369c.161.056.329.153.5.209.193.088.273.04.394.144l.072-.016a24.464,24.464,0,0,0,2.8.049c1.011-.033,2.119-.137,3.3-.185l1.831-.024c.61.016,1.229.04,1.855.056l3.9.1a136.928,136.928,0,0,1,13.9.747c.883.129,1.686.241,2.393.346s1.293.265,1.783.377C70.871,92.053,71.4,92.221,71.4,92.318Z"></path>
      <path d="M69.828,27.735c.714.266,1.1.571,1.043.739s-.514.193-1.22.177c-.353,0-.771-.024-1.2-.008a4.294,4.294,0,0,0-.65.048c-.088.024-.185.04-.241.064-.048.008-.04.024-.056.033s-.016-.017-.041-.057a.393.393,0,0,0-.1-.1l.088.2-.12.136a.243.243,0,0,0-.064.081.642.642,0,0,0,.144.063,5.894,5.894,0,0,0,1.157.274c.723.12,1.148.12,1.237.289s-.386.546-1.221.666a3.925,3.925,0,0,1-1.526-.032,2.3,2.3,0,0,1-.5-.168c-.1-.065-.2-.129-.289-.2a1.556,1.556,0,0,1-.281-.346,1.348,1.348,0,0,1-.129-.514,1.919,1.919,0,0,1,.089-.449,1.871,1.871,0,0,1,.361-.546l.153-.169a1.713,1.713,0,0,1,1.2-.53,4.289,4.289,0,0,1,.86.024A6.63,6.63,0,0,1,69.828,27.735Z"></path>
      <path d="M68.824,73.381a2.459,2.459,0,0,1-.538,2.209,3.468,3.468,0,0,1-2.4,1.261,2.725,2.725,0,0,1-1.7-.442,2.86,2.86,0,0,1-.426-.385,3.278,3.278,0,0,1-1.236,1.019c-.683.282-.988.113-1.028.017-.056-.137.345-.3.642-.627a4.863,4.863,0,0,0,1.077-1.75l.449-1.261.659,1.244a1.492,1.492,0,0,0,1.461.836,2.527,2.527,0,0,0,1.558-.739,1.618,1.618,0,0,0,.538-1.189c-.1-.787-.65-1.309-.5-1.469.056-.072.233-.032.522.128a1.523,1.523,0,0,1,.241.145c.073.08.153.16.233.249A1.84,1.84,0,0,1,68.824,73.381Z"></path>
      <path d="M65.114,37.308c.136.1.16.434-.145.851a1.744,1.744,0,0,1-.763.578,1.579,1.579,0,0,1-1.365-.12,1.4,1.4,0,0,1-.683-1.293,1.544,1.544,0,0,1,.394-.932,1.379,1.379,0,0,1,.281-.24.962.962,0,0,1,.225-.089.282.282,0,0,1,.393.345.857.857,0,0,1-.048.233c-.008.081-.008.153-.016.225a1.045,1.045,0,0,0,.016.426.259.259,0,0,0,.144.168.606.606,0,0,0,.33.081,2.3,2.3,0,0,0,.482-.121C64.68,37.316,64.953,37.187,65.114,37.308Z"></path>
      <path d="M63.411,30.835a1.536,1.536,0,0,1,.41,1.791,1.648,1.648,0,0,1-1.486,1.012,1.789,1.789,0,0,1-.707-.161,1.509,1.509,0,0,1-.474-.3,1.533,1.533,0,0,1-.457-.594c-.065-.169-.065-.289,0-.354.136-.152.49,0,.931.113a.965.965,0,0,0,.329.064.9.9,0,0,0,.3-.016.466.466,0,0,0,.313-.273.361.361,0,0,0-.008-.361,1.123,1.123,0,0,0-.482-.3,4.451,4.451,0,0,0-.586-.193c-.161-.065-.249-.145-.257-.233s.056-.193.2-.289a1.265,1.265,0,0,1,.7-.241,1.346,1.346,0,0,1,.586.032A1.65,1.65,0,0,1,63.411,30.835Z"></path>
      <path d="M59.356,28.876c.08.024.128.217-.016.457a1.9,1.9,0,0,1-.836.723,3.124,3.124,0,0,1-1.606.3,1.961,1.961,0,0,1-1.1-.481c-.08-.1-.169-.193-.241-.3a2.761,2.761,0,0,1-.168-.425,2.277,2.277,0,0,1-.041-.241l-.008-.056-.128-.032-.137-.089v-.008l.129-.008.072-.032a2.225,2.225,0,0,1,.064-.217,1.719,1.719,0,0,1,.852-1.084,3.709,3.709,0,0,1,.891-.377,5.577,5.577,0,0,1,1.461-.217c.828-.016,1.35.152,1.35.337s-.466.361-1.181.61a11.826,11.826,0,0,0-1.2.45,3.4,3.4,0,0,0-.586.313.519.519,0,0,1-.225.105.788.788,0,0,0-.008-.137V28.6a.62.62,0,0,0-.008.072v.016l.008.048c.008.049.016.121.025.169a.032.032,0,0,0,.007.024c0-.008,0-.008.009-.008s.007.008.007.016a.759.759,0,0,0,.354.185,3.453,3.453,0,0,0,1.108.024C58.89,29.053,59.171,28.828,59.356,28.876Z"></path>
      <polygon points="56.906 80.625 56.898 80.633 56.898 80.625 56.906 80.625"></polygon>
      <path d="M56.714,28.908c.016,0,.016.008.016.016A.018.018,0,0,0,56.714,28.908Z"></path>
      <path d="M55.477,33.429c.136.1.064.514-.337,1.06a2.655,2.655,0,0,1-.98.779,1.9,1.9,0,0,1-1.8-.088,1.652,1.652,0,0,1-.675-.851,1.4,1.4,0,0,1,.1-1.085,1.434,1.434,0,0,1,.658-.61,1.806,1.806,0,0,1,.635-.145,2.328,2.328,0,0,1,.489.024,1.7,1.7,0,0,1,.306.113c.169.08.257.169.257.265s-.088.185-.257.265a1.614,1.614,0,0,1-.3.113c-.113.04-.193.112-.3.152s-.176.137-.265.185c-.056.072-.112.136-.1.176,0,.065.016.161.177.258.273.208.963.007,1.413-.274C54.971,33.5,55.316,33.3,55.477,33.429Z"></path>
      <path d="M52.931,38.778c.169.007.4.353.321,1.068a1.6,1.6,0,0,1-.787,1.148A2.187,2.187,0,0,1,49.5,39.91a1.063,1.063,0,0,1,.249-1.084,1.23,1.23,0,0,1,.635-.321c.73-.105,1.043.112,1.076.273.032.2-.378.369-.731.618a.825.825,0,0,0-.089.088.041.041,0,0,1,.024-.008,1.836,1.836,0,0,0,.563.338c.6.184.835.1,1.116-.282C52.594,39.147,52.738,38.778,52.931,38.778Z"></path>
      <path d="M47.4,29.7a1.444,1.444,0,0,1,.016,1.14,1.725,1.725,0,0,1-1.084.948,1.822,1.822,0,0,1-1.406-.105,1.328,1.328,0,0,1-.674-1.059,2.191,2.191,0,0,1,.072-.458.92.92,0,0,1,.153-.209.338.338,0,0,1,.3-.145.342.342,0,0,1,.225.233c.032.064.04.161.072.233a1.335,1.335,0,0,1,.121.145.452.452,0,0,0,.265.128,1.3,1.3,0,0,0,.465-.056c.354-.129.474-.249.538-.6.033-.16.024-.329.04-.465a.44.44,0,0,1,.145-.3c.081-.048.185-.032.321.048A1.152,1.152,0,0,1,47.4,29.7Z"></path>
      <path d="M43.383,34c.763.177,1.132.458,1.116.635-.016.2-.53.241-1.205.321-.16.032-.329.04-.5.08-.161.064-.37.081-.523.161a.772.772,0,0,0-.562.522.363.363,0,0,0,.321.369,1.8,1.8,0,0,0,.9-.1c.313-.088.562-.217.763-.281s.345-.065.409,0,.04.208-.072.4a2.045,2.045,0,0,1-.634.715,1.939,1.939,0,0,1-.627.353,1.819,1.819,0,0,1-.9.153,2.2,2.2,0,0,1-.546-.129,1.509,1.509,0,0,1-.522-.361,1.583,1.583,0,0,1-.434-1.269,2.132,2.132,0,0,1,.209-.642,2.558,2.558,0,0,1,.4-.466,4.737,4.737,0,0,1,.458-.3c.153-.057.306-.1.45-.153a3.852,3.852,0,0,1,.819-.1A5.464,5.464,0,0,1,43.383,34Z"></path>
      <path d="M39.937,30.161c.2.12.3.233.282.321s-.153.152-.386.193c-.112.015-.249.024-.41.032a3.708,3.708,0,0,1-.465.08,5.356,5.356,0,0,0-2.393.972L36.3,32a2.948,2.948,0,0,0,.923.16c.45,0,.763-.072.852.064.08.105-.1.45-.667.715a2.536,2.536,0,0,1-1.092.209,3.488,3.488,0,0,1-1.365-.369l-.611-.3.37-.587c.136-.209.281-.417.433-.634.177-.2.378-.378.578-.571a4.381,4.381,0,0,1,3.269-.859c.225.041.418.089.586.137A2.319,2.319,0,0,1,39.937,30.161Z"></path>
      <path d="M31.032,34.666c.168.152.256.281.216.369s-.176.129-.409.12c-.121.009-.265-.023-.41-.023s-.3.016-.473.016a7.782,7.782,0,0,0-2.642.522c.24.08.473.144.674.209.5.1.835.208.851.361s-.281.321-.867.45a3.809,3.809,0,0,1-2.433-.45l-.812-.466.764-.578.594-.426c.216-.12.449-.225.674-.337a5.237,5.237,0,0,1,3.357-.233,6.092,6.092,0,0,1,.57.217A2.3,2.3,0,0,1,31.032,34.666Z"></path>
      <path d="M30.3,76.136c.353.321.361.578.281.658-.1.089-.33-.032-.635-.08a1.448,1.448,0,0,1-.731-.418,2.418,2.418,0,0,1-1.742.515,2.9,2.9,0,0,1-1.895-.892,2.214,2.214,0,0,1-.611-1.638,1.475,1.475,0,0,1,.161-.634.976.976,0,0,1,.249-.394c.177-.193.3-.257.385-.209.185.1.024.61.161,1.189a1.545,1.545,0,0,0,.522.787,2.087,2.087,0,0,0,1.124.441,1.428,1.428,0,0,0,1.293-.562l1.149-1.437-.056,1.726a1.312,1.312,0,0,0,.031.538A1.122,1.122,0,0,0,30.3,76.136Z"></path>
      <path d="M28.574,43.467c.145.065.217.57-.265,1.293a1.715,1.715,0,0,1-1.542.739,2.024,2.024,0,0,1-1.662-1.317,1.97,1.97,0,0,1-.08-1.164,1.721,1.721,0,0,1,.586-.94,2.366,2.366,0,0,1,1.47-.5c.827,0,1.22.241,1.228.41.008.2-.49.313-1.068.53a2.121,2.121,0,0,0-.787.474.663.663,0,0,0-.08.7.936.936,0,0,0,.562.571.8.8,0,0,0,.683-.169C28.092,43.765,28.389,43.371,28.574,43.467Z"></path>
      <path d="M23.186,97.9c2.136.45,3.421.94,3.381,1.108-.057.193-1.374.04-3.534-.168-1.076-.113-2.361-.233-3.807-.506-.361-.057-.722-.145-1.1-.241a11.612,11.612,0,0,1-1.157-.314c-.394-.136-.795-.272-1.2-.417-.377-.169-.73-.353-1.108-.538a7.754,7.754,0,0,1-2.12-1.622,9.425,9.425,0,0,1-1.51-1.935,4.184,4.184,0,0,1-.45-1.165,1.9,1.9,0,0,1,.193-1.373,1.692,1.692,0,0,1,.643-.619,11.109,11.109,0,0,1-1.044-.61c-.482-.345-.715-.578-.667-.659.088-.2,1.269.45,3.189.884l2.031.458-2.072.458c-.466.1-.988.337-1.108.634-.153.249.016.819.362,1.365a9.237,9.237,0,0,0,1.364,1.622,7.312,7.312,0,0,0,1.791,1.349c.37.177.739.37,1.1.538.345.129.69.249,1.036.378.329.137.714.209,1.052.313s.69.2,1.043.273C20.849,97.441,22.126,97.658,23.186,97.9Z"></path>
      <path d="M18.03,37.677c1.06.1,1.341.563,1.309.7-.04.2-.667.08-1.253.257a3.9,3.9,0,0,0-1.108.458,2.618,2.618,0,0,0-.651.506,5.038,5.038,0,0,0,1.534-.041c.659-.128,1.109-.264,1.213-.1.088.129-.185.554-.9.964a3.8,3.8,0,0,1-3.26.185l-.7-.289.362-.6c.08-.144.168-.289.249-.433a3.436,3.436,0,0,1,1.6-1.3A3.385,3.385,0,0,1,18.03,37.677Z"></path>
      <path d="M16.022,54.855c.313.289.683.409.635.522-.008.048-.1.08-.241.1a1.506,1.506,0,0,1-.683-.128,3.1,3.1,0,0,1-1.317-1.141,2.774,2.774,0,0,1-.594.418,2.52,2.52,0,0,1-1.718.249A3.448,3.448,0,0,1,10.537,54a5.364,5.364,0,0,1-1.06-1.438,6.9,6.9,0,0,1-.642-1.8,5.567,5.567,0,0,1,0-1.831,5.811,5.811,0,0,1,1.285-2.7c1.084-1.277,2.024-1.7,2.12-1.566.144.152-.57.851-1.341,2.12a5.838,5.838,0,0,0-.827,2.321,4.633,4.633,0,0,0,.072,1.405A5.955,5.955,0,0,0,10.7,51.98a3.263,3.263,0,0,0,1.7,1.662,1.845,1.845,0,0,0,1.735-.626l.61-.562.249.714A3.921,3.921,0,0,0,16.022,54.855Z"></path>
    </g>
  </svg>
);
