import tw from "twin.macro";


const Container = tw.div`
  h-16
  bg-zippia_black
  p-2
  lg:px-[5%]
  xl:px-[10%]
  flex
  justify-between
  text-white
  gap-2
`;

const LogoContainer = tw.div`
  h-full
  w-36
`;
const SearchContainer = tw.div`
  h-full
  max-w-md
  bg-white
  rounded-l-md
  p-2
  text-zippia_text
  items-center
  hidden
  lg:flex
`;
const Input = tw.input`
  mx-8
  outline-none
  w-full
`;
const Separator = tw.input`
  py-2
  w-px
  h-full
  bg-gray-300
`;


export { Container, LogoContainer, SearchContainer, Input, Separator }
