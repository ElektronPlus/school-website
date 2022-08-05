import '@emotion/react'
import Color from '@types/color'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: Color
      text: {
        primary: Color
        secondary: Color
        light: Color
      }
      background: {
        primary: Color
        transculent: Color
      }
      shadow: Color
      border: {
        primary: Color
        withShadow: Color
      }
    }
  }
}