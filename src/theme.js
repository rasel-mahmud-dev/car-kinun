import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#ff7f58',
        },
        secondary: {
            main: '#ffdc4f',
        },
        dark: {
            100: '#7a7a7a',
            200: '#545454',
            300: '#383838',
            400: '#2c2c2c',
            500: '#232323',
            600: '#1f1f1f',
            700: '#1e1e1e',
            800: '#131313',
            900: '#050505',
        },
        light: {
            100: '#484848',
            200: '#9a9a9a',
            300: '#d2d2d2',
            400: '#dadada',
            500: '#e3e3e3',
            600: '#e8e8e8',
            700: '#eeeeee',
            800: '#f5f5f5',
            900: '#f8f8f8',
        },
    },
    components: {
        card: {
            boxShadow: "1px 4px 18px -4px #e5e5e5"
        }
    }
});

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.secondary.main,
        },
    },
});

export default theme