export default function Logo({ width, height }) {
  return (
    <div
      style={{
        borderRadius: `50%`,
        background: "#fff",
        height: height ? `${height}px` : "50px",
        width: width ? `${width}px` : "50px",
      }}
      className="f fc"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "50"}
        height={height ? height : "50"}
        viewBox="0 0 4112 4304"
        fill="none"
      >
        <path stroke="#000" d="M0 0v4304h4112V0H0z" />
        <path
          fill="#3173d0"
          d="M2921 2163c1.93-4.87 1-23.62 1-30v-54l-1-15v-83-204-103l-1-10v-9l-2.83-26c-7.21-72.04-23.7-135.82-50.57-203-23.37-58.43-58.6-120.15-96.95-170-39.64-51.53-85.32-98.58-136.65-138.58-90.49-70.5-194.97-117.83-307-141.63-32.97-7.01-69.37-12.36-103-13.83l-13-.96h-14l-15-1h-245-514l-12 .91c-20.42 1.4-40.35 4.01-60 10.11-70.51 21.92-127.48 72.99-156.57 140.98-10.62 24.81-19.39 59.98-19.43 87v21c.02 15.47 3.85 37.88 7.63 53 19.61 78.44 76.53 142.95 152.37 171.58 20.75 7.83 42.91 13.15 65 15.38h9l12 1.04h450 247l15-1 20 1h29l15 1h4l29 2.21h19c16.08-.02 46.65 5.52 63 8.79 38.54 7.71 66.71 14.76 104 27.66 62.07 21.46 121.66 50.71 176 87.68 106.22 72.28 197.68 175.83 253.74 291.66 20.75 42.87 38.26 88.92 50.38 135l8.38 36 5.7 25 7.12 59.58L2921 2163z"
        />
        <path
          fill="#234c88"
          d="M2231 1464c4.12 6.86 19.37 9.55 27 12.42 20.43 7.71 35.91 15.61 54 27.92 46.86 31.9 83.86 83.11 99.42 137.66 4.21 14.74 8.56 36.78 8.68 52v627 284 9 30l-2.23 30v9c.4 26.66-4.25 53.9-9.47 80-6.71 33.54-14.91 66.54-25.73 99-11.2 33.6-23.55 61.44-39.42 93-14.73 29.27-30.13 57.86-48.59 85-84.53 124.23-201.49 219.96-340.66 276.6-65.83 26.79-125.27 42.5-196 49.57l-48 4.83c4.8 1.91 21.83.99 28 1l15 1h109 318l16-1 28-1 10-.91c21.11-1.48 42.11-4.17 63-7.68 56.48-9.47 107.97-24.21 161-45.81 64.05-26.08 128.02-63.82 182-107 125.69-100.55 214.13-235.41 256.15-390.6 10.95-40.44 17.98-81.35 22.02-123l1.83-25 1-15v-430l1-17v-37l-5.84-38-6.58-56-6.16-28c-12.5-56.9-28.39-104.99-52.73-158-32.79-71.41-78.28-137.58-131.78-195l-35.91-35.09c-23.51-21.9-47.82-42.77-74-61.48-31.46-22.49-64.65-42.45-99-60.17-27.31-14.09-56.16-25.77-85-36.31-31.78-11.63-63.99-20.12-97-27.37-22.83-5.02-60.24-12.54-83-12.58h-14z"
        />
        <path
          fill="#122745"
          d="M2418 2676c-4.46 5.64-8.27 18.81-10.67 26-4.27 12.82-8.49 22.92-14.58 35-18.56 36.88-50.33 71.31-84.75 93.92-36.6 24.05-71.62 35.6-115 40.24l-21 1.84h-104-392v-11l-1-15v-102-202-671l-.91-12c-1.6-23.23-4.37-38.82-11.74-61-8-24.09-16.83-44.93-31.37-66-42.81-62.03-108.23-99.71-182.98-106.96h-9l-10-1.04c-34.4-.4-71.26 5.86-103 19.43-65.3 27.92-115.98 82.64-139.31 149.57-5.42 15.57-11.61 43.64-11.69 60l-.82 14 .82 12v1262c.04 27.01 10.73 63.89 22.75 88 12.16 24.38 22.98 41.61 41.42 62 38.86 42.97 99.26 73.01 156.83 79.16l21 1.84h84 177l15-1h9l66-6.84c81.46-8.71 160.37-33.78 234-69.42l20-10.48c25.07-12.94 49.77-27.25 73-43.28 56.41-38.95 110.74-88.32 154.57-140.98 30.94-37.18 58.12-77.46 81.12-120l14.56-29c26.3-52.61 42.08-96.84 55.63-154 7.34-30.93 13.99-62.25 16.21-94l.91-12v-16z"
        />
      </svg>
    </div>
  );
}