import { useId } from "react";
import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const ToggleButton = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border-radius: 999px;
  cursor: pointer;

  color: currentColor;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

const Icon = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  stroke: currentColor;
  transition:
    opacity 0.3s ease,
    transform 0.5s ease;
`;

const Sun = styled(Icon)`
  opacity: 1;
  transform: rotate(0deg);

  ${HiddenCheckbox}:checked + ${ToggleButton} & {
    opacity: 0;
    transform: rotate(180deg);
  }
`;

const Moon = styled(Icon)`
  opacity: 0;
  transform: rotate(-180deg);

  ${HiddenCheckbox}:checked + ${ToggleButton} & {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

export default function ThemeToggle() {
  const id = useId();

  const toggleTheme = (checked: boolean) => {
    const html = document.documentElement;
    html.dataset.theme = checked ? "dark" : "light";
  };

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "dark";

  return (
    <>
      <HiddenCheckbox
        id={id}
        defaultChecked={isDark}
        onChange={(e) => toggleTheme(e.target.checked)}
        aria-label="Toggle theme"
      />

      <ToggleButton htmlFor={id}>
        <IconWrapper>
          <Sun
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </Sun>

          <Moon
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </Moon>
        </IconWrapper>
      </ToggleButton>
    </>
  );
}
