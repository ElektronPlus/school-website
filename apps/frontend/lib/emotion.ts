import Color from 'color'

// remember to update emotion.d.ts for typing

const colors  = {
    colors: {
        primary: '#006699'
    }
}

export const theme = {
    color: {
        primary: colors.colors.primary,
        text: Color(colors.colors.primary).darken(0.5).hex()
    }
}