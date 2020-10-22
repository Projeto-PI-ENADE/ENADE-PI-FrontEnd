import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#A5DBCE',
            main: '#1DA584',
            dark: '#707070',
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
