import { createMuiTheme } from '@material-ui/core/styles'
import '../styles/Home.module.css'

const LightTheme = createMuiTheme({
  palette: {
    main: {
      primary: '#15A9FF',
      secondary: '#1C59CE',
      accent: '#FFD533',
      gradient:
        'linear-gradient(180deg, #15A9FF 0%, #1C59CE 100%) 0% 0% no-repeat padding-box',
    },
    opacity: {
      primary: '#DCF2FF',
    },
    alerts: {
      error: '#FF6337',
      warning: '#FFD533',
      success: '#00DA8A',
      info: '#15A9FF',
    },
    grayScale: {
      white: '#FFFFFF',
      gray1: '#FCFCFC',
      gray2: '#F4F4F4',
      gray3: '#D1D1D1',
      gray4: '#B1B1B1',
      gray5: '#8B8B8B',
      gray6: '#666666',
      gray7: '#414141',
      black: '#000000',
    },
  },
  typography: {
    hero: '3.75rem',
    h1: '3.5rem',
    h2: '3rem',
    h3: '2.5rem',
    h4: '1.75rem',
    h5: '1.375rem',
    h6: '1.125rem',
    link: '1.125rem',
    big: '1.25rem',
    paragraph: '1.125rem',
    small: '1rem',
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: '1rem',
        border: '1px solid #D1D1D1',
        borderRadius: '5px',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 17,
        paddingRight: 17,
        minWidth: 82,
      },
      input: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: '1rem',
        fontWeight: 300,
      },
      inputMultiline: {
        height: '100%',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          display: 'none',
        },
        '&:after': {
          display: 'none',
        },
      },
    },
    MuiAlert: {
      message: {
        padding: 0,

        '& p, h3': {
          margin: 0,
          fontSize: '1rem',
        },
      },
    },
    MuiChip: {
      root: {
        backgroundColor: '#DCF2FF',
        color: '#1C59CE',
        minWidth: 100,
        fontSize: '0.875rem',
      },
    },
    MuiTypography: {
      body1: {
        fontSize: '0.875rem',
        fontFamily: 'Montserrat',
        fontWeight: 800,
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        minWidth: 'auto',
      },
    },
    MuiPickersDay: {
      current: {
        color: '#15A9FF',
      },
      daySelected: {
        backgroundColor: '#15A9FF ',
        borderRadius: 5,

        '&:hover': {
          backgroundColor: '#1C59CE',
        },
      },
    },
    MuiTimelineItem: {
      missingOppositeContent: {
        '&:before': { display: 'none' },
      },
    },
    MuiTimeline: {
      root: {
        padding: '6px 0px',
      },
    },
  },
})

export default LightTheme
