import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

/**
 * Custom theme configuration:
 *
 * to update the theme or add new variable,
 * use the CustomThemeStyles interface
 *
 */

interface TextThemeStyles {
  fontWeight: React.CSSProperties['fontWeight'];
  fontSize: React.CSSProperties['fontSize'];
  lineHeight: React.CSSProperties['lineHeight'];
  fontFamily: React.CSSProperties['fontFamily'];
}

interface CustomThemeStyles {
  colors: {
    button: {
      primary: {
        text:React.CSSProperties['color'];
        background:React.CSSProperties['color'];
      }
    },
    brand: {
      primary: React.CSSProperties['color'];
      secondary: React.CSSProperties['color'];
      bgColor: React.CSSProperties['color'];
      titleColor: React.CSSProperties['color'];
    };
    app: {
      primary: React.CSSProperties['color'];
      primaryHover: React.CSSProperties['color'];
      secondary: React.CSSProperties['color'];
    };
    semantic: {
      dividers: React.CSSProperties['color'];
      disabled: React.CSSProperties['color'];
      sellRed: React.CSSProperties['color'];
      buyGreen: React.CSSProperties['color'];
      white: React.CSSProperties['color'];
    };
    text: {
      body: React.CSSProperties['color'];
      primary: React.CSSProperties['color'];
      secondary: React.CSSProperties['color'];
      dimmed: React.CSSProperties['color'];
      white: React.CSSProperties['color'];
      placeholder: React.CSSProperties['color'];
    };
    graph: {
      increment: React.CSSProperties['color'];
      price: React.CSSProperties['color'];
    };
    pill: {
      primary: React.CSSProperties['color'];
      active: React.CSSProperties['color'];
    };
    traders: {
      defi: React.CSSProperties['color'];
      bitcoin: React.CSSProperties['color'];
      active: React.CSSProperties['color'];
      nft: React.CSSProperties['color'];
    };
    table: {
      header: React.CSSProperties['color'];
    };
  };
  borderRadius: React.CSSProperties['borderRadius'];
  texts: {
    headings: {
      h1: TextThemeStyles;
      h2: TextThemeStyles;
    };
    body: TextThemeStyles;
    link: TextThemeStyles;
    idea: {
      title: TextThemeStyles;
      subTitle: TextThemeStyles;
      description: TextThemeStyles;
      otherIdeasTitle: TextThemeStyles;
    };
    card: {
      title: TextThemeStyles;
      price: TextThemeStyles;
      performance: TextThemeStyles;
      time: TextThemeStyles;
      likes: TextThemeStyles;
    };
    linkButton: TextThemeStyles;
  };
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: CustomThemeStyles;
  }
  interface ThemeOptions {
    custom?: CustomThemeStyles;
  }
}

export interface CustomThemeProps {
  children: JSX.Element;
}

/**
 *
 * To consume the theme in a component can be achieved through
 * the withStyles HOC o with the makeStyles hook factory
 *
 * important note: always import those utilities from
 * '@material-ui/core/styles', if the auto import
 * '@material-ui/core' is used instead, it will not include the theme
 *
 * more detailed explanation here:
 * https://material-ui.com/styles/basics/#material-ui-core-styles-vs-material-ui-styles
 *
 *
 * use cases examples:
 *
 * import { makeStyles } from '@material-ui/core/styles';
 * import { Button } from '@material-ui/core';
 *
 * const useStyles = makeStyles(({ prysm }) => ({
 *  root: {
 *    color: prysm.colors.text.primary
 *  }
 * }));
 *
 * const CustomButton = withStyles((({ prysm })) => ({
 *  root: {
 *    borderRadius: prysm.borderRadius
 *  }
 * }))(Button)
 */

const theme = createMuiTheme({
  custom: {
    texts: {
      headings: {
        h1: {
          fontSize: 32,
          fontWeight: 'bold',
          lineHeight: '44px',
          fontFamily: 'GTFlexa',
        },
        h2: {
          fontWeight: 'bold',
          fontSize: 20,
          lineHeight: '28px',
          fontFamily: 'GTFlexa',
        },
      },
      body: {
        fontSize: 15,
        lineHeight: '21px',
        fontWeight: 'normal',
        fontFamily: 'ABCMonumentGrotesk',
      },
      link: {
        fontSize: 15,
        lineHeight: '21px',
        fontWeight: 500,
        fontFamily: 'ABCMonumentGrotesk',
      },
      linkButton: {
        fontSize: 15,
        lineHeight: '21px',
        fontWeight: 'bold',
        fontFamily: 'ABCMonumentGrotesk',
      },
      idea: {
        title: {
          fontSize: 32,
          lineHeight: '44px',
          fontWeight: 'normal',
          fontFamily: 'GTFlexa',
        },
        subTitle: {
          fontSize: 14,
          lineHeight: '19px',
          fontWeight: 'normal',
          fontFamily: 'ABCMonumentGrotesk',
        },
        description: {
          fontSize: 16,
          lineHeight: '22px',
          fontWeight: 'normal',
          fontFamily: 'ABCMonumentGrotesk',
        },
        otherIdeasTitle: {
          fontSize: 20,
          lineHeight: '28px',
          fontWeight: 'bold',
          fontFamily: 'GTFlexa',
        },
      },
      card: {
        title: {
          fontSize: 16,
          lineHeight: '19.44px',
          fontWeight: 500,
          fontFamily: 'GTFlexa',
        },
        price: {
          fontSize: 15,
          lineHeight: '18.23px',
          fontWeight: 500,
          fontFamily: 'GTFlexa',
        },
        performance: {
          fontSize: 15,
          lineHeight: '20.76px',
          fontWeight: 500,
          fontFamily: 'ABCMonumentGrotesk',
        },
        time: {
          fontSize: 12,
          lineHeight: '16.61px',
          fontWeight: 400,
          fontFamily: 'ABCMonumentGrotesk',
        },
        likes: {
          fontSize: 12,
          lineHeight: '16.61px',
          fontWeight: 500,
          fontFamily: 'ABCMonumentGrotesk',
        },
      },
    },
    borderRadius: 8,
    colors: {
      button: {
        primary: {
          text: '#FFFFFF',
          background: '#2081e2',
        },
      },
      brand: {
        primary: '#FF4C00',
        secondary: '#CCA7FB',
        bgColor: '#E7E3FF',
        titleColor: '#6A6FDA',
      },
      app: {
        primary: '#796EFD',
        secondary: '#818181',
        primaryHover: '#3F5DC8',
      },
      semantic: {
        dividers: '#E4E4E4',
        disabled: '#BABABA',
        sellRed: '#FF4C00',
        buyGreen: '#36CA78',
        white: '#FFFFFF',
      },
      text: {
        body: '#000000',
        secondary: '#7B7B7B',
        dimmed: '#B2B2B2',
        white: '#FFFFFF',
        placeholder: '#BABABA',
        primary: '#0E103C',
      },
      graph: {
        increment: '#ADADAD',
        price: '#3586FF',
      },
      pill: {
        primary: '#D4D4D4',
        active: '#F3F3F3',
      },
      traders: {
        defi: '#FFE1F3',
        bitcoin: '#EE9547',
        active: '#6996C9',
        nft: '#E12495',
      },
      table: {
        header: '#BDBCBC',
      },
    },
  },
});

export const CustomTheme: React.FC<CustomThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
