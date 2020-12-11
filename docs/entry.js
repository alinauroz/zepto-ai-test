
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/Button/Button.jsx';
reactComponents['Button'] = Component0;

import Component1 from '../src/components/LoadingBar/LoadingBar.jsx';
reactComponents['LoadingBar'] = Component1;

import Component2 from '../src/components/Viewer/Viewer.jsx';
reactComponents['Viewer'] = Component2;