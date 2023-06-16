import { DefaultTheme } from "styled-components";

interface Icolors {
  [key: string]: string;
}
const colors: Icolors = {
  orange: "#FB842D",
  yellow: "#FFD400",
  darkgray: "#C8CAD2",
  lightgray: "#F2F3F7",
};
export type ColorsTypes = typeof colors;

// export const MIXINS = {
//   // flex
//   flexBox: (direction = "row", align = "center", justify = "center") => `
//     display: flex;
//     flex-direction: ${direction};
//     align-items: ${align};
//     justify-content: ${justify};
//   `,

//   // positions
//   positionCenter: (type = "absolute") => {
//     if (type === "absolute" || type === "fixed")
//       return `
//         position: ${type};
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//       `;
//     return "";
//   },
// };

// const customMediaQuery = (maxWidth: number): string =>
//   `@media (max-width: ${maxWidth}px)`;

// export const media = {
//   custom: customMediaQuery,
//   pc: customMediaQuery(1440),
//   tablet: customMediaQuery(768),
//   mobile: customMediaQuery(576),
// };

// const StyledSection = styled.section`
//   width: 100%;
//   ${({ theme }) => theme.MIXINS.flexBox('column')}
//   @media ${({ theme }) => theme.media.pc} {
//     margin-bottom: 80px;
//   }
//   @media ${({ theme }) => theme.media.mobile} {
//     margin-bottom: 56px;
//   }
// `

export const theme: DefaultTheme = { colors };
