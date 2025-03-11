import { SVGProps } from "react";

const SocialInstagramOutline = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M448.5 112c0-26.233-21.267-47.5-47.5-47.5H112c-26.233 0-47.5 21.267-47.5 47.5v289c0 26.233 21.267 47.5 47.5 47.5h289c26.233 0 47.5-21.267 47.5-47.5V112zM257 175.833c44.182 0 80 35.816 80 80s-35.818 80-80 80-80-35.816-80-80 35.818-80 80-80zM416.5 160.5c0 8.836-7.163 16-16 16h-48c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16h48c8.837 0 16 7.164 16 16v48zm-15 256h-288c-8.822 0-17-8.178-17-17v-175h53.072c-3.008 10-4.572 20.647-4.572 31.583C145 286 156.65 314 177.805 335.154s49.279 32.741 79.195 32.741 58.041-11.681 79.195-32.835S369 286.016 369 256.099c0-10.936-1.563-21.599-4.572-31.599H416.5v175c0 8.822-6.178 17-15 17z"
      ></path>
    </svg>
  );
};

const Github = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799m4.526-4.683c.149-.365.155-2.439-.635-4.426c0 0-1.811.199-4.551 2.08c-.575-.16-1.548-.238-2.519-.238c-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002l1.732-.002c1.506 0 7.467-.115 7.467-7.301c0-1.652-.566-2.863-1.494-3.871m-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115c0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531c.735.676 1.045 1.49 1.045 2.369c0 3.666-2.937 4.115-6.709 4.115m-3.207-5.606c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.301-.807 1.301-1.801c0-.992-.582-1.799-1.301-1.799"
      ></path>
    </svg>
  );
};

const TwitterXLine = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
      ></path>
    </svg>
  );
};

const Documents = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="m19.398 7.415l-7.444-1.996L10.651.558c-.109-.406-.545-.642-.973-.529L.602 2.461c-.428.114-.686.538-.577.944l3.23 12.051c.109.406.544.643.971.527l3.613-.967l-.492 1.838c-.109.406.149.83.577.943l8.11 2.174c.428.115.862-.121.972-.529l2.97-11.084c.108-.406-.15-.83-.578-.943M1.633 3.631l7.83-2.096l2.898 10.818l-7.83 2.096zm14.045 14.832L8.864 16.6l.536-2.002l3.901-1.047c.428-.113.688-.537.578-.943l-1.508-5.627l5.947 1.631z"
      ></path>
    </svg>
  );
};

export { SocialInstagramOutline, Github, TwitterXLine, Documents };
