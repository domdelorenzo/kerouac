import React from "react";
import { func, string} from 'prop-types'
import styled from "styled-components";

const ThemeButton = (props) => {
  const themeSwitcher = props.functions

return (
  <button onClick={themeSwitcher}>Theme</button>
)

}

ThemeButton.propTypes = {
  theme: string.isRequired,
  themeSwitcher: func.isRequired,
}

export default ThemeButton