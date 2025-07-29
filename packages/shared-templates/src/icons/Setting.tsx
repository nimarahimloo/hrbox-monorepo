export const Setting = ({
  color = "#04070E",
  size = 24,
}: {
  color?: string;
  size?: string | number;
}) => {
  return (
    <svg
      fill="none"
      height={size}
      viewBox={`0 0 24 24`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4418_9936)">
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M15.5699 18.4996V14.5996"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M15.5699 7.45V5.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M15.57 12.6492C17.0059 12.6492 18.17 11.4852 18.17 10.0492C18.17 8.61328 17.0059 7.44922 15.57 7.44922C14.134 7.44922 12.97 8.61328 12.97 10.0492C12.97 11.4852 14.134 12.6492 15.57 12.6492Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M8.43005 18.5008V16.5508"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M8.43005 9.4V5.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M8.42996 16.5496C9.8659 16.5496 11.03 15.3855 11.03 13.9496C11.03 12.5137 9.8659 11.3496 8.42996 11.3496C6.99402 11.3496 5.82996 12.5137 5.82996 13.9496C5.82996 15.3855 6.99402 16.5496 8.42996 16.5496Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_9936">
          <rect fill={color} height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
