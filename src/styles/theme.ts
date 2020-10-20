import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#32B999',
            main: '#1DA584',
            // dark: '#802270',
            contrastText: '#FFF',
        },
        // secondary: {
        //     //   light: '#ff7961',
        //     main: '#B03E9F',
        //     //   dark: '#ba000d',
        //     //   contrastText: '#000',
        // },
        // text: {
        //     secondary: '#606060',
        // },
        background: {
            default: '#F5F5F5',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
    },
});

export default theme;
