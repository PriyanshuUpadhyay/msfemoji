import React from "react";
export function FLAT_PUZZLE_PIECE() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.6231 21.4249L24.6179 22.4209C25.1551 22.9587 26.0206 22.9587 26.5578 22.4209L29.7015 19.2737C30.0995 18.8753 30.0995 18.2379 29.7015 17.8395L23.8718 12.0033C23.6927 11.824 23.6927 11.5452 23.8718 11.3659C23.9812 11.2564 24.1304 11.2165 24.2697 11.2464C25.2148 11.4058 26.2196 11.1269 26.9458 10.3999C28.1496 9.19476 28.1396 7.23276 26.916 6.03762L26.0604 5.17115L25.6724 5.30063C24.6975 5.0118 23.6032 5.22095 22.7973 5.91811C21.9617 6.64515 21.6234 7.71081 21.7826 8.70675C21.8025 8.85614 21.7627 8.99557 21.6533 9.10513L21.6334 9.12505C21.4543 9.30432 21.1758 9.30432 20.9967 9.12505L15.1669 3.29878C14.769 2.90041 14.1323 2.90041 13.7343 3.29878L10.6205 6.41608C10.5409 6.49576 10.4812 6.58539 10.4215 6.67503L10.2126 6.46588L9.47642 7.20288L10.6205 8.34821L10.6404 8.36813C10.9189 8.64699 11.297 8.79638 11.685 8.77647C12.5803 8.73663 13.4956 9.08521 14.1422 9.83216C15.1271 10.9675 15.1371 12.6905 14.1422 13.8359C12.9683 15.1903 10.9189 15.2501 9.66544 14.0052C9.01879 13.3578 8.72034 12.5013 8.78003 11.6547C8.79993 11.2663 8.66065 10.8879 8.38209 10.609C8.37214 10.5891 8.3622 10.5791 8.35225 10.5692L7.3773 9.59314L6.94952 10.0314L7.13854 10.2206C6.87988 10.2704 6.64112 10.3999 6.44215 10.599L3.29845 13.7462C2.90052 14.1446 2.90052 14.782 3.29845 15.1804L9.13817 21.0266C9.31724 21.2058 9.31724 21.4847 9.13817 21.664C9.02874 21.7735 8.87951 21.8134 8.74024 21.7835C7.73545 21.6142 6.66102 21.9428 5.92483 22.7794C4.92999 23.9148 4.92004 25.6477 5.91489 26.7931C7.0888 28.1475 9.13817 28.2073 10.3917 26.9524C11.108 26.2353 11.3965 25.2394 11.2472 24.3132C11.2273 24.1638 11.2671 24.0243 11.3766 23.9148L11.3965 23.8949C11.5755 23.7156 11.8541 23.7156 12.0332 23.8949L17.8331 29.7012C18.231 30.0996 18.8677 30.0996 19.2657 29.7012L22.3795 26.5839C22.9167 26.0461 22.9167 25.1796 22.3795 24.6418L22.3596 24.6219L21.4742 23.7355L21.0862 24.1239L21.1957 24.2335C20.3401 24.2335 19.4845 23.8849 18.8677 23.1778C17.8828 22.0424 17.8729 20.3194 18.8677 19.1741C20.0416 17.8196 22.091 17.7599 23.3445 19.0048C23.8618 19.5227 24.1603 20.19 24.22 20.8672L24.2001 20.8473L23.6231 21.4249Z"
          fill="#D3D3D3"
        />
        <path
          d="M21.7702 4.90923C20.9348 5.63653 20.5967 6.70258 20.7558 7.69889C20.7757 7.84834 20.7359 7.98782 20.6265 8.09742L20.6066 8.11734C20.4276 8.29668 20.1492 8.29668 19.9702 8.11734L14.1525 2.29889C13.7547 1.90037 13.1182 1.90037 12.7204 2.29889L9.60773 5.41734C9.07072 5.95535 9.07072 6.82214 9.60773 7.36015L9.63757 7.38007C9.90608 7.64908 10.284 7.79852 10.6718 7.7786C11.5669 7.73875 12.4818 8.08745 13.1282 8.83469C14.1127 9.97048 14.1227 11.6941 13.1282 12.8399C11.9547 14.1948 9.90608 14.2546 8.65304 13.0092C8.01657 12.3517 7.71823 11.4948 7.76796 10.648C7.79779 10.2594 7.64862 9.87085 7.37017 9.60185C6.83315 9.06384 5.96796 9.06384 5.43094 9.60185L2.29834 12.7402C1.90055 13.1387 1.90055 13.7764 2.29834 14.1749L8.13591 20.0232C8.31492 20.2026 8.31492 20.4815 8.13591 20.6609C8.02652 20.7705 7.87735 20.8103 7.73812 20.7804C6.7337 20.6111 5.65967 20.9399 4.92376 21.7768C3.92928 22.9125 3.91934 24.6461 4.91381 25.7919C6.08729 27.1469 8.13591 27.2066 9.38895 25.9513C10.105 25.2339 10.3934 24.2376 10.2442 23.3111C10.2243 23.1616 10.2641 23.0221 10.3735 22.9125L10.3934 22.8926C10.5724 22.7133 10.8508 22.7133 11.0298 22.8926L16.8276 28.7011C17.2254 29.0996 17.8619 29.0996 18.2597 28.7011L21.3724 25.5827C21.9094 25.0447 21.9094 24.1779 21.3724 23.6399L21.3525 23.6199C21.084 23.3509 20.7061 23.2015 20.3182 23.2214C19.4232 23.2613 18.5083 22.9125 17.8619 22.1653C16.8773 21.0295 16.8674 19.3059 17.8619 18.1601C19.0354 16.8052 21.084 16.7454 22.337 17.9908C22.9834 18.6384 23.2818 19.4952 23.2221 20.3421C23.2022 20.7306 23.3414 21.1092 23.6199 21.3882C24.1569 21.9262 25.0221 21.9262 25.5591 21.3882L28.7017 18.2399C29.0994 17.8413 29.0994 17.2037 28.7017 16.8052L22.874 10.9668C22.695 10.7875 22.695 10.5085 22.874 10.3292C22.9834 10.2196 23.1326 10.1797 23.2718 10.2096C24.2166 10.369 25.221 10.09 25.947 9.36273C27.1901 8.11734 27.1403 6.05498 25.7779 4.87934C24.6243 3.92288 22.9039 3.92288 21.7702 4.90923Z"
          fill="#C3EF3C"
        />
      </svg>
    </>
  );
}
