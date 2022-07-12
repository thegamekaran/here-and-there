export default function CopyIcon({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 200 200"
    >
      <path
        fill={color || "#fff"}
        d="M69 56c-4.41.04-6.72.09-11 1.52C46.55 61.34 39 71.19 37.1 83v15 21c-.1 11.11-1.55 23.95 3.72 34 5.36 10.21 15.88 15.86 27.18 16l40-.68c11.77-2.7 21.13-12.4 23-24.32 4.26-.04 6.88-.09 11-1.55 13.57-4.78 20.83-16.39 21-30.45v-10-21c0-11.11 1.45-23.95-3.82-34-5.43-10.35-15.75-15.86-27.18-16l-40 .68C80.23 34.38 70.87 44.08 69 56zm63 75v-27c0-14.77 1.7-27.57-10.04-38.91-3.33-3.21-7.58-5.99-11.96-7.54-4.02-1.43-6.82-1.53-11-1.55H83c4.49-8.64 10.36-11.88 20-12 6.78-.08 27.66-.6 33 .94 3.73 1.07 7 3.11 9.44 6.15 3.88 4.82 4.53 12.9 4.56 18.91v34c-.02 14.35-2.37 23.8-18 27zM67 69.15h16C94.9 69 110.6 66.61 116.47 80c1.67 3.8 1.52 6.98 1.53 11v36c0 5.33.62 13.26-1.56 18-4.14 9.03-12.44 10.99-21.44 11-11.69.02-32.66 2.85-40.36-7.09-3.67-4.73-4.57-12.08-4.64-17.91v-15-22c.15-12.71 3.28-21.98 17-24.85z"
      />
    </svg>
  );
}