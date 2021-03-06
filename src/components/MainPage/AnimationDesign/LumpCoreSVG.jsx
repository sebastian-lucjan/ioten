import useLumpCoordinates from 'src/hooks/useLumpCoordinates';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LumpCoreSVG() {
  const imageRef = useRef(null);
  const { x, y, device } = useLumpCoordinates();

  useEffect(() => {
    const { current: el } = imageRef;

    const circe = el.getElementById('core');

    if (device === 'cursor') {
      gsap.to(circe, {
        duration: 2,
        x: x - 200,
        y: 1.15 * y - 220,
      });
    }
    // if (device === 'touch') {
    //   gsap.to(circe, {
    //     duration: 2,
    //     x: x / 1.5 - 130,
    //     y: y / 1.5 - 120,
    //   });
    // }
  }, [x, y]);

  return (
    <svg ref={imageRef} viewBox="0 0 363 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="lump-core">
        <path
          id="back-edges"
          d="M124.506 269.323L2.40576 238.899L40.5368 94.8938M124.506 269.323L275.814 249.852M124.506 269.323L40.5368 94.8938M124.506 269.323L160.204 386.962M124.506 269.323L216.183 181.703M275.814 249.852L360.189 154.524L216.183 68.1209M275.814 249.852L319.218 313.945M275.814 249.852L216.183 181.703M216.183 68.1209H124.506M216.183 68.1209L166.288 2L124.506 68.1209M216.183 68.1209V181.703M124.506 68.1209L40.5368 94.8938"
          stroke="white"
          strokeOpacity="0.3"
        />
        <path
          id="outer-edges"
          d="M159.798 388.179L2 238.899L39.3198 95.7051L166.694 2L286.27 51.6132L361 154.524L319.218 314.756L159.798 388.179Z"
          stroke="white"
          strokeWidth="3"
        />
        <circle id="core" cx="188.385" cy="195.089" r="103.249" fill="url(#paint0_radial_126_5175)" />
        <path
          id="inner-edges"
          d="M2 238.899L148.034 198.334M159.798 388.179L224.296 238.899M224.296 238.899L148.034 198.334M224.296 238.899L319.218 314.756L293.257 214.155M224.296 238.899L293.257 214.155M148.034 198.334L143.572 123.289M293.257 214.155L361 154.524M293.257 214.155C293.257 208.709 293.257 163.203 293.257 123.289M166.694 2L143.572 123.289M143.572 123.289H293.257M143.572 123.289L286.941 51.6132C286.941 62.5463 293.257 108.495 293.257 123.289M143.572 123.289L39.3198 95.7051"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_126_5175"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(${x} ${y}) scale(210)`}
        >
          <stop stopColor="#EAFC15" />
          <stop offset="0.161458" stopColor="#E6F011" />
          <stop offset="0.598958" stopColor="#383D54" />
        </radialGradient>
      </defs>
    </svg>
  );
}
