import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
    margin: 0;
    padding: 0;

    @keyframes grow {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}
    @keyframes slideInFromLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
  @keyframes slideInFromRight {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
}
   /* h3, p {
    font-family: ${({ theme }) => theme.fonts.copy}, sans-serif;
  }
  h2 {
    font-family: ${({ theme }) => theme.fonts.header}, sans-serif;
  } */
`;
