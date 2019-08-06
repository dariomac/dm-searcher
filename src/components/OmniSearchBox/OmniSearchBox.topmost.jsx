import React, { useState } from 'react';
import { connect } from 'react-redux';
import './OmniSearchBox.style.css';
import { actions } from './OmniSearchBox.module';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const OmniBoxSearch = ({ haystack, search }) => {
  const [needle, setNeedle] = useState('');

  const onChange = React.useCallback((e) => {
      const partialNeedle = e.target.value;
      setNeedle(partialNeedle);
    },
    [setNeedle],
  );

  return (
    <>
      <div className='container'>
        <div className='row omni-search-box'>
          <div className='col-11'>
            <Editor
              value={needle}
              onValueChange={setNeedle}
              highlight={code => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                wordWrap: "normal",
                whiteSpace: "nowrap",
                border: "1px solid #ccc"
              }}
              onKeyDown={(event) => {
                if(event.key === 'Enter'){
                  search(needle, haystack);
                  event.preventDefault();
                }
              }}
            />
            <style>
              {`.token.cdata,.token.comment,.token.doctype,.token.prolog {
                  color: #90a4ae
                }

                .token.punctuation {
                  color: #9e9e9e
                }

                .namespace {
                  opacity: .7
                }
                .token.boolean,.token.constant,.token.deleted,.token.number,
                .token.property,.token.symbol,.token.tag {
                  color: #e91e63
                }

                .token.attr-name,.token.builtin,.token.char,.token.inserted,
                .token.selector,.token.string {
                  color: #4caf50
                }

                .language-css .token.string,.style .token.string,.token.entity,
                .token.operator,.token.url {
                  color: #795548
                }

                .token.atrule,.token.attr-value,.token.keyword {
                  color: #3f51b5
                }

                .token.function {
                  color: #f44336
                }

                .token.important,.token.regex,.token.variable {
                  color: #ff9800
                }

                .token.bold,.token.important {
                  font-weight: 700
                }

                .token.italic {
                  font-style: italic
                }

                .token.entity {
                  cursor: help
                }`}
            </style>
          </div>
          <div className='col-1'>
            <button onClick={() => search(needle, haystack)}>Go</button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (needle, haystack) => {
      return dispatch(actions.searchAction(needle, haystack))
    }
  };
};

const styles = {
  token: {
    punctuation: {
      color: '#9e9e9e'
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OmniBoxSearch);
