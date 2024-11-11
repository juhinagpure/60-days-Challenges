import ProfileImg from "../assets/Images/PORTRAIT.png";
import FlowerImg from "../assets/Images/FLOWER ICON.png";

const Day5 = () => {
  return (
    // Height need to be set to h-svh or h-screen I used h-full becuz main parent component have height here

    <section className="p-6 grid h-screen grid-cols-12 gap-6 grid-rows-[auto,3fr,1fr,auto] w-full max-w-screen-xl mx-auto">
      {/* grid-cols-12 gap-6 grid-rows-[auto,3fr,1fr,auto] try to understand it auto will take height based on element */}
      <header className="bg-[#FADCD9] rounded-[20px] col-span-12 h-[100px] grid grid-cols-[1fr,auto] gap-6 items-center px-6">
        <h1 className="uppercase text-base">
          <span className="font-light italic">JULIA</span>&nbsp;
          <span className="font-semibold">HUANG</span>
        </h1>

        <nav className="flex items-center gap-12">
          <a href="#projects" className="uppercase font-light">
            Projects
          </a>
          <a href="#About" className="uppercase font-light">
            About
          </a>
          <a href="#projects" className="uppercase font-light">
            Contact
          </a>
        </nav>
      </header>

      {/* You can use section in any order if you mention col-start or row-start it will automatically adjust to that cols/rows you can see grid layout on browser by clicking grid button in-front of the element */}
      <div
        className="row-start-2 row-end-3 col-start-6 col-span-3 bg-[#FADCD9] rounded-[20px] flex items-center justify-evenly text-xs"
        style={{
          backgroundImage: `url(${ProfileImg})`,
          backgroundSize: "cover",
          backgroundPositionY: "50%",
        }}
      ></div>

      <div className="row-start-2 row-end-3 col-start-0 col-span-5 bg-[#FADCD9] rounded-[20px] flex items-end text-xs p-6 relative">
        <img src={FlowerImg} alt="Flower" className="absolute right-6 top-6" />
        <p className="font-semibold text-4xl leading-none mb-8">
          Artist Redefining
          <br />
          <span className="italic font-extralight">Architecture</span> with
          <br /> AI-Driven Design
        </p>
      </div>

      <div className="row-start-2 row-end-4 col-start-9 col-span-4 bg-[#FADCD9] rounded-[20px] flex items-center justify-evenly text-xs"></div>

      <div className="row-start-3 row-end-5 col-start-0 col-span-4 bg-[#FADCD9] rounded-[20px] flex items-end relative p-6">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-6 left-6"
        >
          <g clip-path="url(#clip0_0_20)">
            <path
              d="M32.2436 5.87954C31.8755 6.90584 31.6811 7.92915 31.6661 8.95844C31.6511 9.98773 31.8127 11.017 32.1538 12.0523L32.2735 12.4084L31.9174 12.2887C30.9031 11.9506 29.8828 11.786 28.8565 11.798C27.8272 11.8129 26.7919 12.0044 25.7447 12.3754L25.3707 12.5071L25.5053 12.1331C25.8733 11.1098 26.0678 10.0835 26.0828 9.05419C26.0977 8.0249 25.9362 6.99561 25.5951 5.96033L25.4784 5.60427L25.8344 5.72395C26.8488 6.06206 27.8691 6.22663 28.8954 6.21466C29.9217 6.1997 30.96 6.0082 32.0042 5.63718L32.3782 5.50553L32.2436 5.87954ZM37.6414 19.0868C36.657 19.5506 35.7952 20.14 35.0562 20.8551C34.3171 21.5703 33.7037 22.414 33.213 23.3865L33.0455 23.7216L32.8779 23.3865C32.4022 22.429 31.7948 21.5942 31.0587 20.8761C30.3196 20.158 29.4519 19.5625 28.4496 19.0868L28.0905 18.9162L28.4496 18.7487C29.434 18.2849 30.2957 17.6954 31.0348 16.9803C31.7738 16.2652 32.3872 15.4214 32.8779 14.446L33.0455 14.1109L33.213 14.446C33.6918 15.4035 34.2962 16.2413 35.0322 16.9564C35.7683 17.6745 36.636 18.2699 37.6414 18.7487L38.0004 18.9192L37.6414 19.0898V19.0868ZM31.7828 28.892C31.7978 29.9183 31.9892 30.9566 32.3603 32.0008L32.4919 32.3748L32.1179 32.2402C31.0916 31.8721 30.0683 31.6777 29.039 31.6627C28.0097 31.6477 26.9804 31.8093 25.9452 32.1504L25.5891 32.2701L25.7088 31.914C26.0469 30.8997 26.2115 29.8794 26.1995 28.8531C26.1845 27.8238 25.993 26.7885 25.622 25.7413L25.4903 25.3673L25.8644 25.5019C26.8877 25.8699 27.914 26.0644 28.9433 26.0794C29.9726 26.0943 31.0018 25.9328 32.0371 25.5917L32.3932 25.475L32.2735 25.831C31.9354 26.8454 31.7708 27.8657 31.7828 28.892ZM23.5544 33.2126C22.597 33.6914 21.7592 34.2958 21.0441 35.0318C20.3259 35.7679 19.7305 36.6356 19.2548 37.641L19.0842 38L18.9137 37.641C18.4499 36.6566 17.8604 35.7948 17.1453 35.0558C16.4302 34.3167 15.5864 33.7033 14.614 33.2126L14.2789 33.0451L14.614 32.8775C15.5715 32.4017 16.4063 31.7943 17.1244 31.0583C17.8425 30.3222 18.4379 29.4515 18.9137 28.4492L19.0842 28.0901L19.2548 28.4492C19.7185 29.4336 20.305 30.2953 21.0231 31.0343C21.7382 31.7734 22.582 32.3868 23.5574 32.8775L23.8926 33.0451L23.5574 33.2126H23.5544ZM12.4955 25.861C12.1275 26.8843 11.933 27.9106 11.9181 28.9399C11.9031 29.9692 12.0647 30.9984 12.4058 32.0337L12.5225 32.3898L12.1664 32.2701C11.1521 31.932 10.1318 31.7674 9.10547 31.7794C8.07917 31.7943 7.0409 31.9858 5.99665 32.3569L5.62263 32.4885L5.75728 32.1145C6.12531 31.0882 6.3198 30.0649 6.33476 29.0356C6.34972 28.0063 6.18815 26.977 5.84704 25.9417L5.72736 25.5857L6.08342 25.7054C7.09775 26.0435 8.11807 26.208 9.14437 26.1961C10.1737 26.1811 11.2089 25.9896 12.2562 25.6186L12.6302 25.4869L12.4955 25.861ZM9.5483 19.2543C8.56389 19.7181 7.70216 20.3046 6.96311 21.0227C6.22405 21.7408 5.61066 22.5816 5.11996 23.557L4.9524 23.8921L4.78484 23.557C4.3061 22.5995 3.70169 21.7617 2.96563 21.0466C2.22956 20.3285 1.36185 19.7331 0.356492 19.2573L-0.00256348 19.0868L0.356492 18.9162C1.3409 18.4525 2.20263 17.863 2.94169 17.1479C3.68074 16.4298 4.29413 15.589 4.78484 14.6136L4.9524 14.2784L5.11996 14.6136C5.5957 15.571 6.20311 16.4058 6.93917 17.124C7.67523 17.8421 8.54594 18.4375 9.5483 18.9132L9.90736 19.0838L9.5483 19.2543ZM11.7984 9.14694C11.8133 10.1762 12.0048 11.2115 12.3759 12.2588L12.5075 12.6328L12.1335 12.4981C11.1102 12.1301 10.0839 11.9356 9.0546 11.9206C8.02531 11.9057 6.99602 12.0673 5.96074 12.4084L5.60468 12.5251L5.72437 12.169C6.06248 11.1547 6.22704 10.1343 6.21507 9.10805C6.20011 8.08175 6.00862 7.04348 5.63759 5.99923L5.50594 5.62521L5.87996 5.75986C6.90625 6.12789 7.92956 6.32238 8.95885 6.33734C9.98814 6.3523 11.0174 6.19072 12.0527 5.84962L12.4088 5.72994L12.2891 6.086C11.951 7.10033 11.7864 8.12065 11.7984 9.14694ZM23.3839 5.12254C22.4264 5.59828 21.5916 6.20568 20.8735 6.94175C20.1554 7.6808 19.56 8.54852 19.0842 9.55088L18.9137 9.90994L18.7431 9.55088C18.2793 8.56647 17.6929 7.70474 16.9748 6.96568C16.2566 6.22663 15.4159 5.61324 14.4404 5.12254L14.1053 4.95498L14.4404 4.78742C15.3979 4.30868 16.2357 3.70427 16.9508 2.9682C17.6689 2.23214 18.2644 1.36442 18.7401 0.35907L18.9107 1.52588e-05L19.0812 0.35907C19.545 1.34348 20.1344 2.20521 20.8496 2.94427C21.5677 3.68332 22.4085 4.29671 23.3839 4.78742L23.719 4.95498L23.3839 5.12254Z"
              fill="#F8AFA6"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_20">
              <rect width="38" height="38" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="font-extralight leading-tight text-base text-pretty ">
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.
        </p>
      </div>

      <div className="row-start-3 row-end-5 col-start-5 col-span-4 bg-[#F8AFA6] rounded-[20px] flex flex-col h-full relative p-6 cursor-pointer group">
        <div className="flex items-center justify-between">
          <span className="text-xs font-light">
            Have some
            <br />
            questions?
          </span>
          <svg
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:rotate-45 transition-transform"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.23768 28.9847C8.743 28.4899 8.743 27.6879 9.23768 27.1934L26.0754 10.3556H15.2C14.5005 10.3556 13.9333 9.78846 13.9333 9.0889C13.9333 8.38935 14.5005 7.82224 15.2 7.82224H29.1333C29.4693 7.82224 29.7915 7.95569 30.0291 8.19324C30.2665 8.43079 30.4 8.75296 30.4 9.0889V23.0223C30.4 23.7218 29.8328 24.2889 29.1333 24.2889C28.4339 24.2889 27.8667 23.7218 27.8667 23.0223V12.1469L11.029 28.9847C10.5343 29.4792 9.73234 29.4792 9.23768 28.9847Z"
              fill="black"
            />
          </svg>
        </div>

        <span className="font-medium text-4xl leading-none mt-auto">
          Contact Me
        </span>
      </div>

      <div className="row-start-4 row-end-5 col-start-9 col-span-4 bg-[#FADCD9] h-[100px] rounded-[20px] flex items-center justify-evenly text-xs">
        <a href="#projects" className="uppercase font-light">
          Instagram
        </a>
        <a href="#projects" className="uppercase font-light">
          Github
        </a>
        <a href="#projects" className="uppercase font-light">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Day5;
