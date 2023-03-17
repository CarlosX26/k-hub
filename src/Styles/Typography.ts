import styled from "styled-components";

interface iPropsTextPrimary {
  weight?: number;
  fontStyle?: string;
}

const TitlePrimary = styled.h1`
  font-size: var(--font-title-1);
  font-weight: 700;
  color: var(--color-tilte);
`;

const TitleSecondary = styled.h2`
  font-size: var(--font-title-2);
  font-weight: 700;
  color: var(--color-tilte);
`;

const TitleTertiary = styled.h3`
  font-size: var(--font-title-3);
  font-weight: 700;
  color: var(--color-tilte);
`;

const TextPrimary = styled.p`
  font-size: var(--font-text-1);
  font-weight: ${({ weight }: iPropsTextPrimary) => weight};
  font-style: ${({ fontStyle }: iPropsTextPrimary) => fontStyle};
  color: var(${({ color }) => (!color ? "--color-text" : `${color}`)});
`;

export { TitlePrimary, TitleSecondary, TitleTertiary, TextPrimary };
