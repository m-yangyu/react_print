import React from 'react';
import ReactDom from 'react-dom';

const ReactPrint = (props) => {
  const { children, target } = props;

  const createIframe = () => {
    const iframe = document.createElement('iframe');
    iframe.src = '';
    iframe.id = 'iframe';
    if (document.getElementById('iframe')) {
      document.body.removeChild(document.getElementById('iframe'));
    }
    document.body.appendChild(iframe);
  };

  const init = () => {
    createIframe();
    const iframe = document.getElementById('iframe');
    const domDoc = iframe.contentDocument;
    domDoc.open();
    domDoc.write(ReactDom.findDOMNode(target()).innerHTML);
    domDoc.close();

    const headEls = document.querySelectorAll("style, link[rel='stylesheet']");

    Array.from(headEls).map((item) => {
      const styleTag = document.createElement('style');
      if (item.href) {
        styleTag.href = item.href;
      } else if (item.innerHTML) {
        styleTag.innerHTML = item.innerHTML;
      }

      if (item.type) {
        styleTag.type = item.type;
      }
      domDoc.head.appendChild(styleTag);
      return item;
    });

    iframe.contentWindow.print();
  };

  const handleClick = () => {
    init();
  };

  return React.cloneElement(children, {
    onClick: handleClick,
  });
};

export default ReactPrint;
