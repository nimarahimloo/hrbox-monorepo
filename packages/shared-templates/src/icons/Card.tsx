export const Card = ({
  color = "#04070E",
  size = 24,
}: {
  color?: string;
  size?: string | number;
}) => {
  return (
    <svg
      fill="transparent"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4418_169815)">
        <path
          d="M12 5.55957H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M14.22 2H19.78C21.56 2 22 2.44 22 4.2V8.31C22 10.07 21.56 10.51 19.78 10.51H14.22C12.44 10.51 12 10.07 12 8.31V4.2C12 2.44 12.44 2 14.22 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M2 17.0596H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78 22.01H4.22C2.44 22.01 2 21.57 2 19.81V15.7C2 13.94 2.44 13.5 4.22 13.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_169815">
          <rect fill={color} height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
